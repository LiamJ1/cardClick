const cardList = document.querySelector('.cardList');
let counter = 0;
const score = document.querySelector('.score');
const image = document.getElementById('image');
buildBoard();
let interval = setInterval(function(){
    addCard(cardList.children.length + 1) // make it start at 1 not at 0
}, 2000);
cardList.addEventListener('click', function(e){
    console.log(e.target);
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        counter++;
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        score.textContent = `Score: ${counter}`;
        return
    }
    if (e.target.classList.contains('inactive')){
        counter=counter+2;
    }
    e.target.remove();
    let children = cardList.children;
    if (children.length < 1) {
        clearInterval(interval);
        if (counter >= 50){
            let img = document.createElement('img');
            img.src="https://www.bing.com/th?id=OIP.Fe3Z9pkbdj6Y9YrLZ87UFwHaFj&w=176&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
            image.appendChild(img);
        }
        else{
            let img = document.createElement('img');
            img.src="https://www.bing.com/th?id=OIP.IE8ZUbO5J2k0jZUXL6oytwHaFM&w=157&h=200&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
            image.appendChild(img);
        }
    }
    score.textContent = `Score: ${counter}`;
});
function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}
function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter')
    }
}