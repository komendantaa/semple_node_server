const companies = require("../assets/data/company/companies");
const category = require("../assets/data/category/category");
const sport = require("../assets/data/options/sport");
const questionsArr = require("../assets/data/questions/questions");
const question_1 = require("../assets/data/questions/question_1");
const advertisementsArr = require("../assets/data/ads/advertisements");
const advertisement_1 = require("../assets/data/ads/advertisement_1");

const appRouter = function (app) {
    //REQUIRED
    app.get("/", (req, res) => res.send(`Hello World! )`));

    app.get("/api/login", (req, res) => res.send({}));
    app.post("/api/login", function (req, res) {
        return res.send({"token": "dajhbawd8789d7aw98d"});
    });

    app.get("/api/currentUserId", function (req, res) {
        return res.send({"id": "8"});
    });

    app.options("/api/search/company", (req, res) => res.send({}));
    app.post("/api/search/company", function (req, res) {
        return res.send(companies);
    });

    app.get("/api/notifications/", function (req, res) {
        return res.send([
            {
                "id": 106,
                "text": "Test system notification",
                "type": "system",
                "createdAt": "Fri, 30 Nov 2018 09:12:27 GMT"
            }
        ]);
    });

    app.options("/api/category/list", (req, res) => res.send({}));
    app.get("/api/category/list", function (req, res) {
        return res.send(category);
    });

    //SPECIFIC
    // req.body.username

    //questions
    app.options("/api/question/", (req, res) => res.send({}));
    app.get("/api/question/", (req, res) => res.send(questionsArr));
    app.post("/api/question/", (req, res) => res.send(questionsArr));

    app.options("/api/question/1", (req, res) => res.send({}));
    app.get("/api/question/1", (req, res) => res.send(question_1));

    app.options("/api/question/edit/1", (req, res) => res.send({}));
    app.post("/api/question/edit/1", (req, res) => res.send(question_1));

    //advertisement
    app.options("/api/advertisement/", (req, res) => res.send({}));
    app.get("/api/advertisement/", (req, res) => res.send(advertisementsArr));
    app.post("/api/advertisement/", (req, res) => res.send(advertisementsArr));

    app.options("/api/advertisement/1", (req, res) => res.send({}));
    app.get("/api/advertisement/1", (req, res) => res.send(advertisement_1));

    app.options("/api/advertisement/edit/1", (req, res) => res.send({}));
    app.post("/api/advertisement/edit/1", (req, res) => res.send(advertisement_1));

    //options
    app.options("/api/options/sport", (req, res) => res.send({}));
    app.get("/api/options/sport", (req, res) => res.send(sport));
};

module.exports = appRouter;