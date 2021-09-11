// Data for test
let Data = [
  {
    "_id": "6129586429136129d4f48b79",
    "name": "venue",
    "bill_type": "logistics",
  },
  {
    "_id": "6129586429136129d4f48b79",
    "name": "venue",
    "bill_type": "vacation",
  },
  {
    "_id": "6129586429136129d4f48b79",
    "name": "venue",
    "bill_type": "vacation",
  },
  {
    "_id": "6129586429136129d4f48b7a",
    "name": "hotel",
    "bill_type": "logistics",
  },
  {
    "_id": "6129586429136129d4f48b7b",
    "name": "rentals",
    "bill_type": "vacation",
  },
  {
    "_id": "6129586429136129d4f48b7c",
    "name": "transportation",
    "bill_type": "shopping",
  },
  {
    "_id": "6129586429136129d4f48b7d",
    "name": "planning",
    "bill_type": "shopping",
  },
  {
    "_id": "6129586429136129d4f48b7e",
    "name": "gifts and favours",
    "bill_type": "shopping",
  },
  {
    "_id": "6129586429136129d4f48b7f",
    "name": "something",
    "bill_type": "logistics",
  },
  {
    "_id": "6129586429136129d4f48b7f",
    "name": "something",
    "bill_type": "logistics",
  }
]



// Categorizer function

const categorizer = (data, object_key) => {
  let key_type = [];
  let new_array = [];
  let start = 0;
  
  for (let datum of data) {
    if (start === 0) {
      key_type = [datum[object_key]];
      new_array = [[datum]];
      start++;
    } else if (key_type.indexOf(datum[object_key]) === -1) {
      key_type.push(datum[object_key]);
      new_array.push([datum]);
    } else {
      new_array[key_type.indexOf(datum[object_key])].push(datum);
    }
  }
  return new_array;
};


// Show result in Json file (result.json)

let fs = require('fs')
let result = categorizer(Data, 'bill_type');
result = JSON.stringify(result, null, 2);

fs.writeFile("result.json", result, (err) => {
  if (err) throw err;
  console.log("result written to file");
});
