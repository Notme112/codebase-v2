export function searchInFrame(frame:HTMLIFrameElement) {
    var searchWord = frame?.contentDocument?.querySelector<HTMLInputElement>('#input_search')?.value?.toLowerCase() || '';
    if (searchWord == '') {
        frame?.contentDocument?.querySelectorAll<HTMLElement>('.searchable').forEach((el) => {
            el.classList.remove('searchHidde');
        })
        frame?.contentDocument?.querySelectorAll<HTMLElement>('.searchNoResult').forEach((el) => {
            el.classList.add('hidden');
        })
        return;
    }
    let searchAbles = frame?.contentDocument?.querySelectorAll<HTMLElement>('.searchable') || [];
    for (var j = 0; j <= searchAbles?.length; j++) {
        if (searchAbles[j]?.textContent?.toLowerCase()?.includes(searchWord)) {
            searchAbles[j]?.classList?.remove('searchHidden');
            frame?.contentDocument?.querySelectorAll<HTMLElement>('.searchNoResult').forEach((el) => {
                el?.classList?.add('hidden');
            })
        } else {
            searchAbles[j]?.classList?.add('searchHidden');
        }
    }
    if (searchAbles?.length == frame?.contentDocument?.querySelectorAll<HTMLElement>('.searchHidden')?.length) {
        frame?.contentDocument?.querySelectorAll<HTMLElement>('.searchNoResult').forEach((el) => {
            el?.classList?.remove('hidden');
        })
    }
};