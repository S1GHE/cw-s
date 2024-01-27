export const combineClasses = (ClassesCombine: (string | undefined)[]): string => {
    return ClassesCombine.map(
        (el) => el ? el : ""
    ).join(" ")
}