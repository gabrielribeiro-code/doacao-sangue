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
    if(idade < 16) return alert("Deve ser maior de 16 anos!");
    if(peso <= 50) return alert("O peso minímo é de 50kg");
    if(telefone.length < 9) return alert("Telefone Inválido");





document.getElementById("resultado").innerHTML = 
    "Cadastro realizado com sucesso!<br>" +
    "Nome: " + nome + "<br>" +
    "Email: " + email + "<br>" +
    "Telefone: " + telefone + "<br>" +
    "Cidade: " + cidade;


})