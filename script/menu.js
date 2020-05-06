const menu_sanduiche = document.getElementsByClassName("menu_sanduiche")[0];
const painel_menu = document.getElementsByClassName("menu_links")[0];

menu_sanduiche.addEventListener("click", ()=>{
    if(menu_sanduiche.innerHTML != "<p>X</p>")
    {
        //Fazer aparecer a nav com os links
        painel_menu.style.opacity = 1;
        painel_menu.style.left = 0;
        
        //Fazer mudar o conteudo do menu sanduiche
        menu_sanduiche.innerHTML = "<p>X</p>";
    }
    else
    {
        //Fazer aparecer a nav com os links
        painel_menu.style.opacity = 0;
        painel_menu.style.left = '100%';
        
        //Fazer mudar o conteudo do menu sanduiche
        menu_sanduiche.innerHTML = "<div class='barrinha'></div><div class='barrinha'></div><div class='barrinha'></div>";
    }
});