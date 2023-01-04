export function collapsecards(event:Event){
    let el = event.target as HTMLElement;
    el.parentElement?.parentElement?.parentElement?.parentElement?.classList.toggle('collapsed');
}