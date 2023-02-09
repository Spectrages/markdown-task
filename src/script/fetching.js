

let input = document.getElementById("findInput");
let list = document.getElementById('myList');
let article_pers = document.getElementById('pers')
import axios from 'axios'

(async () => {
    let arr = [];
    const res = await axios.get(`https://rickandmortyapi.com/api/character`)
    const pages = res.data.info.pages
    for (let i = 1; i <= pages; i++) {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`)
        arr.push(response.data.results)
    }
    let resArr = arr.flat();
    findAndUpdate(resArr);
})()

const findAndUpdate = (persons) => {
    input.addEventListener('keyup', (event) => {
        let resultArray = []
        list.innerHTML = ''
        let elem;
        if (event.target.value !== '') {
            let reg = new RegExp(`(${event.target.value})\w*`, 'gui');

            resultArray = persons.filter(item => item.name.match(reg)).slice(0, 10);

            resultArray.forEach((item) => {
                elem = document.createElement('li')
                elem.className = 'flowElem';
                list.appendChild(elem);
                elem.innerHTML = item.name;

                elem.addEventListener('click', (event) => {
                    article_pers.innerHTML = ''
                    let name = event.target.textContent;
                    let newBlock = document.createElement('div');
                    newBlock.className = 'article_pers';
                    article_pers.appendChild(newBlock);
                    resultArray.forEach(item => {
                        if(item.name === name) {
                            let {name, gender, species, status, image} = item;
                            newBlock.innerHTML = `
                            Name: ${name} </br>
                            Gender: ${gender} </br>
                            Species: ${species} </br>
                            Status: ${status} </br>
                            <img src=${image} alt="альтернативный текст" class='img'/>
                            `;
                        }
                    })
                    
                })
            })
        }
    })
}   
