import { mergeSort } from "./merge";
import { bubbleSort } from "./bubble";
import { quickSort } from "./quicksort";
import { heapSort } from "./heap";

export const algoMap = {
    merge: mergeSort,
    bubble: bubbleSort,
    quick: quickSort,
    heap: heapSort,
}