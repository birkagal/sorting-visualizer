import { animation_operations } from "../consts";

export const bubbleSort = (
    array: Array<number>
) => {
    let animations: Array<Array<number | string>> = [],
        sorted = false,
        round = 0;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1 - round; i++) {
            animations.push([animation_operations.CHANGE_COLOR, i, i + 1]);
            if (array[i] > array[i + 1]) {
                animations.push([animation_operations.SWAP_VALUE, i, array[i + 1], i + 1, array[i]]);
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                sorted = false;
            }
        }
        round++;
    }
    return animations;
}