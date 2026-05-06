const socket = io();

function vote(language) {
    socket.emit('vote', language);
}

socket.on('updateVotes', (votes) => {
    document.getElementById('jsVotes').innerText = votes.JavaScript;
    document.getElementById('pythonVotes').innerText = votes.Python;
    document.getElementById('javaVotes').innerText = votes.Java;
});