1. number
"^[0-9]$"
2.utf8encoding
 function encodingUtf8(str) {
      let result = "";
      for (let i = 0; i < str.length; i++) {
       result += str.charAt(i).toString(16);
      }
      return result;
  }
