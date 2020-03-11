var code = document.getElementById('code');
var button = document.getElementById('btn');
code.focus();

button.onclick = function(){
  if(code.value==='C05671'){
    window.location.href='1.html';
  }
  else{
    window.location.href='error.html';
  }
}
