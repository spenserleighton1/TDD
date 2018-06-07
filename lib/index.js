

//Insertion Sort!
export function insertion(arr){
 var elem;
 for(var i = 1; i<arr.length; i++){
   elem = arr[i];
   var j = i; 
   while(j>0 && arr[j-1]>elem){
     arr[j] = arr[j-1];
     j--;
  }
  arr[j] = elem;
 }
 return arr;
}

//Bubble Sort!
export function bubble(arr) {
 for(let i = 0; i < arr.length; i++) {
   for(let j = 1; j < arr.length - i; j++) {
     if(arr[j-1] > arr[j]) {
       [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
     }
   }
 }
 return arr;
}

//Merge Sort
export function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));

    return merge(left, right);
  
  function merge(one, two) {
      var result = [];
      while (one.length > 0 && two.length > 0)
          result.push(one[0] < two[0]? one.shift() : two.shift());
      return result.concat(one.length? one : two);
  }
}
//Quick Sort
export function quickSort(arr) {
  if (arr.length <= 1) { 
    return arr;
  } else {

    var left = [];
    var right = [];
    var newArray = [];
    var pivot = arr.pop();
    var length = arr.length;

    for (var i = 0; i < length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}




