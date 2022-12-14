const express = require('express');
const User = require('../models/test/user');
const Comment = require('../models/test/comment');

const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (e) {
            console.error(e);
            next(e);
        }
    })
    .post(async (req, res, next) => {
        try {
            const user = await User.create({
                name: req.body.name,
                age: req.body.age,
                married: req.body.married,
            });
            console.log(user);
            res.status(201).json(user);
        } catch(e) {
            console.error(e);
            next(e);
        }
    })
    .delete(async (req, res, next) => {
        try {
            Comment.destroy({truncate: true});
            User.destroy({truncate: true});
            res.status(200).json('delete completed');
        } catch (e) {
            console.error(e);
            next(e);
        }
    })

router.get('/comments', async (req, res, next) => {
    try {
        const comments = await User.findAll({
            include: [{ model: Comment }]
        });
        console.log(comments);
        res.json(comments);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.get('/:id/comments', async (req, res, next) => {
    try {
        const comments = await Comment.findAll({
            include: {
                model: User,
                where: { id: req.params.id },
            },
        });
        console.log(comments);
        res.json(comments);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/bulk', async (req, res, next) => {
    try {
        const user = User.bulkCreate(req.body);
        res.status(201).json(user);
    } catch (e) {
        console.error(e);
        next(e);
    }
});


module.exports = router;