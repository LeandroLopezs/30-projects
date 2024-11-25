function generatePassword(length) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789!@#$%¨&*()+-="

    let password = "";

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]

    }
    return password
}

passwordLength = 12;


const generate = generatePassword(passwordLength);

console.log(generate)