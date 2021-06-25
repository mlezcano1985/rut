interface RutFormatter {
  /**
   * @description Format string as rut
   * @param { string } str String to evaluate
   * @param { number } [min] Minimum length - Default 2
   * @param { number } [max] Maximum length - Default 10
   */
  format(str: string, min = 2, max = 10): string | null;

  /**
   * @description Clear rut format
   */
  clean(str: string): string;
}

declare const rut: RutFormatter;
export = rut;
