const express = require('express');

const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {
    // res.send('API Tasks goes here')
    const tasks = await Task.find();
    // console.log(tasks);
    res.json(tasks);
});

router.post('/', async (req, res) => {
    // console.log(new Task());
    // console.log(req.body);
    const task = new Task(req.body);
    // console.log(task);
    await task.save();
    res.json({
        status: 'Task Saved'
    });
});

router.put('/:id', async (req, res) => {
    // console.log(req.params);
    // console.log(req.params, req.body);
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json('Task Updated');
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Task Deleted'
    });
});

module.exports = router;
