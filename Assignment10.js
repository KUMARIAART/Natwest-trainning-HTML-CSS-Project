const name = document.querySelector('.name');
const gender = document.querySelector('.gender');
const age = document.querySelector('.age');
const campus = document.querySelector('.campus');
const tableBody= document.querySelector('.tableBody')
let allData = [
    {
        name: 'Maria',
        gender: 'female',
        age:"18",
        campus: "Chicago"
    },{
        name:"Sharpova",
        gender:"female",
        age:"18",
        campus:"Pune"
    },{
        name:"Sh",
        gender:"male",
        age:"18",
        campus:"Pune"
    }
    
];
function editName(index){
   let editedText =  prompt("Enter something")
   allData[index].name =editedText
   displayData()
}
function deleteRow(index){
    allData.splice(index,1);
    displayData()
}
//arr=[a,b,c]==> [...arr,d] ==>[a,b,c,d]
function displayData(){
    tableBody.innerHTML="";
    allData.map((item,index)=>{
        tableBody.innerHTML+=`
        <tr>
        <td>${item.name} <button onclick="editName(${index})">edit</button> </td>
        <td>${item.gender}</td>        
        <td>${item.age}</td>
       <td>${item.campus}</td>
       <td> <button onclick="deleteRow(${index})">Delete </button> </td>

        </tr>
        `
    })

}
function storeData(){
    allData = [...allData,
        {
            "name": name.value,
            "gender": gender.value,
            "age": age.value,
            "campus": campus.value
        }
    ];
   
    displayData()
}

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', storeData)
displayData()
