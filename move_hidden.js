var special_code = document.getElementById('special_code');
var button = document.getElementById('btn');
special_code.focus();



button.onclick = function(){
  if(special_code.value==='6954'){
    alert('짝짝짝!!');
    alert('고생하셨어요!!');
    alert('당첨된 선물은 베스킨라빈스-파인트 입니다.!!');
    alert('축하드립니다!!');
    alert('이 화면 캡쳐해서 홍보-한창록에게 보내주시면 선착순으로 선물드릴게요.-baskin(pint)');
  }
  else if(special_code.value==='7777'){
    var hidden=document.getElementById('hidden');
    hidden.id='luck';
  }
  else if(special_code.value==='4316'){
    alert('당신의 노가다에 박수를~~!~!~!~!');
    alert('더 좋은 상품을 받고 싶다면 화면으로 돌아가서 다시 한번 도전해 보세요!');
    alert('당첨된 선물은 베스킨라빈스-싱글킹 입니다.!!');
    alert('축하드립니다!!');
    alert('이 화면 캡쳐해서 홍보-한창록에게 보내주시면 선착순으로 선물드릴게요.-baskin(singleking)');
  }
  else{
    window.location.href="";
  }
}
