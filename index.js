
const btns = document.querySelectorAll('.tab__button');
const contents = document.querySelectorAll('.content');
const currentImage = document.querySelector('.current');
const about = document.querySelector(".about");
    
about.addEventListener('click', e =>{
    const id = e.target.dataset.id;
    console.log(id);
    if(id){
     
        btns.forEach(function (btn){
        btn.classList.remove('active');
        e.target.classList.add('active');
        
        })
        contents.forEach(function (content){
            content.classList.remove('active');
            
        })
        const element = document.getElementById(id);
        element.classList.add('active');
        
            currentImage.style.opacity = 0;
     
       
        currentImage.setAttribute('src',id + '.jpg');
        setTimeout(function () {
            currentImage.style.opacity = 0.1;
            
        }, 10 );
        setTimeout(function () {
            currentImage.style.opacity = 0.4;
            
        }, 50 );
        setTimeout(function () {
            currentImage.style.opacity = 0.6;
            
        }, 100 );
        setTimeout(function () {
            currentImage.style.opacity = 1;
            
        }, 150 );
        
       

    }
});
