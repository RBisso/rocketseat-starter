function getRandomColor(id) { 
    console.log(id); 
    var letters = "0123456789ABCDEF";  
    var color = "#";  
    for (var i = 0; i < 6; i++) {    
        color += letters[Math.floor(Math.random() * 16)];  
    }
    var element = document.getElementById(id);
    console.log(element);
    console.log(color);
    element.style.backgroundColor = color;
    //return color;
}

function createBox() {
    
    var locat = document.querySelector("#boxes"); 
    var element = document.createElement('div');
    element.setAttribute('class', "box"+counter);
    element.setAttribute('id', counter);
    element.setAttribute('onmouseover', "getRandomColor("+counter+")");
    locat.appendChild(element);
    
    var boxElement = document.querySelector('.box'+counter);
    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = '#f00';
    counter+=1;
}

function createList(names) {
    var locat = document.querySelector("#lists");
    var list = document.createElement('ul');
    list.setAttribute('class', "ulist");
    locat.appendChild(list);

    for (name of names) {
        var item = document.createElement('li');
        var text = document.createTextNode(name);

        item.appendChild(text);
        list.appendChild(item);
    }
}   

function adicionar() {

    var nome = document.getElementById("name");
    var locat = document.querySelector("#lists ul.ulist");
    var item = document.createElement('li');
    var text = document.createTextNode(nome.value);

    item.appendChild(text);
    nome.value = "";
    locat.appendChild(item);  
}

var counter = 0;
var names = ["Diego", "Gabriel", "Lucas"];
createList(names);
