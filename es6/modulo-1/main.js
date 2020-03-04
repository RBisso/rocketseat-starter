class User {

    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends User {

    constructor(email, password) {
        super(email, password);
        this.admin = true;
    }
}
/*
let user1 = new User('user1@email.com', 'password123');
let user2 = new Admin('admin@email.com', 'password456');

const users = [
    { name:'Diego', age:'23', company:'Rocketseat' },
    { name:'Gabriel', age:'15', company:'Rocketseat' },
    { name:'Lucas', age:'30', company:'Facebook' }
];

const ages = users.map(function(item) {
    return item.age;
});

const oldRocket = users.filter(function(item) {
    
    if (item.age > 18 && item.company === 'Rocketseat') {
        return item;
    }
}); 

const comp = users.find(item => {
    return item.company === 'Google';
});

const olderDouble = users.filter(item => {
    item.age *=2;
    if (item.age < 50) {
        return item;
    }
});
*/
/*
console.log(oldRocket);
console.log(ages);
console.log(comp);
console.log(olderDouble);
*/
/*
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map( item => {
    return item + 10;
});

const user = { nome:'Diego', age:'23'};

const mostrarIdade = (user) => {
    return user.age;
}

//console.log(mostrarIdade(user));

const name = 'Diego';
const age = 23;

const showUser = (name = 'Diego', age = 18) => {
    return { name, age }
}

//console.log(showUser(name,age));
//console.log(showUser(name));

const promise = () => {
    return new Promise((resolve,reject) => {
        return resolve();
    });
}

const company = {
    name:'Rocketseat',
    address:{
        city:'Rio do Sul',
        state:'SC',
    }
};

const { name, address: {city, state} } = company;

console.log(name);
console.log(city);
console.log(state);
*/
/*
function showUser({name, age}) {

    //return name + ' is ' + age + ' old.';
    return `${name} is ${age} old.`;
}

const user = { name:'Diego', age:'23' };
console.log(showUser(user));
*/
function sum(...params) {
    //console.log(params);
    return params.reduce((total, next) => {
        return total + next;
    });
}

const arr = [1, 2, 3, 4, 5, 6];
//let [ x, ...y ] = arr;
//console.log(x);
//console.log(y);

console.log(sum(1,2,3,4,5,6));
//console.log(sum(y));