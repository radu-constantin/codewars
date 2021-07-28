// Task
// You will be given a list of objects. Each object has a name, material, and
// possibly secondMaterial. The possible materials are: paper, glass, organic,
// and plastic.

// Your job is to sort these objects across 4 recycling bins according to
// their material (and secondMaterial if it's present), by listing the name
// of items that should go into those bins.

// The output should be represented as an array consisting of a subArray for each
// recycle bin.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its name should be listed in
// both of the respective bins
// The order of the name in each bin should be the same as the order of
// their respective name was in the input list

// Example
// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

/*
Input: An Array of Objects that have the following properties:
  - type;
  - material;
  - secondMaterial *; (optional);

Output: An Array with 4 subarrays that represent 4 recycle bins:
  - paper;
  - glass;
  - organic;
  - plastic;

Rules:
  - the output Array should have the subArrays representing the materials in the exact order as presented;
  - the recycle bins (output) should only contain the type of the item;
  - the output should always show all 4 bins, even if they are empty;

Algorithm and Data Structures:
- Arrays and Objects;

1. Create the bins;
- In their initial form the bins will be represented as an object in order to better identify them;
let bins = {
  paper: [],
  glass: [],
  organic: [],
  plastic: [],
}

2. Iterate through the input Array;
For each item Object do:
  -check for its primary material and add it to the corresponding bin;
  -if it has a secondary material check it and add it to the corresponding bin;

3. Create an array from the bins Object.
*/

function recycle(array) {
  let bins = {
    paper: [],
    glass: [],
    organic: [],
    plastic: [],
  }

  array.forEach(function (item) {
    bins[item.material].push(item.type);
    if (item.secondMaterial) {
      bins[item.secondMaterial].push(item.type)
    }
  });

  let result = [];
  for(let key in bins) {
    result.push(bins[key]);
  }

  return result;
};

let a = [
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];

recycle(a);