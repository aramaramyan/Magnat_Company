const myDate = new Date();

const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
const date = myDate.getDate();
const month = monthsList[myDate.getMonth()];
const year = myDate.getFullYear();
const day = daysList[myDate.getDay()];
let amOrPm;

function twelveHours(){
  if(myDate.getHours() > 12) {
    amOrPm = 'PM';
    const twentyFourHourTime = myDate.getHours();
    const conversion = twentyFourHourTime - 12;

    return `${conversion}`;
  } else {
    amOrPm = 'AM';

    return `${myDate.getHours()}`;
  }
}

const today = `${date} ${month} ${year}, ${day}`;

export default function getDate() {
  const hours = twelveHours();
  const minutes = myDate.getMinutes();
  return `${today} ${hours}:${minutes} ${amOrPm}`;
}