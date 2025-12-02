import day2 from './index';
const input = require('fs').readFileSync(__dirname.replace('src', 'inputs') + '/part1.txt', 'utf8');

describe('On Day 2', () =>{
    it(`part1 is identity function`, ()=>{
        console.log(`Day 2 Part 1: ${day2.solveForPartOne(input)}`);
        console.log(`Day 2 Part 2: ${day2.solveForPartTwo(input)}`);
    })
});