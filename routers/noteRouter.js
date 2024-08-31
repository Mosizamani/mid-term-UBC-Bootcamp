const express = require('express');

const { NoteTaking } = require('../models');

const router = express.Router()

router.get('/notes', async (req, res) => {
    const notes = await NoteTaking.find({
        user: req.user.id
    })
    return res.status(200).json(notes)
})

router.get('/user-info', async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'User not authenticated' })
        }

        const username = req.user.username;  // Assuming `req.user` has a `username` property

        // Return the username in the response
        return res.status(200).json({ username })
    } catch (error) {
        return res.status(500).json({ message: 'Failed to retrieve user info', error })
    }
})

router.delete('/notes/:id', async (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ message:'ID is required to delete a note' })
    }

    try {
        await NoteTaking.deleteOne({
            _id: req.params.id,
            user: req.user.id
        })

        return res.status(200).json({ message:'Note deleted successfully' })
    } catch (error) {
        return res.status(400).json({ message:'Delete note failed (The length of the id written is not correct)' })
    }
})

router.put('/notes', async (req, res) => {
    if(!req.body.title) {
        return res.status(400).json({ message:'Title field is required to create note' })
    }
    if(!req.body.details) {
        return res.status(400).json({ message:'Details field is required to create note' })
    }

    const note = await NoteTaking.create({
        title: req.body.title,
        details: req.body.details,
        user: req.user.id,
        createdDate: req.body.createdDate,
    })

    return res.status(201).json(note)
})

router.patch('/notes/:id', async (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ message:'ID is required to update a note'})
    }

    try {
        await NoteTaking.updateOne({
            _id: req.params.id,
            user: req.user.id
        }, {
            title: req.body.title,
            details: req.body.details,
            completed:req.body.completed,
            createdDate: req.body.createdDate,
        })
    
        const note = await NoteTaking.findOne({ _id: req.params.id })
    
        if (!note) {
            return res.status(404).json({ message:'Note not found' })
        }
    
        return res.status(200).json(note)
    } catch (error) {
        return res.status(400).json({ message:'Update note failed (The length of the id written is not correct)' })
    }

})

module.exports = router
