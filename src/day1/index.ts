import { Day } from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }

    solveForPartOne(input: string): string {
        let dialIndex: number = 50;
        let count: number = 0;
        const rotations = input.split('\n').filter(line => line.trim() !== '');

        for (let line of rotations) {
            if (line.startsWith('L')) {
                let turnAmount = parseInt(line.slice(1));
                // Turn left 
                const k = turnAmount % 100;
                dialIndex = (dialIndex + (100 - k)) % 100;
            } else if (line.startsWith('R')) {
                // Turn right 
                let turnAmount = parseInt(line.slice(1));
                const k = turnAmount % 100;
                dialIndex = (dialIndex + k) % 100;
            }
            if (dialIndex == 0) {
                count += 1;
            }
        }
        return count.toString();
    }

    solveForPartTwo(input: string): string {
        let dialIndex: number = 50;
        let count: number = 0;
        const rotations = input.split('\n').filter(line => line.trim() !== '');

        for (let line of rotations) {
            const s = line.trim();
            if (s.startsWith('L')) {
                const turnAmount = parseInt(s.slice(1));
                // turn amount = m*100 + k
                const m = Math.floor(turnAmount / 100);
                const k = turnAmount % 100;
                // Count times pointing at 0 during left rotation BEFORE applying rotation
                if (dialIndex === 0) {
                    // Hits at t = 100, 200, ... up to turnAmount
                    count += m;
                } else if (turnAmount >= dialIndex) {
                    // Hits at t = dialIndex, dialIndex+100, ... up to turnAmount
                    count += 1 + Math.floor((turnAmount - dialIndex) / 100);
                }
                // Apply rotation 
                dialIndex = (dialIndex + (100 - k)) % 100;
            } else if (s.startsWith('R')) {
                const turnAmount = parseInt(s.slice(1));
                const k = turnAmount % 100;
                // Count times pointing at 0 during right rotation
                count += Math.floor((dialIndex + turnAmount) / 100);
                // Apply rotation
                dialIndex = (dialIndex + k) % 100;
            }
        }
        return count.toString();
    }
}

export default new Day1;