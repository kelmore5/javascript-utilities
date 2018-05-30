

class MathTools {
    public static findClosestDivisor(number: number, divisor: number) {
        return number === 0 ? divisor : Math.ceil(number / divisor) * divisor;
    }
}

export {MathTools as maths};