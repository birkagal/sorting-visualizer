import { mergeSort } from "./merge";
import { bubbleSort } from "./bubble";
import { quickSort } from "./quicksort";
import { heapSort } from "./heap";
import { insertionSort } from "./insertion";
import { selectionSort } from "./selection";

export const algoMap = {
    merge: mergeSort,
    bubble: bubbleSort,
    quick: quickSort,
    heap: heapSort,
    insertion: insertionSort,
    selection: selectionSort,
}