function reset(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description');
    let status = document.getElementById('status');

    title = '';
    description = '';
    status = '';
}
async function createTask(){
let title = document.getElementById('title').value;
let description = document.getElementById('description').value;
let status = document.getElementById('status').value;
if(title == '' || description == '' || status == ''){
    alert('Preencha todos os campos');
}else{
    const myRequest = {
    method: 'POST',
    headers: new Headers({
        'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
        "title": title,
        "description": description,
        "status": status   
    }),
};
fetch('http://localhost:3000/tasks', myRequest, {})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Resposta do servidor:', data);
    reset();
  })
  .catch((error) => {
    console.error('Erro na solicitação:', error.message);
  });
}
}
async function searchTask(){
    const myRequest = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    };
    fetch('http://localhost:3000/tasks', myRequest, {})
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        return response.json(); // Analisar a resposta JSON
      })
      .then((data) => {
        console.log('Resposta do servidor:', data);
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error.message);
      });
}
async function updateTask(){

}
async function deleteTask(){
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const status = document.getElementById('status').value;

    const myRequest = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    };
    fetch('http://localhost:3000/tasks', myRequest, {})
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        return response.json(); 
      })
      .then((data) => {
        let flag = 0;
        let id = '';
        for(var i=0; i<data.length; i++){
            if((title == data[i].title) && (description == data[i].description) && (status == data[i].status)){
                flag=1;
                id = data[i]._id;
                break;
            }else{
                flag = 0;
            }
        }
        if(flag == 0){
            alert('Task não encontrada!');
        }else{
            const myRequestdelete = {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
            };
            try{
            fetch(`http://localhost:3000/tasks/${id}`, myRequestdelete, {})
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`Erro na solicitação: ${response.status}`);
                }
                else{
                    alert(`Usuario removido com id ${id}`);
                    return response;
                
            }
            })
            }
            catch(error){
                console.log('Erro ao deletar: ', error);
            }
        }
      })
}

