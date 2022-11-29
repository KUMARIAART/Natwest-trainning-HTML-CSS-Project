const container = document.querySelector('.container');
const getCorrect=(option)=>{
    const op = document.getElementById(`${option}`)
    op.className="resultAnimation"
    op.style.backgroundColor="green"
}
const getWrong=(option)=>{
    const op = document.getElementById(`${option}`)
    op.className="resultAnimation1"
    op.style.backgroundColor="red"
} 

container.innerHTML+='<h1>who is prime minister of India?</h1>'

container.innerHTML+=
`<button onclick=getWrong("option1") id=option1>Rahul Gandhi</button> <br>
<button onclick=getCorrect("option2") id="option2">Narendra Modi</button> <br>
<button onclick=getWrong("option3") id="option3">Aravind Kejriwal</button> <br>
 <button onclick=getWrong("option4") id="option4">Yogi Adityanath</button>
`
