window.onload = function() {
const enviar = document.getElementById('submit-btn');
enviar.addEventListener('click', send);
const textos = document.querySelectorAll('input')
textos.addEventListener('click', validation);

function send(event) {
    event.preventDefault(); 
    const foi = validation();
    if (foi === false) {
            alert('Dados inválidos');
        } else {
            alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
        }
    }

    function validation() {
        const email = document.getElementById('usuario').value.length;
        const invalidEmail = email < 10 || email > 50;
        
        const name = document.getElementById('nome-completo').value.length;
        const invalidName = name < 10 || name > 40;
        
        const reason = document.getElementById('motivos-vencer').value.length;
        const invalidReason = reason > 500;
        
        const concordo = document.getElementById('checkbox-autorizacao'); 
        
        if (invalidEmail || invalidName || invalidReason || !concordo.checked) {
          return false;
        }
          return true;
      }
}


