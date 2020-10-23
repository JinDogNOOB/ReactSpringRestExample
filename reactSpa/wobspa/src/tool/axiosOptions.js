const serverAddr = "127.0.0.1"
const serverPort = "8080"
const serverUrl = "http://" + serverAddr + ":" + serverPort;

const genGetOptions = (path, arg) => {
    const options = {
        method: 'GET',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'x-www-form-urlencoded;charset=UTF-8'
        },
        params: arg 
    }
    return options;
}

const genPostOptions = (path, arg) => {
    const options = {
        method: 'POST',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: arg 
    }
    return options;
}

const genPutOptions = (path, arg) => {
    const options = {
        method: 'PUT',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: arg 
    }
    return options;
}

const genDeleteOptions = (path, arg) => {
    const options = {
        method: 'DELETE',
        url: serverUrl+path,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: arg 
    }
    return options;
}

let axiosOptions = {};
axiosOptions.get = genGetOptions;
axiosOptions.post = genPostOptions;
axiosOptions.put = genPutOptions;
axiosOptions.delete = genDeleteOptions;

export default axiosOptions;