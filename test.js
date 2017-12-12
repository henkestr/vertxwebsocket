var EventBus = require('vertx-bus-client');

function registerHandlerForChat() {
    var eventBus = new EventBus('localhost:8080/chat');
    eventBus.onOpen = function () {
        eventBus.registerHandler('chat', function (error,message) {
            document.getElementById('chat').value += 'New message' + JSON.parse(message.body).message;
        })
    }
}

function send() {
    var newMessage = document.getElementById('inputText').value;

    var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function () {
    };
    xmlhttp.open("PATCH", "http://localhost:8080/api/chat/");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({message: newMessage}));
};