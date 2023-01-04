export function leaveSettings(frame:HTMLIFrameElement, changes:boolean){
    if(changes === true){
        // @ts-ignore
        modal("Ohne Speichern verlassen?",
            "Du hast Änderungen vorgenommen, willst du diese Seichern?",
            "Speichern",
            "Ohne speichern verlassen",
            // @ts-ignore
            () => {frame?.contentDocument?.querySelector<HTMLElement>("#saveCodebaseSettings")?.click()}, 
            // @ts-ignore
            () => {parent?.closeFrame()}
        )
    }
    else{
        // @ts-ignore
        parent?.closeFrame();
    }
}