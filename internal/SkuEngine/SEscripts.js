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

function selectM(manu){
  if(manu == "Apple"){
    document.getElementById("IC").checked = true;
    document.getElementById("PR").checked = false;
    document.getElementById("AL").checked = false;
  } else if(manu == "Blackberry"){
    document.getElementById("IC").checked = false;
    document.getElementById("PR").checked = true;
    document.getElementById("AL").checked = false;
  }
   else{
    document.getElementById("IC").checked = false;
    document.getElementById("PR").checked = false;
    document.getElementById("AL").checked = true;
  }
}

var arrGr = ["A","B","C","D"]

 $("#makeSku").click(function(event){
    event.preventDefault();
    var arrCo = $("#color input:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    console.log(arrCo);

     var arrSt = $("#storage input:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    console.log(arrSt);

     var arrCa = $("#carrier input:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    console.log(arrCa);






  });
