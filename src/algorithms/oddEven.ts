import { animation_operations } from "../consts";

export const oddEvenSort = (
    array: Array<number>
) => {
    let animations: Array<Array<number | string>> = [],
        sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 1; i < array.length - 1; i += 2) {
            animations.push([animation_operations.CHANGE_COLOR, i, i + 1]);
            if (array[i] > array[i + 1]) {
                animations.push([animation_operations.SWAP_VALUE, i, array[i + 1], i + 1, array[i]]);
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
                sorted = false;
            }
        }
        for (let j = 0; j < array.length - 1; j += 2) {
            animations.push([animation_operations.CHANGE_COLOR, j, j + 1]);
            if (array[j] > array[j + 1]) {
                animations.push([animation_operations.SWAP_VALUE, j, array[j + 1], j + 1, array[j]]);
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                sorted = false;
            }
        }
    }
    return animations;
}