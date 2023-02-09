import './fetching'
import './randomFetch'
import axios, { AxiosResponse } from 'axios'

axios?.interceptors?.response?.use((response: AxiosResponse) => {
    if(response?.status === 200) {
        console.log('success')
    }
    return response;
})