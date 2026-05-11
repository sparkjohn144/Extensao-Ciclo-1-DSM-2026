function mudarPagina()
{
    event.preventDefault(); //essa porra aqui impede que o forms seja mandado direto

    let input = document.getElementById('senha-barra');
    let valor = input.value.trim();
    
    if (valor !== "")
    {
        window.location.href = 'index.html';
        alert('Login realizado com sucesso! Seja Bem-Vindo')
    }
    else
    {
        alert('Preencha os Campos Necessários ');   
    }

}