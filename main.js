let dark = document.querySelector('.blur');
let menu = document.querySelector('#menu');
let xMark = document.querySelector('#x-mark');
let navbar = document.querySelector('.navbar');
let about = document.querySelector('#about');
let home = document.querySelector('#home');
let skills = document.querySelector('#skills');
let bg1 = document.querySelector('.background1');
let bg2 = document.querySelector('.background2');
let bg3 = document.querySelector('.background3');
let bg4 = document.querySelector('.background4');
let bg5 = document.querySelector('.background5');
let imageCont = document.querySelector('.image-container');
let image2 = document.querySelector('.image2');
let image2Bg = document.querySelector('.image-bg');
let counting = document.querySelector('.counter');
let chevRight = document.querySelector('.chevron-right');
let chevLeft = document.querySelector('.chevron-left');
let imageProject1 = document.querySelector('.image-background1');
let imageProject2 = document.querySelector('.image-background2');
let imageProject3 = document.querySelector('.image-background3');
let contact = document.querySelector('#contact');
let project = document.querySelector('#projects');
let logo = document.querySelector('.logo');
let portfolio = document.querySelector('.portfolio');
let theme = document.querySelector('.theme');
let nav = document.querySelector('nav');

function myFunction(x){
  if(x.matches){
    navbar.style.left = '-100%';
menu.addEventListener('click',()=>{
  navbar.style.left = '0';
  dark.style.display = 'block';
});
xMark.addEventListener('click',()=>{
  navbar.style.left = '-100%';
  dark.style.display = 'none';
});
  }
else{
   dark.style.display = 'none';
   navbar.style.left = '11%';
}
}
var x = window.matchMedia("(max-width: 599px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)


function myFunction2(x){
if(x.matches){
  function linkColor(item,item2,item3,item4,item5,bg,bckg1,bckg2,bckg3,bckg4,co,navig,blu){
    item.addEventListener('click',()=>{
      item.style.color = '#6B6E70';
      item2.style.color = '#86C232';
      item3.style.color = '#86C232';
      item4.style.color = '#86C232';
      item5.style.color = '#86C232';
      bg.style.display = 'block';
      bckg1.style.display = 'none';
      bckg2.style.display = 'none';
      bckg3.style.display = 'none';
      bckg4.style.display = 'none';
      counting.innerHTML = co+'/5';
      navig.style.left = '-100%';
      blu.style.display = 'none';
      
    });
  }
  linkColor(home,about,skills,project,contact,bg1,bg2,bg3,bg4,bg5,'1',navbar,dark);
  linkColor(about,home,skills,project,contact,bg2,bg1,bg3,bg4,bg5,'2',navbar,dark);
  linkColor(skills,home,about,project,contact,bg3,bg1,bg2,bg4,bg5,'3',navbar,dark);
  linkColor(project,home,about,skills,contact,bg4,bg1,bg2,bg3,bg5,'4',navbar,dark);
  linkColor(contact,home,about,skills,project,bg5,bg1,bg2,bg3,bg4,'5',navbar,dark);
}

   else{
  function linksColor(item,item2,item3,item4,item5,bg,bckg1,bckg2,bckg3,bckg4,co,navig,blu){
    navig.style.left = '11%';
    blu.style.display = 'none';
    item.addEventListener('click',()=>{
      item.style.color = '#6B6E70';
      item2.style.color = '#86C232';
      item3.style.color = '#86C232';
      item4.style.color = '#86C232';
      item5.style.color = '#86C232';
      bg.style.display = 'block';
      bckg1.style.display = 'none';
      bckg2.style.display = 'none';
      bckg3.style.display = 'none';
      bckg4.style.display = 'none';
      counting.innerHTML = co +'/5';
      navig.style.left = '11%';
    });
 
  }
  linksColor(home,about,skills,project,contact,bg1,bg2,bg3,bg4,bg5,'1',navbar,dark);
  linksColor(about,home,skills,project,contact,bg2,bg1,bg3,bg4,bg5,'2',navbar,dark);
  linksColor(skills,home,about,project,contact,bg3,bg1,bg2,bg4,bg5,'3',navbar,dark);
  linksColor(project,home,about,skills,contact,bg4,bg1,bg2,bg3,bg5,'4',navbar,dark);
  linksColor(contact,home,about,skills,project,bg5,bg1,bg2,bg3,bg4,'5',navbar,dark);
}
}
  
  
  var x = window.matchMedia("(max-width: 599px)")
  myFunction2(x) // Call listener function at run time
  x.addListener(myFunction2)


  image2Bg.addEventListener('mouseover',()=>{
     image2Bg.style.display = 'none';
     image2.style.top = '0';
     image2.style.left = '0';
     image2.style.width = '244.5px';
     image2.style.height = '295px';

  });
  image2Bg.addEventListener('mouseout',()=>{
    image2Bg.style.display = 'block';
    image2.style.top = '-15px';
     image2.style.left = '-15px';
     image2.style.width = '240px';
     image2.style.height = '290px';

 });

 const images = [
  imageProject1,
  imageProject2,
  imageProject3,
 ];

 const firstImage = 0;
 const lastImage = images.length-1 ;
 let currentImage = 0;
 
 chevRight.addEventListener('click',()=>{
    currentImage++;
    if(currentImage>=lastImage){
      currentImage = 2;
    }
   
     images[currentImage].style.display = 'block';
     images[currentImage].style.animation = 'textAnimation 0.5s';
    

 });

 chevLeft.addEventListener('click',()=>{
  currentImage--;
  if(currentImage<=firstImage){
    currentImage = 0;
  }
  images[0].style.display = 'block';
  images[1].style.display = 'none';
  images[2].style.display = 'none';
  images[currentImage].style.display = 'block';
  images[currentImage].style.animation = 'textAnimation2 0.5s';
 });
