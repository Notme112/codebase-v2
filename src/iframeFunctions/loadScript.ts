export async function loadScript(name: string){
    let script = document.createElement('script');
    try {
        //@ts-ignore
        script.innerHTML = await (await fetch('https://rettungssimulator.online/js/' + name + '?v='+ ReSi.resiVersion)).text()
    } catch (error) {
        console.error('Error while fetching script: ' + name + '%e')
        return false;
    }
    document.body?.appendChild(script);
}