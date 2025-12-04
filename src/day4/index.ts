import { Day } from "../day";

class Day4 extends Day {

    constructor(){
        super(4);
    }

    solveForPartOne(input: string): string {
        // TODO: implement Day 4 - Part 1
        // parse input into a 2d array of characters
        const lines = input.replace(/\r/g, '').split('\n').filter(l => l.trim() !== '').map(l => l.split(''));


        let total = 0;
        for (let i = 0; i < lines.length; i++) {
            for (let j = 0; j < lines[i].length; j++) {
                const char = lines[i][j];
                // process each character
                if (char === '@') {
                    // check all of the surrounding characters
                    const surroundings = [];
                    let paperCount = 0;
                    for (let y = -1; y <= 1; y++) {
                        for (let x = -1; x <= 1; x++) {
                            // exclude original character
                            if (x === 0 && y === 0) continue;
                            const newX = j + x;
                            const newY = i + y;
                            // check if within bounds
                            if (newX >= 0 && newX < lines.length && newY >= 0 && newY < lines[newX].length) {
                                let currentChar = lines[newY][newX];
                                if (lines[newY][newX] === '@') {
                                    paperCount++;
                                }
                            }
                        }
                    }
                    if (paperCount < 4) {
                        total++;
                    }
                }
            }
        }

        return total.toString();
    }

    solveForPartTwo(input: string): string {
        // TODO: implement Day 4 - Part 2
        // parse input into a 2d array of characters
        const lines = input.replace(/\r/g, '').split('\n').filter(l => l.trim() !== '').map(l => l.split(''));


        let total = 0;

        // function to remove all removable papers in one pass
        const removeRemovable = (): number => {
            let removed = 0;
            // track positions to remove to avoid modifying while iterating
            const toRemove: [number, number][] = [];
            for (let i = 0; i < lines.length; i++) {
                for (let j = 0; j < lines[i].length; j++) {
                    if (lines[i][j] === '@') {
                        let paperCount = this.countSurroundingAt(lines, i, j);
                        if (paperCount < 4) {
                            toRemove.push([i, j]);
                        }
                    }
                }
            }

            // modify grid and remove papers
            for (const [i, j] of toRemove) {
                lines[i][j] = '.';
                removed++;
            }
            return removed;
        };

        let removed;
        // keep removing until no more can be removed
        do {
            removed = removeRemovable();
            total += removed;
        } while (removed > 0);

        return total.toString();
    }

    private countSurroundingAt(lines: string[][], i: number, j: number): number {
        let paperCount = 0;
        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                if (x === 0 && y === 0) continue;
                const newX = j + x;
                const newY = i + y;
                if ( newY >= 0 && newY < lines.length && newX >= 0 && newX < lines[newY].length ) {
                    if (lines[newY][newX] === '@') {
                        paperCount++;
                    }
                }
            }
        }
        return paperCount;
    }

}


export default new Day4;
