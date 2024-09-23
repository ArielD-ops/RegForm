function validacion()
{
    var  nombre = document.getElementById("Name").value;
    var  direccion = document.getElementById("Address").value;
    //const vehiculo = document.querySelectorAll('input[name="vehiculo"]');
    var email = document.getElementById( "Email" ).value;
    var resultado;
    
    console.log("entro");
    alert("entro");
    //Validación de que el email este completo
    //alert(nombre + " " + apellido);
    
    if (nombre == "" || direccion == "" || email =="") {
        alert ("Todos los campos son obligatorios");
        //return false;
    } else {
      //alert('Los datos ingresados son correctos');    
      //return true;
    }
      //console.log(validateEmail("javier@g,ail.com"));
    if(validateEmail())
        {
            alert('El mail esta correcto');                
        }
        else
        {
            alert('el mail no esta correcto');    
        }
      if(vehiculo.checked)
      {
          alert('Los datos ingresados son correctos');    
          }
          else
          {
              alert ('Debe seleccionar una opción en el campo Vehículo') ;  
          }
      
    
      return true;     
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/; //Regex: verifica el email o expresiones regulares
    return re.test(email);
  }    

  function validatePass(pass)
  {
    var re = Password;
  }