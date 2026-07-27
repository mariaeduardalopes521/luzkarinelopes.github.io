// ===============================
// ANIMAÇÃO DE ENTRADA DAS SEÇÕES
// ===============================


const secoes = document.querySelectorAll("section");


function mostrarSecoes(){

    const alturaTela = window.innerHeight;


    secoes.forEach(secao => {


        const distancia = secao.getBoundingClientRect().top;


        if(distancia < alturaTela - 100){

            secao.style.opacity = "1";

            secao.style.transform = "translateY(0)";

        }


    });


}



secoes.forEach(secao => {

    secao.style.opacity = "0";

    secao.style.transform = "translateY(40px)";

    secao.style.transition = "all 0.8s ease";

});



window.addEventListener("scroll", mostrarSecoes);


mostrarSecoes();




// ===============================
// ANO AUTOMÁTICO NO RODAPÉ
// ===============================


const ano = new Date().getFullYear();


const rodape = document.querySelector("footer p");


if(rodape){

    rodape.innerHTML =
    `© ${ano} Luz Karine Lopes Advocacia - Todos os direitos reservados.`;

}