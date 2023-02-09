
let article__wrapper = document.getElementById('article__wrapper')
import axios from 'axios'

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

(async () => {
    let res = [];
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    if(response) {
        for (let i = 0; i < 4; i++) {
            let { data } = await axios.get(`https://rickandmortyapi.com/api/character/${getRandomInt(response.data.info.count)}`);
            res.push(data);
        }
        createBlocks(res);
    }
})()

const createBlocks = (arr) => {
    arr.forEach((item) => {
        const newBlock = document.createElement('div');
        newBlock.className = 'article';
        article__wrapper.appendChild(newBlock);
        const { name, gender, species, status, image } = item;
        return newBlock.innerHTML = `
            Name: ${name} </br>
            Gender: ${gender} </br>
            Species: ${species} </br>
            Status: ${status} </br>
            <img src=${image} alt="альтернативный текст" class='img'/>
            `;
    })
}
