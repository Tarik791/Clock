setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){

    const currentDate = new Date()
    const secondsRation = currentDate.getSeconds() / 60
    const minutesRation = (secondsRation + currentDate.getMinutes()) / 60
    const hoursRation = (minutesRation + currentDate.getHours()) / 12

    setRotaion(secondHand, secondsRation);
    setRotaion(minuteHand, minutesRation);
    setRotaion(hourHand, hoursRation);

}


function setRotaion(element, rotationRatio){
    
    element.style.setProperty('--rotation', rotationRatio * 360);

}