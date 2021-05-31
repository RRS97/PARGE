const dados = document.querySelectorAll("#dados h2");
const texto = document.querySelectorAll('#dados-text p')
function activeh2(index){
    dados.forEach((dadosH2)=>{
        dadosH2.classList.toggle("ativo")
    })
    texto[index].classList.toggle("ativo");
}

dados.forEach((itemh2, index) =>{
    itemh2.addEventListener('click', function(){
        activeh2(index);
    })
})


function animaScroll(){
    const sections = document.querySelectorAll('.scroll');
    if(sections.length){
    const alturaMetade = window.innerHeight * 0.7;
        function carregar(){
            sections.forEach((itemSections)=>{
                const distanciaTop = itemSections.getBoundingClientRect().top;
                const distaciaCerta = distanciaTop - alturaMetade < 0;

                if(window.innerWidth <= 900){
                    const metadeMobile = window.innerHeight * 0.8;
                    const distanciaMobile = distanciaTop - metadeMobile < 0;
                    if(distanciaMobile){
                        itemSections.classList.add('ativo');
                    }
                }
                else if(distaciaCerta){
                    itemSections.classList.add('ativo');
                }
                
            })
        }
        carregar();
        window.addEventListener('scroll', carregar)
    }
}
animaScroll();