export function onTabClick(e:Event, frame:HTMLIFrameElement){
    let target = e.target as HTMLElement;
    frame.contentDocument?.querySelector('.tab-active')?.classList.remove('tab-active');
    frame.contentDocument?.querySelector('.tab-content-active')?.classList.remove('tab-content-active');
    target?.classList.add('tab-active');
    frame.contentDocument?.querySelector(`#tab_${target.getAttribute('for')}`)?.classList.add('tab-content-active');
}