
fetch('/zother/data/note.txt')
    .then(res => {
        if (!res.ok) {
            console.log(res.status);
            console.log(res.ok);
            console.log(res.statusText);
        }
        console.log(typeof res);
        console.log(res);
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.url);
        console.log(res.body);
    });

