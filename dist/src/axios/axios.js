import axios from 'axios';

// var hostname = '192.168.1.17';
var hostname = window.location.hostname;
const instance = axios.create({
    baseURL: 'http://'+ hostname +':3000'
});
// instance.defaults.headers.common['SOMETHING'] = 'something-axios-auth'
export default instance