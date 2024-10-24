document.addEventListener(
    'DOMContentLoaded',
    function () {
        const sidebar = document.querySelector('.sidebar');
        const sidebar_wrapper = document.querySelector('.sidebar-wrapper');
        const sidebar_button = document.querySelector('.sidebar-button span');
        function side() {
            if (sidebar_wrapper.style.display == 'none') {
                sidebar_wrapper.style.display = 'block';
                sidebar.style.width = '230px';
                sidebar_button.innerHTML = '«'
            }
            else {
                sidebar_wrapper.style.display = 'none';
                sidebar.style.width = '13px';
                sidebar_button.innerHTML = '»'
            }
        }
        sidebar_button.addEventListener('click',side)
    }
)