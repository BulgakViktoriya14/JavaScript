module.exports = (method, url, body) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open(method, url);
    if (method.toLowerCase() === 'post') xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);
    return xhr;
}