export function unload(frame: HTMLIFrameElement){
    if(!frame.contentDocument) return;
    frame.contentDocument.body.innerHTML = ''
}