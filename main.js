let dark = document.querySelector('.blur');
let menu = document.querySelector('#menu');
let xMark = document.querySelector('#x-mark');
let navbar = document.querySelector('.navbar');
let toggle = document.querySelector('.toggle-cont');
let toggle1 = document.querySelector('.toggle1');
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
let homeIcon = document.querySelector('.home');
let aboutIcon = document.querySelector('.person');
let skillsIcon = document.querySelector('.weird');
let projectIcon = document.querySelector('.website');
let contactIcon = document.querySelector('.message');
let name = document.querySelector('.name');
let developer = document.querySelector('.developer');
let quote = document.querySelector('.quote');
let info = document.querySelector('.info');
let frontend = document.querySelector('.frontend');
let aboutClass = document.querySelector('.about');
let skillsClass = document.querySelector('.skills');
let projectClass = document.querySelector('.projects');
let html = document.querySelector('.html');
let css = document.querySelector('#css');
let js = document.querySelector('#js');
let react = document.querySelector('#react');
let git = document.querySelector('#git');
let rateHtml = document.querySelector('.rate-html');
let rateCss = document.querySelector('.rate-css');
let rateJs = document.querySelector('.rate-js');
let rateReact = document.querySelector('.rate-react');
let rateGit = document.querySelector('.rate-git');
let rateGithub = document.querySelector('.rate-github');
let cruds = document.querySelector('.cruds');
let filter = document.querySelector('.filter');
let filter2 = document.querySelector('#filter2');
let filter3 = document.querySelector('#filter3');
let calc = document.querySelector('#calculator');
let store = document.querySelector('#store');
let featured= document.querySelector('.featured');
let featured2= document.querySelector('#fea2');
let featured3= document.querySelector('#fea3');
let faGithub= document.querySelector('.fa-github');
let gi2= document.querySelector('#gi2');
let gi3= document.querySelector('#gi3');
let share= document.querySelector('#share');
let share2= document.querySelector('#share2');
let share3= document.querySelector('#share3');
let chevronL= document.querySelector('.chevron-left');
let chevronR= document.querySelector('.chevron-right');
let contactClass= document.querySelector('.contact');
let freelance= document.querySelector('.freelance');
let email= document.querySelector('.email');
let insta= document.querySelector('#insta');
let link= document.querySelector('#linkdin');
let githu= document.querySelector('#github9');
let image1= document.querySelector('.image1');
let myBg= document.querySelector('.image-bg');
let contimg= document.querySelector('.image-container');

menu.addEventListener('click', ()=>{
  dark.style.display = 'block';
  navbar.style.display = 'block';
  navbar.style.left = '0';
  navbar.style.animation = ' menuNav .5s';
  xMark.style.animation = ' xRotate 1s';
});

