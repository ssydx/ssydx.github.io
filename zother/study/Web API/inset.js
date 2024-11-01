function insertHTML(html) {
    document.getElementById('text').innerHTML = html;
}

function load() {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
        if (xml.readyState == 4 && xml.status == 200) {
                console.log(xml.readyState);
                console.log(xml.status);
                console.log(this);
                insertHTML(this.responseText);
            }
        else {
            console.log(xml.readyState)
        }
    };
    xml.open('GET', './123.html', true); // 使用 GET 方法
    xml.send();
}
load();
document.querySelectorAll('p').forEach(element => {
    element.style.color ='red';
})


