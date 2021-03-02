require('dotenv').config()

exports.index = (req, res) => {
    res.render('index', {
        layout: "main_layout",
        "site_name": process.env.SITE_NAME,
        "page_title": "Home"
    });
}