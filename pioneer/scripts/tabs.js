InitialTabSetup();     

function InitialTabSetup() {
    HideAllTabsBoxes();
    ConfigureTabEvents();
    SetInitialTabState();
}

function ConfigureTabEvents() { 
    var tabs = document.querySelectorAll(".tabs");
    for (var i = 0; i < tabs.length; i++) {
        ConfigureTab(tabs[i].id);
    }      
}

function ConfigureTab(buttonId) {
    var element = document.getElementById(buttonId);
    element.addEventListener("click", function(event){ 
    HideAllTabsBoxes();
    RemoveActiveTabStatus();       
    document.getElementById(element.getAttribute("data-tab-content")).style.display="block";    
    document.getElementById(element.getAttribute("data-tab-content")).focus();   
    element.classList.add("active-tab");    
    event.preventDefault();
    });    
}

function HideAllTabsBoxes() {
    var tabsInfo = document.querySelectorAll(".tab-content");
    for (var i = 0; i < tabsInfo.length; i++) {
        tabsInfo[i].style.display = "none";
    }   
}

function RemoveActiveTabStatus() {
    var tabsInfo = document.querySelectorAll(".tabs");
    for (var i = 0; i < tabsInfo.length; i++) {
        tabsInfo[i].classList.remove("active-tab");
    }   
}

function SetInitialTabState() {
    var e = document.querySelector(".tab-content.default-tab");
    if (e != null)
    {
        e.style.display="block";       
    }


    var e = document.querySelector(".tabs.default-tab");
    if (e != null)
    {
        e.classList.add("active-tab");
    }
}