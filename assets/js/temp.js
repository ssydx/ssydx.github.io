document.addEventListener(
    'DOMContentLoaded', 
    function() {
        const checkbox_menu = document.querySelector('.checkbox-menu');
        const body = document.querySelector('body');
        const main = document.querySelector('.main');
        const aside_left = document.querySelectorAll('.aside-left');
        const aside_right = document.querySelectorAll('.aside-right');
        function fixedBody() {
            if (checkbox_menu.checked) {
                body.style.overflow = 'hidden';
            }
            else {
                body.style.overflow = 'visible';
            }
        }
        function closeMenu1() {
            if (checkbox_menu.checked) {
                checkbox_menu.checked = false;
                body.style.overflow = 'visible';
            }
        }
        function closeMenu2(event) {
            const element = event.target
            if (element.tagName.toLowerCase() == 'a' && checkbox_menu.checked) {
                checkbox_menu.checked = false;
                body.style.overflow = 'visible';
            }
        }
        checkbox_menu.addEventListener('click', fixedBody);
        main.addEventListener('click', closeMenu1);
        aside_left.forEach(element => {
            element.addEventListener('click', closeMenu2);
        });
        aside_right.forEach(element => {
            element.addEventListener('click', closeMenu2);
        });
  }
);