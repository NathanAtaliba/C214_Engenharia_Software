import pkg from 'supertest';
const request = pkg;
import app from '../src/server.js'; // Substitua pelo caminho correto
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
chai.should(); // Configura should para poder ser usado

describe('Testes das rotas de tasks:', function() {
  this.timeout(5000);
  //Teste de busca das tasks
  let id;
  it('/GET', async () => { 
  try{
    const tasks = [];
    const response = await request(app)
    .get('/tasks');
    response.should.have.status(200);
    expect(tasks).to.eql(response.body);
  }catch(err) {
    console.log("Erro: " + err);
  }
  });

  //Teste de criação de tarefa
  it('/POST', async () => {
    const newTarefa = {
      "title": 'Fazer cafe',
      "description": 'Descrição da tarefa',
      "status": 'In progress'
    }; 
    try{
    const response = await request(app)
    .post('/tasks')
    .send(newTarefa)
    response.should.have.status(201);
    expect(newTarefa["title"]).to.eql(response.body["title"]);
    }catch(err) {
    console.log("Erro: " + err);
    }
  });

  //Teste de update de tarefa
  it('/PUT', async () => { 
    let taskUpdate = {
        "status": "Concluida",
    }
    const resposta = 'Task atualizada com sucesso!';
    try{
      const response = await request(app)
      .put(`/tasks/${id}`)
      .send(taskUpdate)

      console.log(response.body);
    
      response.should.have.status(200);
      expect(resposta).to.eql(response.message);
    }catch(error){
      console.log("Erro:" + error);
    }
  });

  //Teste de delete de tarefa
  it('/DELETE', async () => {
    let taskDelete = {
      "title": "Fazer cafe",
  }
  const resposta = 'Task atualizada com sucesso!';
  try{
  const response = await request(app)
  .delete(`/tasks/${id}`)
  .send(taskDelete)  
  response.should.have.status(200);
  expect(reposta).to.eql(response.message);
  }catch(error){
    console.log("Erro:" + error);
  }
});
});