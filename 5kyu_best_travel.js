function chooseBestSum(t, k, ls) {
  // your code
}

function getPermutations

/*
Input:
- t => maximum sum of distances (number);
- k => number of towns to visit (number);
- ls => list of distances (array).

Output:
- Greatest possible sum of k towns within list(ls) below t (maximum sum);

Algorithm and Data Structure:
Array

1. Get all possible combinations of towns in order;
[50, 55, 57, 58, 60];
 
0 1 2; 50 55 57           
0 1 3; 50 55 58
0 1 4; 50 55 60
0 2 3; 50 57 58
0 2 4; 50 57 60
0 3 4; 50 58 60
1 2 3; 55 57 58
1 2 4; 55 57 60
1 3 4; 55 58 60
2 3 4; 57 58 60

- if input is 3;
towns = [0, 1, 2];

while (towns[0] <= distances.length - maxTowns) {
  
}


2. Filter and keep only the combinations that are under t;
3. Select the combination that has the highest sum;

Test Case:
t = 174;
k = 3;
ls = [50, 55, 57, 58, 60]; length = 5;

Towns = x, y, z;
xIndex = 0;
yIndex = 1;
zIndex = 2;


*/