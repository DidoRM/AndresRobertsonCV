/**Está función muestra u oculta la inf. complementaria del CV {*/
function MostrarOcultar() {
    let x = document.getElementById("id_Complementaria");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  document.getElementById('id_cambiaColorF').addEventListener('click', function() {
    document.body.style.backgroundColor='#000000';
  });