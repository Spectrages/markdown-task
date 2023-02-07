let input = document.getElementById("findInput");
let result = document.getElementById('result');
let list = document.getElementById('myList');

let arr = [];
for (var i = 1; i <= 1000000; i++) {
    arr.push(i.toString());
}

let testArr = new Array(100000);
testArr.fill({'key':"Key", "value":"Value"})


input.addEventListener('keyup', (event) => {
    let resultArray = []
    list.innerHTML = ''
    if (event.target.value !== '') {
        resultArray = arr.filter(item => item.includes(event.target.value)).slice(0, 10);
        resultArray.forEach((item) => {
            let elem = document.createElement('li')
            elem.className = 'flowElem';
            list.appendChild(elem)
            elem.innerHTML = item;
        })
    }
})