import Task from "../models/task.js";

async function getTasks (req, res){
    const tasks = await Task.find();
    console.log('Foi feito um get');
    return res.status(200).send(tasks);
}
async function createTask( req, res ){
    const task = req.body;
    const newTask = await Task.create(task);
    console.log('Foi feito um post');
    return res.status(201).send(newTask);
}
async function deleteTask( req, res ){
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    return res.status(200).send('Task excluida com sucesso!');
}
async function updateTask( req, res ){
    const id = req.params.id/
    await Task.findByIdAndUpdate({_id: id},{});
    return res.status(200).send('Task atualizada com sucesso!');
}

export { getTasks, createTask, deleteTask, updateTask};