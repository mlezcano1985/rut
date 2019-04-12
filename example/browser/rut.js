(function(){
    /**
     * @property { function } rut Function
     * @param { string } str rut a evaluar
     * @returns string
     */
    const format = (str) => {
        str = str.toString();
        if(str.length < 2 || str.length > 10) {
            return null;
        }
        else {

            const v = str.slice(0, -1);
            var reg = new RegExp(/^[0-9]*$/g);
            if(!reg.test(v))
                return null;

            const last = str.slice(-1);
            reg = new RegExp(/^[0-9kK]$/g);
            if(!reg.test(last))
                return null;
            
            let start = -2;
            let end = -1;
            let count = 0;
            let text = `-${last}`;
            while(true) {
                let val = str.slice(start, end);
                if(!val) {
                    break;
                }
                if(count > 2) {
                    text = `${val}.${text}`;
                    count = 1;
                    start--;
                    end--;
                }
                else {
                    count++;
                    start--;
                    end--;
                    text = val + text;
                }
            }
            if(text.startsWith('.')) {
                text = text.substring(1);
            }
            return text;
        }
    };

    /**
     * @property { function } rut Function
     * @param { string } str rut a evaluar
     * @returns string
     */
    const clean = (str) => {
        return str.replace(/[^0-9kK]+/g, '');
    };

    const rut = {
        format: format,
        clean: clean
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = rut;
    }
    else {
        if (typeof define === 'function' && define.amd) {
          define([], function() {
            return rut;
          });
        }
        else {
          window.rut = rut;
        }
    }

})();