function changetext() {
    const name = prompt('请输入名字');
    document.getElementById('a').innerHTML = name;
}
const h1 = document.querySelector('h1');
h1.addEventListener('click',() => {
    h1.innerHTML = 'js练习'
})
const input = document.getElementById('b');
input.addEventListener('invalid',() => {
    alert('123');
})

const txt = document.getElementById('c');
txt.addEventListener('copy',() => {
    alert('123');
})
txt.addEventListener('dblclick',() => {
    alert('dbclick');
})

const txt1 = document.getElementById('d');
txt1.addEventListener('mouseenter',() => {
    txt1.style.color = 'red';
})
txt1.addEventListener('mouseleave',(event) => {
    txt1.style.color = '';
})

const mouse = document.getElementById('e');
mouse.addEventListener('mouseover',(event) => {
    const newNode = document.createElement('div');
    document.querySelector('body').appendChild(newNode);
    newNode.style.border = 'solid';
    newNode.id = 'new';
    newNode.innerHTML = '水平坐标' + event.clientX + '，垂直坐标' + event.clientY;
    console.log(newNode.innerHTML);
    newNode.style.position = 'absolute';
    newNode.style.top = event.clientY + 'px';
    newNode.style.left = event.clientX + 'px';
})
mouse.addEventListener('mouseout',() => {
    document.getElementById('new').remove();   
})