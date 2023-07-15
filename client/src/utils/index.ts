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

export const validationRegistration = (form: RegForm) => {
    if (form.password !== form?.cpassword) {
        toast.error("Пароли не совпадают");
        return false;
    }
    if (!form.name || !form.surname || !form.email || !form.password || !form.cpassword) {
        toast.error("Некоторые поля не заполнены");
        return false;
    }
    if (passwordStrength(form.password).value == 'Weak' || passwordStrength(form.password).value == 'Too weak') {
        return { value: 'password', error: 'Слабый пароль' };
    }
}