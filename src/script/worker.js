import bigFunc from "./bigFunc";

self.onmessage = (e) => {
    console.log(e.data)
    let counter = e.data;
    const res = bigFunc(counter);
    self.postMessage(res);
}