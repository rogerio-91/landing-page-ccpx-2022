const ingressos = [];

function highlightCard(selector)
 {
     var element = document.querySelector(selector);
     element.classList.toggle("card-highlight");
 }

function checkKeyboardCode () 
{
    document.addEventListener('keydown', (event) => {
        
        var name = event.key;
        var code = event.code;
        // alert the key name and key code on keydown
        alert(`Key pressed ${name} \r\n Key code: ${code}`);
    }, false);
}

function addKeyboardEventListeners () {
    document.addEventListener('keydown', (event) => 
    {
    var ingresso1 = document.getElementById("qui");
    var ingresso2 = document.getElementById("sex");
    var ingresso3 = document.getElementById("sab");
    var ingresso4 = document.getElementById("dom");
    
    var code = event.code;
    if(code == 'Digit1') {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit2') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit3') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit4') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
    } 
}, false);
}

function selectCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if (ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector); 
}

function showSelectCards () {
    if (ingressos.length > 0) alert("Ingressos selecionados:" + ingressos);
}

addKeyboardEventListeners();

