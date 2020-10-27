function HttpClient(data, method, url, otherExpectedCode){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === otherExpectedCode) {
                    resolve(xhr.responseText);
                } else reject(xhr.responseText);
            }
        }
        xhr.send(data);
    })
}

export default HttpClient