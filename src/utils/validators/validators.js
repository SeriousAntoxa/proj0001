export const requiredField = (value) => {
    if (value) return undefined

    return "This field if required"
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value !== undefined && value !== null) {
        if (value.length < maxLength) return undefined

        return `Max ${maxLength}`
    }
}

export const minLengthCreator = (maxLength) => (value) => {
    if (value !== undefined && value !== null) {
        if (value.length > maxLength) return undefined

        return `Min ${maxLength}`
    }
}