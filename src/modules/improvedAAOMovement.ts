import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function improvedAAOMovement(s: ReSiCodebaseSettingsType): Promise<void> {
    const MOVING_STEPS = 5;
    document.querySelectorAll<HTMLElement>('.aao-set-order').forEach((el) => {
        let prepend_span = document.createElement('span');
        prepend_span.classList.add('move-more-forward');
        prepend_span.innerHTML = '<i class="bi bi-arrow-bar-right" style="padding-right:2px;"></i>';
        let append_span = document.createElement('span');
        append_span.classList.add('move-more-backward');
        append_span.innerHTML = '<i class="bi bi-arrow-bar-right" style="padding-right:2px;"></i>';
        el.prepend(prepend_span);
        el.append(append_span);
        el.style.width = '100px';
    });
    document.querySelectorAll<HTMLElement>('.move-more-forward').forEach((el) => {
        el.addEventListener('click', (t) => {
            for(let i = 0; i < MOVING_STEPS; i++){
                if(!(t.target instanceof HTMLElement)) return;
                if(!(t.target?.parentElement?.nextElementSibling instanceof HTMLElement)) return;
                t.target?.parentElement?.nextElementSibling?.click();
            }
        });
    });
    document.querySelectorAll<HTMLElement>('.move-more-backward').forEach((el) => {
        el.addEventListener('click', (t) => {
            for(let i = 0; i < MOVING_STEPS; i++){
                if(!(t.target instanceof HTMLElement)) return;
                if(!(t.target?.parentElement?.previousElementSibling instanceof HTMLElement)) return;
                t.target?.parentElement?.previousElementSibling?.click();
            }
        });
    });
}