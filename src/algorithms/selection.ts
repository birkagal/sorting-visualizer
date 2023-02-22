import { animation_operations } from "../consts";

export const selectionSort = (
    array: Array<number>
) => {
    let animations: Array<Array<number | string>> = [];

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            console.log('here');
            if (array[min] > array[j]) {
                animations.push([animation_operations.CHANGE_COLOR, min, j]);
                min = j;
            }
        }
        if (i != min) {
            animations.push([animation_operations.SWAP_VALUE, i, array[min], min, array[i]]);
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    // for (let i = 1; i < array.length; i++) {
    //     key = array[i];
    //     j = i - 1;

    //     while (j >= 0 && array[j] > key) {
    //         animations.push([animation_operations.CHANGE_COLOR, j + 1, j]);
    //         animations.push([animation_operations.OVERWRITE_VALUE, j + 1, array[j]]);
    //         array[j + 1] = array[j];
    //         j = j - 1;
    //     }
    //     animations.push([animation_operations.OVERWRITE_VALUE, j + 1, key]);
    //     array[j + 1] = key;
    // }
    return animations;





    // while (!sorted) {
    //     sorted = true;
    //     for (let i = 0; i < array.length - 1 - round; i++) {
    //         animations.push([CHANGE_COLOR, i, i + 1]);
    //         if (array[i] > array[i + 1]) {
    //             animations.push([SWAP_VALUE, i, array[i + 1], i + 1, array[i]]);
    //             [array[i], array[i + 1]] = [array[i + 1], array[i]];
    //             sorted = false;
    //         }
    //     }
    //     round++;
    // }
    // return animations;
}