xMark.addEventListener('click', ()=>{
    dark.style.display = 'none';
  navbar.style.animation = ' xClick .5s';
  navbar.style.left = '-1000px';
  });

  toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active');
    toggle1.classList.toggle('active');
    document.body.classList.toggle('active');
    home.classList.toggle('active');
    skills.classList.toggle('active');
    about.classList.toggle('active');
    about.classList.toggle('active');
    project.classList.toggle('active');
    contact.classList.toggle('active');
    logo.classList.toggle('active');
    portfolio.classList.toggle('active');
    theme.classList.toggle('active');
    nav.classList.toggle('active');
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
    xMark.classList.toggle('active');
    homeIcon.classList.toggle('active');
    aboutIcon.classList.toggle('active');
    skillsIcon.classList.toggle('active');
    projectIcon.classList.toggle('active');
    contactIcon.classList.toggle('active');
    name.classList.toggle('active');
    developer.classList.toggle('active');
    quote.classList.toggle('active');
    info.classList.toggle('active');
    frontend.classList.toggle('active');
    aboutClass.classList.toggle('active');
    skillsClass.classList.toggle('active');
    css.classList.toggle('active');
    js.classList.toggle('active');
    react.classList.toggle('active');
    git.classList.toggle('active');
    github.classList.toggle('active');
    html.classList.toggle('active');
    rateHtml.classList.toggle('active');
    rateCss.classList.toggle('active');
    rateJs.classList.toggle('active');
    rateGit.classList.toggle('active');
    rateGithub.classList.toggle('active');
    rateReact.classList.toggle('active');
    cruds.classList.toggle('active');
    filter.classList.toggle('active');
    filter2.classList.toggle('active');
    filter3.classList.toggle('active');
    projectClass.classList.toggle('active');
    calc.classList.toggle('active');
    store.classList.toggle('active');
    featured.classList.toggle('active');
    featured2.classList.toggle('active');
    featured3.classList.toggle('active');
    faGithub.classList.toggle('active');
    gi2.classList.toggle('active');
    gi3.classList.toggle('active');
    share.classList.toggle('active');
    share2.classList.toggle('active');
    share3.classList.toggle('active');
    chevronL.classList.toggle('active');
    chevronR.classList.toggle('active');
    contactClass.classList.toggle('active');
    freelance.classList.toggle('active');
    email.classList.toggle('active');
    insta.classList.toggle('active');
    link.classList.toggle('active');
    githu.classList.toggle('active');
    myBg.classList.toggle('active');
    contimg.classList.toggle('active');
    counting.classList.toggle('active');
    document.body.classList.toggle('change');
    let result = document.body.classList.contains('active');
    if(result){
      image1.src="/images/portfolio-image2.png"
    }
    else{
      image1.src="/images/portfolio-image1.png"
    }
    if (x.matches) { 
      let result = document.body.classList.contains('active');
      if(result && bg1.style.display == 'block'){
       home.style.color = '#fda74ccc';
       about.style.color = '#f8f7f9';
       skills.style.color = ' #f8f7f9';
       project.style.color = ' #f8f7f9';
       contact.style.color = ' #f8f7f9';
      }
      else if(!result && bg1.style.display == 'block'){
       home.style.color = '#6B6E70';
       about.style.color = 'black';
       skills.style.color = 'black';
       project.style.color = 'black';
       contact.style.color = 'black';
      }
      else if(result && bg2.style.display == 'block'){
        home.style.color = '#f8f7f9';
        about.style.color = '#fda74ccc';
        skills.style.color = ' #f8f7f9';
        project.style.color = ' #f8f7f9';
        contact.style.color = ' #f8f7f9';
       }
       else if(!result && bg2.style.display == 'block'){
        home.style.color = 'black';
        about.style.color = '#6B6E70';
        skills.style.color = 'black';
        project.style.color = 'black';
        contact.style.color = 'black';
       }
       else if(result && bg3.style.display == 'flex'){
        home.style.color = '#f8f7f9';
        about.style.color = '#f8f7f9';
        skills.style.color = ' #fda74ccc';
        project.style.color = ' #f8f7f9';
        contact.style.color = ' #f8f7f9';
       }
       else if(!result && bg3.style.display == 'flex'){
        home.style.color = 'black';
        about.style.color = 'black';
        skills.style.color = '#6B6E70';
        project.style.color = 'black';
        contact.style.color = 'black';
       }
       else if(result && bg4.style.display == 'block'){
        home.style.color = '#f8f7f9';
        about.style.color = '#f8f7f9';
        skills.style.color = '#f8f7f9';
        project.style.color = ' #fda74ccc';
        contact.style.color = ' #f8f7f9';
       }
       else if(!result && bg4.style.display == 'block'){
        home.style.color = 'black';
        about.style.color = 'black';
        skills.style.color = 'black';
        project.style.color = '#6B6E70';
        contact.style.color = 'black';
       }
       else if(result && bg5.style.display == 'block'){
        home.style.color = '#f8f7f9';
        about.style.color = '#f8f7f9';
        skills.style.color = '#f8f7f9';
        project.style.color = '#f8f7f9';
        contact.style.color = '#fda74ccc';
       }
       else if(!result && bg5.style.display == 'block'){
        home.style.color = 'black';
        about.style.color = 'black';
        skills.style.color = 'black';
        project.style.color = 'black';
        contact.style.color = '#6B6E70';
       }
    }

    
    else{
      let result = document.body.classList.contains('active');
      if(result && bg1.style.display == 'block'){
       home.style.color = '#fda74ccc';
       about.style.color = '#091540';
       skills.style.color = '#091540';
       project.style.color = '#091540';
       contact.style.color = '#091540';
      }
      else if(!result && bg1.style.display == 'block'){
       home.style.color = '#6B6E70';
       about.style.color = '#86C232';
       skills.style.color = '#86C232';
       project.style.color = '#86C232';
       contact.style.color = '#86C232';
      }
      else if(result && bg2.style.display == 'block'){
        home.style.color = '#091540';
        about.style.color = '#fda74ccc';
        skills.style.color = '#091540';
        project.style.color = '#091540';
        contact.style.color = '#091540';
       }
       else if(!result && bg2.style.display == 'block'){
        home.style.color = '#86C232';
        about.style.color = '#6B6E70';
        skills.style.color = '#86C232';
        project.style.color = '#86C232';
        contact.style.color = '#86C232';
       }
       else if(result && bg3.style.display == 'flex'){
        home.style.color = '#091540';
        about.style.color = '#091540';
        skills.style.color = '#fda74ccc';
        project.style.color = '#091540';
        contact.style.color = '#091540';
       }
       else if(!result && bg3.style.display == 'flex'){
        home.style.color = '#86C232';
        about.style.color = '#86C232';
        skills.style.color = '#6B6E70';
        project.style.color = '#86C232';
        contact.style.color = '#86C232';
       }
       else if(result && bg4.style.display == 'block'){
        home.style.color = '#091540';
        about.style.color = '#091540';
        skills.style.color = '#091540';
        project.style.color = '#fda74ccc';
        contact.style.color = '#091540';
       }
       else if(!result && bg4.style.display == 'block'){
        home.style.color = '#86C232';
        about.style.color = '#86C232';
        skills.style.color = '#86C232';
        project.style.color = '#6B6E70';
        contact.style.color = '#86C232';
       }
       else if(result && bg5.style.display == 'block'){
        home.style.color = '#091540';
        about.style.color = '#091540';
        skills.style.color = '#091540';
        project.style.color = '#091540';
        contact.style.color = '#fda74ccc';
       }
       else if(!result && bg5.style.display == 'block'){
        home.style.color = '#86C232';
        about.style.color = '#86C232';
        skills.style.color = '#86C232';
        project.style.color = '#86C232';
        contact.style.color = '#6B6E70';
       }
    }
  });


  
 function myFunction(x) {
    if (x.matches) { 
        about.addEventListener('click', ()=>{
          let result = document.body.classList.contains('active');
           if(result){
            bg1.style.display = 'none';
            bg2.style.display = 'block';
            bg3.style.display = 'none';
            bg4.style.display = 'none';
            bg5.style.display = 'none';
            about.style.color = '#fda74ccc';
            home.style.color = ' #f8f7f9';
            skills.style.color = ' #f8f7f9';
            project.style.color = ' #f8f7f9';
            contact.style.color = ' #f8f7f9';
            dark.style.display = 'none';
            navbar.style.display = 'none';
            counting.innerHTML = '2/5';
          }
           else {
            bg1.style.display = 'none';
            bg2.style.display = 'block';
            bg3.style.display = 'none';
            bg4.style.display = 'none';
            bg5.style.display = 'none';
            about.style.color = '#6B6E70';
            home.style.color = 'black';
            skills.style.color = 'black';
            project.style.color = 'black';
            contact.style.color = 'black';
            dark.style.display = 'none';
            navbar.style.display = 'none';
            counting.innerHTML = '2/5';
          }
          
        
         });
       
         home.addEventListener('click', ()=>{
          let result = document.body.classList.contains('active');
          if(result){
            bg1.style.display = 'block';
            bg2.style.display = 'none';
            bg3.style.display = 'none';
            bg4.style.display = 'none';
            bg5.style.display = 'none';
            home.style.color = '#fda74ccc';
            about.style.color = ' #f8f7f9';
            skills.style.color = ' #f8f7f9';
            project.style.color = ' #f8f7f9';
            contact.style.color = ' #f8f7f9';
            dark.style.display = 'none';
            navbar.style.display = 'none';
            counting.innerHTML = '1/5';
          }
          else{
           bg1.style.display = 'block';
           bg2.style.display = 'none';
           bg3.style.display = 'none';
           bg4.style.display = 'none';
           bg5.style.display = 'none';
           home.style.color = '#6B6E70';
           about.style.color = 'black';
           skills.style.color = 'black';
           project.style.color = 'black';
           contact.style.color = 'black';
           dark.style.display = 'none';
           navbar.style.display = 'none';
           counting.innerHTML = '1/5';
          }
        });

        skills.addEventListener('click', ()=>{
          let result = document.body.classList.contains('active');
          if(result){
            bg1.style.display = 'none';
            bg2.style.display = 'none';
            bg3.style.display = 'flex';
            bg4.style.display = 'none';
            bg5.style.display = 'none';
            skills.style.color = '#fda74ccc';
            about.style.color = '#f8f7f9';
            home.style.color = '#f8f7f9';
            project.style.color = '#f8f7f9';
            contact.style.color = '#f8f7f9';
            dark.style.display = 'none';
            navbar.style.display = 'none';
            counting.innerHTML = '3/5';
          }
          else{
          bg1.style.display = 'none';
          bg2.style.display = 'none';
          bg3.style.display = 'flex';
          bg4.style.display = 'none';
          bg5.style.display = 'none';
          skills.style.color = '#6B6E70';
          about.style.color = 'black';
          home.style.color = 'black';
          project.style.color = 'black';
          contact.style.color = 'black';
          dark.style.display = 'none';
          navbar.style.display = 'none';
          counting.innerHTML = '3/5';
          }
          
       });

        project.addEventListener('click', ()=>{
          let result = document.body.classList.contains('active');
          if(result){
            bg1.style.display = 'none';
            bg2.style.display = 'none';
            bg3.style.display = 'none';
            bg4.style.display = 'block';
            bg5.style.display = 'none';
            project.style.color = '#fda74ccc';
            about.style.color = '#f8f7f9';
            home.style.color = '#f8f7f9';
            skills.style.color = '#f8f7f9';
            contact.style.color = '#f8f7f9';
            dark.style.display = 'none';
            navbar.style.display = 'none';
            counting.innerHTML = '4/5';
          }
          else{
        bg1.style.display = 'none';
        bg2.style.display = 'none';
        bg3.style.display = 'none';
        bg4.style.display = 'block';
        bg5.style.display = 'none';
        project.style.color = '#6B6E70';
        about.style.color = 'black';
        home.style.color = 'black';
        skills.style.color = 'black';
        contact.style.color = 'black';
        dark.style.display = 'none';
        navbar.style.display = 'none';
        counting.innerHTML = '4/5';
          }

         });
         contact.addEventListener('click', ()=>{
          let result = document.body.classList.contains('active');
          if(result){
          bg1.style.display = 'none';
          bg2.style.display = 'none';
          bg3.style.display = 'none';
          bg4.style.display = 'none';
          bg5.style.display = 'block';
          project.style.color = '#f8f7f9';
          about.style.color = '#f8f7f9';
          home.style.color = '#f8f7f9';
          skills.style.color = '#f8f7f9';
          contact.style.color = '#fda74ccc';
          dark.style.display = 'none';
          navbar.style.display = 'none';
          counting.innerHTML = '5/5';
          }
          else{
          bg1.style.display = 'none';
          bg2.style.display = 'none';
          bg3.style.display = 'none';
          bg4.style.display = 'none';
          bg5.style.display = 'block';
          project.style.color = 'black';
          about.style.color = 'black';
          home.style.color = 'black';
          skills.style.color = 'black';
          contact.style.color = '#6B6E70';
          dark.style.display = 'none';
          navbar.style.display = 'none';
          counting.innerHTML = '5/5';
          }
  
           });
        }


         else {
            about.addEventListener('click', ()=>{
          let result = document.body.classList.contains('active');
          if(result){
            bg1.style.display = 'none';
            bg2.style.display = 'block';
            bg3.style.display = 'none';
            bg4.style.display = 'none';
            bg5.style.display = 'none';
            about.style.color = '#fda74ccc';
            home.style.color = '#091540';
            skills.style.color = '#091540';
            project.style.color = '#091540';
            contact.style.color = '#091540';
            counting.innerHTML = '2/5';
          }
                else{
                bg1.style.display = 'none';
                bg2.style.display = 'block';
                bg3.style.display = 'none';
                bg4.style.display = 'none';
                bg5.style.display = 'none';
                about.style.color = '#6B6E70';
                home.style.color = '#86C232';
                skills.style.color = '#86C232';
                project.style.color = '#86C232';
                contact.style.color = '#86C232';
                counting.innerHTML = '2/5';
                }

             });
           
             home.addEventListener('click', ()=>{
          let result = document.body.classList.contains('active');
              if(result){
                bg1.style.display = 'block';
                bg2.style.display = 'none';
                bg3.style.display = 'none';
               bg4.style.display = 'none';
               bg5.style.display = 'none';
                home.style.color = '#fda74ccc';
                about.style.color = '#091540';
                skills.style.color = '#091540';
                project.style.color = '#091540';
                contact.style.color = '#091540';
                counting.innerHTML = '1/5';
              }
              else{
               bg1.style.display = 'block';
               bg2.style.display = 'none';
               bg3.style.display = 'none';
              bg4.style.display = 'none';
              bg5.style.display = 'none';
               home.style.color = '#6B6E70';
               about.style.color = '#86C232';
               skills.style.color = '#86C232';
               project.style.color = '#86C232';
               contact.style.color = '#86C232';
               counting.innerHTML = '1/5';
              }
            });

            skills.addEventListener('click', ()=>{
          let result = document.body.classList.contains('active');
          if(result){
            bg1.style.display = 'none';
            bg2.style.display = 'none';
            bg4.style.display = 'none';
            bg3.style.display = 'flex';
            bg5.style.display = 'none';
            skills.style.color = '#fda74ccc';
            about.style.color = '#091540';
            home.style.color = '#091540';
            project.style.color = '#091540';
            contact.style.color = '#091540';
            counting.innerHTML = '3/5';
          }
              else{
              bg1.style.display = 'none';
              bg2.style.display = 'none';
              bg4.style.display = 'none';
              bg3.style.display = 'flex';
              bg5.style.display = 'none';
              skills.style.color = '#6B6E70';
              about.style.color = '#86C232';
              home.style.color = '#86C232';
              project.style.color = '#86C232';
              contact.style.color = '#86C232';
              counting.innerHTML = '3/5';
              }
            });

            project.addEventListener('click', ()=>{
          let result = document.body.classList.contains('active');
          if(result){
            bg1.style.display = 'none';
            bg2.style.display = 'none';
            bg3.style.display = 'none';
            bg4.style.display = 'block';
            bg5.style.display = 'none';
            project.style.color = '#fda74ccc';
            about.style.color = '#091540';
            home.style.color = '#091540';
            skills.style.color = '#091540';
            contact.style.color = '#091540';
            counting.innerHTML = '4/5';
          }
          else{
              bg1.style.display = 'none';
              bg2.style.display = 'none';
              bg3.style.display = 'none';
              bg4.style.display = 'block';
              bg5.style.display = 'none';
              project.style.color = '#6B6E70';
              about.style.color = '#86C232';
              home.style.color = '#86C232';
              skills.style.color = '#86C232';
              contact.style.color = '#86C232';
              counting.innerHTML = '4/5';
          }
            });
            contact.addEventListener('click', ()=>{
          let result = document.body.classList.contains('active');
          if(result){
            bg1.style.display = 'none';
            bg2.style.display = 'none';
            bg3.style.display = 'none';
            bg5.style.display = 'block';
            bg4.style.display = 'none';
            contact.style.color = '#fda74ccc';
            about.style.color = '#091540';
            home.style.color = '#091540';
            skills.style.color = '#091540';
            project.style.color = '#091540';
            counting.innerHTML = '5/5';
          }
             else{
              bg1.style.display = 'none';
              bg2.style.display = 'none';
              bg3.style.display = 'none';
              bg5.style.display = 'block';
              bg4.style.display = 'none';
              contact.style.color = '#6B6E70';
              about.style.color = '#86C232';
              home.style.color = '#86C232';
              skills.style.color = '#86C232';
              project.style.color = '#86C232';
              counting.innerHTML = '5/5';
             }
            });
 
  }
}
  var x = window.matchMedia("(max-width: 942px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)

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
