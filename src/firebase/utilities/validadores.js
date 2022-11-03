export const stringValidator = (item) =>
    typeof item === 'string' && item.length > 0

export const numberValidator = (item) =>
    typeof item === 'number' && item > 0

export const booleanValidator = (item) =>
    typeof item === 'boolean'

