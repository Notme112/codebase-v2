export function reload() {
    if (self != top) {
        window.parent.location.reload();
    } else {
        window.location.reload();
    }
}