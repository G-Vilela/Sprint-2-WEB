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