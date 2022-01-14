setTimeout(function(){
  document.querySelector(".preloader").style.display="none";
},1000);
////////////////////////////////////////////////////////////
let one = ["this","It's"];
let two =["those","They're"];
let three =["that","It's"];
let four =["these","They're"];
let snum = 0;
let current = 1;
let sliderImage = Array.from(document.querySelectorAll('article section .slider'));
let btns = Array.from(document.querySelectorAll('footer div'));
let spans = document.querySelectorAll('article section .slider .question span');

let spansArr = [...spans];

let show = document.querySelector('footer .show');

let reload = document.querySelector("footer .reload");
let replay = document.querySelector("footer .replay");

let slideNumber = document.querySelector('footer .text span');

let next = document.querySelector('.next img');
let back = document.querySelector('.back img');

let close = document.querySelector("article .close");

let resourse = document.querySelector("header .img1");
let help = document.querySelector("header .img2");

next.onclick = nextSlide;
back.onclick = prevSlide;

turning();


function nextSlide(){
  if(next.classList.contains('disabled')){
    return false;
  }else{
    current++;
    turning();
  }
  if(thecheack())
  show.classList.add('done');
  else
  show.classList.remove('done');
}

function prevSlide(){

  if(back.classList.contains('disabled')){
    return false;
  }else{
    current--;
    turning();    
  }
  if(thecheack())
  show.classList.add('done');
  else
  show.classList.remove('done');
}

function turning(){
  slideNumber.textContent = current + ' / ' + sliderImage.length;
  removeActive();
  sliderImage[current-1].classList.add('active');
  if(current==1){
    back.classList.add('disabled');
  }else{
    back.classList.remove('disabled');
  if(current==sliderImage.length){
    next.classList.add('disabled');
  }else{
    next.classList.remove('disabled');
}
  }
}
function removeActive(){
  sliderImage.forEach(function(img){
    img.classList.remove('active');
  });
}

spans.forEach(function(span){
  span.addEventListener("click",function(e){
    if(current == 1) cheack(one,e);
    if(current == 2) cheack(two,e);
    if(current == 3) cheack(three,e);
    if(current == 4) cheack(four,e);
  });
});
function cheack(arr,e){
  if(arr.includes(e.target.textContent)){
    e.target.classList.add("correct");
    document.getElementById("music1").pause();
    document.getElementById("music1").currentTime = 0;
    document.getElementById("music2").pause();
    document.getElementById("music1").play();
    if(e.target.nextElementSibling){
      e.target.nextElementSibling.classList.add("lapse")
    }
    if(e.target.previousElementSibling){
      e.target.previousElementSibling.classList.add("lapse")
    }
    if(thecheack())
    show.classList.add('done');
    else
    show.classList.remove('done');
  }else{
    
      e.target.classList.add("wrong");
      document.getElementById("music1").pause();
      document.getElementById("music2").pause();
      document.getElementById("music2").currentTime = 0;
      document.getElementById("music2").play();
    setTimeout(function(){
      e.target.classList.remove("wrong");
    },1000);
    
  }
}

show.onclick = function(){
  
  if(current == 1){
    snum=(current * 4 )-4;
    spansNew = spansArr.slice(snum,snum+4);
    showF(one,spansNew,current);

  }
  if(current == 2){
    snum=(current * 4 )-4
    spansNew = spansArr.slice(snum,snum+4);
    showF(two,spansNew,current);
  }
    if(current == 3){
    snum=(current * 4 )-4;
    spansNew = spansArr.slice(snum,snum+4);
    showF(three,spansNew,current);
  } 
    if(current == 4){
    snum=(current * 4 )-4;
    spansNew = spansArr.slice(snum,snum+4);
    showF(four,spansNew,current);
  } 
}

function showF(arr,spansNew,now){  

  for(var i = 0; i<spansNew.length; i++){
    for(var y = 0; y<arr.length; y++){

    if(arr.includes(spansNew[i].textContent))

    spansNew[i].classList.add("correct");

    else
    spansNew[i].classList.add("lapse");
    
    }
  }
  if(thecheack())
  show.classList.add('done');
  else
  show.classList.remove('done');
}

function thecheack(){
if((sliderImage[current-1].children[1].children[0].classList.contains("correct")||
  sliderImage[current-1].children[1].children[1].classList.contains("correct"))&&
  (sliderImage[current-1].children[2].children[0].classList.contains("correct")||
  sliderImage[current-1].children[2].children[1].classList.contains("correct")))
  return true;
  else
  return false;
}

reload.onclick = function (){
    for(var i=1;i<=2;i++){
      for(var y=0;y<2;y++){
        if(sliderImage[current-1].children[i].children[y].classList.contains("correct"))
        sliderImage[current-1].children[i].children[y].classList.remove("correct");
        if(sliderImage[current-1].children[i].children[y].classList.contains("lapse"))
        sliderImage[current-1].children[i].children[y].classList.remove("lapse");
      }
    }
    show.classList.remove('done');
    sliderImage.classList.remove('anime');
  }
  function restart(){
    for(var c=1;c<=4;c++){
      for(var i=1;i<=2;i++){
        for(var y=0;y<2;y++){
          if(sliderImage[c-1].children[i].children[y].classList.contains("correct"))
          sliderImage[c-1].children[i].children[y].classList.remove("correct");
          if(sliderImage[c-1].children[i].children[y].classList.contains("lapse"))
          sliderImage[c-1].children[i].children[y].classList.remove("lapse");
        }
      }
    }
  show.classList.remove('done');
}
replay.onclick = function(){
  restart();
  current =1;
  next.classList.remove('disabled');
  turning();
}

close.onclick=function(){
  document.querySelector("article .dummy").classList.remove("show");
  document.querySelector("article .close").classList.remove("show");
  document.querySelector(".container .layer").classList.remove("show");
  document.querySelector("article .help").classList.remove("show");
}

resourse.onclick=function(){
  document.querySelector("article .dummy").classList.add("show");
  document.querySelector("article .close").classList.add("show");
  document.querySelector(".container .layer").classList.add("show");
}

help.onclick=function(){
  document.querySelector("article .help").classList.add("show");
  document.querySelector("article .close").classList.add("show");
  document.querySelector(".container .layer").classList.add("show");
}
