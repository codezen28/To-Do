const ToDoModel = require('../Model/todoModel');

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find(); 
    res.send(todo);
}

module.exports.saveToDo = async (req, res) => {
   
    try {
        const { text } = req.body;
        const data = await ToDoModel.create({ text });
        console.log("Added successfully");
        console.log(data);
        res.status(201).send(data); // 201 Created status code for successful creation
    } catch (error) {
        console.error("Error adding todo:", error);
        res.status(500).send({ message: "Internal Server Error" }); // 500 Internal Server Error status code
    }
}

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;

    try {
        const updatedTodo = await ToDoModel.findByIdAndUpdate(
            _id,
            { text: text },
            { new: true }   
        );

        if (!updatedTodo) {
            return res.status(404).send("ToDo not found");
        }

        res.send("Updated successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};


module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body;
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted succesfully"))
        .catch((err) => console.log(err));
}