export const validateIban = (iban) => {
    const regex = /^FR[0-9]{25}$/;
    return regex.test(iban);
}

export const validateBic = (bic) => {
    const regex = /^[a-zA-Z0-9]{9,11}$/;
    return regex.test(bic);
}