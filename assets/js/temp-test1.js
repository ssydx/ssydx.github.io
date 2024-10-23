document.addEventListener(
    'DOMContentLoaded',
    function() {
        // 主内容
        const con = document.querySelector('.main');
        fetch('/pages/other/content.html')
            .then(res => res.text())
            .then(html => con.innerHTML += html);
        // 左导航栏
        const nav_left = document.querySelector('.nav-left');
        fetch('/pages/other/nav_left.html')
            .then(res => res.text())
            .then(html => {
                nav_left.innerHTML += html;
                // 设置导航栏跳转样式(由于异步此操作需在其内进行)
                var preNode;
                function nav_click() {
                    if (preNode != null) {
                        preNode.style.borderBottomColor = '';
                        preNode.style.borderBottomWidth = '';
                        preNode.style.borderBottomStyle = '';
                        preNode.style.fontWeight = '';
                    }
                    this.style.borderBottomColor = 'black';
                    this.style.borderBottomWidth = '0.25em';
                    this.style.borderBottomStyle = 'solid';
                    this.style.fontWeight = '200';
                    preNode = this;
                }
                nav_left.querySelectorAll('a').forEach(element => {
                    element.addEventListener('click', nav_click)
                })
            });
        // 导航占位符
        const placeholder = document.querySelector('.placeholder-nav');
        placeholder.style.display = 'none';
        // 右导航栏
        const nav_right = document.querySelectorAll('.nav-right');
        fetch('/pages/other/nav_right.html')
            .then(res => res.text())
            .then(html => {
                nav_right.forEach(element => {
                    element.innerHTML += html;
                })
            });
        // 左侧边栏
        const aisde_left = document.querySelectorAll('.aside-left');
        fetch('/pages/other/aside_left.html')
            .then(res => res.text())
            .then(html => {
                aisde_left.forEach(element => {
                    element.innerHTML += html;
                })
            });
        // 右侧边栏
        const aisde_right = document.querySelectorAll('.aside-right');
        fetch('/pages/other/aside_right.html')
            .then(res => res.text())
            .then(html => {
                aisde_right.forEach(element => {
                    element.innerHTML += html;
                })
            });
    }
)