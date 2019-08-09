const API = 'https://test-users-api.herokuapp.com/';

let users = [];
const container = document.querySelector('.users');
const nameEl = document.querySelector('#name');
const ageEl = document.querySelector('#age');
const btnCreate = document.querySelector('#add');

btnCreate.addEventListener('click', () => {
  const user = {
    name: nameEl.value,
    age: ageEl.value
  };
  if (nameEl.value != "" && ageEl.value != "") {
  fetch(API + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((res) => {
      return res.json();
    })
    .then((data) => {
      users.id = data.id;
      users.data.unshift(user);
      console.log(user);
      renderUsers();
    }).catch(err => {
      console.log(err);
    })
  }
})

function getUsers() {
  return fetch(API + 'users').then(res => res.json())
    .catch(err => {
      console.log('Cant get users', err);
    });
}

async function deleteUser(id) {
  const result = await fetch(API + 'users/' + id, {
    method: 'DELETE'
  })

  if (result.status !== 200) {
    console.log(`fail`);
    return Promise.reject();
  }
}

function renderUsers() {
  container.innerHTML = '';
  users.data.forEach((user) => {
    const div = document.createElement('div')
    div.className = 'user';
    div.innerHTML = `
      <h4> Name: ${user.name}</h4>
      <h5>Age: ${user.age}</h5>
    `
    const btn = document.createElement('button');
    btn.className = 'remove';
    btn.textContent = 'delete';

    btn.addEventListener('click', () => {
      deleteUser(user.id, div).then(() => {
        div.remove();
      });
    })
    div.append(btn);
    container.append(div);
  })
}

getUsers().then(data => {
  users = data;
  renderUsers();
});
