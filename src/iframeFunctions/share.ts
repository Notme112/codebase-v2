export function shareLink(e: Event){
    if(!(e.target instanceof HTMLElement)) return;
    navigator.share({
        url: e?.target?.getAttribute('share-url') ?? ''
    });
}