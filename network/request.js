import axios from 'axios'

export function request(config){
    //create axios instance:
    const instance= axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    return instance(config)
}


const value='the value is from request.js'

export function call_back(message,back){
    console.log(message);
    back(value);
}