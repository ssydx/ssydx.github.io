const section = document.querySelector('section');
const videos = [
    {'name':'crystal'},
    {'name':'elf'},
    {'name':'frog'},
    {'name':'monster'},
    {'name':'pig'},
    {'name':'rabbit'}
];

let db;

const dbres = indexedDB.open('video_db', 1);
dbres.addEventListener('upgradeneeded', event => {
    // 获取数据库
    db = event.target.result;
    // 创建数据表
    const tb = db.createObjectStore('video_tb', {keyPath: 'name'});
    // 创建数据列
    tb.createIndex('mp4', 'mp4', {unique: false});
    tb.createIndex('webm', 'webm', {unique: false});
    console.log('数据库设置成功');
})
dbres.addEventListener('error', event => console.log(event.target.error));
dbres.addEventListener('success', event => {
    db = event.target.result;
    console.log('数据库打开成功');
    init();
});

function init() {
    console.log('开始初始化');
    const tb = db.transaction(['video_tb'], 'readwrite').objectStore('video_tb');
    for (const video of videos) {
        const getrcdres = tb.get(video.name);
        getrcdres.addEventListener('success', event => {
            if (event.target.result) {
                console.log('从客户端数据库载入视频');
                displayVideo(
                    event.target.result.name, 
                    event.target.result.mp4, 
                    event.target.result.webm
                );
            } else {
                console.log('从服务器端载入视频');
                getVideoFromSVS(video.name);
            }
        })
        getrcdres.addEventListener('error', event => console.log(event.target.error));
    }
    console.log('初始化完成');
}

function displayVideo(name, mp4, webm) {
    const mp4URL = URL.createObjectURL(mp4);
    const webmURL = URL.createObjectURL(webm);
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const video = document.createElement('video');
    video.controls = true;
    const source1 = document.createElement('source');
    source1.src = mp4URL;
    source1.type = 'video/mp4';
    const source2 = document.createElement('source');
    source1.src = webmURL;
    source1.type = 'video/webm';

    section.appendChild(article);
    article.appendChild(h2);
    article.appendChild(video);
    video.appendChild(source1);
    video.appendChild(source2);
}

function getVideoFromSVS(name) {
    const mp4 = fetch(`/assets/videos/${name}.mp4`)
        .then(res => res.blob());

    const webm = fetch(`/assets/videos/${name}.webm`)
        .then(res => res.blob());
    
    Promise.all([mp4,webm]).then(values => {
        displayVideo(name, values[0], values[1]);
        storeVideo(name, values[0], values[1]);
    })
}

function storeVideo(videoName, mp4Blob, webmBlob) {
    const tb = db.transaction(['video_tb'], 'readwrite').objectStore('video_tb');
    const rcd = {name:videoName,mp4:mp4Blob,webm:webmBlob};
    const addrcdres = tb.add(rcd);
    addrcdres.addEventListener('success', () => console.log('视频存储成功'));
    addrcdres.addEventListener('error', event => console.log(event.target.error));
}