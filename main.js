const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const relogio = setInterval(function time(){
 let dateToday = new Date();
 let hora = dateToday.getHours();
 let minuto = dateToday.getMinutes();
 let segundo = dateToday.getSeconds();
   hour.textContent = hora;
   minute.textContent = minuto;
   second.textContent = segundo;
  if(hora < 10){
    hour.textContent = '0'+ hora
}
  if (minuto < 10) {
    minute.textContent = '0' + minuto
}
  if (segundo < 10) {
    second.textContent = '0'+ segundo
}
})




