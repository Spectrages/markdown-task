const bigFunc = (num: number) => {
    let res: number = 0;
    for(let i = 0; i < num; i++) {
        res += i;
    }
    return res;
}
self.onmessage = (event: MessageEvent<number>) => {
    self.postMessage(bigFunc(event.data));
} 