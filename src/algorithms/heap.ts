import { ANIMATION_OPERATIONS } from "../consts";

export const heapSort = (
    array: Array<number>
) => {
    let animations: Array<Array<number | string>> = [];
    buildMaxHeap(array, animations);
    let end = array.length - 1;
    while (end > 0) {
        animations.push([ANIMATION_OPERATIONS.SWAP_VALUE, 0, array[end], end, array[0]]);
        [array[0], array[end]] = [array[end], array[0]];
        siftDown(array, 0, end, animations);
        end--;
    }
    return animations;
}

const buildMaxHeap = (
    array: Array<number>,
    animations: Array<Array<number | string>>
) => {
    let currentIndex = Math.floor(array.length / 2);
    while (currentIndex >= 0) {
        siftDown(array, currentIndex, array.length, animations);
        currentIndex--;
    }
}

const siftDown = (
    array: Array<number>,
    start: number,
    end: number,
    animations: Array<Array<number | string>>
) => {
    if (start >= Math.floor(end / 2)) return;
    let left = start * 2 + 1,
        right = start * 2 + 2 < end ? start * 2 + 2 : null,
        swap = 0;
    if (right) swap = array[left] > array[right] ? left : right;
    else swap = left;
    animations.push([ANIMATION_OPERATIONS.CHANGE_COLOR, start, swap]);
    if (array[start] < array[swap]) {
        animations.push([ANIMATION_OPERATIONS.SWAP_VALUE, swap, array[start], start, array[swap]]);
        [array[start], array[swap]] = [array[swap], array[start]];
        siftDown(array, swap, end, animations);
    }
}
