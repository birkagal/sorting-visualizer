import { animation_operations } from "../consts";

export const insertionSort = (
    array: Array<number>
) => {
    let animations: Array<Array<number | string>> = [],
        j: number,
        key: number;
    for (let i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > key) {
            animations.push([animation_operations.CHANGE_COLOR, j + 1, j]);
            animations.push([animation_operations.OVERWRITE_VALUE, j + 1, array[j]]);
            array[j + 1] = array[j];
            j = j - 1;
        }
        animations.push([animation_operations.OVERWRITE_VALUE, j + 1, key]);
        array[j + 1] = key;
    }
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