const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');
const rbac = require('../middleware/rbac');

const router = express.Router();

// Create a task (Admin and Manager)
router.post('/', auth, rbac(['admin', 'manager']), async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      createdBy: req.user._id
    });
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all tasks
router.get('/', auth, async (req, res) => {
  try {
    let tasks;
    if (req.user.role === 'admin') {
      tasks = await Task.find();
    } else if (req.user.role === 'manager') {
      tasks = await Task.find({ $or: [{ createdBy: req.user._id }, { assignedTo: req.user._id }] });
    } else {
      tasks = await Task.find({ assignedTo: req.user._id });
    }
    res.send(tasks);
  } catch (error) {
    res.status(500).send();
  }
});

// Update a task
router.patch('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send();
    }

    if (req.user.role === 'admin' || 
        (req.user.role === 'manager' && task.createdBy.equals(req.user._id)) ||
        (req.user.role === 'user' && task.assignedTo.equals(req.user._id))) {
      Object.assign(task, req.body);
      await task.save();
      res.send(task);
    } else {
      res.status(403).send({ error: 'Access denied.' });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a task (Admin only)
router.delete('/:id', auth, rbac(['admin']), async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;