




document.addEventListener('DOMContentLoaded', function() {
   
    const boton = document.getElementById('boton');
    
  
    if (boton) {
      
      boton.addEventListener('change', function() {
      
        if (boton.checked) {
          console.log('El botón está activado');
          const cuerpo = document.getElementById('cuerpo')
          cuerpo.classList.add('dark')
         
        } else {
          console.log('El botón está desactivado');
          cuerpo.classList.remove('dark')
        
        }

       

      
      });
    }
  });
    


//;


