window.addEventListener('load', function () {
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const date = now.toDateString();
      
        const timeElement = document.getElementById('date-time');
        timeElement.innerHTML = `${date}  <strong>${hours}:${minutes}:${seconds}</strong> `;
      }
      
// Update live
      setInterval(updateTime, 1000);
      
// Update on reaload
updateTime();    

});