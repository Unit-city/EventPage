alert('Hello');
alert('난이도2에요.');
alert('총 2문제에요.')
alert('이것도 쉬워요');
alert('문제 나갑니다~~~');
alert('정답은 숫자만 적으시면 됩니다!');
var ans1 = prompt('Q1) 시티 지구대의 총 임원은 몇명일까요?');

if(ans1==='7'){
  alert('정답입니다!');
  alert('쫌 하시네요 ㅎㅎ');
  alert('다음 문제 나갑니다~~~');
  var ans2 = prompt('Q2) 현재 기획을 맡고 있는 2명 중 한명인 민영이는 몇살일까요?');
  if(ans2==='22'){
    alert('정답입니다!');
    alert('다음 문제로 이동할게요~');
    window.location.href="level3_home.html";
  }
  else{
    alert('틀렸어요.');
    alert('다시 풀어보세요!');
    window.location.href="level2_home.html";
  }
}
else{
  alert('틀렸어요.');
  alert('다시 풀어보세요!');
  window.location.href="level2_home.html";
}
