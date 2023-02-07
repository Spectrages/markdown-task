/*
self.onmessage = function (event) {
    if(event.data) {
        const result = event.data[0] * event.data[1];
        if (isNaN(result)) {
            postMessage('Only numbers');
        }
        else {
            postMessage(`Result:1`);
        }
    }
}


self.onmessage = function (e) {
    //console.log('Message received from main script');
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    //console.log('Posting message back to main script');
    postMessage(workerResult);
}
*/