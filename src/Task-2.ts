export const createImmutableObject = function<T>(input: T): Readonly<T> {
    return Object.freeze(input);
};
