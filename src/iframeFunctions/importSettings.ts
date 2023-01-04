import { reload } from "../generalFunctions/reload";

export async function importSettings(){
    //alerts wrong data
    function invalid() {
        // @ts-ignore
        noticeModal('<i class="bi bi-exclamation-triangle"></i> Fehler beim Importieren der Codebase-Einstellungen', 'Die Einstellungen sind nicht valide, bitte überprüfe diese!', 'Schließen')
    }
    //asks for data string
    // @ts-ignore
    var newSettings = await inputModal({
        title: 'Codebase-Einstellungen importieren <i class="bi bi-upload"></i>',
        label: 'Gib hier deine Einstellungen ein:',
        placeholder: 'Gib hier die Codebase-Einstellungen ein'
    });
    var error;
    //try to parse string
    try {
        JSON.parse(newSettings)
    } catch (e) {
        //if error show dialog
        invalid()
        error = true;
    }
    //if no error save
    if (!error) {
        localStorage.storage_resi_base = newSettings;
        reload()
    }
}