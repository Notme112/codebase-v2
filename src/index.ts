import { scriptInfo } from './generalFunctions/scriptInfo';
import { addListenerForOpenSettings } from './generalFunctions/addListenerForOpenSettings';
import { run } from './generalFunctions/run';
import { writeLog } from './generalFunctions/writeLog';
import { loadIcons } from './generalFunctions/loadIcons';
import { loadStyles } from './generalFunctions/loadStyles';
import { checkForDarkmode } from './generalFunctions/checkForDarkmode';
import { handleNewUser } from './generalFunctions/handleNewUser';
import { removeStorageIfNeeded } from './generalFunctions/removeStorageIfNeeded';
import { ReSiCodebase } from './generalFunctions/classes/Codebase.class';
import { createListElement } from './iframeFunctions/createListElement';
import { checkSettings } from './generalFunctions/checkSettings';
import { addLoadListener } from './generalFunctions/addLoadListener';
(async () => {
    //return 
    if (document.querySelectorAll('.landing-header').length) return;
    loadIcons();
    loadStyles();
    checkForDarkmode();
    handleNewUser();
    removeStorageIfNeeded()
    //load storage
    const s = JSON.parse(localStorage.storage_resi_base);
    //codebase class
    //function check settings and catching errors when there is a new branch

    checkSettings(s);
    //create object from codebase class
    let codebase = new ReSiCodebase(s);
    //own frame
    //create list element
    let element = createListElement();
    const frame = document.querySelector<HTMLIFrameElement>('#iframe');
    if(!frame) return;
    addLoadListener(element, frame, s)
    //run functions
    run(s);
    //write log
    writeLog(scriptInfo)
    addListenerForOpenSettings();
})();