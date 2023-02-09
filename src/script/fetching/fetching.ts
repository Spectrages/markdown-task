import axios, { AxiosResponse } from 'axios';

interface IPers {
    name: string,
    gender: string, 
    species: string, 
    status: string, 
    image: string
}

interface HTMLEvent extends Event {
    target: HTMLElement;
  }

(async () => {
    let arr: Array<IPers> = [];
    const input:HTMLElement | null = document.getElementById("findInput");
    const list: HTMLElement | null = document.getElementById('myList');
    const article_pers: HTMLElement | null = document.getElementById('pers');

    const res: AxiosResponse = await axios.get(`https://rickandmortyapi.com/api/character`)
    for (let i = 1; i <= res.data.info.pages; i++) {
        let response: AxiosResponse = await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`)
        arr.push(response.data.results)
    }
    let resArr = arr.flat();
    findAndUpdate(resArr, input, list, article_pers);
})()

const findAndUpdate = (persons: IPers[], input: HTMLElement, list: HTMLElement, article_pers: HTMLElement) => {
    input.addEventListener('keyup', (event: KeyboardEvent) => {
        let resultArray: Array<object> = [];
        list.innerHTML = '';
        let elem: HTMLElement;
        if (event.key !== '') {
            const reg: RegExp = new RegExp(`(${event.key})\w*`, 'gui');
            resultArray = persons.filter(item => item.name.match(reg)).slice(0, 10);
            resultArray.forEach((item: IPers) => createLi(item, elem, resultArray, list, article_pers))
        }
    })
}

const createLi = (item: IPers, elem: HTMLElement, resultArray: any[], list: HTMLElement, article_pers: HTMLElement) => {
    elem = document.createElement('li');
    elem.className = 'flowElem';
    list.appendChild(elem);
    elem.innerHTML = item.name;
    elem.addEventListener('click', (event: HTMLEvent) => {
        article_pers.innerHTML = '';
        const name: string = event.target.textContent;
        const newBlock: HTMLDivElement = document.createElement('div');
        newBlock.className = 'article_pers';
        article_pers.appendChild(newBlock);
        resultArray.forEach(item => item.name === name ? createBlock(item, newBlock) : null)
    })
}

const createBlock = (item: IPers, block: HTMLElement) => {
    const { name, gender, species, status, image } = item;
    block.innerHTML = `
        Name: ${name} </br>
        Gender: ${gender} </br>
        Species: ${species} </br>
        Status: ${status} </br>
        <img src=${image} alt="альтернативный текст" class='img'/>
        `;
}