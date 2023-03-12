export function openProfile(e:Event){
    e.preventDefault();
    let author = (e.target as HTMLElement).getAttribute('profile');
    if(!author) return;
    // @ts-ignore
    if (changes) modal('Profil des Autors aufrufen?', `Willst du das Profil von <b>${author}</b> aufrufen? Du hast ungespeicherte Änderungen in den Einstellungen. Diese gehen verloren, wenn du das Profil des Autors aufrufst.`, 'Aufrufen', 'Hier bleiben', () => {
        window.location.href = '/profile/' + author;
    }, () => {});
    else {
        window.location.href = '/profile/' + author
    }
}