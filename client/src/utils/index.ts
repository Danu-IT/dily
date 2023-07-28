import { RegForm } from "../type/form";
import { toast } from 'react-toastify';
import { passwordStrength } from 'check-password-strength'

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

export const firstLetterUppercase = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length)
}

export const validationRegistration = (form: RegForm) => {

    if (form.password !== form?.cpassword) {
        toast.error("Пароли не совпадают");
        return { value: 'password', error: 'Пароли не совпадают' };
    }
    if (!form.name || !form.surname || !form.email || !form.password || !form.cpassword) {
        const result = Object.entries(form).filter(el => el[1] === '' ? true : false).map(el => ({
            value: el[0],
            error: "Поле не заполнено"
        }))
        toast.error("Некоторые поля не заполнены");
        return result;
    }
    if (passwordStrength(form.password).value == 'Too weak') {
        return { value: 'password', error: 'Слабый пароль' };
    }
}