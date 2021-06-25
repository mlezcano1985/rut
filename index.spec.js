const rut = require('./index');

describe('Rut formatter test', () => {
  describe('format rut', () => {
    it('format ok', () => {
      const r = rut.format('1234567');
      expect(r).toStrictEqual('123.456-7');
    });

    it('rut is undefined', () => {
      const r = rut.format();
      expect(r).toBeNull();
    });

    it('rut min length', () => {
      const r = rut.format('123', 4);
      expect(r).toBeNull();
    });

    it('rut last value is invalid', () => {
      const r = rut.format('1234567W');
      expect(r).toBeNull();
    });

    it('rut value is invalid', () => {
      const r = rut.format('123s4567');
      expect(r).toBeNull();
    });
  });

  describe('clean rut', () => {
    it('clean ok', () => {
      const r = rut.clean('123.456-7');
      expect(r).toStrictEqual('1234567');
    });
    it('clean is undefined', () => {
      const r = rut.clean();
      expect(r).toStrictEqual('');
    });
  });
});
