var socket = io();

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('maglist');

btn.onClick = function exec() {
    socket.emit('msg_send', {
        msg: inputMsg.value
    })
}

socket.on('msg_received', (data) => {
    let limsg = document.createElement('li')
    limsg.innerText = data.msg;
    msgList.appendChild(limsg);
})