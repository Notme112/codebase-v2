export function searchInFrame() {
    var searchWord = document.querySelector<HTMLInputElement>('#input_search')?.value?.toLowerCase() || '';
    if (searchWord == '') {
        document.querySelectorAll<HTMLElement>('.searchable').forEach((el) => {
            el.classList.remove('searchHidde');
        })
        document.querySelectorAll<HTMLElement>('.searchNoResult').forEach((el) => {
            el.classList.add('hidden');
        })
        return;
    }
    let searchAbles = document.querySelectorAll<HTMLElement>('.searchable') || [];
    for (var j = 0; j <= searchAbles?.length; j++) {
        if (searchAbles[j]?.textContent?.toLowerCase()?.includes(searchWord)) {
            searchAbles[j]?.classList?.remove('searchHidden');
            document.querySelectorAll<HTMLElement>('.searchNoResult').forEach((el) => {
                el?.classList?.add('hidden');
            })
        } else {
            searchAbles[j]?.classList?.add('searchHidden');
        }
    }
    if (searchAbles?.length == document.querySelectorAll<HTMLElement>('.searchHidden')?.length) {
        document.querySelectorAll<HTMLElement>('.searchNoResult').forEach((el) => {
            el?.classList?.remove('hidden');
        })
    }
};