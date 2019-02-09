class MathTools {
    public static findClosestDivisor(number: number, divisor: number) {
        return number === 0 ? divisor : Math.ceil(number / divisor) * divisor;
    }

    public static randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export {MathTools as maths};