import Task from "../models/task.js";

async function getTasks (req, res){
    console.log('Foi feito um get');
    const tasks = await Task.find();
    return res.status(200).send(tasks);
}
async function createTask( req, res ){
    console.log('Foi feito um post');
    const task = req.body;
    const newTask = await Task.create(task);
    return res.status(201).send(newTask);
}
async function deleteTask( req, res ){
    console.log('Foi feito um delete');
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    return res.status(200).send('Task excluida com sucesso!');
}
async function updateTask( req, res ){
    console.log('Foi feito um put');
    const id = req.params.id
    const title = req.body.title; 
    const description = req.body.description;
    const status = req.body.status;
    const task = await Task.findByIdAndUpdate({"_id": id},{"title": title, "description": description, "status": status});
    return res.status(200).send('Task atualizada com sucesso!');
}

export { getTasks, createTask, deleteTask, updateTask};