(function(){
  var d=document.documentElement, btn=document.getElementById('lang-toggle');
  if(!btn) return;
  btn.addEventListener('click',function(){
    var l=d.getAttribute('data-l')==='ar'?'en':'ar';
    d.lang=l; d.dir=l==='ar'?'rtl':'ltr'; d.setAttribute('data-l',l);
    try{localStorage.setItem('md-lang',l)}catch(e){}
  });
})();
