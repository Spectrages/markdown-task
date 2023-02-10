const article__wrapper = document.getElementById('article__wrapper');
import axios, { AxiosResponse } from 'axios'

interface IPers {
    name: string,
    gender: string, 
    species: string, 
    status: string, 
    image: string
}
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const createBlocks = (item: IPers) => {
    const newBlock: HTMLElement | null = document?.createElement('div');
    newBlock.className = 'article';
    article__wrapper?.appendChild(newBlock);
    const { name, gender, species, status, image } = item;
    return newBlock.innerHTML = `
        Name: ${name} </br>
        Gender: ${gender} </br>
        Species: ${species} </br>
        Status: ${status} </br>
        <img src=${image} alt="альтернативный текст" class='img'/>
        `;
}

(async () => {
    let res = [];
    const response: AxiosResponse = await axios.get('https://rickandmortyapi.com/api/character')
    if (response) {
        for (let i = 0; i < 4; i++) {
            let { data } = await axios.get(`https://rickandmortyapi.com/api/character/${getRandomInt(response.data.info.count)}`);
            res.push(data);
        }
        res.forEach((item: IPers) => createBlocks(item));
    }
})();