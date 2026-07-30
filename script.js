/* =======================================================
   LUZ KARINE LOPES ADVOCACIA
   SCRIPT.JS
   INTERAÇÕES DO SITE
======================================================= */



// ===============================
// MENU MOBILE
// ===============================


const menuMobile = document.getElementById("menu-mobile");

const menu = document.getElementById("menu");



if(menuMobile){


menuMobile.addEventListener("click",()=>{


menu.classList.toggle("active");


menuMobile.classList.toggle("active");


});


}






// Fecha menu ao clicar em um link


const linksMenu = document.querySelectorAll(".menu a");



linksMenu.forEach(link=>{


link.addEventListener("click",()=>{


menu.classList.remove("active");


menuMobile.classList.remove("active");


});


});






// ===============================
// HEADER AO ROLAR A PÁGINA
// ===============================



const header = document.getElementById("header");



window.addEventListener("scroll",()=>{


if(window.scrollY > 80){


header.classList.add("scrolled");


}else{


header.classList.remove("scrolled");


}


});






// ===============================
// ANIMAÇÕES AO APARECER
// ===============================



const elementosAnimados = document.querySelectorAll(
".card, .area-card, .step, .depoimento-card, .sobre-box, .stat"
);



const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{

threshold:0.15

}

);





elementosAnimados.forEach(elemento=>{


elemento.classList.add("fade-up");


observer.observe(elemento);


});







// ===============================
// FAQ ACORDEÃO
// ===============================



const perguntas = document.querySelectorAll(".faq-question");



perguntas.forEach(pergunta=>{


pergunta.addEventListener("click",()=>{


const item = pergunta.parentElement;



item.classList.toggle("active");



});



});

/* ===============================
   CONTADORES ANIMADOS
=============================== */



const numeros = document.querySelectorAll(
".stat strong"
);



const iniciarContador = (elemento)=>{


const valorFinal = Number(
elemento.getAttribute("data-number")
);



let atual = 0;



const velocidade = Math.max(
1,
Math.floor(valorFinal / 80)
);





const contador = setInterval(()=>{


atual += velocidade;



if(atual >= valorFinal){


elemento.textContent = valorFinal;


clearInterval(contador);


}else{


elemento.textContent = atual;


}



},30);



};






const contadorObserver = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){



iniciarContador(entry.target);



contadorObserver.unobserve(entry.target);


}



});


},
{


threshold:0.5


}

);





numeros.forEach(numero=>{


contadorObserver.observe(numero);


});








// ===============================
// ROLAGEM SUAVE DOS LINKS
// ===============================



document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
function(e){



const destino = document.querySelector(
this.getAttribute("href")
);



if(destino){



e.preventDefault();



destino.scrollIntoView({

behavior:"smooth"

});



}



});



});







// ===============================
// BOTÃO WHATSAPP
// ===============================


// Alterar depois pelo número real da Dra. Luz


const whatsapp = document.querySelector(
".whatsapp"
);



if(whatsapp){



const numero = "5563984742521";



whatsapp.href =
`https://wa.me/${numero}?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AA.`;



}







// ===============================
// FORMULÁRIO
// ===============================








/* ===============================
   ANO AUTOMÁTICO NO RODAPÉ
=============================== */



const anoAtual = document.querySelector(
".footer-bottom p"
);



if(anoAtual){


const ano = new Date().getFullYear();


anoAtual.innerHTML =
anoAtual.innerHTML.replace(
"2026",
ano
);


}







// ===============================
// ANIMAÇÃO DE ENTRADA DO HERO
// ===============================



window.addEventListener(
"load",
()=>{


const heroText =
document.querySelector(".hero-text");


const heroImage =
document.querySelector(".hero-image");



if(heroText){


heroText.style.opacity="1";


}



if(heroImage){


heroImage.style.opacity="1";


}



});







// ===============================
// PROTEÇÃO DE IMAGENS
// ===============================



document.querySelectorAll("img")
.forEach(img=>{


img.addEventListener(
"error",
()=>{


img.style.display="none";


}

);


});







// ===============================
// VOLTAR AO TOPO
// ===============================



const criarBotaoTopo = ()=>{


const botao = document.createElement("button");



botao.innerHTML="↑";



botao.className="topo";



document.body.appendChild(botao);




botao.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 500){


botao.classList.add("mostrar");


}else{


botao.classList.remove("mostrar");


}



});


};



criarBotaoTopo();







// ===============================
// FINALIZAÇÃO
// ===============================


console.log(
"Luz Karine Lopes Advocacia - Site carregado com sucesso."
);