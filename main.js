let share = document.getElementById('share');
let card = document.getElementById('card');
let closed = document.getElementById('closed');


share.onclick = function(){
    card.style.display = 'block'
    share.style.display = 'none'
    closed.style.display= 'block'
    closed.onclick =()=>{
        share.style.display = 'block'
        card.style.display = 'none'
        closed.style.display= 'none'
        
    }
    

}