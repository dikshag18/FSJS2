let btn = document.getElementById('button');

const randomColour = () => {
    let val = '0123456789ABCDEF';
    let cons = '#';
    for(let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;

};

console.log(randomColour());

function changerandomColour(){
    document.body.style.backgroundColor = randomColour();

}

btn.addEventListener('click', changerandomColour);
