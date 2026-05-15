const btnLogin = document.getElementById("btnLogin");
const mensagem = document.getElementById("mensagem");

btnLogin.addEventListener("click", function(){

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if(usuario === "" || senha === ""){
        mensagem.innerHTML = "Preencha todos os campos";
        mensagem.style.color = "red";
        return;
    }

    if(usuario === "Aluno Fiap" && senha === "1234"){

        mensagem.innerHTML = "Login realizado com sucesso";
        mensagem.style.color = "green";

        // troca de tela
        document.getElementById("telaLogin").classList.remove("active");
        document.getElementById("telaSistema").classList.add("active");

    }
    else{
        mensagem.innerHTML = "Usuário ou senha incorretos";
        mensagem.style.color = "red";
    }

});
const imagens = [
    "https://media.licdn.com/dms/image/v2/D4D05AQHIYsGf32mxuQ/feedshare-thumbnail_720_1280/feedshare-thumbnail_720_1280/0/1714661995954?e=2147483647&v=beta&t=SFF4nq814x_ns-XvAqC3X9oJnk-z5cw2o8XEZJIuNoU",
    "https://s3.amazonaws.com/wpfiap/wp-content/uploads/2014/11/20141105_fiap_next_0489.jpg",
    "https://i.ytimg.com/vi/7Ggx_UsW17o/maxresdefault.jpg"
];

let indice = 0;

const slide = document.getElementById("slide");

document.getElementById("proximo").addEventListener("click", function(){

    indice++;

    if(indice >= imagens.length){
        indice = 0;
    }

    slide.src = imagens[indice];

});

document.getElementById("anterior").addEventListener("click", function(){

    indice--;

    if(indice < 0){
        indice = imagens.length - 1;
    }

    slide.src = imagens[indice];

});
const caixa = document.getElementById("caixa");


document.getElementById("btnAlerta").addEventListener("click", function(){

    alert("Usamos JavaScript para fazer esse trabalho!");

});

document.getElementById("btnPrompt").addEventListener("click", function(){

    let nome = prompt("Digite seu nome:");

    if(nome){
        caixa.innerHTML = "Olá, tenha um ótimo dia " + nome ;
    }

});
