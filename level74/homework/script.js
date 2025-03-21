// 1?


// 2
function findOdd(A) {
    //happy coding!
    var x = 0;
    for (var i = 0; i < A.length; i++) {
      x = x ^ A[i];
    }
    return x;
  }

// 3
function getSize(width, height, depth) {
    const volume = width *height  * depth;
  
    const Area = 2 * (width * height + width * depth + height * depth);
  
    return [Area, volume];
}

// 4
function derive(a, b) {
    const coefficient = a * b;
    
    const exponent = b - 1;
    ;
}
