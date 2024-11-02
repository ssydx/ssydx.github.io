const text = document.querySelector('.text');
const select = document.querySelector('.select');
const num = document.querySelector('.number');
const formtext = document.querySelector('.formtext');
const button2 = document.querySelector('.button2');

formtext.addEventListener('submit', addname);
button2.addEventListener('click', addage);


// 数据库
let db;
// 响应

// 打开数据库
const dbres = indexedDB.open('ssydx_db', 1);
// 更新结构时（打开版本号>当前版本号）触发
dbres.addEventListener('upgradeneeded', event => {
    const tb = event.target.result.createObjectStore('ssydx_tb1', {keyPath:'id',autoIncrement:true});
    tb.createIndex('name', 'name', {unique:true});
    tb.createIndex('age', 'age', {unique:false});
    tb.createIndex('sex', 'sex', {unique:false});
    console.log('数据库更新完成');
});
// 打开失败时触发
dbres.addEventListener('error', event => console.log(event.target.error));
// 打开成功时触发
dbres.addEventListener('success', event => {
    console.log('数据库成功打开');
    // 获取数据库
    db = event.target.result;
    // 刷新下拉列表
    display();
});

// 插入新名称
function addname(event) {
    // 阻止表单默认的提交：默认会提交到指定网址
    event.preventDefault();
    // 如果有内容
    if (text.value) {
        // 获取数据表
        const tb = db.transaction(['ssydx_tb1'],'readwrite').objectStore('ssydx_tb1');
        const newItem = {name:text.value,age:20};
        // 插入新名称
        const addrcdres = tb.add(newItem);
        // 插入成功时触发
        addrcdres.addEventListener('success',() => {
            console.log('新名称插入成功');
            // 刷新下拉列表
            display();
        })
        // 插入失败时触发
        addrcdres.addEventListener('error', event => console.log(event.target.error));
        // 清空文本框并重新获得焦点
        text.value = '';
        text.focus();
    } else {
        // 直接返回
        return;
    }
}

function addage() {
    // 如果选择了姓名并指定了年龄
    if (select.value && num.value) {
        // 获取数据表
        const tb = dbres.result.transaction(['ssydx_tb1'],'readwrite').objectStore('ssydx_tb1');
        // 编号和年龄
        const age = Number(num.value);
        const id = Number(select.value);
        // 获取指定主键记录
        const getrcdres = tb.get(id);
        // 获取成功时触发
        getrcdres.addEventListener('success', event => {
            console.log('获取指定记录成功');
            // 获取指定记录
            const rcd = event.target.result;
            // 修改年龄
            rcd.age = age;
            // 插回记录
            const putrcdres = tb.put(rcd);
            // 插回成功时触发
            putrcdres.addEventListener('success',() => console.log('年龄修改成功'));
            // 插回失败时触发
            putrcdres.addEventListener('error', (event) => console.log(event.target.error));
        });
        // 获取失败时触发
        getrcdres.addEventListener('error', event => console.log(event.target.error));
        // 清空当前选择及数字框并获得焦点
        select.value = '';
        num.value='';
        select.focus();
    } else {
        // 直接返回
        return;
    }
}

function display() {
    // 清空原下拉列表
    while (select.firstElementChild.nextElementSibling) {
        select.removeChild(select.lastElementChild);
    }
    console.log('原下拉列表已清理');
    // 获取数据表
    const tb = db.transaction(['ssydx_tb1'],'readwrite').objectStore('ssydx_tb1');
    // 获取游标
    const curres = tb.openCursor();
    // 获取游标成功时触发
    curres.addEventListener('success', event => {
        // 获取指针
        const cur = event.target.result;
        if (cur) {
            // 新建列表选项
            const opt = document.createElement('option');
            select.appendChild(opt);
            // 获取指针的数据
            opt.value = cur.value.id;
            opt.textContent = cur.value.name;
            // 迭代到下一行并自动触发其success
            cur.continue();
        } else {
            console.log('新下拉列表已就位');
        }
    })
    curres.addEventListener('error', event => console.log(event.target.error));
}
