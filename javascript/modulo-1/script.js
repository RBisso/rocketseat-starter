function print_endereco(endereco) {
   return "o usuário mora em "+endereco.cidade+" / "+endereco.uf+", no bairro "+endereco.bairro+", na rua "+endereco.rua+"com n°"+endereco.numero+".";

}

function temHabilidade(skills) {
    if (skills.indexOf("Javascript") > -1)
        return true;
    else return false;
}
function pares(x, y) {

    for(x; x <= y; x++){
        if(x%2==0)
            console.log(x);
    }
}

function experiencia(anos) {
    if (anos <= 1)
        return "Iniciante"
    else if (anos > 1 && anos < 3)
        return "Intermediário"
    else if (anos > 3 && anos < 6)
        return "Avançado"
    else return "Jedi Master"
}

function listaHabilidadesUsuarios(usuarios) {

    for(usuario of usuarios) {
        console.log("O "+usuario.nome+" possui as habilidades: "+usuario.habilidades.join(", "));
     }
}

var skills = ["Javascript", "ReactJS", "React Native"];

var endereco = {  
    rua: "Rua dos pinheiros",  
    numero: 1293,
    bairro: "Centro",  
    cidade: "São Paulo",  
    uf: "SP"
};

var usuarios = [  
    {    
        nome: "Diego",    
        habilidades: ["Javascript", "ReactJS", "Redux"]  
    },  
    {    
        nome: "Gabriel",    
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

var anosEstudo = 7;

listaHabilidadesUsuarios(usuarios);
