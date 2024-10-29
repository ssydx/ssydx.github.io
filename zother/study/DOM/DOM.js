function func() {
    document.getElementById('doca').innerHTML = document.baseURI;
    document.getElementById('docb').innerHTML = document.URL;
    document.getElementById('docc').innerHTML = document.title;
    document.getElementById('docd').appendChild(document.createComment('456'));
    document.getElementById('doce').appendChild(document.createTextNode('456'));
    document.getElementById('docf').innerHTML = document.doctype.nodeName;
    document.getElementById('docg').innerHTML = document.body.nodeName;
    document.getElementById('doch').innerHTML = document.documentElement.nodeName;
    document.getElementById('doci').innerHTML = document.head.nodeName;
    document.getElementById('docj').innerHTML = document.getElementById('id1').attributes;
    var attrs = document.getElementById('id1').attributes;
    console.log(attrs);
    var childs = document.getElementById('id1').children;
    console.log(childs);
    var childn = document.getElementById('id1').childNodes;
    console.log(childn);
    var classs = document.getElementById('id1').classList;
    console.log(classs);
    console.log(document.getElementById('id1').className);
    console.log(document.getElementById('id1').innerHTML);
    console.log(document.getElementById('id1').innerText);
    console.log(document.getElementById('id1').textContent);
    console.log(document.getElementById('id1').nodeName);
    console.log(document.getElementById('id1').nodeType);
    console.log(document.getElementById('id1').nodeValue);
    console.log(document.getElementById('id1').ownerDocument);
}


