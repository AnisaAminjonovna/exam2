let elList = document.querySelector(".card__wrapper")
let elTemplate = document.querySelector(".template").content


function renderArr(arr, list){
    arr.map(item => {
        let cloneTemplate = elTemplate.cloneNode(true)

        let cardTitle = cloneTemplate.querySelector(".card__title")
        let cardImg = cloneTemplate.querySelector(".card__img")
        let cardInfo = cloneTemplate.querySelector(".card__info")

        cardTitle.textContent = item.title
        cardImg.src = item.image
        cardInfo.textContent = item.price

        
        list.appendChild(cloneTemplate)
    })
}

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => renderArr(data, elList))
