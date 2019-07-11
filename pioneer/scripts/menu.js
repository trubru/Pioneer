ConfigureShowHideMenuButtons();
ConfigureMenuItems();   

function ConfigureMenuItems() {
    var classname = document.querySelectorAll(".main-menu-item");
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', function(event) {
            HideMenu();
        });
    }
}

function ConfigureShowHideMenuButtons() {
    document.getElementById("show-menu-button").addEventListener("click", function(event){ 
        ShowMenu();
        document.getElementById("main-menu").focus();
        event.preventDefault();
    });

    document.getElementById("hide-menu-button").addEventListener("click", function(event){ 
        HideMenu();
        document.getElementById("show-menu-button").focus();                
        event.preventDefault();
    });
}            

function HideMenu() {
    document.getElementById("main-menu-wrapper").classList.remove("show-menu");
    document.getElementById("main-menu-wrapper").classList.add("hide-menu");
}

function ShowMenu() {
    document.getElementById("main-menu-wrapper").classList.add("show-menu");
    document.getElementById("main-menu-wrapper").classList.remove("hide-menu");
}