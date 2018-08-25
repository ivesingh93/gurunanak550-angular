const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { Pool, Client } = require('pg');
const config = require('../config/database');
const jwt = require('jsonwebtoken');

function initialize_client(){
    return new Client(config.gurunanak550);
}

function initialize_pool(){
    return new Pool(config.gurunanak550);
}

router.post('/register', (req, res) => {
    let client = initialize_client();
    client.connect();

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            let query = {
                text: "insert into member (full_name, email, password_hash, phone_number, age, address, organization_name) " +
                "values ($1, $2, $3, $4, $5, $6, $7)",
                values: [req.body.full_name, req.body.email, hash, req.body.phone_number,
                    req.body.age, req.body.address, req.body.organization_name]
            };
            client.query(query, (err, sqlResponse) => {
                console.log(err);
                if (err){
                    if (err.constraint === "member_pkey"){
                        res.json({
                            "ResponseCode": 400,
                            "Message": "Email already exists"
                        });
                    }else if(err.constraint === "member_phone_number_key"){
                        res.json({
                            "ResponseCode": 400,
                            "Message": "Phone number already exists"
                        });
                    }else{
                        res.json({
                            "ResponseCode": 400,
                            "Error": err
                        });
                    }
                }else{
                    res.json({
                        "ResponseCode": 200,
                        "Message": "User Added Successfully"
                    });
                }
                client.end();
            });
        });
    });

});

router.post('/login', (req, res) => {
    let client = initialize_client();
    client.connect();
    let query = {
        text: "select email, password_hash, full_name, organization_name, address from member where LOWER(email) LIKE LOWER($1)",
        values: [req.body.email]
    };

    client.query(query, (err, sqlResponse) => {
        if(err){
            console.log(err);
            res.send("Failure");
        } else{
            if(sqlResponse.rowCount > 0){
                bcrypt.compare(req.body.password, sqlResponse.rows[0].password_hash, (err, isMatch) => {
                    if (err){
                        res.json({
                            "ResponseCode": 400,
                            "Message": err
                        });
                    }
                    if(isMatch){
                        const token = jwt.sign({email: req.body.email}, 'gurunanak550', {expiresIn: '24h'});

                        res.json({
                            "ResponseCode": 200,
                            "Message": "Login successful",
                            "email": sqlResponse.rows[0].email,
                            "full_name": sqlResponse.rows[0].full_name,
                            "organization_name": sqlResponse.rows[0].organization_name,
                            "address": sqlResponse.rows[0].address,
                            "token": token
                        });
                    } else{
                        res.json({
                            "ResponseCode": 400,
                            "Message": "Invalid Login"
                        });
                    }
                });

            }else{
                res.json({
                    "ResponseCode": 400,
                    "Message": "Invalid Login"
                });
            }
        }
        client.end();
    });
});

router.post('/plantationRecord', (req, res) => {
    let client = initialize_client();
    client.connect();

    let email = req.body.email;
    let location = req.body.location;
    let longitude = req.body.longitude;
    let latitude = req.body.latitude;
    let date = req.body.date;
    let planted_trees = req.body.planted_trees;
    let plants_types = req.body.plants_types;
    let remarks = req.body.remarks;
    let images_videos = req.body.images_videos;
    console.log(req.body);

    (async () => {
        const client = await initialize_pool().connect();

        try{
            await client.query('BEGIN');

            let plantationn_rows = await client.query("insert into plantation (location, longitude, latitude, " +
                "date, planted_trees, plants_types, remarks) values ($1, $2, $3, $4, $5, $6, $7) returning id",
                [location, longitude, latitude, date, planted_trees, plants_types, remarks]);

            let plantation_id = plantationn_rows.rows[0].id;

            for(let image_video of images_videos){
                console.log(image_video);
                await client.query("insert into images_videos (plantation_id, url) values ($1, $2)", [plantation_id,
                    image_video]);
            }

            await client.query("insert into member_plantation (member_id, plantation_id) values ( (select id from member " +
                "where lower(email) like lower($1)), $2)", [email, plantation_id]);

            await client.query('COMMIT');
            res.json("Success");
        }catch(e){
            await client.query('ROLLBACK');
            throw e
        }finally{
            client.release();
        }
    })().catch(e => console.error(e.stack));

});

router.use((req, res, next) => {
    const token = req.headers['authorization'];
    console.log(req.headers);
    if (!token){
        res.json({
            "ResponseCode": 400,
            "Message": "No token"
        });
    }else{
        jwt.verify(token, "gurunanak550", (err, decoded) => {
            if(err){
                res.json({
                    "ResponseCode": 400,
                    "Message": 'Invalid token ' + err
                })
            }else{
                req.decoded = decoded;
                next();
            }
        })
    }
});

router.get('/profile', (req, res) => {
    let client = initialize_client();
    client.connect();
    let query = {
        text: "select email, password_hash, full_name, organization_name, address from member where LOWER(email) LIKE LOWER($1)",
        values: [req.decoded.email]
    };

    client.query(query, (err, sqlResponse) => {
        if(err){
            console.log(err);
            res.send("Failure");
        } else{
            if(sqlResponse.rowCount > 0){
                if (err){
                    res.json({
                        "ResponseCode": 400,
                        "Message": err
                    });
                }else{
                    res.json({
                        "ResponseCode": 200,
                        "Message": "Login successful",
                        "email": sqlResponse.rows[0].email,
                        "full_name": sqlResponse.rows[0].full_name,
                        "organization_name": sqlResponse.rows[0].organization_name,
                        "address": sqlResponse.rows[0].address,
                    });
                }

            }else{
                res.json({
                    "ResponseCode": 400,
                    "Message": "Failure"
                });
            }
        }
        client.end();
    });

});

module.exports = router;