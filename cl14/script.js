documeny.querySelectorALL('.buttefly').forEach(function (el)) {
  el.addEventListener('mouseover',function() {
   el.style.left = Math.random() * 800;+"px"+
   el.style.top = Math.random() * 400;+"px"+
  });
});