function priceA(){
var p = document.getElementById('basePrice').value;
var pa = Math.round(p*0.55);
document.getElementById('pa').value = pa;

if(pa>15){var pb=Math.round(p*0.55-10);} else {var pb=Math.round(p*0.4);}

  document.getElementById('pb').value = pb;
var pc = Math.round(pb*0.6);
  document.getElementById('pc').value = pc;
var pd = Math.round(pb*0.15);
  document.getElementById('pd').value = pd;
}
