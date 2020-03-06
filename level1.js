alert('Hello');
alert('난이도1이에요.');
alert('진짜쉬워요.');
var input = prompt('Q1) 우리 지구대 팀장님 이름은 뭘까요...?');

if(input==='정용환'){
  alert('정답입니다!');
  alert('다음 난이도로 갈게요.');
  window.location.href="level2_home.html";
}
else{
  alert('틀렸어요.');
  alert('다시 풀어보세요!');
  window.location.href="1.html";
}
