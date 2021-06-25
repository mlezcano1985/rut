(function () {
  /**
   * Format string as rut
   * @param { string } str String to evaluate
   * @param { number } [min] Minimum length - Default 2
   * @param { number } [max] Maximum length - Default 10
   * @returns string | null
   */
  const format = (str, min = 2, max = 10) => {
    if (!str) return null;
    if (str.length < min || str.length > max) {
      return null;
    } else {
      const v = str.slice(0, -1);
      var reg = new RegExp(/^[0-9]*$/g);
      if (!reg.test(v)) return null;

      const last = str.slice(-1);
      reg = new RegExp(/^[0-9kK]$/g);
      if (!reg.test(last)) return null;

      let start = -2;
      let end = -1;
      let count = 0;
      let text = `-${last}`;
      while (true) {
        let val = str.slice(start, end);
        if (!val) {
          break;
        }
        if (count > 2) {
          text = `${val}.${text}`;
          count = 1;
          start--;
          end--;
        } else {
          count++;
          start--;
          end--;
          text = val + text;
        }
      }
      if (text.startsWith('.')) {
        text = text.substring(1);
      }
      return text;
    }
  };

  /**
   * Clear rut format
   * @param { string } str
   * @returns string
   */
  const clean = (str) => {
    if (!str) return '';
    return str.replace(/[^0-9a-zA-Z]+/g, '');
  };

  const rut = {
    format,
    clean,
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = rut;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return rut;
      });
    } else {
      window.rut = rut;
    }
  }
})();
