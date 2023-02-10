self.onmessage = (event: MessageEvent<Array<number>>) => {
    const time = performance.now();
    self.postMessage(heapSort(event.data));
    console.log(`Heap sort = ${performance.now() - time}`)
}

const buildMaxHeap = (array: number[]) => {
    let i: number = Math.floor(array.length / 2 - 1);
    while(i >= 0) {
        heapify(array, i, array.length);
        i--;
    }
}

const swap = (arr: number[], firstItemIndex: number, lastItemIndex: number) => {
    const temp: number = arr[firstItemIndex];
    arr[firstItemIndex] = arr[lastItemIndex];
    arr[lastItemIndex] = temp;
}

const heapify = (heap: number[], i: number, max: number) => {
    let index: number = 0;
    let left: number = 0;
    let right: number = 0;

    while(i < max) {
        index = i;
        left = 2 * i + 1;
        right = left + 1;

        if(left < max && heap[left] > heap[index]) {
            index = left;
        }

        if(right < max && heap[right] > heap[index]) {
            index = right;
        }

        if(index === i) {
            return;
        }
        swap(heap, i, index);
        i = index;
    }
}

const heapSort = (array: number[]) => {
    buildMaxHeap(array);
    let lastElem = array.length - 1;
    while(lastElem > 0) {
        swap(array, 0, lastElem);
        heapify(array, 0, lastElem);
        lastElem--;
    }
    return array;
}