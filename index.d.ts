interface RutFormatter {
    /**
     * @description Format string as rut
     */
    format(str: string): string | null;

    /**
     * @description Clear rut format
     */
    clean(str: string): string;
}

declare const rut: RutFormatter;
export = rut;