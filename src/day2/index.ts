import { Day } from "../day";

class Day2 extends Day {

    constructor(){
        super(2);
    }

    solveForPartOne(input: string): string {
        const ranges = input.split(',').filter(item => item.trim() !== '');
        let total = 0;

        for (let range of ranges) {
            const [start, end] = range.split('-').map(numStr => parseInt(numStr.trim()));
            // process each range as needed
            for (let i = start; i <= end; i++) {
                const num = i.toString();
                const len = num.length;
                // only consider numbers with even length and no leading zeroes
                if (len % 2 === 0 && num[0] !== '0') {
                    const half = len / 2;
                    const firstHalf = num.slice(0, half);
                    const secondHalf = num.slice(half);
                    // if both halves are the same, it's an invalid number
                    if (firstHalf === secondHalf) {
                        total = total + i;
                    }
                }
            }
        }

        return total.toString();
    }

    solveForPartTwo(input: string): string {
        const ranges = input.split(',').filter(item => item.trim() !== '');
        let total = 0;

        for (let range of ranges) {
            const [start, end] = range.split('-').map(numStr => parseInt(numStr.trim()));
            // process each range as needed
            for (let i = start; i <= end; i++) {
                const num = i.toString();
                const len = num.length;
                // only consider numbers with no leading zeroes
                if (num[0] !== '0') {
                    // check for all possible multiples of sequence lengths
                    for (let seqLen = 1; seqLen <= Math.floor(len / 2); seqLen++) {
                        // only check if the length is a multiple of the sequence length
                        if (len % seqLen === 0) {
                            const seq = num.slice(0, seqLen);
                            // build the repeated sequence and see if it matches the number
                            // this method saved my buttox
                            const repeated = seq.repeat(len / seqLen);
                            if (repeated === num) {
                                total = total + i;
                                break; 
                            }
                        }
                    }
                }
            }
        }

        return total.toString()
    }
}

export default new Day2;