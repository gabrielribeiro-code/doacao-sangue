let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){


    e.preventDefault();


    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let peso = document.getElementById('peso').value;
    let telefone = document.getElementById('telefone').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let tipoSangue = document.getElementById('tipoSangue').value;



    //validações

    if(nome.lenght < 14) return alert("Nome Inválido tem que ter nome e sobrenome")
    if(!email.includes('@')) return alert("Email Inválido");
    









})