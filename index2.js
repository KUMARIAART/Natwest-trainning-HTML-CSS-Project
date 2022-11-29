const displayData=(data)=>{
    container.innerHTML=""
    data.map((item,index)=>{
        container.innerHTML+=`<div>
        <h1>${item.title}</h1>
        <img src=${item.image} />
        <p>${item.description}</p>
        <button>$${item.price}</button>
        <button>Rating - ${item.rating.rate}</button>
        </div>`

    })
}
const callApi =async ()=>{
    const response =await fetch(`https://fakestoreapi.com/products`)
    const data =await response.json()
    console.log(data)
    displayData(data)
    
}
callApi()
const container = document.querySelector('.container')
