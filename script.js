/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

function time(){
  
  var clock = document.getElementById('clock');
  var time = new Date();
  
  clock.textContent = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour12: true    
  })
}
setInterval(time,2);
