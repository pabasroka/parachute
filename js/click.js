const click = document.querySelector('.rodoClick');
const info = document.querySelector('.rodoInfo');
info.hidden = true;

click.addEventListener('click', function () {

    if (info.hidden == true){
        info.hidden = false;
    } 

    else if (info.hidden == false) {
        info.hidden = true;
    } 
    
});


