import bigFunc from "./bigFunc";
self.onmessage = (e) => {
    console.log(e)
    let counter = e.data;
    const res = bigFunc(counter);
    self.postMessage(res);
}