(function (rut) {
  window.addEventListener('load', () => {
    var f = document.getElementById('rut');
    const validate = (e) => {
      const value = rut.clean(f.value);
      const t = rut.format(value);
      if (!t) {
        document.getElementById('show').innerText = 'fail';
      } else {
        f.value = t;
        document.getElementById('show').innerText = 'ok';
      }
    };

    f.addEventListener('blur', validate);

    f.addEventListener('focus', () => {
      f.value = rut.clean(f.value);
    });
  });
})(window.rut);
