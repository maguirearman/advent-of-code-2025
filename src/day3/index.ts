import { Day } from "../day";

class Day3 extends Day {

    constructor(){
        super(3);
    }

    solveForPartOne(input: string): string {
        const banks = input.replace(/\r/g, '').split('\n').filter(line => line.trim() !== '');
        let count = 0;

        for (let bankLine of banks) {
            // convert string of digits to array of numbers
            const bankArr = bankLine.split('').map(digit => parseInt(digit));
            let maxJoltage = 0;

            // check all pairs of batteries (digits) in their original order
            for (let i = 0; i < bankArr.length; i++) {
                for (let j = i + 1; j < bankArr.length; j++) {
                    const joltage = parseInt(bankArr[i].toString() + bankArr[j].toString());
                    if (joltage > maxJoltage) {
                        maxJoltage = joltage;
                    }
                }
            }
            count += maxJoltage;
        }
        return count.toString();
    }

    solveForPartTwo(input: string): string {
        const banks = input.replace(/\r/g, '').split('\n').filter(line => line.trim() !== '');
        let count = 0;

        for (let bankLine of banks) {
            const digits = bankLine.split('').map(d => parseInt(d));
            const k = 12; // must pick exactly 12 digits

            // greedy method
            const builtJoltage: number[] = [];
            let start = 0;
            // iteratively pick the best digit for each position
            for (let remaining = k; remaining > 0; remaining--) {
                // we can only pick from digits[start..end] where end leaves enough digits remaining
                const end = digits.length - remaining; 
                let bestDigit = -1;
                let bestIndex = start;
                // find the best digit in digits[start..end]
                for (let idx = start; idx <= end; idx++) {
                    const val = digits[idx];
                    // pick the largest digit
                    if (val > bestDigit) {
                        bestDigit = val;
                        bestIndex = idx;
                        // me being greedy
                        if (bestDigit === 9) {
                            // best possible digit, no need to search further
                            break;
                        }
                    }
                }
                builtJoltage.push(bestDigit);
                start = bestIndex + 1;
            }

            const joltage = parseInt(builtJoltage.join(''));
            count += joltage;
        }
        return count.toString();
    }
}

export default new Day3;