const slide_list = document.querySelector('.slide_list');
const photo_main = document.querySelector('.photo-main');
const photo_btn = document.querySelectorAll('.photo-btn');
let curIndex = 0;

window.addEventListener("load",function functionName() {
  loadedImage();
  animation_slide();
  loadedMainImage();
});

function loadedMainImage() {
  let idx = 1;
  for(var i=0;i<4;i++){
    const w3_quarter = document.createElement('div');
    w3_quarter.className = "w3-quarter";
    for(var j=0;j<3;j++){
        const img = new Image();
        img.src = "./img/"+idx+".jpg";
        img.style = "width:400px; height:400px;";
        img.onclick = function(){
          onClick(this);
        }
        w3_quarter.appendChild(img);
        idx++;
    }
    photo_main.appendChild(w3_quarter);
  }
}

function loadedImage(){
  for(var i=1;i<=60;i++){
    const li = document.createElement('li');
    li.className = "slide_content";
    const img = new Image(300,300);
    img.src = "./img/"+i+".jpg";
    li.appendChild(img);
    slide_list.appendChild(li);
  }
}

function animation_slide(){
  const slideContents = document.querySelectorAll('.slide_content');
  let firstChild = slide_list.firstElementChild;
  let cloneFirst = firstChild.cloneNode(true);
  let curSlide = slideContents[curIndex];
  slide_list.appendChild(cloneFirst);
  setInterval(function(){
    if(curIndex < slideContents.length - 1){
      slide_list.style.transition = "1000ms";
      slide_list.style.transform = "translate3d(-" + (300 * (curIndex+1) ) + "px, 0px, 0px)";
    }
    if(curIndex == slideContents.length-1){
      setTimeout(function() {
      slide_list.style.transition = "0ms";
      slide_list.style.transform = "translate3d(-300px, 0px, 0px)";
      }, 300);
      curIndex = -1;
    }
    curSlide = slideContents[++curIndex];
  },2500);
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var input_box = document.getElementById("caption");
  var parent = input_box.parentNode;
  var src = parent.firstElementChild.src;
  console.log(src);
  var p = document.getElementById('blind');
  console.log(localStorage.getItem(src));
  if(localStorage.getItem(src) === null){
    input_box.style.display="block";
    p.innerHTML = "";
    enterkey();
  }
  else{
    p.innerHTML = localStorage.getItem(src);
    input_box.style.display="none";
  }
}

function enterkey(){
    if(window.event.keyCode == 13){
      var input_box = document.getElementById("caption");
      input_box.parentNode.firstElementChild.alt = input_box.value;
      var parent = input_box.parentNode;
      input_box.style.display="none";
      var p = document.getElementById('blind');
      var newClass = parent.firstElementChild.src;
      p.classList.add(parent.firstElementChild.src);
      p.innerHTML = parent.firstElementChild.alt;
      localStorage.setItem(newClass,p.innerHTML);
    }
}

function btn_pageNum(element){
  const w3_quarter = document.querySelectorAll('.w3-quarter');
  for(var i=0;i<4;i++){
      photo_main.removeChild(w3_quarter[i]);
  }
  var pageNum = element.id;
  let idx = (pageNum-1)*12;
  for(var i=0;i<4;i++){
    const newDiv = document.createElement('div');
    newDiv.className = "w3-quarter";
    for(var j=0;j<3;j++){
        const img = new Image();
        img.src = "./img/"+idx+".jpg";
        img.style = "width:400px; height:400px;";
        img.onclick = function(){
          onClick(this);
        }
        newDiv.appendChild(img);
        idx++;
    }
    photo_main.appendChild(newDiv);
  }
  for(var i=0;i<4;i++){
    photo_btn[i].classList.remove("w3-black");
  }
  element.classList.add("w3-black");
}
