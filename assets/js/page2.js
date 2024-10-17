function getLineCount() {
    const title = document.querySelector('.address');
    title.style.display = 'flex';
    const style = window.getComputedStyle(title);
    const lineHeight = parseFloat(style.lineHeight) + parseFloat(style.gap);
    const totalHeight = title.offsetHeight;
    const lineCount = Math.ceil(totalHeight/lineHeight);
    if (lineCount > 2) {
        title.style.display = 'none';
    }
    else {
        title.style.display = 'flex';
    }
    console.log(title.style.display);
    console.log(lineHeight);
    console.log(totalHeight);
    console.log(lineCount);
}
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    }
}
getLineCount();
window.addEventListener('resize',debounce(getLineCount, 100));
