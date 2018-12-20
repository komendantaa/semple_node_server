var appRouter = function (app) {
    app.get("/api/currentUserId", function (req, res) {
        return res.send({"id": "8"});
    });

    app.options("/api/search/company", function (req, res) {
        return res.send({});
    });

    app.post("/api/search/company", function (req, res) {
        return res.send({
            "paginationData": {
                "last": 10,
                "current": 1,
                "numItemsPerPage": 10,
                "first": 1,
                "pageCount": 10,
                "totalCount": 94,
                "pageRange": 5,
                "startPage": 1,
                "endPage": 5.0,
                "next": 2,
                "pagesInRange": [1, 2, 3, 4, 5],
                "firstPageInRange": 1,
                "lastPageInRange": 5,
                "currentItemCount": 10,
                "firstItemNumber": 1,
                "lastItemNumber": 10
            },
            "itemsData": [
                {
                    "id": 198,
                    "email": "kkjkjkjnnjknjk@gmail.com",
                    "firstName": "123456",
                    "lastName": "123456",
                    "jobPosition": null,
                    "companyName": "1234556",
                    "slug": "123456-123456-1234556",
                    "shortDescription": null,
                    "isActive": false,
                    "isPublic": true,
                    "isConfidentialLocation": false,
                    "isTwoFactorAuth": false,
                    "twoFactorAuthProvider": null,
                    "phone": null,
                    "avatarUrl": null,
                    "location": {
                        "country": [],
                        "city": null,
                        "state": [],
                        "zipCode": null
                    }
                }
            ]
        });
    });

    app.get("/api/assessment/", function (req, res) {
        return res.send([
            {
                "id": 1,
                "title": "Title Assessment Finance goes here",
                "label": "Microsoft windows Powershell",
                "description": "Finance Loreusmod tempor incididunt ut labore et dolore magnanisi ut aliquip ex ea commodo consequat",
                "timeLimit": 20,
                "category": {
                    "id": 1,
                    "title": "Accounting"
                }
            }
        ]);
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

    app.get("/api/login", function (req, res) {
        return res.send({});
    });

    app.post("/api/login", function (req, res) {
        return res.send(
            {
                "token": "dajhbawd8789d7aw98d",
            }
        );
    });

    app.get("/account", function (req, res) {
        var accountMock = {
            "username": "nraboy",
            "password": "1234",
            "twitter": "@nraboy"
        }
        if (!req.body.username) {
            return res.send({
                "status": "error",
                "message": "missing username"
            });
        } else {
            return res.send(accountMock);
        }
    });

    app.post("/account", function (req, res) {
        if (!req.body.username || !req.body.password || !req.body.twitter) {
            return res.send({
                "status": "error",
                "message": "missing a parameter"
            });
        } else {
            return res.send({"message": "Welcome!"});
        }
    });
}

module.exports = appRouter;