import day4 from './index';
const input = require('fs').readFileSync(__dirname.replace('src', 'inputs') + '/part1.txt', 'utf8');


describe('day 4', () => {
    it('part 1 sample', () => {
        console.log(`Day 3 Part 1: ${day4.solveForPartOne(input)}`);
        console.log(`Day 3 Part 2: ${day4.solveForPartTwo(input)}`);
    });
});
