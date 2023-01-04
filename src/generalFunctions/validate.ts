export function validate(text: string) {
    return text.replaceAll('<', '').replaceAll('>', '');
}