import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function searchInAssociationProtokoll(s: ReSiCodebaseSettingsType): Promise<void>{
    if (!location.pathname.includes("/association/") || !document.querySelector('#tab_associationLogs')) return;
            let newElement = document.createElement("div");
            newElement.innerHTML = `<input class="input-round input-inline nochange" type="text" value="" style="padding-left:10px;" id="input_search" placeholder="Suche..." autocomplete="off">`;
            newElement.classList.add('input-container', 'right');
            document.querySelector('#tab_associationLogs .tab-headline')?.insertAdjacentElement('beforeend', newElement);
            let newElement2 = document.createElement("div");
            newElement2.innerHTML = `<h4 class='label label-info searchNoResult hidden'>Die Suche lieferte keine Ergebnisse! Bitte probiere es mit einem anderen Suchwort!</h4>`;
            document.querySelector('#tab_associationLogs .card-headline.card-headline-danger')?.after(newElement2)
            let newElement3 = document.createElement("style");
            newElement3.innerHTML = `.searchHidden { display: none !important };`
            document.head.appendChild(newElement3);
            let query = '[associationlogid]';

            function search() {
                var searchWord = document.querySelector<HTMLInputElement>('#input_search')?.value?.toLowerCase() || '';
                if (searchWord == '') {
                    document.querySelectorAll(query).forEach((el) => {
                        el.classList.remove('searchHidden');
                        document.querySelector('.searchNoResult')?.classList.add('hidden');
                    });
                    return;
                }
                let elems = document.querySelectorAll<HTMLElement>(query);
                for (var j = 0; j<elems.length; j++) {
                    if (elems[j]?.innerText.toLowerCase().includes(searchWord) || elems[j].querySelectorAll('td')[1].innerText.toLowerCase().includes(searchWord)) {
                        elems[j].classList.remove('searchHidden');
                        document.querySelector('.searchNoResult')?.classList.add('hidden');
                    } else {
                        elems[j].classList.add('searchHidden')
                    }
                }
                if (elems.length == document.querySelectorAll('.searchHidden').length) {
                    document.querySelector('.searchNoResult')?.classList.remove('hidden');
                }
            };
            ['input', 'change', 'keyup'].forEach((event) => {
                document.querySelector('#input_search')?.addEventListener(event, search)
            })
}