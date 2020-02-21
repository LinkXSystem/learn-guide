/**
 * @description 解析字符串
 * @param {*} 输入参数
 * @site https://leetcode.com/problems/decode-string/
 */

const DecodeStringer = function(s) {
  let stack = [];

  let multi = '';
  let sentence = '';

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (/\[/.test(char)) {
      if (sentence) {
        stack.push(sentence);
        sentence = '';
      }

      if (multi) {
        multi = Number.parseInt(multi);
        stack.push(multi);
        multi = '';
      }

      stack.push(char);

      continue;
    }

    if (/\]/.test(char)) {
      if (!sentence) {
        sentence = stack.pop();
      }

      let record = sentence;
      sentence = '';
      let status = false;

      while (stack.length) {
        let temp_ = stack.pop();
        if (/\[/.test(temp_)) {
          if (status) {
            stack.push(temp_);
            break;
          }
          status = true;
          continue;
        }
        record =
          typeof temp_ !== 'string' ? record.repeat(temp_) : temp_ + record;
      }

      stack.push(record);

      continue;
    }

    if (/\d/.test(char)) {
      if (sentence) {
        stack.push(sentence);
        sentence = '';
      }

      multi = multi.concat(char);
      continue;
    }

    if (multi) {
      multi = Number.parseInt(multi);
      stack.push(multi);
      multi = '';
    }

    sentence = sentence.concat(char);

    if (i === s.length - 1 && sentence) {
      stack.push(sentence);
    }
  }

  return stack.join('');
};

(function test() {
  let sentence = '2[abc]3[cd]ef';
  // let sentence = '3[a]2[bc]';
  // let sentence = '3[a2[c2[b]]]';
  // let sentence = '3[a]2[b4[F]c]';
  const result = DecodeStringer(sentence);
  console.log(sentence, result);
})();
