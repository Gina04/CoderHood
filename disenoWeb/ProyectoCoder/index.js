const button = document.getElementById('buy-now');

button.addEventListener('click', ()=>{
    if(button.innerHTML == 'Comprar ahora'){
        button.innerHTML = 'Gracias por su compra'
    }else{
        button.innerHTML = "Comprar ahora"
    }
    
})

const cards = document.querySelectorAll('.card')

for(let i = 0; i<cards.length; i++){
    const card = cards[i]
    const indexElement = document.createElement('p')

    indexElement.innerHTML = i + 1

    card.appendChild(indexElement)

    card.addEventListener('click', ()=>{
        card.remove()
    })
}

const cardsContainer = document.getElementsByClassName('catalogue-container')[0]
const addBtn= document.getElementById('add-clothing')

console.log(addBtn)

addBtn.addEventListener('click', ()=>{
    const card = document.createElement('div')
    card.classList.add('card')

    cardsContainer.appendChild(card)

})