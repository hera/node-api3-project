const express = require("express");
const userDb = require("./userDb")


const router = express.Router();


// Add a user

router.post('/', validateUser, (req, res) => {
    userDb.insert({ name: req.body.name })
        .then(response => {
            console.log(response);
            res.status(201).json({"message": "ok!"});
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not add the user."
            })
        });

}); 


router.post('/:id/posts', (req, res) => {
  // do your magic!
});


// Get all users

router.get('/', (req, res) => {
    userDb.get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not get all users."
            })
        });
});


// Get user by id

router.get('/:id', validateUserId, (req, res) => {
    res.status(200).json(req.user);
});


// Get all posts by user id

router.get('/:id/posts', validateUserId, (req, res) => {
    userDb.getUserPosts(req.user.id)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not get all posts."
            })
        });
});


// Delete a user

router.delete('/:id', validateUserId, (req, res) => {
    userDb.remove(req.user.id)
        .then(count => {
            if (count) {
                res.status(200).json(req.user);
            } else {
                res.status(500).json({
                    error: "Server error. Could not delete a user."
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                error: "Server error. Could not delete a user."
            })
        });
});


// Update a user

router.put('/:id', (req, res) => {
  // do your magic!
});


//custom middleware

function validateUserId(req, res, next) {
    const userId = Number(req.params.id);

    if (!isNaN(userId)) {
        userDb.getById(userId)
            .then(user => {
                if (user === undefined) {
                    res.status(404).json({
                        error: "Could not find the user"
                    });
                }
                req.user = user;
                next();
            })
            .catch(error => {
                res.status(500).json({
                    error: "Server error. Could not get a user."
                });
            });
    } else {
        res.status(400).json({
            error: "Invalid user id"
        });
    }
}

function validateUser(req, res, next) {
    if (!Object.keys(req.body).length) {
        res.status(400).json({
            error: "Missing user data"
        });
    } else if (!req.body.name) {
        res.status(400).json({
            error: "Missing required name field"
        });
    }

    next();
}

function validatePost(req, res, next) {
}

module.exports = router;
