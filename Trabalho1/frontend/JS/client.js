function reset(){
  let title = document.getElementById('title');
  let description = document.getElementById('description');
  let status = document.getElementById('status');
  title.value = '';
  description.value = '';
  status.value = '';
}
async function createTask(){
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let status = document.getElementById('status').value;
  if(title == '' || description == '' || status == ''){
    alert('Preencha todos os campos');
    reset();
  }else{
    const myRequest1 = {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
      }),
  };
    fetch('http://localhost:3000/tasks', myRequest1, {})
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }  
      return response.json(); 
    })
    .then((data) => {
      let flag = 0;
      for(var i=0; i<data.length; i++){
          if((title == data[i].title)){
              flag=1;
              break;
          }else{
              flag = 0;
          }
      }
      if(flag == 0){
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
          reset();
        });
      }else{
        alert('Task ja foi criada com esse nome, insira outro!');
        reset();
      }  
    })
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
        reset();
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error.message);
        reset();
      });
}
async function updateTask(){
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const status = document.getElementById('status').value;
  const myRequest1 = {
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
    }),
};
fetch('http://localhost:3000/tasks', myRequest1, {})
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
        if((title == data[i].title)){
            flag=1;
            id = data[i]._id;
            break;
        }else{
            flag = 0;
        }
    }
    if(flag == 0){
        alert('Task não encontrada!');
        reset();
      }else{
        const myRequest2 = {
          method: 'PUT',
          headers: new Headers({
          'Content-Type': 'application/json',
          }),
          body:JSON.stringify({
            status: status
          })
        };
        fetch(`http://localhost:3000/tasks/${id}`,(myRequest2))
        .then(response => {
          if (response.ok) {
            console.log(`Task atualizada com id: ${id}`);
          } else {
            console.error('Erro na requisição:', response.status);
          }
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
    }})
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
            if((title == data[i].title)){
                flag=1;
                id = data[i]._id;
                break;
            }else{
                flag = 0;
            }
        }
        if(flag == 0){
            alert('Task não encontrada!');
            reset();
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
                  reset();
                }
                else{
                    alert(`Task removida com id ${id}`);
                    reset();
                    return response;
                
            }
            })
            }
            catch(error){
                console.log('Erro ao deletar: ', error);
                reset();
            }
        }
      })
}

