document.addEventListener(
    'DOMContentLoaded', 
    function() {
        const checkbox = document.querySelector('.menu-input')
        const body = document.querySelector('body')
        const doc = document.querySelector('.document')
        const menu = document.querySelector('.menu-wrapper')
        function fixedBody() {
            if (checkbox.checked) {
                body.style.overflow = 'hidden';
            }
            else {
                body.style.overflow = 'visible';
            }
        }
        function closeMenu1() {
            if (checkbox.checked) {
                checkbox.checked = false;
                body.style.overflow = 'visible';
            }
        }
        function closeMenu2(event) {
            const element = event.target
            if (element.tagName.toLowerCase == 'a' && checkbox.checked) {
                checkbox.checked = false;
                body.style.overflow = 'visible';
            }
        }
        checkbox.addEventListener('click', fixedBody);
        doc.addEventListener('click', closeMenu1);
        menu.addEventListener('click', closeMenu2)
  }
);