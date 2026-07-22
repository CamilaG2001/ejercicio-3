/* =========================================================
   Nftis — interacciones básicas
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Menú móvil (hamburguesa) ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var abierto = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', abierto);
      toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });
  }

  /* ---------- Buscador ---------- */
  var input = document.querySelector('.search input');

  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var texto = input.value.trim();
        if (texto !== '') {
          console.log('Buscar:', texto);
          // Aquí se conecta la búsqueda real cuando exista backend
        }
      }
    });
  }

  /* ---------- Botón de chat ---------- */
  var chat = document.querySelector('.chat');

  if (chat) {
    chat.addEventListener('click', function () {
      console.log('Abrir chat');
    });
  }

});
