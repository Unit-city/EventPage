/*
alert('Hello!');
alert('난이도3까지 오신걸 축하드려요!');
alert('여기서부턴 정답에 따라 주어지는 code가 달라집니다 ㅎㅎ');
alert('잘 생각해보고 답해주세요');
*/
var button = document.getElementById('btn3');

button.onclick = function(){
  window.location.href="1.html";
}

var night = document.getElementById('night');
var day = document.getElementById('day');


night.onclick=function(){
  $('#body').css('background-color','black');
  $('h1').css('color','white');
  $('#click').css({
    display: "block",
    color : "black"
  });
  $('#1').css('color','red');
  $('#3').css('color','red');
  $('#4').css('color','red');
  $('#6').css('color','red');
}
day.onclick=function(){
  $('#body').css('background-color','white');
  $('h1').css('color','black');
  $('#click').css('display','none');

}

var click =document.getElementById('click');

click.onclick = function(){
    alert("순서는 알아서 짜보세요!! 선착순으로 선물드립니다. 화이팅!");
    alert("Hint를 원하시면 저를 찾아주세요-홍보(한창록)^^");
}

var cr = document.getElementById('cr');

cr.onclick = function(){
  $('#ii').css('display','block');
}
