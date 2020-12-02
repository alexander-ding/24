# 24

Simple website to play [The 24 Game](https://en.wikipedia.org/wiki/24_Game), built using React.js. 

## Rules
Each round, you are dealt a deck of 4 random poker cards between 1 and 13. The goal is to make the number 24 using exactly all 4 cards and the 4 basic arithmetic operators: +, -, ×, ÷. 

For example, if you are given `| 1 | 2 | 3 | 8 |`, one possible solution is `2 × (1 + 3 + 8) = 24`. Notice that you can reuse the same operator multiple times and group operators however you want, but you cannot reuse the same card. 

You are allowed to create fractions as intermediary values in your calculation, but the final result must be `24`. 