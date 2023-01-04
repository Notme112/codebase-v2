export function autoUncollapseCards(e:HTMLInputElement, frame:HTMLIFrameElement){
        let el = frame.contentDocument?.querySelector(`.card-collapse[for-module="${e.id}"]`);
        if(e.checked && el?.classList.contains('collapsed')) el?.classList.remove('collapsed');
        if(!e.checked && !el?.classList.contains('collapsed')) el?.classList.add('collapsed'); 
}