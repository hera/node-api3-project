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


router.get('/:id', (req, res) => {
  // do your magic!
});


router.get('/:id/posts', (req, res) => {
  // do your magic!
});


router.delete('/:id', (req, res) => {
  // do your magic!
});


router.put('/:id', (req, res) => {
  // do your magic!
});


//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
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
  // do your magic!
}

module.exports = router;
