i = 0;
self.addEventListener(function(e) {
    console.log(e.data)
    while (i < 10) {
        postMessage("Web Worker Counter: " + i);
        i++;
    }
  });