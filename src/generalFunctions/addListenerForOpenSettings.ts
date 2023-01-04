export function addListenerForOpenSettings(){
    if(window.location.pathname == '/'){
        document.querySelectorAll('.openCodebaseSettings').forEach((el) => {
            el?.addEventListener('click', () => {
                document.querySelector<HTMLElement>('#Codebase')?.click()
            })
        });
    }
}