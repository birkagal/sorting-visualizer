export const ANIMATION_OPERATIONS = {
    CHANGE_COLOR: -1,
    SWAP_VALUE: -2,
    OVERWRITE_VALUE: -3,
}

export const COLORS = {
    PRIMARY: '#Dadee0',
    SECONDARY: 'red',
    SWAP: 'green',
}

export const ALGORITHMS = {
    'logarithmic': {
        MERGE: 'merge',
        QUICK: 'quick',
        HEAP: 'heap',
    },
    'quadratic': {
        BUBBLE: 'bubble',
        INSERTION: 'insertion',
        SELECTION: 'selection',
        SHAKER: 'shaker',
        ODDEVEN: 'oddEven',
    },
    'weird': {},
}

export const DEFAULT_ALGORITHM = 'merge';