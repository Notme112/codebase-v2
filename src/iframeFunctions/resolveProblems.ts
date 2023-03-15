export async function resolveProblems(){
    //@ts-ignore
    modal('Achtung', 'Bei der folgenden Aktion werden temporäre Daten von Scripten gelöscht. Das kann helfen, Probleme zu beheben, löscht aber auch z.B. die weiteralarmierten Fahrzeuge aus dem Script von DrTraxx! Fortfahren?', 'Fortfahren', 'Abbrechen', () => {
        sessionStorage.clear();
        parent.location.reload();
    });
}