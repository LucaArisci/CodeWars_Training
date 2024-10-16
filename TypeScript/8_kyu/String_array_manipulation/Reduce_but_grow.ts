/* ----------------------------------------------------------------------------------------------------

    Given a non-empty array of integers, return the result of multiplying the values together in
    order. Example:

    [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

---------------------------------------------------------------------------------------------------- */

/*
    Array.prototype.reduce():   executes a user-supplied "reducer" callback function on
                                each element of the array, in order, passing in the return
                                value from the calculation on the preceding element. The
                                final result of running the reducer across all elements of
                                the array is a single value
*/

export function grow1(arr: number[]): number {
    return arr.reduce((acc, iv) => acc * iv);
}

/*
    Alternative solution:
*/

export const grow2 = (arr: number[]): number => arr.reduce((acc, iv) => acc * iv);