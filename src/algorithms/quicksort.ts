import { SWAP_VALUE, CHANGE_COLOR } from "../consts";

export const quickSort = (
    array: Array<number>
) => {
    let animations: Array<Array<number | string>> = [];
    quicksortHelper(array, 0, array.length - 1, animations);
    return animations;
}

export const quicksortHelper = (
    array: Array<number>,
    start: number,
    end: number,
    animations: Array<Array<number | string>>
) => {
    if (start >= end) return;
    let pivot = start,
        left = start + 1,
        right = end;
    animations.push([CHANGE_COLOR, left, right]);
    while (right >= left) {
        if (array[right] < array[pivot] && array[left] > array[pivot]) {
            animations.push([SWAP_VALUE, left, array[right], right, array[left]]);
            [array[right], array[left]] = [array[left], array[right]];
        }
        if (array[right] >= array[pivot]) right--;
        if (array[left] <= array[pivot]) left++;
        if (right >= left) {
            animations.push([CHANGE_COLOR, left, right]);
        }
    }
    animations.push([CHANGE_COLOR, pivot, right]);
    if (pivot !== right) {
        animations.push([SWAP_VALUE, right, array[pivot], pivot, array[right]]);
        [array[right], array[pivot]] = [array[pivot], array[right]];
    }
    quicksortHelper(array, start, right - 1, animations);
    quicksortHelper(array, right + 1, end, animations);
}
