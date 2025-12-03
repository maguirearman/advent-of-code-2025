import day3 from './index';
const input = require('fs').readFileSync(__dirname.replace('src', 'inputs') + '/part1.txt', 'utf8');

describe('On Day 3', () =>{
    it(`part1 is identity function`, ()=>{
        console.log(`Day 3 Part 1: ${day3.solveForPartOne(input)}`);
        console.log(`Day 3 Part 2: ${day3.solveForPartTwo(input)}`);
    })
});