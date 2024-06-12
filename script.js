
const secondHand =document.querySelector('.second-hand');
const minsHand =document.querySelector('.min-hand');
const hourHand =document.querySelector('.hour-hand');
const numbers =document.querySelector('.numbers');




function generateClockNumbers(){
  for (let i = 1; i <= 12; i++){
    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.textContent= i;


    const angle = (i / 12) * 360;
    const radius = 145;
    const x = radius * Math.cos((angle - 90)* (Math.PI / 180));
    const y = radius * Math.sin((angle - 90) * (Math.PI / 180));


    numberElement.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    numbers.appendChild(numberElement);
  }
}



function setDate() {
  const now = new  Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) +90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees =((mins/60)*360) + 90;
  minsHand.style.transform= `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour/12)*360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

 
}

setInterval(setDate, 1000);

setDate();

generateClockNumbers();