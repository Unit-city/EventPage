var special_code = document.getElementById('special_code');
var button = document.getElementById('btn');
special_code.focus();



button.onclick = function(){
  if(special_code.value==='1234'){
    var hidden=document.getElementById('hidden');
    hidden.id='luck';
  }
  else{

  }
}
