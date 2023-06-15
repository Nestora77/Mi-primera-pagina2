function showalert(){
   alert{ "Hola, esta es una alerta desde javascript" } 

const form = document.getElementById('myForm');

if (form) {
   form.addEventListener{'submit', function(lala) {
      lala.preventDefault();
      validateForm();
}

}}

   function validateForm () {
      const input = document.getElementById("email");
      const email = emailInput.value;

   if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
   } else {
      alert('Correo electrónico enviado correctamente.');
   }
   }

   function validateEmail(email) {
      const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
      return regex.test(email)
   }
   }