const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const user_route = require('./routes/user-routes');
const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/userRoutes', user_route);

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
// });

const port = process.env.PORT || '80';

app.listen(port, () => {
    console.log(`API running on localhost:${port}`);
});