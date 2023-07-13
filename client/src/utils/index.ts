export const removeExtraCharacters = (
    firstWord: string,
    secondWord: string,
    max: number
): string => {
    if (max <= Number(firstWord.length) + Number(secondWord.length)) {
        const secondWordCompleted =
            secondWord.slice(0, 3) + "..." + secondWord[secondWord.length - 1];
        return `${firstWord} ${secondWordCompleted}`;
    }
    return `${firstWord} ${secondWord}`;
};