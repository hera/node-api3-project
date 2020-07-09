const express = require("express");
const userDb = require("./userDb")


const router = express.Router();


router.post('/', (req, res) => {
  // do your magic!
});


router.post('/:id/posts', (req, res) => {
  // do your magic!
});


// Get all posts

router.get('/', (req, res) => {
    console.error('asdf');
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
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
