const iframe = document.getElementById|('iframe');
const btn = document.getElementById('full-screen')
console.log(iframe);
console.log(btn);

btn.addEventListener('click', ()=> {
  iframe.requestFullscreen()
})
