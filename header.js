
 const btnResponsive = document.querySelector('.btn-responsive');
 const barraNav = document.querySelector('.navbar');
 const barras = document.querySelectorAll('.btn-responsive span')
 
 btnResponsive.addEventListener('click', () => {
     barraNav.classList.toggle('activado');
     barras.forEach(child => { child.classList.toggle('animado')});
 })

 

