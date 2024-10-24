document.addEventListener(
    'DOMContentLoaded',
    function() {
        // 主内容
        const con = document.querySelector('.main');
        fetch('/components/content.html')
            .then(res => res.text())
            .then(html => {
                // 填充主内容
                con.innerHTML += html;
                // 取每个标题作为目录链接
                const toc_links = document.querySelectorAll('main > h2');
                // 取每个右侧边栏作为目录
                const tocs = document.querySelectorAll('.aside-right');
                tocs.forEach(toc => {
                    toc_links.forEach(toc_link => {
                        // 将标题封装为链接
                        var link = document.createElement('a');
                        link.innerHTML = toc_link.innerHTML;
                        link.href = '#' + toc_link.id;
                        // 将链接放入目录
                        toc.appendChild(link);
                    })
                })
            });
        // 左导航栏
        const nav_left = document.querySelector('.nav-left');
        fetch('/components/nav_left.html')
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
                    this.style.fontWeight = '300';
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
        fetch('/components/nav_right.html')
            .then(res => res.text())
            .then(html => {
                nav_right.forEach(element => {
                    element.innerHTML += html;
                })
            });
        // 左侧边栏
        const aisde_left = document.querySelectorAll('.aside-left');
        fetch('/components/aside_left.html')
            .then(res => res.text())
            .then(html => {
                aisde_left.forEach(element => {
                    element.innerHTML += html;
                })
            });
    }
)