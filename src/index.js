import './styles/index.scss'
import './script/animationSetInterval'
import './script/animationFrame'
import './script/fetching'
import './script/randomFetching'

import axios from 'axios'

axios.interceptors.response.use((response) => {
    if(response.status === 200) {
        console.log('success')
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});

/*
import './script/addedElem'
import './script/bigFunc'
import './script/worker'
import './script/app'
*/
