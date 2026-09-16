// Salida rápida: redirige de inmediato a un sitio neutro.
document.querySelectorAll('.quick-exit').forEach(function(btn){
  btn.addEventListener('click', function(){
    location.replace('https://www.google.com');
  });
});

// Carga la lista de la Red de Acompañamiento desde data/colaboradores.json
// (solo se ejecuta si la página tiene el contenedor #colaboradores-list)
(function(){
  var el = document.getElementById('colaboradores-list');
  if (!el) return;
  fetch('data/colaboradores.json', {cache: 'no-store'})
    .then(function(r){ return r.json(); })
    .then(function(lista){
      if (!Array.isArray(lista) || !lista.length){
        el.innerHTML = '<li class="empty">Pronto publicaremos aquí a quienes colaboran con nosotros.</li>';
        return;
      }
      el.innerHTML = lista.map(function(p){
        var rol = p.rol ? '<div class="rol">' + escapeHtml(p.rol) + '</div>' : '';
        return '<li><strong>' + escapeHtml(p.nombre) + '</strong>' + rol + '</li>';
      }).join('');
    })
    .catch(function(){
      el.innerHTML = '<li class="empty">Pronto publicaremos aquí a quienes colaboran con nosotros.</li>';
    });

  function escapeHtml(str){
    return String(str == null ? '' : str).replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }
})();
