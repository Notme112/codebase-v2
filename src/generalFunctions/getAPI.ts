import {
    scriptInfo
} from './scriptInfo';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// export async function getAPI(name: string) {
//     if (!sessionStorage.getItem(`a${name}`) || JSON.parse(sessionStorage.getItem(`a${name}`) || '{}').lastUpdate>(new Date).getTime() * 1000 * 60 * 5) {
//         return new Promise((res, reject): void => {
//             fetch(`/api/${name}`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json',
//                 }
//             }).then((response: Response) => {
//                 response.json()
//                     .then((response:object) => {
//                         console.log(response);
//
//                         sessionStorage.setItem(`a${name}`, JSON.stringify({
//                             lastUpdate: (new Date).getTime(),
//                             data: response
//                         }));
//                         res(response)
//                     })
//                     .catch((e: Error) => {
//                         // @ts-ignore
//                         noticeModal('Error', `Es ist ein Fehler bei einem GET einer API aufgetreten<br>Script: ${scriptInfo.name}<br>Version: ${scriptInfo.version} <br>Autor: ${scriptInfo.author}`);
//                         console.error(`Error while fetching API ${name}:`);
//                         console.error(e);
//                         reject();
//                     })
//             })
//             .catch((e: Error) => {
//                 // @ts-ignore
//                 noticeModal('Error', `Es ist ein Fehler bei einem GET einer API aufgetreten<br>Script: ${scriptInfo.name}<br>Version: ${scriptInfo.version} <br>Autor: ${scriptInfo.author}`);
//                 console.error(`Error while fetching API ${name}:`);
//                 console.error(e);
//                 reject();
//             })
//         })
//     } else {
//         return new Promise((res) => {
//             res(JSON.parse(sessionStorage.getItem(`a${name}`) || '{"value": null}').value);
//         })
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let fetchedAPIs: {
    [k: string]: any
} = {};
export async function getAPI(name: string) {
    return new Promise<object>(async (res, reject): Promise<void> => {
        if (fetchedAPIs[name]) {
            res(fetchedAPIs[name]);
        };
        try {
            let response = await fetch(`/api/${name}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            let data = await response.json()
            fetchedAPIs[name] = data;
            res(data);
        } catch (e) {
            // @ts-ignore
            noticeModal('Error', `Es ist ein Fehler bei einem GET einer API aufgetreten<br>Script: ${scriptInfo.name}<br>Version: ${scriptInfo.version} <br>Autor: ${scriptInfo.author}`);
            console.error(`Error while fetching API ${name}: ${e}`);
            reject();
        }
    })
}