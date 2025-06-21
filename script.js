

const input = document.getElementById('todo')
const date = document.getElementById('date')
let index = 0;
let index1 = 0;
document.getElementById('add').addEventListener('click', () => {
    document.getElementById('inputModal').style = `display: flex;`
})

let arr = [];

document.getElementById('inputModalContent').addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})
function addTodo() {

    arr.push(`
    <div>
    <label for="">${input.value}</label>
    <label for="">${date.value}</label>
    <button onclick="del(${index++})">DELETE</button>
    </div>
   
    `)

    document.getElementById('todolistContent').innerHTML += arr[index1++];
    document.getElementById('inputModal').style = `display: none;`
    console.log(arr)

}


function del(num) {
    newNum = parseInt(num)
    arr[newNum] = '';
    console.log(arr)
    document.getElementById('todolistContent').innerHTML = arr.join('');
}