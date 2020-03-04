"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User = /*#__PURE__*/function () {
  function User(email, password) {
    _classCallCheck(this, User);

    this.email = email;
    this.password = password;
    this.admin = false;
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return User;
}();

var Admin = /*#__PURE__*/function (_User) {
  _inherits(Admin, _User);

  function Admin(email, password) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, password));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(User);
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


function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  //console.log(params);
  return params.reduce(function (total, next) {
    return total + next;
  });
}

var arr = [1, 2, 3, 4, 5, 6]; //let [ x, ...y ] = arr;
//console.log(x);
//console.log(y);

console.log(sum(1, 2, 3, 4, 5, 6)); //console.log(sum(y));
