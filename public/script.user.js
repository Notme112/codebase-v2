// ==UserScript==
// @name         ReSi-Codebase V2
// @version      2.0.0
// @description  Erweitert viele Funktionen und fügt neue hinzu. Das alles kostenlos in einem Browsergame!
// @author       NiZi112
// @match        https://rettungssimulator.online/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://github.com/Notme112/codebase-v2/raw/main/install.user.js
// @downloadURL  https://github.com/Notme112/codebase-v2/raw/main/install.user.js
// @supportURL   https://github.com/Notme112/codebase-v2/issues/new/choose
// @homepage     https://github.com/Notme112/codebase-v2/
// @run-at       document-idle
// @grant        none
// ==/UserScript==
(() => {
    let script = document.createElement('script');
    script.src = `https://cdn.jsdelivr.net/gh/Notme112/codebase-v2@main/public/bundle.js?scriptVersion=${GM_info.script.version}&gameVersion=${ReSi.resiVersion}`;
    document.body.appendChild(script);
})();