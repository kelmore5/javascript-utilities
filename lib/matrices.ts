type Matrix<T extends any> = T[][];
type Point = [number, number]; // Defined as [row, column] in a Matrix
type RangePoint = [Point, Point]; // Used to manipulate Matrices

interface ResizeReq<T extends any> {
    total_rows: number;
    total_columns?: number;
    default_value?: T;
}

class MatrixTools {

    // noinspection JSUnusedGlobalSymbols
    public static getColumn<T extends any>(matrix: Matrix<T>, column: number, default_value?: T): T[] {
        const output: T[] = [];
        for (let i = 0; i < matrix.length; i++) {
            output.push(matrix[i][column] || default_value);
        }

        return output;
    }

    // noinspection JSUnusedLocalSymbols
    public static get<T extends any>(matrix: Matrix<T>, row: number, column: number, default_value: T): T;

    // noinspection JSUnusedLocalSymbols
    public static get<T extends any>(matrix: Matrix<T>, row: number, column: number, default_value: null | undefined): T | undefined;

    public static get<T extends any>(matrix: Matrix<T>, row: number, column: number, default_value?: T): T {
        const check_row: Array<T> = matrix[row];
        if (!check_row) {
            return default_value;
        }

        return check_row[column] || default_value;
    }

    public static largestRow<T extends any>(matrix: Matrix<T>): T[] {
        let largest_subset: any[] = [];
        matrix.forEach((item: any[]) => {
            if (item.length > largest_subset.length) {
                largest_subset = item;
            }
        });

        return largest_subset;
    }

    // noinspection JSUnusedGlobalSymbols
    public static largestRowSize(matrix: Matrix<any>): number {
        return this.largestRow(matrix).length;
    }

    public static resize<T extends any>(matrix: Matrix<T>, req: ResizeReq<T>): Matrix<T> {
        const {total_rows, total_columns, default_value} = req;

        while (matrix.length < total_rows) {
            matrix.push([]);
        }

        if (total_columns) {
            for (let i = 0; i < matrix.length; i++) {
                this.resizeRow(matrix[i], total_columns, default_value);
            }
        }

        return matrix;
    }

    public static resizeRow<T extends any>(row: T[], size: number, default_value?: T): T[] {
        while (row.length < size) {
            row.push(default_value);
        }

        return row;
    }

    public static subset<T extends any>(matrix: Matrix<T>, subset: RangePoint): Matrix<T> {
        const output: T[][] = [];

        const start_index: Point = subset[0];
        const end_index: Point = subset[1];

        for (let row_idx = start_index[0]; row_idx < end_index[0]; row_idx++) {
            const new_row: T[] = [];

            for (let col_idx = start_index[1]; col_idx < end_index[1]; col_idx++) {
                new_row.push(matrix[row_idx][col_idx]);
            }

            output.push(new_row);
        }

        return output;
    }
}

export {Matrix, Point, RangePoint, MatrixTools as matrices};
