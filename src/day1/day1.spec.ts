import day1 from './index';
const input = require('fs').readFileSync(__dirname.replace('src', 'inputs') + '/part1.txt', 'utf8');

describe('On Day 1', () =>{
    it(`part1 is identity function`, ()=>{
        console.log(`Day 1 Part 1: ${day1.solveForPartOne(input)}`);
        console.log(`Day 1 Part 2: ${day1.solveForPartTwo(input)}`);
    })
});