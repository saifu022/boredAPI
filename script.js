function getTask(linkAPI){
    document.getElementById('linkBtn').style.display = 'none'
    fetch(linkAPI)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        document.getElementById('activity').innerText = data.activity;
        const info = `Participants: ${data.participants}`;
        document.getElementById('info').innerText = info;
        if (data.link != "") {
            document.getElementById('linkBtn').href = data.link;
            document.getElementById('linkBtn').style.display = 'inline';
        }
        document.getElementById('type').innerText = `Type: ${data.type}`;
        const key = data.key;
        prevKey.push(key);
    })
}
let linkAPI = 'https://www.boredapi.com/api/activity/';
getTask(linkAPI);
const prevKey =[];
document.getElementById('filter').addEventListener('click', function(event) {
    if(event.target.innerText == 'none'){
        linkAPI = 'https://www.boredapi.com/api/activity/';
    }
    else {
        linkAPI =  `https://www.boredapi.com/api/activity?type=${event.target.innerText}`;
    }
    getTask(linkAPI)
})

document.getElementById('getTaskBtn').addEventListener('click', function() {
    getTask(linkAPI);
})

document.getElementById('getPrevTaskBtn').addEventListener('click', function(event) {
    const key = prevKey[prevKey.length-2];
    linkPrev =  `https://www.boredapi.com/api/activity?key=${key}`;
    getTask(linkPrev)
})
