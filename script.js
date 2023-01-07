const dia = document.getElementById(`dia`)
const hora = document.getElementById(`hora`)
const minuto = document.getElementById(`minuto`)
const segundo = document.getElementById(`segundo`)

const ccpxday = "29 dec 2022"

function countDown(){
    const dataCCPX = new Date(ccpxday)
    const hoje = new Date ()

    const segTotal = (dataCCPX - hoje)/1000;

    const  finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const  finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const  finalMinutos = Math.floor(segTotal / 60) % 60;
    const  finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(finalDias)+"D"
    hora.innerHTML = formatoTempo(finalHoras)+"H"
    minuto.innerHTML = formatoTempo(finalMinutos)+"M"
    segundo.innerHTML = formatoTempo(finalSegundos)+"S"
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)