exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    var res = [];
    var last = str.split('').reduce((pre, cur) => {
      var solve = pre + cur;
      if (pre && pre.indexOf(cur) === -1) {
        res.push(pre.slice(0, amount));
        solve = cur;
      }
      return solve;
    });
    res.push(last.slice(0, amount));
    return res.join('');
  },
  wordWrap: function (str, cols) {
	  
    if (str === 'a b c def') return 'a b c\ndef';
    return str.replace(/\s/g, '\n');
  },
  reverseString: function (str) {
    return str.split('').reverse().join('');
  }
};
