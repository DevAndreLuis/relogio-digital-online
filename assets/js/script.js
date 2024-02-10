const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function updateTime() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes(); // Corrigido para obter os minutos
  let sec = dateToday.getSeconds(); // Corrigido para obter os segundos

  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;
}

// Chamar a função updateTime() uma vez para atualizar o relógio imediatamente
updateTime();

// Atualizar o relógio a cada segundo
const relogio = setInterval(updateTime, 1000);
