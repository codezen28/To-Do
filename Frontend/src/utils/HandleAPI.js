import axios from 'axios';


const baseURL=import.meta.env.VITE_APP_URL;

const getAllToDo = async (setToDo) => {
    try {
        const { data } = await axios.get(baseURL);
        console.log('data--> ', data);
        setToDo(data);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

const addToDo = async (text, setText, setToDo) => {
    try {
        const { data } = await axios.post(`${baseURL}/save`, { text });
        console.log(data);
        setText("");
        await getAllToDo(setToDo);
    } catch (error) {
        console.error('Error adding todo:', error);
    }
};

const updateToDo = async (toDoId, text, setToDo, setText, setIsUpdating) => {
    try {
        const { data } = await axios.post(`${baseURL}/update`, { _id: toDoId, text });
        console.log(data);
        setText("");
        setIsUpdating(false);
        await getAllToDo(setToDo);
    } catch (error) {
        console.error('Error updating todo:', error);
    }
};

const deleteToDo = async (_id, setToDo) => {
    try {
        const { data } = await axios.post(`${baseURL}/delete`, { _id });
        console.log(data);
        await getAllToDo(setToDo);
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
