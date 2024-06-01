const express = require("express");
const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../Controller/todoController");

const router = express.Router();

router.get('/', getToDo);
router.post('/save', saveToDo);
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);
module.exports = router; 