module.exports = {
    GET_RESOURCE_CATEGORIES: "SELECT CATEGORY FROM RESOURCES_CATEGORIES",
    GET_RESOURCE_MATERIAL: "select * from resource_info where resources_categories_id = (select id from resources_categories where category = $1)",
    GET_PLANTATION_RECORD: "select m.full_name, m.email, m.organization_name, p.location, p.date, p.planted_trees, p.plants_types, p.remarks, p.status from member_plantation as mp join member as m on mp.member_id = m.id join plantation as p on mp.plantation_id = p.id where mp.plantation_id = $1",
    GET_PLANTATION_RECORD_URLS: "select url from images_videos where plantation_id = $1",
    ADD_RESOURCE: "INSERT INTO RESOURCE_INFO (url, thumbnail_url, title, description, resources_categories_id) values ($1, $2, $3, $4, (SELECT ID FROM RESOURCES_CATEGORIES WHERE CATEGORY = $5))",
    ADD_NEWS: "insert into news (url, featured_img_url, title, brief_description, content) values ($1, $2, $3, $4, $5)",
    GET_NEWS: "select title, url, featured_img_url, brief_description, date_posted from news",
    VIEW_UNANSWERED_QUERIES: "select q.id as query_id, m.full_name, m.email, q.query, q.query_date, m.organization_name from queries as q join member as m on m.id = q.query_by where answered = false",
    UPDATE_QUERIES_STATUS: "update queries set answered = true where id = $1",
    ADD_QUESTION_ANSWER: "insert into faqs (question, answer) values ($1, $2)",
    VIEW_FAQS: "select question, answer from faqs"
};