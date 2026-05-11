function mudarPagina()
{
    event.preventDefault(); //essa porra aqui impede que o forms seja mandado direto

    let input = document.getElementById('senha-barra');
    let input2 = document.getElementById('email-barra');
    let valor = input.value.trim();
    let valor2 = input.value.trim();
    
    if (valor !== "" && valor2 !== "")
    {
        window.location.href = 'index.html';
        alert('Login realizado com sucesso! Seja Bem-Vindo')
    }
    else
    {
        alert('Preencha os Campos Necessários ');
        if(valor == "" && valor2 == "")
        {
            input2.focus();
        }
        else if (valor2 == "")
        {
            input2.focus();
        }
        else if(valor == "")
        {
            input.focus();
        }
    }

}

