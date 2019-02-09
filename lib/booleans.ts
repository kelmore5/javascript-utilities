class BooleanTools {

    // noinspection JSUnusedGlobalSymbols
    public static isTrueOrNull(obj: boolean | null | undefined): boolean {
        return this.isNull(obj) || obj === true;
    }

    public static isNull(obj: any): boolean {
        return obj === null || obj === undefined;
    }
}

// noinspection JSUnusedGlobalSymbols
export {BooleanTools as bools};
