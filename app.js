
// función de recargar la página
// $(window).load(function(){
// 	$('#preloader').fadeOut('slow',function(){$(this).remove();});
// });

const btnOpen = document.getElementById('bnt-menu'); //para desplegar la barra de navegación
const menuNaveg = document.getElementById('menu'); // Barra de navegación    //   closeBtn = document.getElementById( 'close-menu' ),

let isOpen = false;

btnOpen.addEventListener("click", function(e) {
    if (!isOpen){
    menuNaveg.style.visibility = 'visible';
    isOpen = true;
    console.log(isOpen)
    } else {
    menuNaveg.style.visibility = '';
   
    
    isOpen = false;
    console.log(isOpen)
    }  
});

// CAMBIAR LOGO POR HAMBURGUESA EN VERSION CELULAR FALTA!!!!

    

   