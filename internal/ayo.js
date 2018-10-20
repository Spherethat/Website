var arr1 = [{"id": "145D", "q": 1}, {"id":"146C","q":3}, {"id":"146D","q":100}]

var arr2 = {"id":"ayooo", "quant":9}

var k = arr2.quant
console.log(k);

arr3 = []

arr1.forEach(function(child){
  if(k>0 && k>child.q){
    var Obj={
      "Bsid": arr2.id,
      "CSid": child.id,
      "fq": child.q
    }
    arr3.push(Obj);
    k = k - child.q
  } else if(k>0 && k<=child.q){
     var Obj={
      "Bsid": arr2.id,
      "CSid": child.id,
      "fq": k
    }
    arr3.push(Obj);
    k = k - child.q
  }else if(k<=0){
    console.log(k)
  }
});

console.log(arr3)
