//esta funcion se ejecuta cuando se cargue este js en el html
$(document).ready(function()
{
    insertar_registro();
})

function insertar_registro(){
    var usuario = $('#user').val();// aca va la id que se le puso al usuario
//agarra lo del input id user y lo mete >> al usuario y despues al ajax

    //ahora vamos a definir el codigo correspondiente al evento click en el boton
    // un evento se va a ejecutar a traves de la accion de un usuario en este caso es hacer click,etc
    //la diferencia con la funcion es que la funcion es llamada 
    //y el evento es algo independiente del programa del usuario/programador
    $(document).on('click','#btn_enviar',function(){
        //aca vamos a hacer la validacion de frontend
        //si la validacion dio correcta vamos a ejecutar una llamada ajax
        //la llamada ajax va a enviar los datos del front-end al back-end
        $.ajax(
                {   
                url : 'insertar.php',
                method : 'post',
                data : {uuser:usuario,upassword:password,unombre:nombre,uapellido:apellido}
                //los datos que le voy a enviar al back-end
                //uuser:pepe siendo pepe lo que yo ingrese en el input
                }


                )
    })
}
//meter adentro de las llaves todos los datos del formulario-registro
//id=#btn_enviar

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
