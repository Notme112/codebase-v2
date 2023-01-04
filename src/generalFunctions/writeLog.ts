import { ScriptInfoType } from "../types/codebase";

export function writeLog(scriptInfo:ScriptInfoType){
    console.log(`Führe aus: ${scriptInfo.name} in V${scriptInfo.version} auf der Seite "${window.location.href}"!\nDas Team der Codebase wünscht viel Spaß!`);
}