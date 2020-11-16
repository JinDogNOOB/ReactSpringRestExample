import qs from 'querystring';

const serverAddr = "127.0.0.1"
const serverPort = "8080"
const serverUrl = "http://" + serverAddr + ":" + serverPort;

const CONTENT_TYPE_APP_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8';
const CONTENT_TYPE_APP_JSON = 'application/json;charset=UTF-8';
const genGetOptions = (path, arg) => {
    const options = {
        method: 'get',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': CONTENT_TYPE_APP_URLENCODED
        },
        params: arg 
    }
    return options;
}

const genPostOptions = (path, arg) => {
    const options = {
        method: 'post',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': CONTENT_TYPE_APP_URLENCODED
        },
        data : qs.stringify(arg)
    }
    return options;
}

const genPutOptions = (path, arg) => {
    const options = {
        method: 'PUT',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': CONTENT_TYPE_APP_URLENCODED
        },
        data: qs.stringify(arg)
    }
    return options;
}

const genDeleteOptions = (path, arg) => {
    const options = {
        method: 'DELETE',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': CONTENT_TYPE_APP_URLENCODED
        },
        data: qs.stringify(arg)
    }
    return options;
}

let axiosOptions = {};
axiosOptions.get = genGetOptions;
axiosOptions.post = genPostOptions;
axiosOptions.put = genPutOptions;
axiosOptions.delete = genDeleteOptions;

export default axiosOptions;