let inputElement = document.querySelector('#app input');
let listElement = document.querySelector('#app ul');


let users = {}

let getUser = function() {
    let user = inputElement.value;
    let userURL = 'https://api.github.com/users/'+user;

    axios.get(userURL)
    .then(function(response) {
        users[user] = response.data.html_url;
        listUsers(userURL);
    })
    .catch(function(error) {
        alert('User '+ user +' not found');
    });
}
let listUsers = function(userURL) {
    listElement.innerHTML = '';

    for (var user in users) {
        let item = document.createElement('li');
        let linkItem = document.createElement('a');
        let textItem = document.createTextNode(user);

        linkItem.setAttribute('href', users[user]);
        linkItem.appendChild(textItem);
        item.appendChild(linkItem);
        listElement.appendChild(item);
    }
}

let checaIdade = function(idade) {
    return new Promise(function(resolve, reject) {
        if (idade > 18) {
            setTimeout(() => resolve(), 2000);
        } else {
            setTimeout(() => reject(), 2000);
        }
     });
}


checaIdade(20)
    .then(function(){
        console.log('Maior que 18');
    })
    .catch(function() {
        console.log('Menor que 18');
    });
