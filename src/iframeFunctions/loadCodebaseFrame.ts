import { modules } from "../modules";
import { ReSiCodebaseSettingsType, Setting } from "../types/codebase";
import { autoUncollapseCards } from "./autoUnCollapseWhenUnChecked";
import { collapsecards } from "./collapseCards";
import { exportSettings } from "./exportSettings";
import { importSettings } from "./importSettings";
import { leaveSettings } from "./leaveSettings";
import { openProfile } from "./openProfile";
import { resetStorage } from "./resetSettings";
import { saveCodebaseSettings } from "./saveSettings";
import { searchInFrame } from "./searchInFrame";
import { showStorage } from "./showStorage";
import { onTabClick } from "./tabs";

export async function loadCodebaseFrame(frame: HTMLIFrameElement, s:ReSiCodebaseSettingsType) {
    //build frame content
    if(frame?.contentWindow?.location.href != 'about:blank') return;
    var frameContent = `<div class='panel-body'>
<script src='https://rettungssimulator.online/js/jquery-3.5.0.min.js?v=`
        // @ts-ignore
        + ReSi.resiVersion + `'></script>
<link rel='stylesheet' href='https://rettungssimulator.online/css/index.css?v=`
        // @ts-ignore
        + ReSi.resiVersion + `' charset='utf-8'>
<script src='https://rettungssimulator.online/js/index.js?v=`
        // @ts-ignore
        + ReSi.resiVersion + `'></script>
<script src='https://rettungssimulator.online/js/iframe.js?v=`
        // @ts-ignore
        + ReSi.resiVersion + `'></script>
<script src='https://rettungssimulator.online/js/controlCenter.js?v=`
        // @ts-ignore
        + ReSi.resiVersion + `'></script>
<script src="https://rettungssimulator.online/js/popper.js?v=`
        // @ts-ignore
        + ReSi.resiVersion + `" charset="utf-8"></script>
<script src='https://rettungssimulator.online/js/tippy.js?v=`
        // @ts-ignore
        + ReSi.resiVersion + `'></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"><style>.searchHidden{display: none;};</style>
<div class='detail-header'><div class='detail-title'>ReSi-Codebase-Einstellungen<div class='right pointer'><i class="bi bi-x"></i></div>
<div class='right pointer share' data-tooltip='Die ReSi-Codebase weiterempfehlen' share-url='https://forum.rettungssimulator.online/index.php?thread/1423-resi-codebase-v1-5/'>
<i class="bi bi-share" style="padding-left:5px;"></i></div><div class="right" data-tooltip="Besuche die ReSi-Codebase auf Discord">
<a href="https://discord.gg/8FyA6HBbXs" target="_blank" class="no-prevent"><i class="bi bi-discord" style="padding-left:5px;"></i></a></div>
<div class="right" data-tooltip="Die ReSi-Codebase im Forum besuchen"><a href="https://forum.rettungssimulator.online/index.php?thread/1423-resi-codebase-v1-5/" target="_blank" class="no-prevent">
<i class="bi bi-chat-left-text" style="padding-left:5px;"></i></a></div></div><div class='detail-subtitle'>Verwalte hier deine Einstellungen für die ReSi-Codebase
<button class="button button-round button-success" id="showStorage">Gespeicherte Daten der Scripte anzeigen <i class="bi bi-clipboard-data"></i></button>
<button id="exportSettings" class="button button-round button-success">Einstellungen exportieren <i class="bi bi-download"></i></button>
<button id="importSettings" class="button button-round button-success">Einstellungen importieren <i class="bi bi-upload"></i></button>
<button id="resetStorage" class="button button-round button-success">Einstellungen zurücksetzen <i class="bi bi-x-circle"></i></button>
<div class="input-container nochange" style="float:right"><label for='input_search'>Suche <i class="bi bi-search" style="padding-left:5px;"></i></label>
<input class="input-round input-inline nochange" type="text" value="" style="padding-left:20px;padding-right:20px;" id="input_search" placeholder="Suche..." autocomplete="off"></div></div></div>
<!-- ENDE HEADER -->
<div class='tabs tabs-horizotal'>
<div class='tab tab-active' for='settings-moduls'>Module</div>
<div class='tab' for='licence'>Sonstiges & Lizenzen</div>
</div>
<div class='tab-container'>
<div class='tab-content tab-content-active' id='tab_settings-moduls'>
<h2>Module:</h2>
<h4 class='label label-info searchNoResult hidden'>Die Suche lieferte keine Ergebnisse! Bitte probiere es mit einem anderen Suchwort!</h4>`;
    //checkboxes for modules
    modules.forEach((el) => {
        frameContent += `<div class='checkbox-container searchable'><input id='${el.target}' type='checkbox' ${s[el.settingsTarget] ? 'checked' : ''}><label for='${el.target}'>${el.name} aktivieren<a class='no-prevent' href='${el.helpLink}' target='_blank' data-tooltip='${el.description} Mehr im Hilfeartikel!'><i class="bi bi-question-circle" style="padding-left:5px;"></i></a> ${el.hasSettings ? '<span data-tooltip="Dieses Modul hat Einstellungen! Passe es dir nach deinem Geschmack an!"><i class="bi bi-exclamation-circle"></i></span>' : ''} <span class="label label-success"><i class="bi bi-person"></i> von: ${'<a href="javascript:;" class="open-profile pointer" profile="'+ el.author + '">' + el.author + '</a>'}</span> <span class="label label-success"><i class="bi bi-git"></i> V${el.version}</span></label><div class='hidden keyword-serach'>${el.keywords.join(' ')}</div></div>`;
        if (el.hasSettings) {
            frameContent += `<div class="searchable card card-collapse${s[el.settingsTarget] ? '' : ' collapsed'}" for-module="${el.target}" style="padding-left:100px;">
<div class="card-headline card-headline-danger">
<i class="bi bi-gear"></i> Einstellungen zu ${el.name}
<div class="card-tools">
<span class="card-collapse-toggle pointer" style="font-size:15px;overflow:hidden;vertical-algin:middle"> <i class="bi bi-caret-${s[el.settingsTarget] ? 'up' : 'down'}"></i></span>
</div>
</div>
<div class="card-body">`;
            el.settings.forEach((setting: Setting) => {
                var value = setting.subtarget ? s[setting.subtarget][setting.settingsKey] : s[setting.settingsKey];
                switch (setting.type) {
                    case 'checkbox':
                        frameContent += `<div class='checkbox-container'><input id='${setting.target}' ${value ? 'checked' : ''} type='checkbox'><label for='${setting.target}'>${setting.name} (${setting.preset})<a class='no-prevent' href='${el.helpLink}' target='_blank' data-tooltip='${el.description} Mehr im Hilfeartikel!'><i class="bi bi-question-circle" style="padding-left:5px;"></i></a></label></div>`
                        break;
                    case 'input-text':
                        frameContent += `<div class='input-container'><div class='input-label'>${setting.name} (${setting.preset})<a class='no-prevent' href='${el.helpLink}' target='_blank' data-tooltip='${el.description} Mehr im Hilfeartikel!'><i class="bi bi-question-circle" style="padding-left:5px;"></i></a></div><div class="input-content"><div class='input-icon'><i class="bi bi-pencil"></i></div><input class='input-round' value='${value ? value : ''}' autocomplete='off' id='${setting.target}' placeholder='${setting.preset}'></div></div>`
                        break;
                    case 'input-number':
                        frameContent += `<div class='input-container'><div class='input-label'>${setting.name} (${setting.preset})<a class='no-prevent' href='${el.helpLink}' target='_blank' data-tooltip='${el.description} Mehr im Hilfeartikel!'><i class="bi bi-question-circle" style="padding-left:5px;"></i></a></div><div class="input-content"><div class='input-icon'><i class="bi bi-pencil"></i></div><input class='input-round' type='number' value='${value ? value : ''}' autocomplete='off' id='${setting.target}' placeholder='${setting.preset}'></div></div>`
                        break;
                    case 'input-choose':
                        frameContent += `<div class='input-container'><div class='input-label'>${setting.name} (${setting.preset})<a class='no-prevent' href='${el.helpLink}' target='_blank' data-tooltip='${el.description} Mehr im Hilfeartikel!'><i class="bi bi-question-circle" style="padding-left:5px;"></i></a></div>
                        <div class="input-content"><div class='input-icon'><i class="bi bi-pencil"></i></div>
                        <select id="${setting.target}" class="input-round">`;
                        setting.options.forEach((option: { value: string; name: string; }) => {
                            let valueOfSetting = (setting.subtarget ? s[setting.subtarget][setting.settingsKey] : s[setting.settingsKey]) ?? setting.default;
                            frameContent += `<option value="${option.value}" ${(option.value === valueOfSetting || (!valueOfSetting && option.value == setting.default)) ? ' selected' : ''}>${option.name}</option>`
                        });
                        frameContent += `</select>
                            </div></div>`;
                        break;
                    default:
                        frameContent += `<div class='alert alert-info'>Unbekannte Einstellungsmöglichkeit ${setting.type} @ ${el.name}</div>`
                        break;
                }
            })
            frameContent += `</div></div>`
        }
    });
    frameContent += `<button class='button-success button button-round' id='saveCodebaseSettings'>Speichern <i class="bi bi-cloud-arrow-up"></i></button></div>
<div class='tab-content' id='tab_licence'><h2>Fehler melden:</h2><p><a href="https://discord.gg/8FyA6HBbXs" target="_blank" class="no-prevent button button-round button-success">Discord-Server <i class="bi bi-discord"></i></a> - <a href='https://github.com/Notme112/Codebase/issues/new/choose' class='no-prevent button button-success button-round' target='_blank'>Github <i class="bi bi-github"></i></a> - <a href='https://forum.rettungssimulator.online/index.php?thread/1423-resi-codebase-v1-0/&action=lastPost' class='no-prevent button button-success button-round' target='_blank'>Forum <i class="bi bi-chat-left-text"></i></a> - ReSi-Discord <i class="bi bi-discord"></i>: im Thread ReSi-Codebase im Bereich <code>#skripting</code>
<h3>Vielen Danke für deine Mithilfe!</h3></p><h2>Open-Source:</h2><p>Bootstrap-Icons:<br>
Copyright (c) 2019-2021 The Bootstrap Authors<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><p>
JQuery:<br>Copyright (c) 2021 OpenJS Foundation and other contributors, https://openjsf.org/, <br>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
<br>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>
THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</div></div>
<center>Joine unserem Discord-Server: <a href="https://discord.gg/8FyA6HBbXs" target="_blank" class="no-prevent">discord.gg/8FyA6HBbXs <i class="bi bi-discord"></i></a><br><br></center>
<h3>Danke für die Nutzung der ReSi-Codebase!</h3></div>`
    if (!frame || !frame.contentWindow || !frame.contentDocument) return;
    frame.contentDocument.body.innerHTML = frameContent;
    if(document.body.classList.contains('dark')){
        frame.contentDocument.body.classList.add('dark');
    }
    let closeFrameOrig = closeFrame;

    function closeFrame() {
        if (!frame || !frame.contentWindow || !frame.contentDocument) return;
        frame.contentDocument.body.innerHTML = '';
        closeFrameOrig();
        // @ts-ignore
        closeFrame = closeFrameOrig;
    }
    //frame functions
    let changes = false;
    frame.contentDocument.querySelectorAll<HTMLElement>('.checkbox-container, .input-round').forEach((element) => {
        ['click', 'keyup', 'change'].forEach((event) => {
            element?.addEventListener(event, (e) => {
                if(!(e?.target as HTMLElement).classList.contains('nochange')) changes = true;
            });
        });
    });
    frame.contentDocument?.body?.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') frame.contentDocument?.querySelector<HTMLElement>(".right.pointer")?.click();
    });
    frame.contentDocument?.querySelectorAll<HTMLElement>('.open-profile').forEach((el) => {
        el.addEventListener('click', (e) => openProfile(e, frame));
    });
    ['keyup', 'change', 'input'].forEach((event) => {
        frame?.contentDocument?.querySelector('#input_search')?.addEventListener(event, (e) => searchInFrame(frame));
    }),
    frame.contentDocument.querySelector('.right.pointer')?.addEventListener('click', () => leaveSettings(frame, changes));
    frame.contentDocument.querySelector('#showStorage')?.addEventListener('click', showStorage);
    frame.contentDocument.querySelector('#importSettings')?.addEventListener('click', importSettings)
    frame.contentDocument.querySelector('#exportSettings')?.addEventListener('click', () => exportSettings(s));
    frame.contentDocument.querySelector('#resetStorage')?.addEventListener('click', resetStorage);    
    frame.contentDocument.querySelectorAll('.tab[for]').forEach(el => el.addEventListener('click', (e) => onTabClick(e, frame)));
    frame.contentDocument.querySelectorAll<HTMLInputElement>('input[type="checkbox"]').forEach((e) => e.addEventListener('change', () => autoUncollapseCards(e, frame)));
    frame.contentDocument.querySelectorAll('.card.card-collapse .card-collapse-toggle').forEach((e) => e.addEventListener('click', (event) => collapsecards(event)));
    frame.contentDocument.querySelector('#saveCodebaseSettings')?.addEventListener('click', () => saveCodebaseSettings(s, frame));
};