var d = new Date();

let hourAngle = d.getHours() * 15;
let hourHand = document.getElementById('hour-hand');

function handRotate(hand, angle) {
  console.log(angle)
  hand.style.transform = `rotate(${angle}deg)`;
}

handRotate(hourHand, hourAngle);
handRotate(minuteHand, hourAngle)

// Method
//
// Find the hour, mins and seconds
//
// Set each hand to the correct time
//
// set a timeout
