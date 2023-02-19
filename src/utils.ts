import { config } from './config';
import { algoMap } from './algorithms';
import { consts } from './consts';

export const animateSort = async (
    array: Array<number>,
    algorithm: string,
    speed: number,
) => {
    let algo = algoMap[algorithm];
    const animations = algo(array);
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = (document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>);
        let state = animations[i].shift();
        let barOneIdx, barTwoIdx, barOne, barTwo, barOneNewHeight, barTwoNewHeight;
        switch (state) {
            case consts.CHANGE_COLOR:
                [barOneIdx, barTwoIdx] = animations[i];
                barOne = arrayBars[barOneIdx];
                barTwo = arrayBars[barTwoIdx];
                await sleep(speed);
                barOne.style.backgroundColor = config.secondary_color;
                barTwo.style.backgroundColor = config.secondary_color;
                await sleep(speed);
                barOne.style.backgroundColor = config.primary_color;
                barTwo.style.backgroundColor = config.primary_color;
                break;
            case consts.SWAP_VALUE:
                await sleep(speed);
                [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = animations[i];
                barOne = arrayBars[barOneIdx];
                barTwo = arrayBars[barTwoIdx];
                [barOne.innerHTML, barTwo.innerHTML] = [barTwo.innerHTML, barOne.innerHTML]
                barOne.style.height = `${barOneNewHeight}px`;
                barTwo.style.height = `${barTwoNewHeight}px`;
                barOne.style.backgroundColor = 'green';
                barTwo.style.backgroundColor = 'green';
                await sleep(speed);
                barOne.style.backgroundColor = config.primary_color;
                barTwo.style.backgroundColor = config.primary_color;
                break;
            case consts.OVERWRITE_VALUE:
                await sleep(speed);
                [barOneIdx, barOneNewHeight] = animations[i];
                barOne = arrayBars[barOneIdx];
                barOne.style.height = `${barOneNewHeight}px`;
                barOne.style.backgroundColor = 'green';
                barOne.innerHTML = barOneNewHeight
                await sleep(speed);
                barOne.style.backgroundColor = config.primary_color;
                break;
        }
    }
}

export const generateArray = (length: number, max_value: number) => {
    let n = Math.floor(max_value / length);
    const array = Array.from({ length: length }, (_, index) => (n * index) + 25);
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray
}

// https://stackoverflow.com/a/7228322
const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// https://stackoverflow.com/a/39914235
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


export const normalize = (val, minVal, maxVal, newMin, newMax) => {
    return Math.floor(newMin + (val - minVal) * (newMax - newMin) / (maxVal - minVal));
};
