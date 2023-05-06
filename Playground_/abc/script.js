let result = true;

var isPalindrome = function (head) {
  for (let f = 0; f <= head.length; f++) {
    if (head[f] !== head[head.length - (f + 1)]) {
      result = false;
    }
  }

  console.log(result);
};

isPalindrome([1, 2, 2, 3]);
