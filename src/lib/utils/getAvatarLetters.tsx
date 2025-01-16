export function getAvatarLetters(name: string) {
    const letters = name.split(' ').map(element => element.charAt(0)).join("").toUpperCase();

    return letters
}

