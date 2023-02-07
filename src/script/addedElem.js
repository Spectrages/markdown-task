let input = document.getElementById("findInput");
let result = document.getElementById('result');
let list = document.getElementById('myList');

let arr = [];
for (var i = 1; i <= 100000; i++) {
    arr.push(i.toString());
}

let testArr = new Array(10);
testArr.fill({'key':"Key", "value":"Value"})

input.addEventListener('keyup', (event) => {
    let resultArray = []
    list.innerHTML = ''
    if (event.target.value !== '') {
        let reg = new RegExp(`(${event.target.value})\w*`)

        //regexp
        //resultArray = arr.filter(item => item.match(reg)).slice(0, 10);

        //standart
        //resultArray = arr.filter(item => item.includes(event.target.value)).slice(0, 10);


        resultArray.forEach((item) => {
            let elem = document.createElement('li')
            elem.className = 'flowElem';
            list.appendChild(elem)
            elem.innerHTML = item;
        })
    }
})

/*
input.addEventListener('keyup', (event) => {
    let resultArray = []
    list.innerHTML = ''
    if (event.target.value !== '') {
        resultArray = testArr.filter(item => {
            for(const [key, value] of Object.entries(item)) {
                console.log(key, value)
            }
        })
    }
})

*/