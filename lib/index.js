//Insertion Sort

//take array[0] amd set it aside as your sorted array to compare against
//take array[1] and compare it to array[0]
//if array[1] is LESS than array[0], move array[1] down the array until it is greater than the index berfore it.

let numbers = [3,7,5,9,0,4,1];

const insertion = (array) => {
  //loop over array
  for (let i = 1; i < array.length; i++) {
    //loop over array and check array[1] > array[0]
    for (let x = i-1; x > 0 && array[x] > array[i]; x--)
    //swap the index
      array[x+1] = array[x];
  }
  return array;
}

insertion(numbers)