document.addEventListener(
    'DOMContentLoaded',
    function() {
        const nav_left = document.querySelector('.nav-left');
        const navLeft_newNode = document.createElement('img');
        navLeft_newNode.setAttribute('class','home-icon');
        navLeft_newNode.setAttribute('src','/assets/images/home-icon.svg');
        navLeft_newNode.setAttribute('alt','首页图标');
        nav_left.appendChild(navLeft_newNode);
        const lsLeft = ['编程', '动画', '漫画', '小说', '其他'];
        lsLeft.forEach(element => {
                var navLeft_newNode = document.createElement('a');
                navLeft_newNode.setAttribute('href','#');
                navLeft_newNode.textContent = element;
                nav_left.appendChild(navLeft_newNode);
        })

        const nav_right = document.querySelectorAll('.nav-right');
        var navRight_newNode = document.createElement('form');
        navRight_newNode.setAttribute('class','form-search');
        navRight_newNode.setAttribute('action','#');
        var navRight_newNode_child = document.createElement('input');
        navRight_newNode_child.setAttribute('class','searchbox');
        navRight_newNode_child.setAttribute('type','search');
        navRight_newNode_child.setAttribute('name','q');
        navRight_newNode_child.setAttribute('placeholder','请输入搜索内容');
        navRight_newNode.appendChild(navRight_newNode_child);
        var navRight_newNode_child = document.createElement('input');
        navRight_newNode_child.setAttribute('class','submitbutton');
        navRight_newNode_child.setAttribute('type','submit');
        navRight_newNode_child.setAttribute('value','提交');
        navRight_newNode.appendChild(navRight_newNode_child);
        nav_right.forEach(element => {
            element.appendChild(navRight_newNode.cloneNode(true));
        })
        var navRight_newNode = document.createElement('form');
        navRight_newNode.setAttribute('class','form-theme');
        navRight_newNode.setAttribute('action','#');
        var navRight_newNode_child = document.createElement('label');
        navRight_newNode_child.setAttribute('class','themelabel');
        navRight_newNode_child.setAttribute('for','themelist');
        navRight_newNode_child.textContent = '主题';
        navRight_newNode.appendChild(navRight_newNode_child);
        var navRight_newNode_child = document.createElement('select');
        navRight_newNode_child.setAttribute('name','theme');
        navRight_newNode_child.setAttribute('id','themelist');
        var navRight_newNode_child_child = document.createElement('option');
        navRight_newNode_child_child.setAttribute('value', 'auto');
        navRight_newNode_child_child.textContent = '自动';
        navRight_newNode_child.appendChild(navRight_newNode_child_child);
        navRight_newNode_child_child = document.createElement('option');
        navRight_newNode_child_child.setAttribute('value', 'daylight');
        navRight_newNode_child_child.textContent = '白天';
        navRight_newNode_child.appendChild(navRight_newNode_child_child);
        navRight_newNode_child_child = document.createElement('option');
        navRight_newNode_child_child.setAttribute('value', 'moonlight');
        navRight_newNode_child_child.textContent = '夜晚';
        navRight_newNode_child.appendChild(navRight_newNode_child_child);
        navRight_newNode.appendChild(navRight_newNode_child);
        
        nav_right.forEach(element => {
            element.appendChild(navRight_newNode.cloneNode(true));
        })
        document.querySelector('.placeholder-nav').style.display = 'none';
    }
)