import { mergeSort } from "./merge";
import { bubbleSort } from "./bubble";
import { quickSort } from "./quicksort";
import { heapSort } from "./heap";
import { insertionSort } from "./insertion";
import { selectionSort } from "./selection";
import { shakerSort } from "./shaker";
import { oddEvenSort } from "./oddEven";

export const algoMap = {
    merge: mergeSort,
    bubble: bubbleSort,
    quick: quickSort,
    heap: heapSort,
    insertion: insertionSort,
    selection: selectionSort,
    shaker: shakerSort,
    oddEven: oddEvenSort,
}