/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generalFunctions/getAPI.ts":
/*!****************************************!*\
  !*** ./src/generalFunctions/getAPI.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAPI = void 0;
const scriptInfo_1 = __webpack_require__(/*! ./scriptInfo */ "./src/generalFunctions/scriptInfo.ts");
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
let fetchedAPIs = {};
async function getAPI(name) {
    return new Promise(async (res, reject) => {
        if (fetchedAPIs[name]) {
            res(fetchedAPIs[name]);
        }
        ;
        try {
            let response = await fetch(`/api/${name}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            let data = await response.json();
            fetchedAPIs[name] = data;
            res(data);
        }
        catch (e) {
            // @ts-ignore
            noticeModal('Error', `Es ist ein Fehler bei einem GET einer API aufgetreten<br>Script: ${scriptInfo_1.scriptInfo.name}<br>Version: ${scriptInfo_1.scriptInfo.version} <br>Autor: ${scriptInfo_1.scriptInfo.author}`);
            console.error(`Error while fetching API ${name}: ${e}`);
            reject();
        }
    });
}
exports.getAPI = getAPI;


/***/ }),

/***/ "./src/generalFunctions/notificationFunction.ts":
/*!******************************************************!*\
  !*** ./src/generalFunctions/notificationFunction.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkAndAskForNotificationPermission = void 0;
async function checkAndAskForNotificationPermission() {
    return new Promise(async (res) => {
        if (Notification.permission === "granted") {
            res(true);
        }
        else if (Notification.permission !== 'denied') {
            await Notification.requestPermission((perm) => {
                if (perm === "granted") {
                    res(true);
                }
                else {
                    res(false);
                }
            });
        }
    });
}
exports.checkAndAskForNotificationPermission = checkAndAskForNotificationPermission;


/***/ }),

/***/ "./src/generalFunctions/reload.ts":
/*!****************************************!*\
  !*** ./src/generalFunctions/reload.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reload = void 0;
function reload() {
    if (self != top) {
        window.parent.location.reload();
    }
    else {
        window.location.reload();
    }
}
exports.reload = reload;


/***/ }),

/***/ "./src/generalFunctions/scriptInfo.ts":
/*!********************************************!*\
  !*** ./src/generalFunctions/scriptInfo.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scriptInfo = void 0;
exports.scriptInfo = {
    name: 'ReSi-Codebase',
    version: '1.6.1',
    //@ts-ignore
    isProduktion: ReSi.userName === 'NiZi112'
};


/***/ }),

/***/ "./src/generalFunctions/validate.ts":
/*!******************************************!*\
  !*** ./src/generalFunctions/validate.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
function validate(text) {
    return text.replaceAll('<', '').replaceAll('>', '');
}
exports.validate = validate;


/***/ }),

/***/ "./src/generalFunctions/variableError.ts":
/*!***********************************************!*\
  !*** ./src/generalFunctions/variableError.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.variableIsIncorrect = void 0;
function variableIsIncorrect(variable, value) {
    console.log(`The variable ${variable} is incorrect. Value:`, value);
}
exports.variableIsIncorrect = variableIsIncorrect;


/***/ }),

/***/ "./src/modules.ts":
/*!************************!*\
  !*** ./src/modules.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.modules = void 0;
const gesamtmuenzen_1 = __webpack_require__(/*! ./modules/gesamtmuenzen */ "./src/modules/gesamtmuenzen.ts");
const toplist_1 = __webpack_require__(/*! ./modules/toplist */ "./src/modules/toplist.ts");
const einsatzlisteMax_1 = __webpack_require__(/*! ./modules/einsatzlisteMax */ "./src/modules/einsatzlisteMax.ts");
const flogout_1 = __webpack_require__(/*! ./modules/flogout */ "./src/modules/flogout.ts");
const streammode_1 = __webpack_require__(/*! ./modules/streammode */ "./src/modules/streammode.ts");
const onwSound_1 = __webpack_require__(/*! ./modules/onwSound */ "./src/modules/onwSound.ts");
const autocomplete_1 = __webpack_require__(/*! ./modules/autocomplete */ "./src/modules/autocomplete.ts");
const einsatzzaehler_1 = __webpack_require__(/*! ./modules/einsatzzaehler */ "./src/modules/einsatzzaehler.ts");
const pushFMS5_1 = __webpack_require__(/*! ./modules/pushFMS5 */ "./src/modules/pushFMS5.ts");
const zeitwechsel_1 = __webpack_require__(/*! ./modules/zeitwechsel */ "./src/modules/zeitwechsel.ts");
const uhr_1 = __webpack_require__(/*! ./modules/uhr */ "./src/modules/uhr.ts");
const settingsInNavbar_1 = __webpack_require__(/*! ./modules/settingsInNavbar */ "./src/modules/settingsInNavbar.ts");
const countChat_1 = __webpack_require__(/*! ./modules/countChat */ "./src/modules/countChat.ts");
const alertChat_1 = __webpack_require__(/*! ./modules/alertChat */ "./src/modules/alertChat.ts");
const filterKH_1 = __webpack_require__(/*! ./modules/filterKH */ "./src/modules/filterKH.ts");
const missionStatistics_1 = __webpack_require__(/*! ./modules/missionStatistics */ "./src/modules/missionStatistics.ts");
const showNAChance_1 = __webpack_require__(/*! ./modules/showNAChance */ "./src/modules/showNAChance.ts");
const switchAlarmingMode_1 = __webpack_require__(/*! ./modules/switchAlarmingMode */ "./src/modules/switchAlarmingMode.ts");
const differenzToAnotherUser_1 = __webpack_require__(/*! ./modules/differenzToAnotherUser */ "./src/modules/differenzToAnotherUser.ts");
const distanceVehicle_1 = __webpack_require__(/*! ./modules/distanceVehicle */ "./src/modules/distanceVehicle.ts");
const titleChange_1 = __webpack_require__(/*! ./modules/titleChange */ "./src/modules/titleChange.ts");
const alertFMS5_1 = __webpack_require__(/*! ./modules/alertFMS5 */ "./src/modules/alertFMS5.ts");
const statisticsLST_1 = __webpack_require__(/*! ./modules/statisticsLST */ "./src/modules/statisticsLST.ts");
const collapseCardsInAssociation_1 = __webpack_require__(/*! ./modules/collapseCardsInAssociation */ "./src/modules/collapseCardsInAssociation.ts");
const hideDevelopedStepsAtRoadmap_1 = __webpack_require__(/*! ./modules/hideDevelopedStepsAtRoadmap */ "./src/modules/hideDevelopedStepsAtRoadmap.ts");
const hideDeletedMessagesInChat_1 = __webpack_require__(/*! ./modules/hideDeletedMessagesInChat */ "./src/modules/hideDeletedMessagesInChat.ts");
const searchInMissionOverview_1 = __webpack_require__(/*! ./modules/searchInMissionOverview */ "./src/modules/searchInMissionOverview.ts");
const searchVehicle_1 = __webpack_require__(/*! ./modules/searchVehicle */ "./src/modules/searchVehicle.ts");
const showAverageMoneyInMissionOverview_1 = __webpack_require__(/*! ./modules/showAverageMoneyInMissionOverview */ "./src/modules/showAverageMoneyInMissionOverview.ts");
const resetAAOHotkey_1 = __webpack_require__(/*! ./modules/resetAAOHotkey */ "./src/modules/resetAAOHotkey.ts");
const autofocusMissionNew_1 = __webpack_require__(/*! ./modules/autofocusMissionNew */ "./src/modules/autofocusMissionNew.ts");
exports.modules = [{
        name: "Gesamtmünzenzähler",
        description: "Zeigt in der Seitenleiste die gesamt verdienten Münzen an.",
        settingsTarget: "gesamtmuenzen",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "gesamtmuenzenCheck",
        func: gesamtmuenzen_1.gesamtmuenzen,
        keywords: ['Münzen', 'Gesamtmünzen', 'Zahl', 'Zähler', 'verdient'],
        hasSettings: false,
        allSite: false,
        settings: [],
    },
    {
        name: "Toplist-Position",
        description: "Zeigt in Seitenleiste im Toplist-Link direkt die aktuelle Position auf der Topliste.",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "toplist",
        target: "toplistCheck",
        keywords: ['Toplist', 'Toplist-Position', 'Position', 'Topliste', 'Toplisten-Position'],
        allSite: false,
        func: toplist_1.toplist,
        hasSettings: false,
        settings: [],
    },
    {
        name: "Maximierte Einsatzliste",
        description: "Maximiert die Einsatzliste dauerhaft.",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "einsatzlisteMax",
        target: "maxMissionlistCheck",
        keywords: ['erweitert', 'Einsatzliste', 'erweiterte Einsatzliste', 'maximiert', 'maximierte Einsatzliste'],
        allSite: false,
        func: einsatzlisteMax_1.einsatzlisteMax,
        hasSettings: false,
        settings: [],
    },
    {
        name: "Flogout (Fast Logout)",
        description: "Zeigt direkt oben links am Rand ein Logout-Symbol",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "flogout",
        target: "flogoutCheck",
        keywords: ['FastLogout', 'Logout', 'Fast', 'Logout', 'schneller', 'Logout'],
        allSite: false,
        func: flogout_1.flogout,
        hasSettings: false,
        settings: [],
    },
    {
        name: "Eigener Streammode-Text",
        description: "Zeigt statt dem Chat euren eigenen Text an",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "streammode",
        target: "streammodeCheck",
        keywords: ['Streamer', 'Youtube', 'Streammode-Text', 'Streammode', 'Streamer-Modus', 'Twitch', 'YT'],
        allSite: false,
        func: streammode_1.streammode,
        hasSettings: true,
        settings: [{
                subtarget: "text",
                target: "streamerText",
                name: "Text",
                type: "input-text",
                settingsKey: "stream_mode",
                preset: "TEXT",
                default: 'Lade dir JETZT die ReSi-Codebase herunter: <a href="https://github.com/Notme112/Codebase/raw/main/install.user.js" target="_blank">github.com/Notme112/Codebase/raw/main/install.user.js</a>'
            }],
    },
    {
        name: "Eigene Sounds",
        description: "Erlaubt euch, eigene Sounds in das Spiel zu bringen",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "ownSound",
        target: "ownSoundCheck",
        keywords: ['Streamer', 'Youtube', 'Streammode-Text', 'Streammode', 'Streamer-Modus'],
        allSite: false,
        func: onwSound_1.ownSound,
        hasSettings: true,
        settings: [{
                subtarget: "audio",
                target: "newCallAudio",
                name: "Neuer-Anruf-Sound",
                type: "input-text",
                settingsKey: "newCall",
                preset: "URL",
                default: '/sounds/newCall.mp3'
            }, {
                subtarget: "audio",
                target: "fmsAudio",
                name: "FMS-Sound",
                type: "input-text",
                settingsKey: "fms",
                preset: "URL",
                default: '/sounds/radioFMS.mp3'
            }, {
                subtarget: "audio",
                target: "fms5Audio",
                name: "FMS5-Sound",
                type: "input-text",
                settingsKey: "fms5",
                preset: "URL",
                default: '/sounds/fms5.mp3'
            }, {
                subtarget: "audio",
                target: "errorAudio",
                name: "Error-Sound",
                type: "input-text",
                settingsKey: "error",
                preset: "URL",
                default: '/sounds/error.mp3'
            }, {
                subtarget: "audio",
                target: "finischAudio",
                name: "Einsatz-abgeschlossen-Sound",
                type: "input-text",
                settingsKey: "finish",
                preset: "URL",
                default: '/sounds/finishedMission.mp3'
            }],
    },
    {
        name: "Autocomplete verhindern",
        description: "Verhindert den Autocomplete des Browsers bei den Feldern der Einsatzannahme und des Chats.",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "autocomplete",
        target: "autocompleteCheck",
        keywords: ['Browser', 'complete', 'verhindern', 'autocomplete'],
        allSite: true,
        func: autocomplete_1.autocomplete,
        hasSettings: false,
        settings: [],
    },
    {
        name: "[outdated] Einsatzzähler",
        description: "Zeigt in Seitenleiste die Zahl der heute absolvierten Einsätze. Funktion in Statistics LST enthalten!",
        helpLink: "",
        version: "1.0.0 [outdatet]",
        author: "NiZi112",
        settingsTarget: "einsatzzaehler",
        target: "einsatzzeahlerCheck",
        keywords: ["Einsatz", "Zahl", "Zähler", "zählen", "Einsatze", "zählen"],
        allSite: false,
        func: einsatzzaehler_1.einsatzzaehler,
        hasSettings: false,
        settings: [],
    },
    {
        name: "Push FMS5",
        description: "Sendet eine Brwoserbenachrichtigung bei einem Sprechwunsch.",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "pushFMS",
        target: "pushFMSCheck",
        keywords: ['Browserbenachrichtigung', 'Browser', 'Push', 'Ping', 'PushFMS', 'FMS', 'Status', '5', 'Sprechwunsch'],
        allSite: false,
        func: pushFMS5_1.pushFMS5,
        hasSettings: false,
        settings: [],
    },
    {
        name: "Darkmode nach Uhrzeit (noch nicht verfügbar)",
        description: "Wechselt automatisch in den White- / Darkmode bei von euch bestimmter Einstellung",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "zeitwechsel",
        target: "darkModeCheck",
        keywords: ['Darkmode', 'Uhrzeit', 'automatisch'],
        allSite: true,
        func: zeitwechsel_1.zeitwechsel,
        hasSettings: true,
        settings: [{
                subtarget: "darkmodeSettings",
                target: "uhrMin",
                name: "Darkmode um ... Uhr ausschlaten",
                type: "input-number",
                settingsKey: "min",
                preset: "ZAHL",
                default: 7
            },
            {
                subtarget: "darkmodeSettings",
                target: "uhrMax",
                name: "Darkmode um ... Uhr einschalten",
                type: "input-number",
                settingsKey: "max",
                preset: "ZAHL",
                default: 19
            }
        ],
    },
    {
        name: "Uhr",
        description: "Zeigt in der Navbar eine kleine Uhr.",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "uhr",
        target: "uhrCheck",
        keywords: ["Uhr", "Zeit", "Uhrzeit", "Navbar"],
        allSite: false,
        func: uhr_1.uhr,
        hasSettings: false,
        settings: [],
    },
    {
        name: "Settings in der Navbar",
        description: "Die Codebase-Einstellungen lassen sich so auch direkt über die Navbar aufrufen.",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "settings",
        target: "settingsCheck",
        keywords: ["schnell", "Zugriff", "Einstellungen", "Navbar"],
        allSite: false,
        func: settingsInNavbar_1.settingsInNavbar,
        hasSettings: false,
        settings: [],
    }, {
        name: "Chat-Count",
        description: "Zählt die Zeichen im Chat.",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "chatCount",
        target: "chatCountCheck",
        keywords: ["Chat", "zählen", "Zeichen", "maximale", "Zeichen", "Zeichen", "zählen"],
        allSite: false,
        func: countChat_1.countChat,
        hasSettings: false,
        settings: [],
    }, {
        name: "AlertChat",
        description: "Sendet kleine Popups bei einer Chatnachricht.",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "alertChat",
        target: "alertChatCount",
        keywords: ["Popup", "Sytemnachricht", "Nachricht", "Benachrichtgung"],
        allSite: false,
        func: alertChat_1.alertChat,
        hasSettings: false,
        settings: [],
    }, {
        name: "FilterKH",
        description: "Filtert die Krankenhäuser in einem Sprechwunsch.",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        settingsTarget: "filterKH",
        target: "filterKHCheck",
        keywords: ["Filter", "Krankenhäuser", "Sprechwunsch", "FMS5", "S5"],
        allSite: true,
        func: filterKH_1.filterKH,
        hasSettings: true,
        settings: [{
                subtarget: "filterKHSettings",
                target: "ownKH",
                name: "Eigene Krankenhäuser anzeigen",
                type: "checkbox",
                settingsKey: "ownKH",
                preset: "CHECKBOX",
                default: true
            }, {
                subtarget: "filterKHSettings",
                target: "alliKH",
                name: "Verbandskrankenhäuser anzeigen",
                type: "checkbox",
                settingsKey: "alliKH",
                preset: "CHECKBOX",
                default: true
            }, {
                subtarget: "filterKHSettings",
                target: "maxDistanceKH",
                name: "Maximale Entfernung der Krankenhäuser",
                type: "input-number",
                settingsKey: "maxDistanceKH",
                preset: "ZAHL",
                default: 20
            },
            {
                subtarget: "filterKHSettings",
                target: "showPatientsInfoCheck",
                name: "Patienteninformationen verstecken",
                type: "checkbox",
                settingsKey: "showPatientsInfo",
                preset: "CHECKBOX",
                default: false
            },
            {
                subtarget: "filterKHSettings",
                target: "hidePatientsReleaseCheck",
                name: "\"Patienten entlassen\" verstecken",
                type: "checkbox",
                settingsKey: "hidePatientsRelease",
                preset: "CHECKBOX",
                default: false
            }
        ],
    }, {
        name: "Alarmansichtswechsler",
        description: "Wechselt im Einsatz mit der Taste \"U\" zwischen der Wachen- und Fahrzeugansicht.",
        settingsTarget: "switchAlarmingMode",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "switchAlarmingModeCheck",
        func: switchAlarmingMode_1.switchAlarmingMode,
        keywords: ['Switch', 'Einsatz', 'Mission', 'Wachenansicht', 'wechseln', 'Fahrzeugansicht'],
        hasSettings: false,
        allSite: true,
        settings: [],
    }, {
        name: "Einsatzstatistiken",
        description: "Zeigt in der Einsatzliste, wie viele Einsätze in welchem Status (rot, gelb, grün) ihr aktuell offen habt und wie viel Prozent von euren gesamten Einsötzen dieser Anteil ausmacht.",
        settingsTarget: "missionStatistics",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "statisticsCheck",
        func: missionStatistics_1.missionStatistics,
        keywords: ['Statistiken', 'Einsatz', 'Mission', 'Status', 'Einsätze', 'Info'],
        hasSettings: false,
        allSite: false,
        settings: [],
    }, {
        name: "ShowNAChance",
        description: "Zeigt im Einsatz mit Patienten die Chance der Grundvarinate, dass ein Notazt gebraucht wird.",
        settingsTarget: "ShowNAChance",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "ShowNAChanceCheck",
        func: showNAChance_1.showNAChance,
        keywords: ['Notarzt', 'Einsatz', 'Mission', 'Wahrscheinlichkeit', 'Einsätze', 'Info'],
        hasSettings: false,
        allSite: false,
        settings: [],
    }, {
        name: "Münzendifferenz",
        description: "Auf dem Nutzerprofil eines anderen Nutzer sehr ihr, wie viele Münzen mehr / wneiger dieser Nutzer hat.",
        settingsTarget: "differentToAnotherUser",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "differentToAnotherUserCheck",
        func: differenzToAnotherUser_1.differenceToAnotherUser,
        keywords: ['Profil', 'Nutzerprofil', 'Münzendifferenz', 'Gesamtmünzen', 'Münzen', 'Info'],
        hasSettings: false,
        allSite: true,
        settings: [],
    }, {
        name: "DistanceVehicle",
        description: "Filtert die Fahrzeuge im Einsatz, die weiter als x Kilometer entfernt sind.",
        settingsTarget: "vehicleDistance",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "distaceVehicleCheck",
        func: distanceVehicle_1.distanceVehicle,
        keywords: ['Einsatz', 'Mission', 'Fahrzueg', 'Einsätze', 'Fahrzeuge', 'AAO'],
        hasSettings: true,
        allSite: true,
        settings: [{
                subtarget: "distaceVehicle",
                target: "distaceVehicleDistaceInput",
                name: "Entfernung",
                type: "input-number",
                settingsKey: "distance",
                preset: "ZAHL",
                default: 20
            }],
    }, {
        name: "TitleChange",
        description: "Stellt einen individuellen Webseitentitel ein, welcher oben im Browsertab angezeigt wird.",
        settingsTarget: "titleChange",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "titleChangeCheck",
        func: titleChange_1.titleChange,
        keywords: ['Title', 'Titel', 'Browser', 'ReSi', 'Webseite', 'Info'],
        hasSettings: true,
        allSite: true,
        settings: [{
                subtarget: "titleChangeSettings",
                target: "titleChangeInput",
                name: "Titel",
                type: "input-text",
                settingsKey: "title",
                preset: "TEXT",
                default: 'rettungssimulator.online'
            }],
    }, {
        name: "AlertFMS5",
        description: "Sobald ein Fahrzeug einen Sprechwunsch hat, wird euch das per Mitteilungsbox angezeigt.",
        settingsTarget: "alertFMS5",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "alertFMS5Check",
        func: alertFMS5_1.alertFMS5,
        keywords: ['FMS', 'FMS5', 'Sprechwunsch', 'Benachrichtigung', 'Popup', 'Alert', 'Info'],
        hasSettings: false,
        allSite: true,
        settings: []
    }, {
        name: "StatisticsLST",
        description: "Dieses Modul zeit euch in eurer Leitstelle Fahrzeug- sowie Gebäudestatistiken. Weiter gibt es Statistiken zu den heute verdienten Münzen, absolvierten Einsätzen und transportierten Patienten.",
        settingsTarget: "statisticsLST",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "statisticsLSTCheck",
        func: statisticsLST_1.statisticsLST,
        keywords: ['LST', 'Leitstelle', 'Statistiken', 'Übersicht', 'Fahrzeuge', 'Gebäude', 'Info'],
        hasSettings: false,
        allSite: true,
        settings: []
    }, {
        name: "CollapseCards in Association",
        description: "Die Karten auf der Verbandsseite bei den Mitgliedern lassen sich zusammenklappen.",
        settingsTarget: "collapseCardsAssociation",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "collapseCardsAssociationCheck",
        func: collapseCardsInAssociation_1.collapseCardsInAssociation,
        keywords: ['Verband', 'Association', 'Cards', 'Collapse', 'automatisch', 'übersichtlich'],
        hasSettings: true,
        allSite: true,
        settings: [{
                subtarget: "collapseCardsAssociationSettings",
                target: "autoCollapseCards",
                name: "Automatisches zusammenklappen",
                type: "checkbox",
                settingsKey: "autoCollapseCards",
                preset: "CHECKBOX",
                default: false
            }]
    }, {
        name: "HideDevelopedStepsAtRoadmap",
        description: "Blendet bereits entwickelte Schritte auf der Roadmap aus.",
        settingsTarget: "hideDevelopedStepsAtRoadmap",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "hideDevelopedStepsAtRoadmapCheck",
        func: hideDevelopedStepsAtRoadmap_1.hideDevelopedStepsAtRoadmap,
        keywords: ['Roadmap', 'neu', 'fertig', 'ausblenden', 'Filter', 'verstecken'],
        hasSettings: false,
        allSite: true,
        settings: []
    }, {
        name: "HideDeletedMessagesInChat",
        description: "Blendet gelöschte Chatnachrichten aus.",
        settingsTarget: "hideDeletedMessagesInChat",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "hideDeletedMessagesInChatCheck",
        func: hideDeletedMessagesInChat_1.hideDeletedMessagesInChat,
        keywords: ['Chat', 'Nachrichten', 'gelöscht', 'ausblenden', 'Filter', 'verstecken'],
        hasSettings: false,
        allSite: false,
        settings: []
    }, {
        name: "SearchInMissionOverview",
        description: "Fügt eine Suche zur Einsatzübersicht hinzu.",
        settingsTarget: "searchInMissionOverview",
        version: "1.0.0",
        author: "NiZi112",
        target: "searchInMissionOverviewCheck",
        func: searchInMissionOverview_1.searchInMissionOverview,
        keywords: ["Suche", "Serach", "Mission", "Overview", "Übersicht", "Einsatz", "Mission", "Einsatzübersicht"],
        hasSettings: false,
        allSite: true,
        settings: []
    },
    {
        name: "Fahrzeug-Suche",
        description: "Suche schnell ein bestimmtes Fahrzeug im Einsatz.",
        settingsTarget: "searchVehicle",
        version: "1.0.0",
        author: "NiZi112",
        target: "searchVehicleCheck",
        func: searchVehicle_1.searchVehicle,
        keywords: ["Einsatz", "Suche", "Fahrzeug", "Wache", "finden", "suchen"],
        hasSettings: false,
        allSite: true,
        settings: []
    },
    {
        name: "showAverageMoneyInMissionOverview",
        description: "Zeigt den durchscnittlichen Verdienst pro Einsatz in der Einsatzübersicht an.",
        settingsTarget: "showAverageMoneyInMissionOverview",
        version: "1.0.0",
        author: "NiZi112",
        target: "showAberageMoneyInMissionOverviewCheck",
        func: showAverageMoneyInMissionOverview_1.showAverageMoneyInMissionOverview,
        keywords: ["Geld", "Einsatz", "Durchschnitt", "Münzen", "Übersicht", "Overview", "Einsatzübersicht"],
        hasSettings: false,
        allSite: false,
        settings: []
    },
    {
        name: "ResetAAO per Hotkey",
        description: "Tragt einen einzelnen Buchstaben hier ein, um mit diesem die AAO zurückzusetzen.",
        settingsTarget: "resetAAO",
        version: "1.0.0",
        author: "NiZi112",
        target: "resetAAOCheck",
        func: resetAAOHotkey_1.resetAAOHotkey,
        keywords: ["AAO", "Alarm", "zurücksetzten", "Alarm- und Ausrückeordnung", "Reset"],
        hasSettings: true,
        allSite: true,
        settings: [{
                subtarget: "resetAAOOptions",
                target: "keyToResetCheck",
                name: "Taste (bitte nur ein Buchstabe / Zahl)",
                type: "input-text",
                settingsKey: "keyToReset",
                preset: "TEXT",
                default: "R"
            }]
    },
    {
        name: "Autofocus neuer-Einsatz-Seite",
        description: "Wählt hier ein feld aus, was auf der Einsatz-anlegen-Seite automatisch fokussiert werden soll.",
        settingsTarget: "autofocusMissionNew",
        version: "1.0.0",
        author: "NiZi112",
        target: "autofocusMissionNewCheck",
        func: autofocusMissionNew_1.autofocusMissionNew,
        keywords: ["Einsatz", "anlegen", "Autofocus", "neuer", "Einsatz"],
        hasSettings: true,
        allSite: true,
        settings: [{
                subtarget: "autofocusMissionNewOptions",
                target: "autofocusMissionNewChoose",
                name: "Feld, welches fokussiert werden soll",
                type: "input-choose",
                settingsKey: "field",
                preset: "AUSWAHL",
                default: "newMissionNameInput",
                options: [
                    { value: 'newMissionNameInput', name: 'Einsatzname' },
                    { value: 'newNameInput', name: 'Anrufender' },
                    { value: 'newMissionRoadInput', name: 'Straße' },
                    { value: 'newMissionHousenumberInput', name: 'Hausnummer' },
                    { value: 'newMissionCustomText', name: 'Freitext' }
                ]
            }]
    }
];


/***/ }),

/***/ "./src/modules/alertChat.ts":
/*!**********************************!*\
  !*** ./src/modules/alertChat.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.alertChat = void 0;
async function alertChat(s) {
    // @ts-ignore
    socket.on("associationMessage", (msg) => {
        // @ts-ignore
        if (msg.message && msg.userName != ReSi.userName) {
            // @ts-ignore
            systemMessage({
                'title': `${msg.userName}`,
                'message': `${msg.message}`,
                'type': 'info'
            });
        }
    });
}
exports.alertChat = alertChat;


/***/ }),

/***/ "./src/modules/alertFMS5.ts":
/*!**********************************!*\
  !*** ./src/modules/alertFMS5.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.alertFMS5 = void 0;
async function alertFMS5(s) {
    try {
        // @ts-ignore
        socket.on("vehicleFMS", (vehicleFMSObject) => {
            // @ts-ignore
            if (vehicleFMSObject.userVehicleFMS != 5 || (vehicleFMSObject.userName != null && vehicleFMSObject.userName != ReSi.userName))
                return;
            // @ts-ignore
            if (window.location.href.endsWith('#dispo=true') || window.location.href.endsWith('&dispo=true') || window.location.href.includes('#dispo=true') || window.location.href.includes('&dispo=true') || location.hash == '')
                modal(`Sprechwunsch`, `${vehicleFMSObject.userVehicleName} hat einen Sprechwunsch`, 'öffnen', 'schließen', () => {
                    if (vehicleFMSObject.vehicleID == 43) {
                        // @ts-ignore
                        openFrame(`/vehicle/${vehicleFMSObject.userVehicleID}`, '1/2/4/4');
                    }
                    else {
                        // @ts-ignore
                        openFrame(`/mission/${vehicleFMSObject.userMissionID}`, '1/1/4/5');
                    }
                });
        });
    }
    catch (e) {
        console.error('socket not found');
    }
}
exports.alertFMS5 = alertFMS5;


/***/ }),

/***/ "./src/modules/autocomplete.ts":
/*!*************************************!*\
  !*** ./src/modules/autocomplete.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.autocomplete = void 0;
async function autocomplete(s) {
    if (location.href.includes('/missionNew/'))
        return;
    document.querySelectorAll('input').forEach((e) => {
        e?.setAttribute('autocomplete', 'off');
    });
}
exports.autocomplete = autocomplete;


/***/ }),

/***/ "./src/modules/autofocusMissionNew.ts":
/*!********************************************!*\
  !*** ./src/modules/autofocusMissionNew.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.autofocusMissionNew = void 0;
async function autofocusMissionNew(s) {
    if (location.href.includes('/missionNew/'))
        document.addEventListener('keyup', (e) => {
            if (e.key.toLowerCase() == s.resetAAO.keyToReset) {
                document.querySelectorAll('#mission-vehicle-group-by-vehicle .mission-vehicle.vehicle.mission-vehicle-selected')?.forEach(e => {
                    e.click();
                });
                document.querySelectorAll('.mission-aao-available').forEach(e => e.removeAttribute('aaocount'));
            }
        });
}
exports.autofocusMissionNew = autofocusMissionNew;


/***/ }),

/***/ "./src/modules/collapseCardsInAssociation.ts":
/*!***************************************************!*\
  !*** ./src/modules/collapseCardsInAssociation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.collapseCardsInAssociation = void 0;
async function collapseCardsInAssociation(s) {
    if (!location.href.includes('/association/'))
        return;
    let autoCollapse = s.collapseCardsAssociation.autoCollapseCards;
    let containsVerbandsleitung = Array.from(document.querySelectorAll('.card-headline')).filter((e) => e.innerHTML.includes('Verbandsleitung'));
    containsVerbandsleitung.forEach((e) => {
        e.innerHTML = e.innerHTML + '<i class="bi bi-caret-up-fill pointer right card-collapse-toggle"></i>';
        e.parentElement?.classList.add(`card-collapse`);
        if (autoCollapse)
            e.parentElement?.classList.add('collapsed');
    });
}
exports.collapseCardsInAssociation = collapseCardsInAssociation;


/***/ }),

/***/ "./src/modules/countChat.ts":
/*!**********************************!*\
  !*** ./src/modules/countChat.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.countChat = void 0;
async function countChat(s) {
    function countCharackters() {
        let charackters = document.querySelector("#chatInput")?.value.length.toString();
        if (!charackters) {
            charackters = "0";
        }
        ;
        if (charackters.length == 1) {
            charackters = "00" + charackters;
        }
        else if (charackters.length == 2) {
            charackters = "0" + charackters;
        }
        let element = document.querySelector("#chracktarsChatCount");
        if (!element) {
            return;
        }
        element.innerHTML = charackters;
        if (parseInt(charackters) > 500) {
            document.querySelector("#chracktarsChatCount")?.classList.add("label-danger");
            document.querySelector("#chracktarsChatCount")?.classList.remove("label-success");
        }
        else {
            document.querySelector("#chracktarsChatCount")?.classList.add("label-success");
            document.querySelector("#chracktarsChatCount")?.classList.remove("label-danger");
        }
    }
    ;
    const chat = document.querySelector('#new-chat-jump-to');
    if (!chat) {
        return;
    }
    const old = chat.innerHTML;
    let element = document.querySelector('#chatInput');
    if (!element) {
        return;
    }
    ['keyup', 'focus'].forEach((event) => {
        if (!element) {
            return;
        }
        element.addEventListener(event, () => {
            chat.innerHTML = (old + '&nbsp;<span class="label label-success" id="chracktarsChatCount" style="width: 12%">000</span>');
            // @ts-ignore
            showJumpToNewChat();
            countCharackters();
        });
    });
    ['focusout', 'submit'].forEach((event) => {
        if (!element) {
            return;
        }
        element?.addEventListener(event, () => {
            chat.innerHTML = old;
            // @ts-ignore
            hideJumpToNewChat();
        });
    });
}
exports.countChat = countChat;


/***/ }),

/***/ "./src/modules/differenzToAnotherUser.ts":
/*!***********************************************!*\
  !*** ./src/modules/differenzToAnotherUser.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.differenceToAnotherUser = void 0;
const getAPI_1 = __webpack_require__(/*! ../generalFunctions/getAPI */ "./src/generalFunctions/getAPI.ts");
async function differenceToAnotherUser(s) {
    if (!location.pathname.includes('/profile/'))
        return;
    const res = await (0, getAPI_1.getAPI)('user');
    // @ts-ignore
    var diff = parseInt(document.querySelectorAll('.detail-subtitle b')[2]?.textContent?.replaceAll('.', '') || '0') - res.muenzenTotal, negative;
    diff < 0 ? negative = true : negative = false;
    diff = Math.abs(diff);
    let newElement = document.createElement('span');
    newElement.innerHTML = `<i class="bi bi-plus-slash-minus"></i> Differenz: <b>${diff.toLocaleString()}</b> Münzen ${negative ? 'weniger als Du' : 'mehr als Du'}<br>`;
    document.querySelectorAll('.detail-subtitle')[1]?.after(newElement);
}
exports.differenceToAnotherUser = differenceToAnotherUser;


/***/ }),

/***/ "./src/modules/distanceVehicle.ts":
/*!****************************************!*\
  !*** ./src/modules/distanceVehicle.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.distanceVehicle = void 0;
async function distanceVehicle(s) {
    if (!location.pathname.includes('/mission/'))
        return;
    let distance = s.distaceVehicle ? s.distaceVehicle.distance : 10;
    function applyFilter(dis) {
        const el = document.querySelectorAll('.mission-vehicle');
        const km = document.querySelectorAll('.vehicle-distance');
        for (var i = 0; i < el.length; i++) {
            var e = el[i];
            if (parseFloat(km[i]?.innerText?.replace('~', '')) > dis) {
                e?.classList.remove('vehicle');
                e.style.display = 'none';
            }
            else {
                if (!e.classList.contains('vehicle')) {
                    e?.classList.add('vehicle');
                    e.style.display = '';
                }
                ;
            }
            ;
        }
        // @ts-ignore
        updateAAOButtons();
    }
    ;
    if (s.filterKMActualActive)
        applyFilter(distance ? distance : 10);
    else
        applyFilter(1000000);
    let newElement = document.createElement('div');
    newElement.innerHTML = `<button class="button button-round button-${s.filterKMActualActive ? 'success' : 'danger'}" id="toggleVehicleFilter">Fahrzeuge ${s.filterKMActualActive ? 'nicht ' : ''}filtern</button>`;
    document.querySelector('.enroute')?.before(newElement);
    document.querySelector('#toggleVehicleFilter')?.addEventListener('click', () => {
        s.filterKMActualActive = !s.filterKMActualActive;
        localStorage.storage_resi_base = JSON.stringify(s);
        if (s.filterKMActualActive) {
            applyFilter(distance ? distance : 10);
            let element = document.querySelector('#toggleVehicleFilter');
            element?.classList.remove('button-danger');
            element?.classList.add('button-success');
            if (element)
                element.innerHTML = 'Fahrzeuge nicht filtern';
        }
        else {
            applyFilter(1000000);
            let element = document.querySelector('#toggleVehicleFilter');
            element?.classList.add('button-danger');
            element?.classList.remove('button-success');
            if (element)
                element.innerHTML = 'Fahrzeuge filtern';
        }
    });
}
exports.distanceVehicle = distanceVehicle;


/***/ }),

/***/ "./src/modules/einsatzlisteMax.ts":
/*!****************************************!*\
  !*** ./src/modules/einsatzlisteMax.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.einsatzlisteMax = void 0;
async function einsatzlisteMax(s) {
    let element = document.querySelector('#missions .panel-expand');
    if (element?.firstChild && element.firstChild instanceof HTMLElement)
        element.firstChild?.click();
}
exports.einsatzlisteMax = einsatzlisteMax;


/***/ }),

/***/ "./src/modules/einsatzzaehler.ts":
/*!***************************************!*\
  !*** ./src/modules/einsatzzaehler.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.einsatzzaehler = void 0;
const variableError_1 = __webpack_require__(/*! ../generalFunctions/variableError */ "./src/generalFunctions/variableError.ts");
async function einsatzzaehler(s) {
    let today = (new Date()).getDate();
    if (!localStorage.getItem("finished_missions_nizi") || !localStorage.getItem("finished_missions_nizi_time")) {
        localStorage.setItem("finished_missions_nizi", "0");
        localStorage.setItem("finished_missions_nizi_time", today.toString());
    }
    ;
    if (localStorage.getItem("finished_missions_nizi_time") != today.toString()) {
        localStorage.setItem("finished_missions_nizi", "0");
        localStorage.setItem("finished_missions_nizi_time", today.toString());
    }
    ;
    let newElement = document.createElement("li");
    newElement.id = "finishedMissionsToday";
    newElement.innerHTML = `Einsätze heute: ${localStorage.getItem("finished_missions_nizi")}`;
    document.querySelector("#darkMode")?.after(newElement);
    // @ts-ignore
    socket.on("finishMission", (e) => {
        // @ts-ignore
        let mission = ControlCenter.missions[e];
        if (!mission || (mission.isShared && !mission.ownParticipation))
            return;
        var missions = parseInt(localStorage.getItem("finished_missions_nizi") || "0");
        missions++;
        localStorage.setItem("finished_missions_nizi", missions.toString());
        let element = document.querySelector('#finishedMissionsToday');
        if (!element) {
            (0, variableError_1.variableIsIncorrect)('element (mission counter)', element);
            return;
        }
        element.innerHTML = `Einsätze heute: ${localStorage.getItem("finished_missions_nizi")}`;
    });
}
exports.einsatzzaehler = einsatzzaehler;


/***/ }),

/***/ "./src/modules/filterKH.ts":
/*!*********************************!*\
  !*** ./src/modules/filterKH.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filterKH = void 0;
const variableError_1 = __webpack_require__(/*! ../generalFunctions/variableError */ "./src/generalFunctions/variableError.ts");
async function filterKH(s) {
    let containsUebernehmen = Array.from(document.querySelectorAll('.label-info')).filter((e) => e.innerHTML.includes('übernommen'));
    let containsKrankenhauszuweisung = Array.from(document.querySelectorAll('.card-headline')).filter((e) => e.innerHTML.includes('Krankenhauszuweisung'));
    if ((document.querySelectorAll('.s5').length > 0 && location.pathname.includes('vehicle') && containsKrankenhauszuweisung.length > 0) || containsUebernehmen.length > 0) {
        let val = s?.filterKHSettings?.maxDistanceKH || 0;
        let own = s?.filterKHSettings?.ownKH;
        let alli = s?.filterKHSettings?.alliKH;
        let active = s?.filterKHActive || false;
        let newElement = document.createElement("button");
        newElement.classList.add('button', 'button-round', 'button-danger');
        newElement.id = 'changeFilterKHMode';
        newElement.innerHTML = 'Filter aktivieren';
        document.querySelector('.card')?.after(newElement);
        if (s?.filterKHSettings ? s?.filterKHSettings?.showPatientsInfo : false) {
            let el = document.querySelector('.card');
            if (el) {
                el.style.display = 'none';
            }
        }
        if (s?.filterKHSettings ? s?.filterKHSettings?.hidePatientsRelease : false) {
            let el = document.querySelector('#releasePatient');
            if (el) {
                el.style.display = 'none';
            }
        }
        function addFilter() {
            let progressBoxes = document.querySelectorAll('.box-progress');
            for (var i = 1; i < progressBoxes?.length + 1; i++) {
                if (document.querySelector('#releasePatient') === progressBoxes[i])
                    continue;
                var j = 1 + (i * 2) - 1;
                let element = document.querySelectorAll('.box-text')[j];
                if (!element || !(element instanceof HTMLElement)) {
                    continue;
                }
                var entf = parseInt(element?.textContent?.replace(' km', '') || "0");
                if (entf < val) {
                    if (progressBoxes[i].innerHTML.includes('<span class="label label-info label-round text-small">')) {
                        if (alli) {
                            progressBoxes[i].style.display = "flex";
                        }
                        else {
                            progressBoxes[i].style.display = "none";
                        }
                    }
                    else if (own) {
                        progressBoxes[i].style.display = "flex";
                    }
                    else {
                        progressBoxes[i].style.display = "none";
                    }
                    ;
                }
                else {
                    progressBoxes[i].style.display = "none";
                }
            }
        }
        function removeFilter() {
            let progressBoxes = document.querySelectorAll('.box-progress');
            progressBoxes.forEach((e) => {
                e.style.display = "flex";
            });
            if (s.filterKHSettings ? s.filterKHSettings.hidePatientsRelease : false) {
                let el = document.querySelector('#releasePatient');
                if (el) {
                    el.style.display = 'none';
                }
            }
        }
        ;
        let element = document.querySelector('#changeFilterKHMode');
        if (!element) {
            (0, variableError_1.variableIsIncorrect)('#changeFilterKHMode', element);
            return;
        }
        element?.addEventListener('click', function () {
            if (element?.classList.contains('button-danger')) {
                addFilter();
                element?.classList.remove('button-danger');
                element?.classList.add('button-success');
                element.textContent = 'Filter aktiviert';
                s.filterKHActive = true;
            }
            else {
                removeFilter();
                element?.classList.remove('button-success');
                element?.classList.add('button-danger');
                if (!element)
                    return;
                element.textContent = 'Filter deaktiviert';
                s.filterKHActive = false;
            }
            localStorage.storage_resi_base = JSON.stringify(s);
        });
        if (active) {
            element?.click();
        }
    }
    else {
        return;
    }
    ;
}
exports.filterKH = filterKH;


/***/ }),

/***/ "./src/modules/flogout.ts":
/*!********************************!*\
  !*** ./src/modules/flogout.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flogout = void 0;
const variableError_1 = __webpack_require__(/*! ../generalFunctions/variableError */ "./src/generalFunctions/variableError.ts");
async function flogout(s) {
    let element = document.querySelector('.brand-img');
    if (!element) {
        (0, variableError_1.variableIsIncorrect)('element (toplist-position)', element);
        return;
    }
    element.style.display = 'inline';
    element.style.paddingRight = '20px';
    element.innerHTML = '<i class="bi bi-box-arrow-right"></i>';
    element.addEventListener('click', async () => {
        fetch('/api/deauthenticate').then(() => {
            location.reload();
        }).catch((err) => {
            console.error(err);
        });
    });
}
exports.flogout = flogout;


/***/ }),

/***/ "./src/modules/gesamtmuenzen.ts":
/*!**************************************!*\
  !*** ./src/modules/gesamtmuenzen.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gesamtmuenzen = void 0;
const getAPI_1 = __webpack_require__(/*! ../generalFunctions/getAPI */ "./src/generalFunctions/getAPI.ts");
async function gesamtmuenzen(s) {
    const r = await (0, getAPI_1.getAPI)('user');
    let newElement = document.createElement('li');
    // @ts-ignore
    newElement.innerHTML = `<li>${r?.muenzenTotal?.toLocaleString()} Münzen</li>`;
    document.querySelector('#darkMode')?.after(newElement);
}
exports.gesamtmuenzen = gesamtmuenzen;


/***/ }),

/***/ "./src/modules/hideDeletedMessagesInChat.ts":
/*!**************************************************!*\
  !*** ./src/modules/hideDeletedMessagesInChat.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hideDeletedMessagesInChat = void 0;
async function hideDeletedMessagesInChat(s) {
    function deleteMessages() {
        document.querySelectorAll(".message-deleted").forEach(e => e?.remove());
    }
    ;
    // @ts-ignore
    socket.on("associationMessageDelete", associationMessageDeleteObject => {
        deleteMessages();
    });
    deleteMessages();
}
exports.hideDeletedMessagesInChat = hideDeletedMessagesInChat;


/***/ }),

/***/ "./src/modules/hideDevelopedStepsAtRoadmap.ts":
/*!****************************************************!*\
  !*** ./src/modules/hideDevelopedStepsAtRoadmap.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hideDevelopedStepsAtRoadmap = void 0;
async function hideDevelopedStepsAtRoadmap(s) {
    if (!location.href.includes('/roadmap'))
        return;
    let element = document.querySelector('.label-success')?.parentElement?.parentElement?.parentElement;
    if (element)
        element.style.display = 'none';
    let element2 = element?.nextElementSibling;
    if (element2 && element2 instanceof HTMLElement)
        element2.style.display = 'none';
}
exports.hideDevelopedStepsAtRoadmap = hideDevelopedStepsAtRoadmap;


/***/ }),

/***/ "./src/modules/missionStatistics.ts":
/*!******************************************!*\
  !*** ./src/modules/missionStatistics.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.missionStatistics = void 0;
async function missionStatistics(s) {
    let data;
    function calcPercent() {
        let red = document.querySelectorAll('.mission-list-progress-1')?.length || 0;
        let yellow = document.querySelectorAll('.mission-list-progress-2')?.length || 0;
        let green = document.querySelectorAll('.mission-list-progress-3')?.length || 0;
        let aRed = document.querySelectorAll('#sharedMissions .mission-list-progress-1')?.length || 0;
        let aYellow = document.querySelectorAll('#sharedMissions .mission-list-progress-2')?.length || 0;
        let aGreen = document.querySelectorAll('#sharedMissions .mission-list-progress-3')?.length || 0;
        let oRed = document.querySelectorAll('#ownMissions .mission-list-progress-1')?.length || 0;
        let oYellow = document.querySelectorAll('#ownMissions .mission-list-progress-2')?.length || 0;
        let oGreen = document.querySelectorAll('#ownMissions .mission-list-progress-3')?.length || 0;
        let all = red + yellow + green;
        let rPer = Math.floor(red / all * 100);
        let yPer = Math.floor(yellow / all * 100);
        let gPer = Math.floor(green / all * 100);
        if (isNaN(rPer))
            rPer = 0;
        if (isNaN(yPer))
            yPer = 0;
        if (isNaN(gPer))
            gPer = 0;
        document.querySelector('#missionPercent')?.setAttribute('data-tooltip', `Rot: ${red} (${rPer}%, eigene: ${oRed}, shared: ${aRed}),<br>Gelb: ${yellow} (${yPer}%, eigene: ${oYellow}, shared: ${aYellow}),<br>Grün: ${green} (${gPer}%, eigene: ${oGreen}, shared: ${aGreen})`);
    }
    ;
    let newElement = document.createElement('div');
    newElement.innerHTML = `<span id="mission-detail"><i class="bi bi-sliders"></i>:</span>`;
    if (!document.querySelector('#mission-detail'))
        document.querySelector('#missions .panel-headline')?.prepend(newElement);
    let newElement2 = document.createElement('span');
    newElement2.id = 'missionPercent';
    newElement2.setAttribute('data-tooltip', '');
    newElement2.classList.add('bi', 'bi-info-circle', 'nizi112');
    newElement2.style.paddingLeft = '5px';
    document.querySelector('#mission-detail')?.append(newElement2);
    calcPercent();
    // @ts-ignore
    socket.on('missionStatus', () => {
        calcPercent();
    });
    // @ts-ignore
    socket.on('finishMission', () => {
        calcPercent();
    });
}
exports.missionStatistics = missionStatistics;


/***/ }),

/***/ "./src/modules/onwSound.ts":
/*!*********************************!*\
  !*** ./src/modules/onwSound.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ownSound = void 0;
async function ownSound(s) {
    // @ts-ignore
    sounds.radioFMS = new Audio(s.audio.fms ? s.audio.fms : '');
    // @ts-ignore
    sounds.newCall = new Audio(s.audio.newCall ? s.audio.newCall : '');
    // @ts-ignore
    sounds.fms5 = new Audio(s.audio.fms5 ? s.audio.fms5 : '');
    // @ts-ignore
    sounds.finishedMission = new Audio(s.audio.finish ? s.audio.finish : '');
    // @ts-ignore
    sounds.error = new Audio(s.audio.error ? s.audio.error : '');
}
exports.ownSound = ownSound;


/***/ }),

/***/ "./src/modules/pushFMS5.ts":
/*!*********************************!*\
  !*** ./src/modules/pushFMS5.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pushFMS5 = void 0;
const notificationFunction_1 = __webpack_require__(/*! ../generalFunctions/notificationFunction */ "./src/generalFunctions/notificationFunction.ts");
async function pushFMS5(s) {
    if (!await (0, notificationFunction_1.checkAndAskForNotificationPermission)())
        return;
    // @ts-ignore
    socket.on("vehicleFMS", (vehicleFMSObject) => {
        if (`${vehicleFMSObject.userVehicleFMS}`.includes("5")) {
            new Notification("Sprechwunsch!", {
                body: `Dein Fahrzueg ${vehicleFMSObject.userVehicleName} im Rettungssimulator hat einen Sprechwunsch!`
            });
        }
    });
}
exports.pushFMS5 = pushFMS5;


/***/ }),

/***/ "./src/modules/resetAAOHotkey.ts":
/*!***************************************!*\
  !*** ./src/modules/resetAAOHotkey.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetAAOHotkey = void 0;
async function resetAAOHotkey(s) {
    if (location.href.includes('/mission/'))
        document.addEventListener('keyup', (e) => {
            if (e.key.toLowerCase() == s.resetAAO.keyToReset) {
                document.querySelectorAll('#mission-vehicle-group-by-vehicle .mission-vehicle.vehicle.mission-vehicle-selected')?.forEach(e => {
                    e.click();
                });
                document.querySelectorAll('.mission-aao-available').forEach(e => e.removeAttribute('aaocount'));
            }
        });
}
exports.resetAAOHotkey = resetAAOHotkey;


/***/ }),

/***/ "./src/modules/searchInMissionOverview.ts":
/*!************************************************!*\
  !*** ./src/modules/searchInMissionOverview.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.searchInMissionOverview = void 0;
async function searchInMissionOverview(s) {
    if (!location.pathname.includes("/missionOverview"))
        return;
    let newElement = document.createElement("div");
    newElement.innerHTML = `<input class="input-round input-inline nochange" type="text" value="" style="padding-left:10px;" id="input_search" placeholder="Suche..." autocomplete="off">`;
    newElement.classList.add('input-container', 'right');
    document.querySelector('.detail-subtitle')?.append(newElement);
    let newElement2 = document.createElement("div");
    newElement2.innerHTML = `<h4 class='label label-info searchNoResult hidden'>Die Suche lieferte keine Ergebnisse! Bitte probiere es mit einem anderen Suchwort!</h4>`;
    document.querySelector('.detail-header')?.after(newElement2);
    let newElement3 = document.createElement("style");
    newElement3.innerHTML = `.searchHidden { display: none !important };`;
    document.head.appendChild(newElement3);
    let query = 'table tbody tr';
    function search() {
        var searchWord = document.querySelector('#input_search')?.value?.toLowerCase() || '';
        if (searchWord == '') {
            document.querySelectorAll(query).forEach((el) => {
                el.classList.remove('searchHidden');
                document.querySelector('.searchNoResult')?.classList.add('hidden');
            });
            return;
        }
        let elems = document.querySelectorAll(query);
        for (var j = 0; j < document.querySelectorAll(query).length; j++) {
            if (elems[j].querySelectorAll('td')[1].innerText.toLowerCase().includes(searchWord) || elems[j].querySelectorAll('td')[1].innerText.toLowerCase().includes(searchWord)) {
                elems[j].classList.remove('searchHidden');
                document.querySelector('.searchNoResult')?.classList.add('hidden');
            }
            else {
                elems[j].classList.add('searchHidden');
            }
        }
        if (elems.length == document.querySelectorAll('.searchHidden td').length) {
            document.querySelector('.searchNoResult')?.classList.remove('hidden');
        }
    }
    ;
    ['input', 'change', 'keyup'].forEach((event) => {
        document.querySelector('#input_search')?.addEventListener(event, search);
    });
}
exports.searchInMissionOverview = searchInMissionOverview;


/***/ }),

/***/ "./src/modules/searchVehicle.ts":
/*!**************************************!*\
  !*** ./src/modules/searchVehicle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.searchVehicle = void 0;
async function searchVehicle(s) {
    let vehicles = document.querySelectorAll('#mission-vehicle-group-by-vehicle .mission-vehicle, .mission-vehicles-group');
    vehicles.forEach(vehicle => {
        vehicle.classList.add('searchable');
    });
    let newElement = document.createElement("div");
    newElement.classList.add('card');
    newElement.innerHTML = `<div class="card-headline card-headline-danger">
    Fahrzeug-Suche
    </div>
    <div class="card-body">
      <div class="input-container">
        <div class="input-label">Name</div>
        <div class="input-content">
          <input class="input-round" type="text" id="vehicleSearch" placeholder="Suche eingeben..." autocomplete="off">
          <div class="input-icon"><i class="fas fa-filter" data-tooltip="Icons by Fontawsome (fontawesome.com) unter CC BY 4.0 Lizenz"></i></div>
        </div>
      </div>
    </div>`;
    document.querySelector('.enroute')?.before(newElement);
    document.querySelector('#vehicleSearch')?.addEventListener('keyup', (e) => {
        let search = document.querySelector('#vehicleSearch')?.value?.toLowerCase();
        if (!search) {
            vehicles.forEach(vehicle => {
                if (vehicle.classList.contains('mission-vehicles-group'))
                    vehicle.style.display = 'block';
                else
                    vehicle.style.display = 'flex';
            });
            return;
        }
        vehicles.forEach(vehicle => {
            if (!search)
                return;
            if (vehicle?.innerText?.toLowerCase()?.includes(search)) {
                if (vehicle?.classList?.contains('mission-vehicles-group'))
                    vehicle.style.display = 'block';
                else
                    vehicle.style.display = 'flex';
            }
            else {
                vehicle.style.display = 'none';
            }
        });
    });
}
exports.searchVehicle = searchVehicle;


/***/ }),

/***/ "./src/modules/settingsInNavbar.ts":
/*!*****************************************!*\
  !*** ./src/modules/settingsInNavbar.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.settingsInNavbar = void 0;
async function settingsInNavbar(s) {
    let newElement = document.createElement("span");
    newElement.classList.add("openCodebaseSettings");
    newElement.innerHTML = `<i class="bi bi-gear codebase" data-tooltip="ReSi-Codebase-Einstellungen"></i>`;
    document.querySelector(".brand")?.appendChild(newElement);
    newElement.addEventListener('click', () => {
        let element = document.querySelector('#Codebase');
        if (element instanceof HTMLElement)
            element.click();
    });
}
exports.settingsInNavbar = settingsInNavbar;


/***/ }),

/***/ "./src/modules/showAverageMoneyInMissionOverview.ts":
/*!**********************************************************!*\
  !*** ./src/modules/showAverageMoneyInMissionOverview.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showAverageMoneyInMissionOverview = void 0;
async function showAverageMoneyInMissionOverview(s) {
    if (!location.pathname.includes("/missionOverview"))
        return;
    function getAverageMissionCredits() {
        let list = document.querySelectorAll('table > tbody > tr > td:nth-child(3) > a');
        let sum = 0;
        list.forEach((el) => {
            sum += parseInt(el.innerHTML.replaceAll('.', ''));
        });
        return (sum / list.length).toFixed(2);
    }
    let newElement = document.createElement("span");
    newElement.classList.add('label', 'label-info');
    newElement.innerHTML = `Durchschnittlicher Verdienst pro Einsatz: ${getAverageMissionCredits()} Münzen`;
    document.querySelector('.detail-subtitle')?.append(newElement);
}
exports.showAverageMoneyInMissionOverview = showAverageMoneyInMissionOverview;


/***/ }),

/***/ "./src/modules/showNAChance.ts":
/*!*************************************!*\
  !*** ./src/modules/showNAChance.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showNAChance = void 0;
const getAPI_1 = __webpack_require__(/*! ../generalFunctions/getAPI */ "./src/generalFunctions/getAPI.ts");
async function showNAChance(s) {
    if (!location.pathname.includes('/mission/'))
        return;
    // @ts-ignore
    const data = (await (0, getAPI_1.getAPI)('missions'))[parseInt(document.querySelector('.detail-title')?.getAttribute('missionid') || '0')];
    let newElement = document.createElement('span');
    // @ts-ignore
    newElement.innerHTML = `Grundvariante: ${data.patients.min}-${data.patients.max} Patienten, ${data.patients.naChance}\% NA-Wahrscheinlichkeit`;
    newElement.classList.add('label', 'label-info');
    if (data.patients)
        document.querySelector('#s5')?.after(newElement);
}
exports.showNAChance = showNAChance;


/***/ }),

/***/ "./src/modules/statisticsLST.ts":
/*!**************************************!*\
  !*** ./src/modules/statisticsLST.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.statisticsLST = void 0;
const getAPI_1 = __webpack_require__(/*! ../generalFunctions/getAPI */ "./src/generalFunctions/getAPI.ts");
const scriptInfo_1 = __webpack_require__(/*! ../generalFunctions/scriptInfo */ "./src/generalFunctions/scriptInfo.ts");
async function statisticsLST(s) {
    if (!localStorage.counterConfig)
        localStorage.counterConfig = JSON.stringify({
            dayReset: (new Date()).getDate(),
            yearReset: (new Date()).getFullYear(),
            missionsToday: 0,
            missionsYear: 0,
            moneyToday: 0,
            moneyYear: 0,
            patientsToday: 0,
            patientsYear: 0
        });
    if (document.querySelectorAll('#tab_controlCenter_stats').length && location.pathname.includes('/department/')) {
        var config = JSON.parse(localStorage.counterConfig);
        //vehicles
        const userVehicles = await (0, getAPI_1.getAPI)('userVehicles');
        const vehicleCategories = await (0, getAPI_1.getAPI)('vehicleCategories');
        // @ts-ignore
        for (var i in userVehicles) {
            // @ts-ignore
            for (var j in vehicleCategories) {
                // @ts-ignore
                if (!vehicleCategories[j].count)
                    vehicleCategories[j].count = 0;
                // @ts-ignore
                if (vehicleCategories[j].ids.includes(userVehicles[i].vehicleID)) {
                    // @ts-ignore
                    ++vehicleCategories[j].count;
                }
            }
        }
        //buildings
        const userBuildings = await (0, getAPI_1.getAPI)('userBuildings');
        const buildingCategories = await (0, getAPI_1.getAPI)('buildings');
        // @ts-ignore
        userBuildings.forEach((el) => {
            // @ts-ignore
            if (!buildingCategories[(el.buildingType - 1)].count)
                buildingCategories[(el.buildingType - 1)].count = 0;
            // @ts-ignore
            buildingCategories[(el.buildingType - 1)].count++;
        });
        //insert into #tab_controlCenter_stats
        var table = `<table class="table-divider striped"><thead><tr><th><u>Wachentyp</u></th><th><u>Anzahl</u></th></tr></thead></tbody>`;
        // @ts-ignore
        buildingCategories.forEach((el) => {
            table += `<tr><td>${el.buildingName}</td><td>${el.count ? el.count : 0}</td></tr>`;
        });
        table += `</tbody><thead><tr><th><u>Fahrzeugtyp</u></th><th><u>Anzahl</u></th></tr></thead></tbody>`;
        // @ts-ignore
        for (i in vehicleCategories) {
            // @ts-ignore
            if (!vehicleCategories[i].ids.length || vehicleCategories[i].ids[0] > 10000)
                continue;
            table += `
        <tr><td>` +
                // @ts-ignore
                vehicleCategories[i].name + `</td><td>` + vehicleCategories[i].count ? vehicleCategories[i].count : 0;
        }
        table += `</tbody><thead><tr><th><u>Typ</u></th><th><u>Anzahl</u></th></tr></thead><tbody><tr><td>Einsätze heute</td><td>${config.missionsToday.toLocaleString()}</td></tr><tr><td>Einsätze dieses Jahr</td><td>${config.missionsYear.toLocaleString()}</td></tr><tr><td>Patienten heute</td><td>${config.patientsToday.toLocaleString()}</td></tr><tr><td>Patienten dieses Jahr</td><td>${config.patientsYear.toLocaleString()}</td></tr><tr><td>Münzen heute</td><td>${config.moneyToday.toLocaleString()}</td></tr><tr><td>Münzen dieses Jahr</td><td>${config.moneyYear.toLocaleString()}</td></tr></tbody></table>`;
        let newElement = document.createElement('div');
        newElement.innerHTML = table;
        document.querySelector('#tab_controlCenter_stats')?.append(newElement);
        document.querySelector('#tab_controlCenter_stats')?.querySelector('.label')?.setAttribute('style', '');
    }
    if (location.pathname == '/') {
        const config = JSON.parse(localStorage.counterConfig);
        function changeConfig(type, plus = 1) {
            if (config.yearReset != (new Date()).getFullYear()) {
                for (i in config) {
                    if (i.includes('Year'))
                        continue;
                    config[i] = 0;
                }
                config.yearReset = (new Date()).getFullYear();
                config.dayReset = (new Date()).getDate();
            }
            if (config.dayReset != (new Date()).getDate()) {
                for (var i in config) {
                    if (i.includes('Year'))
                        continue;
                    config[i] = 0;
                }
                config.dayReset = (new Date()).getDate();
            }
            if (type) {
                switch (type) {
                    case 'patients':
                        config.patientsToday++;
                        config.patientsYear++;
                        break;
                    case 'money':
                        config.moneyToday += plus;
                        config.moneyYear += plus;
                        break;
                    case 'missions':
                        config.missionsToday++;
                        config.missionsYear++;
                        break;
                    default:
                        console.error(`Unknown config type "${type}" => changeConfig@Statistics LST (V${scriptInfo_1.scriptInfo.version})`);
                }
            }
            localStorage.counterConfig = JSON.stringify(config);
        }
        // @ts-ignore
        socket.on('patientStatus', async (e) => {
            // @ts-ignore
            if (((e.treatmentUserVehicleID == NULL || await (0, getAPI_1.getAPI)(`userVehicles?id=${e.treatmentUserVehicleID}`)).status == 'error') && (e.transportUserVehicleID != NULL || await (0, getAPI_1.getAPI)(`userVehicles?id=${e.transportUserVehicleID}`)).status == 'error')
                return;
            if (e.userPatientStatus == 3)
                changeConfig('patients');
        });
        var actual = parseInt(document.querySelector('.muenzen')?.textContent?.replaceAll('.', '') || '0');
        // @ts-ignore
        socket.on('muenzenUpdate', (e) => {
            e = parseInt(e.toString().replaceAll('.', ''));
            actual = parseInt(actual.toString().replaceAll('.', ''));
            if (e > actual) {
                var diff = e - actual;
                changeConfig('money', diff);
            }
            actual = e;
        });
        // @ts-ignore
        socket.on('finishMission', (e) => {
            // @ts-ignore
            let mission = ControlCenter.missions[e];
            if (!mission || (mission.isShared && !mission.ownParticipation))
                return;
            changeConfig('missions');
        });
    }
}
exports.statisticsLST = statisticsLST;


/***/ }),

/***/ "./src/modules/streammode.ts":
/*!***********************************!*\
  !*** ./src/modules/streammode.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.streammode = void 0;
const variableError_1 = __webpack_require__(/*! ../generalFunctions/variableError */ "./src/generalFunctions/variableError.ts");
async function streammode(s) {
    let element = document.querySelector("#chat");
    if (!element) {
        (0, variableError_1.variableIsIncorrect)('element (streammode)', element);
        return;
    }
    element.innerHTML = s?.text?.stream_mode?.toString() || '';
    element.style.padding = '15px';
}
exports.streammode = streammode;


/***/ }),

/***/ "./src/modules/switchAlarmingMode.ts":
/*!*******************************************!*\
  !*** ./src/modules/switchAlarmingMode.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.switchAlarmingMode = void 0;
async function switchAlarmingMode(s) {
    if (!location.pathname.includes('/mission/'))
        return;
    document.addEventListener('keyup', (e) => {
        if (e.keyCode == 85) {
            document.querySelector('.detail-right .button-gray')?.click();
        }
    });
}
exports.switchAlarmingMode = switchAlarmingMode;


/***/ }),

/***/ "./src/modules/titleChange.ts":
/*!************************************!*\
  !*** ./src/modules/titleChange.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.titleChange = void 0;
async function titleChange(s) {
    document.title = s.titleChangeSettings ? s.titleChangeSettings.title ? s.titleChangeSettings.title : 'rettungssimulator.online' : 'rettungssimulator.online';
}
exports.titleChange = titleChange;


/***/ }),

/***/ "./src/modules/toplist.ts":
/*!********************************!*\
  !*** ./src/modules/toplist.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toplist = void 0;
const getAPI_1 = __webpack_require__(/*! ../generalFunctions/getAPI */ "./src/generalFunctions/getAPI.ts");
const variableError_1 = __webpack_require__(/*! ../generalFunctions/variableError */ "./src/generalFunctions/variableError.ts");
async function toplist(s) {
    const r = await (0, getAPI_1.getAPI)('user');
    let element = document.querySelectorAll('.dropdown-content li')[3];
    if (!element) {
        (0, variableError_1.variableIsIncorrect)('element (toplist-position)', element);
        return;
    }
    // @ts-ignore
    element.innerHTML = `Topliste: ${r.toplistRank}`;
}
exports.toplist = toplist;


/***/ }),

/***/ "./src/modules/uhr.ts":
/*!****************************!*\
  !*** ./src/modules/uhr.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uhr = void 0;
async function uhr(s) {
    let newElement = document.createElement("div");
    newElement.id = "clock";
    document.querySelector(".brand")?.appendChild(newElement);
    var updateClock = function () {
        var date = new Date();
        var stunde = date.getHours().toString();
        var minute = date.getMinutes().toString();
        if (minute.length == 1) {
            minute = `0${minute}`;
        }
        ;
        newElement.innerHTML = `${stunde}:${minute} <i class="bi bi-clock"></i>`;
    };
    setInterval(updateClock, 50);
}
exports.uhr = uhr;


/***/ }),

/***/ "./src/modules/zeitwechsel.ts":
/*!************************************!*\
  !*** ./src/modules/zeitwechsel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zeitwechsel = void 0;
async function zeitwechsel(s) {
    console.log("Ich zähle die Topliste");
}
exports.zeitwechsel = zeitwechsel;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validate_1 = __webpack_require__(/*! ./generalFunctions/validate */ "./src/generalFunctions/validate.ts");
const scriptInfo_1 = __webpack_require__(/*! ./generalFunctions/scriptInfo */ "./src/generalFunctions/scriptInfo.ts");
const variableError_1 = __webpack_require__(/*! ./generalFunctions/variableError */ "./src/generalFunctions/variableError.ts");
const modules_1 = __webpack_require__(/*! ./modules */ "./src/modules.ts");
const reload_1 = __webpack_require__(/*! ./generalFunctions/reload */ "./src/generalFunctions/reload.ts");
(async () => {
    const LAST_REMOVED_STORAGE = '1.5.1';
    //return 
    if (document.querySelectorAll('.landing-header').length)
        return;
    //load icons
    let stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css';
    document.head.appendChild(stylesheet);
    //add own css to head
    let css = document.createElement('style');
    css.innerHTML = `.codebase:focus{outline: none;}`;
    document.head?.appendChild(css);
    //save darkmode-settings in localstorage
    if (location.pathname == '/') {
        let darkModeBtn = document.querySelector('#darkMode');
        if (!darkModeBtn) {
            (0, variableError_1.variableIsIncorrect)('darkModeBtn', darkModeBtn);
        }
        try {
            if (darkModeBtn?.innerHTML?.includes('Tag'))
                localStorage.setItem('darkmode_resi_base', 'true');
            else
                localStorage.setItem('darkmode_resi_base', 'false');
        }
        catch {
            console.error('Darkmode-Button nicht gefunden');
        }
        ;
        darkModeBtn?.addEventListener('click', () => {
            if (localStorage.getItem('darkmode_resi_base') == 'true')
                localStorage.setItem('darkmode_resi_base', 'false');
            else
                localStorage.setItem('darkmode_resi_base', 'true');
        });
    }
    ;
    //function build default storage object from modules
    function buildDefaultStorage() {
        let obj = {};
        modules_1.modules.forEach((el) => {
            obj[el.settingsTarget] = false;
            if (el.hasSettings) {
                el.settings.forEach((setting) => {
                    if (setting.subtarget && !obj[setting.subtarget])
                        obj[setting.subtarget] = {};
                    if (setting.subtarget)
                        obj[setting.subtarget][setting.settingsKey] = setting.default;
                    else
                        obj[setting.settingsKey] = setting.default;
                });
            }
        });
        return obj;
    }
    //new user
    if (!localStorage.storage_resi_base) {
        //set storage
        localStorage.setItem('storage_resi_base', JSON.stringify(buildDefaultStorage()));
        localStorage.setItem('resiBaseRemovedStorage', LAST_REMOVED_STORAGE);
        //show welcome message
        // @ts-ignore
        systemMessage({
            title: 'Willkommen bei der ReSi-Codebase!',
            message: `Schön, dass Du dich entschlossen hast, die ReSi-Codebase zu nutzen!<br><br>
Du kannst jeden Modul einzeln aktivieren, die Möglichkeit findest Du in einem Einstellungs-Panel, welches Du über die Seitenleiste aufrufen kannst.<br>
Probier doch einfach mal alle Module aus. Wenn Du nicht weißt, was ein Modul tut, dann klick einfach auf das [?] hinter dem Namen, damit kommst Du zur Wikiseite des Moduls.<br><br>
Fehler bitte im Forum melden - oder im Thread ReSi-Codebase auf Discord im Bereich <code>#skripting</code><br><br>
Gerne kannst du auch unserem Discord-Server beitreten: <i class="bi bi-discord"></i> <a href="https://discord.gg/8FyA6HBbXs" target="_blank" class="no-prevent">discord.gg/8FyA6HBbXs</a><br><br>

<b>Bitte beachte: die Browser Safari und Internet Explorer werden derzeit nicht unterstützt! Die meisten Module werden auch in diesen Browsern funktionieren, jedoch wird für diese Browser kein Support angeboten.</b>

Viel Spaß,<br>
Dein Team der ReSi-Codebase`,
            type: 'info'
        });
    }
    //remove storage if necessary
    if (localStorage.resiBaseRemovedStorage != LAST_REMOVED_STORAGE) {
        localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
        localStorage.resiBaseRemovedStorage = LAST_REMOVED_STORAGE;
    }
    //if bad storage, reset storage
    if (localStorage.storage_resi_base == '[object Object]') {
        // @ts-ignore
        systemMessage({
            'title': `Fehler in den Codebase-Einstellungen`,
            'message': `Es gab einen Fehler in den Codebase-Einstellungen, die Einstellungen wurden zurückgesetzt.`,
            'type': 'danger'
        });
        localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
    }
    //load storage
    const s = JSON.parse(localStorage.storage_resi_base);
    //codebase class
    class ReSiCodebase {
        version;
        settings;
        isProduction;
        constructor() {
            this.version = scriptInfo_1.scriptInfo.version;
            this.settings = s;
            this.isProduction = scriptInfo_1.scriptInfo.isProduktion;
        }
        getSettings() {
            return this.settings;
        }
        getVersion() {
            return this.version;
        }
        getProduction() {
            return this.isProduction;
        }
    }
    //function check settings and catching errors when there is a new branch
    function checkSettings() {
        if (!localStorage.storage_resi_base)
            (0, reload_1.reload)();
        modules_1.modules.forEach((el) => {
            if (el.hasSettings) {
                el.settings.forEach((setting) => {
                    if (setting.subtarget && !s[setting.subtarget]) {
                        s[setting.subtarget] = {};
                    }
                });
            }
        });
    }
    checkSettings();
    //create object from codebase class
    let codebase = new ReSiCodebase();
    //own frame
    //create list element
    const element = document.createElement('li');
    element.id = 'Codebase';
    element.innerHTML = `ReSi-Codebase <i class="bi bi-gear" style="padding-left:5px;"></i>`;
    document.querySelector('#darkMode')?.after(element);
    const frame = document.querySelector('#iframe');
    async function loadCodebaseFrame() {
        //build frame content
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <style>
    .searchHidden{
    display: none;
    };
    </style>
    <div class='detail-header'>
    <div class='detail-title'>ReSi-Codebase-Einstellungen
    <div class='right pointer'>
    <i class="bi bi-x"></i>
    </div>
    <div
        class='right pointer share'
        data-tooltip='Die ReSi-Codebase weiterempfehlen'
        share-url='https://forum.rettungssimulator.online/index.php?thread/1423-resi-codebase-v1-5/'
    >
    <i class="bi bi-share" style="padding-left:5px;"></i>
    </div>
    <div class="right" data-tooltip="Besuche die ReSi-Codebase auf Discord">
    <a href="https://discord.gg/8FyA6HBbXs" target="_blank" class="no-prevent">
    <i class="bi bi-discord" style="padding-left:5px;"></i>
    </a>
    </div>
    <div class="right" data-tooltip="Die ReSi-Codebase im Forum besuchen">
    <a href="https://forum.rettungssimulator.online/index.php?thread/1423-resi-codebase-v1-5/" target="_blank" class="no-prevent">
    <i class="bi bi-chat-left-text" style="padding-left:5px;"></i>
    </a>
    </div>
    </div>
    <div class='detail-subtitle'>Verwalte hier deine Einstellungen für die ReSi-Codebase
    <button class="button button-round button-success" id="showStorage">Gespeicherte Daten der Scripte anzeigen <i class="bi bi-clipboard-data"></i></button>
    <button id="exportSettings" class="button button-round button-success">Einstellungen exportieren <i class="bi bi-download"></i></button>
    <button id="importSettings" class="button button-round button-success">Einstellungen importieren <i class="bi bi-upload"></i></button>
    <button id="resetStorage" class="button button-round button-success">Einstellungen zurücksetzen <i class="bi bi-x-circle"></i></button>
    <div class="input-container nochange" style="float:right"><label for='input_search'>Suche <i class="bi bi-search" style="padding-left:5px;"></i></label>
    <input class="input-round input-inline nochange" type="text" value="" style="padding-left:20px;padding-right:20px;" id="input_search" placeholder="Suche..." autocomplete="off">
    </div>
    </div>
    </div>
    <div class='tabs tabs-horizotal'>
    <div class='tab tab-active' for='settings-moduls'>Module</div>
    <div class='tab' for='licence'>Sonstiges & Lizenzen</div>
    </div>
    <div class='tab-container'>
    <div class='tab-content tab-content-active' id='tab_settings-moduls'>
    <h2>Module:</h2>
    <h4 class='label label-info searchNoResult hidden'>Die Suche lieferte keine Ergebnisse! Bitte probiere es mit einem anderen Suchwort!</h4>`;
        //checkboxes for modules
        modules_1.modules.forEach((el) => {
            frameContent += `<div class='checkbox-container searchable'><input id='${el.target}' type='checkbox' ${s[el.settingsTarget] ? 'checked' : ''}><label for='${el.target}'>${el.name} aktivieren<a class='no-prevent' href='${el.helpLink}' target='_blank' data-tooltip='${el.description} Mehr im Hilfeartikel!'><i class="bi bi-question-circle" style="padding-left:5px;"></i></a> ${el.hasSettings ? '<span data-tooltip="Dieses Modul hat Einstellungen! Passe es dir nach deinem Geschmack an!"><i class="bi bi-exclamation-circle"></i></span>' : ''} <span class="label label-success"><i class="bi bi-person"></i> von: ${'<a href="javascript:;" class="open-profile pointer" profile="' + el.author + '">' + el.author + '</a>'}</span> <span class="label label-success"><i class="bi bi-git"></i> V${el.version}</span></label><div class='hidden keyword-serach'>${el.keywords.join(' ')}</div></div>`;
            if (el.hasSettings) {
                frameContent += `<div class="searchable card card-collapse${s[el.settingsTarget] ? '' : ' collapsed'}" for-module="${el.target}" style="padding-left:100px;">
    <div class="card-headline card-headline-danger">
    <i class="bi bi-gear"></i> Einstellungen zu ${el.name}
    <div class="card-tools">
    <span class="card-collapse-toggle pointer" style="font-size:15px;overflow:hidden;vertical-algin:middle"> <i class="bi bi-caret-${s[el.settingsTarget] ? 'up' : 'down'}"></i></span>
    </div>
    </div>
    <div class="card-body">`;
                el.settings.forEach((setting) => {
                    var value = setting.subtarget ? s[setting.subtarget][setting.settingsKey] : s[setting.settingsKey];
                    switch (setting.type) {
                        case 'checkbox':
                            frameContent += `<div class='checkbox-container'><input id='${setting.target}' ${value ? 'checked' : ''} type='checkbox'><label for='${setting.target}'>${setting.name} (${setting.preset})<a class='no-prevent' href='${el.helpLink}' target='_blank' data-tooltip='${el.description} Mehr im Hilfeartikel!'><i class="bi bi-question-circle" style="padding-left:5px;"></i></a></label></div>`;
                            break;
                        case 'input-text':
                            frameContent += `<div class='input-container'><div class='input-label'>${setting.name} (${setting.preset})<a class='no-prevent' href='${el.helpLink}' target='_blank' data-tooltip='${el.description} Mehr im Hilfeartikel!'><i class="bi bi-question-circle" style="padding-left:5px;"></i></a></div><div class="input-content"><div class='input-icon'><i class="bi bi-pencil"></i></div><input class='input-round' value='${value ? value : ''}' autocomplete='off' id='${setting.target}' placeholder='${setting.preset}'></div></div>`;
                            break;
                        case 'input-number':
                            frameContent += `<div class='input-container'><div class='input-label'>${setting.name} (${setting.preset})<a class='no-prevent' href='${el.helpLink}' target='_blank' data-tooltip='${el.description} Mehr im Hilfeartikel!'><i class="bi bi-question-circle" style="padding-left:5px;"></i></a></div><div class="input-content"><div class='input-icon'><i class="bi bi-pencil"></i></div><input class='input-round' type='number' value='${value ? value : ''}' autocomplete='off' id='${setting.target}' placeholder='${setting.preset}'></div></div>`;
                            break;
                        case 'input-choose':
                            frameContent += `<div class='input-container'><div class='input-label'>${setting.name} (${setting.preset})<a class='no-prevent' href='${el.helpLink}' target='_blank' data-tooltip='${el.description} Mehr im Hilfeartikel!'><i class="bi bi-question-circle" style="padding-left:5px;"></i></a></div>
                            <div class="input-content"><div class='input-icon'><i class="bi bi-pencil"></i></div>
                            <select id="${setting.target}" class="input-round">`;
                            setting.options.forEach((option) => {
                                let valueOfSetting = (setting.subtarget ? s[setting.subtarget][setting.settingsKey] : s[setting.settingsKey]) ?? setting.default;
                                frameContent += `<option value="${option.value}" ${(option.value === valueOfSetting || (!valueOfSetting && option.value == setting.default)) ? ' selected' : ''}>${option.name}</option>`;
                            });
                            frameContent += `</select>
                                </div></div>
                            </div>`;
                            break;
                        default:
                            frameContent += `<div class='alert alert-info'>Unbekannte Einstellungsmöglichkeit ${setting.type} @ ${el.name}</div>`;
                            break;
                    }
                });
                frameContent += `</div></div>`;
            }
        });
        frameContent += `<button class='button-success button button-round' id='saveCodebaseSettings'>Speichern <i class="bi bi-cloud-arrow-up"></i></button>
    </div>
    <div class='tab-content' id='tab_licence'>
    <h2>Fehler melden:</h2>
    <p>
    <a href="https://discord.gg/8FyA6HBbXs" target="_blank" class="no-prevent button button-round button-success">Discord-Server <i class="bi bi-discord"></i></a> - <a href='https://github.com/Notme112/Codebase/issues/new/choose' class='no-prevent button button-success button-round' target='_blank'>Github <i class="bi bi-github"></i></a> - <a href='https://forum.rettungssimulator.online/index.php?thread/1423-resi-codebase-v1-0/&action=lastPost' class='no-prevent button button-success button-round' target='_blank'>Forum <i class="bi bi-chat-left-text"></i></a> - ReSi-Discord <i class="bi bi-discord"></i>: im Thread ReSi-Codebase im Bereich <code>#skripting</code>
    <h3>Vielen Danke für deine Mithilfe!</h3>
    </p>
    <h2>Open-Source:</h2>
    <p>
    Bootstrap-Icons:<br>
    Copyright (c) 2019-2021 The Bootstrap Authors<br>
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br>
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </p>
    <p>
    JQuery:<br>
    Copyright (c) 2021 OpenJS Foundation and other contributors, https://openjsf.org/, <br>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    <br>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>
    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </div>
    </div>
    <center>Joine unserem Discord-Server: <a href="https://discord.gg/8FyA6HBbXs" target="_blank" class="no-prevent">discord.gg/8FyA6HBbXs <i class="bi bi-discord"></i></a><br><br></center>
    <h3>Danke für die Nutzung der ReSi-Codebase!</h3>
    </div>`;
        if (!frame || !frame.contentWindow || !frame.contentDocument)
            return;
        frame.contentDocument.body.innerHTML = frameContent;
        if (document.body.classList.contains('dark')) {
            frame.contentDocument.body.classList.add('dark');
        }
        let closeFrameOrig = closeFrame;
        function closeFrame() {
            if (!frame || !frame.contentWindow || !frame.contentDocument)
                return;
            frame.contentDocument.body.innerHTML = '';
            closeFrameOrig();
            // @ts-ignore
            closeFrame = closeFrameOrig;
        }
        //frame functions
        let changes = false;
        frame.contentDocument.querySelectorAll('.checkbox-container, .input-round').forEach((element) => {
            ['click', 'keyup', 'change'].forEach((event) => {
                element?.addEventListener(event, (e) => {
                    if (!e?.target.classList.contains('nochange'))
                        changes = true;
                });
            });
        });
        frame.contentDocument?.body?.addEventListener('keyup', (e) => {
            if (e.key === 'Escape')
                frame.contentDocument?.querySelector(".right.pointer")?.click();
        });
        frame.contentDocument?.querySelectorAll('.open-profile').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                let author = e.target.getAttribute('profile');
                if (!author)
                    return;
                // @ts-ignore
                if (changes)
                    modal('Profil des Autors aufrufen?', `Willst du das Profil von <b>${author}</b> aufrufen? Du hast ungespeicherte Änderungen in den Einstellungen. Diese gehen verloren, wenn du das Profil des Autors aufrufst.`, 'Aufrufen', 'Hier bleiben', () => {
                        if (!frame.contentWindow)
                            return;
                        frame.contentWindow.location.href = '/profile/' + author;
                    }, () => { });
                else {
                    if (!frame.contentWindow)
                        return;
                    frame.contentWindow.location.href = '/profile/' + author;
                }
            });
        });
        function searchInFrame() {
            var searchWord = frame?.contentDocument?.querySelector('#input_search')?.value?.toLowerCase() || '';
            if (searchWord == '') {
                frame?.contentDocument?.querySelectorAll('.searchable').forEach((el) => {
                    el.classList.remove('searchHidde');
                });
                frame?.contentDocument?.querySelectorAll('.searchNoResult').forEach((el) => {
                    el.classList.add('hidden');
                });
                return;
            }
            let searchAbles = frame?.contentDocument?.querySelectorAll('.searchable') || [];
            for (var j = 0; j <= searchAbles?.length; j++) {
                if (searchAbles[j]?.textContent?.toLowerCase()?.includes(searchWord)) {
                    searchAbles[j]?.classList?.remove('searchHidden');
                    frame?.contentDocument?.querySelectorAll('.searchNoResult').forEach((el) => {
                        el?.classList?.add('hidden');
                    });
                }
                else {
                    searchAbles[j]?.classList?.add('searchHidden');
                }
            }
            if (searchAbles?.length == frame?.contentDocument?.querySelectorAll('.searchHidden')?.length) {
                frame?.contentDocument?.querySelectorAll('.searchNoResult').forEach((el) => {
                    el?.classList?.remove('hidden');
                });
            }
        }
        ;
        ['keyup', 'change', 'input'].forEach((event) => {
            frame?.contentDocument?.querySelector('#input_search')?.addEventListener(event, searchInFrame);
        }),
            // ask if changes should be saved
            frame.contentDocument.querySelector('.right.pointer')?.addEventListener('click', () => {
                if (changes === true) {
                    // @ts-ignore
                    modal("Ohne Speichern verlassen?", "Du hast Änderungen vorgenommen, willst du diese Seichern?", "Speichern", "Ohne speichern verlassen", 
                    // @ts-ignore
                    () => { frame?.contentDocument?.querySelector("#saveCodebaseSettings")?.click(); }, 
                    // @ts-ignore
                    () => { parent?.closeFrame(); });
                }
                else {
                    // @ts-ignore
                    parent?.closeFrame();
                }
            });
        //show localStorge & sessionStorage
        frame.contentDocument.querySelector('#showStorage')?.addEventListener('click', async () => {
            var table = '<table class="table-divider striped"><thead><tr><th>Key</th><th>Wert</th></tr><tbody>';
            for (var i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (!key)
                    continue;
                table += `<tr><td>${key}</td><td>${localStorage[key]}</td><td onclick='localStorage.removeItem("${key}");$(this).parent().remove()'>löschen <i class="bi bi-trash"></i></td></tr>`;
            }
            var table2 = '<table class="table-divider striped"><thead><tr><th>Session-Storage: Key</th><th>Value</th></tr><tbody>';
            for (var i = 0; i < sessionStorage.length; i++) {
                let key = sessionStorage.key(i);
                if (!key)
                    continue;
                table2 += `<tr><td>${key}</td><td>${sessionStorage[key]}</td><td onclick='sessionStorage.removeItem("${key}");$(this).parent().remove()'>löschen <i class="bi bi-trash"></i></td></tr>`;
            }
            table += '</tbody></table>';
            table2 += '</tbody></table>';
            // @ts-ignore
            let tableModal = () => noticeModal('Gescheicherte Daten', `Hier siehst du, welche Daten im sog. local- & session-Storage gespeichert wurden. Davon ausgenommen sind sog. indexDB und Cookies<div style="height: 200px;overflow:auto">${table}${table2}</div><div>Session-Storage löschen: <button class="button button-round button-danger deleteSessionStorage">Daten unwiederruflich löschen <i class="bi bi-trash"></i></button></div><div>Local-Storage löschen: <button class="button button-round button-danger deleteLocalStorage">Daten unwiederruflich löschen <i class="bi bi-trash"></i></button></div><div>Session- & Local-Storage löschen: <button class="button button-round button-danger deleteAllStorage">Daten unwiederruflich löschen <i class="bi bi-trash"></i></button></div>`);
            tableModal();
            document.querySelector('.deleteLocalStorage')?.addEventListener('click', () => {
                // @ts-ignore
                modal('Local-Storage wirklich leeren?', 'Willst du den Local-Storage wirklich löschen? Dabei gehen alle <b>permanenten</b> Daten von Scripten und ähnlichem <b>unwiederruflich</b> verloren!', 'Ja, <b>unwiederruflich LÖSCHEN <i class="bi bi-trash"></i></b>', 'Nein, abbrechen', () => {
                    localStorage.clear();
                    localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
                    tableModal();
                    (0, reload_1.reload)();
                }, () => {
                    tableModal();
                });
            });
            document.querySelector('.deleteSessionStorage')?.addEventListener('click', () => {
                // @ts-ignore
                modal('Session-Storage wirklich leeren?', 'Willst du den Session-Storage wirklich löschen? Dabei gehen alle <b>temporären</b> Daten von Scripten und ähnlichem <b>unwiederruflich</b> verloren!', 'Ja, <b>unwiederruflich LÖSCHEN <i class="bi bi-trash"></i></b>', 'Nein, abbrechen', () => {
                    sessionStorage.clear();
                    localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
                    tableModal();
                    (0, reload_1.reload)();
                }, () => {
                    tableModal();
                });
            });
            document.querySelector('.deleteAllStorage')?.addEventListener('click', () => {
                // @ts-ignore
                modal('Session- und Local-Storage wirklich leeren?', 'Willst du den Session-Storage und Local-Storage wirklich löschen? Dabei gehen alle <b>temporären</b> und <b>permanenten</b> Daten von Scripten und ähnlichem <b>unwiederruflich</b> verloren!', 'Ja, <b>unwiederruflich LÖSCHEN <i class="bi bi-trash"></i></b>', 'Nein, abbrechen', () => {
                    sessionStorage.clear();
                    localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
                    tableModal();
                    (0, reload_1.reload)();
                }, () => {
                    tableModal();
                });
            });
        });
        //import
        frame.contentDocument.querySelector('#importSettings')?.addEventListener('click', async () => {
            //alerts wrong data
            function invalid() {
                // @ts-ignore
                noticeModal('<i class="bi bi-exclamation-triangle"></i> Fehler beim Importieren der Codebase-Einstellungen', 'Die Einstellungen sind nicht valide, bitte überprüfe diese!', 'Schließen');
            }
            //asks for data string
            // @ts-ignore
            var newSettings = await inputModal({
                title: 'Codebase-Einstellungen importieren <i class="bi bi-upload"></i>',
                label: 'Gib hier deine Einstellungen ein:',
                placeholder: 'Gib hier die Codebase-Einstellungen ein'
            });
            var error;
            //try to parse string
            try {
                JSON.parse(newSettings);
            }
            catch (e) {
                //if error show dialog
                invalid();
                error = true;
            }
            //if no error save
            if (!error) {
                localStorage.storage_resi_base = newSettings;
                (0, reload_1.reload)();
            }
        });
        //export
        frame.contentDocument.querySelector('#exportSettings')?.addEventListener('click', () => {
            // @ts-ignore
            noticeModal('Codebase-Einstellungen exportieren <i class="bi bi-download"></i>', `Hier kannst du deine Einstellungen kopieren und an Freunde weitergeben:<div style='overflow:auto'><code>${JSON.stringify(s)}</code></div><br><button class="button button-round button-success" id="shareSettings">In Zwischenablage kopieren <i class="bi bi-clipboard"></i></button>`, 'Schließen');
            document.querySelector('#shareSettings')?.addEventListener('click', (e) => {
                navigator.clipboard.writeText(JSON.stringify(s)).then(() => {
                    if (!e.target)
                        return;
                    if (e.target instanceof HTMLElement)
                        e.target.innerHTML = 'Kopiert! <i class="bi bi-clipboard-check"></i>';
                    setTimeout(() => {
                        if (!e.target)
                            return;
                        if (e.target instanceof HTMLElement)
                            e.target.innerHTML = 'In Zwischenablage kopieren <i class="bi bi-clipboard"></i>';
                    }, 3000);
                });
            });
        });
        frame.contentDocument.querySelector('#resetStorage')?.addEventListener('click', () => {
            // @ts-ignore
            modal('Alle Einstellungen zurücksetzen', 'Willst du wirklich alle Einstellungen zurücksetzten? Die aktuellen Einstellungen sind dann unwiderruflich verloren!', 'Ja, zurücksetzen', 'Nein, behalten', () => {
                localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
                (0, reload_1.reload)();
            }, () => { });
        });
        //save settings
        function saveCodebaseSettings() {
            checkSettings();
            modules_1.modules.forEach((el) => {
                s[el.settingsTarget] = frame?.contentDocument?.querySelector(`#${el.target}`)?.checked;
                if (el.hasSettings) {
                    el.settings.forEach((setting) => {
                        switch (setting.type) {
                            case 'checkbox':
                                if (setting.subtarget) {
                                    s[setting.subtarget][setting.settingsKey] = frame?.contentDocument?.querySelector(`#${setting.target}`)?.checked;
                                }
                                else {
                                    s[setting.settingsKey] = frame?.contentDocument?.querySelector(`#${setting.target}`)?.checked;
                                }
                                break;
                            case 'input-text':
                                if (setting.subtarget) {
                                    s[setting.subtarget][setting.settingsKey] = (0, validate_1.validate)(frame?.contentDocument?.querySelector(`#${setting.target}`)?.value || '') || 'Fehler';
                                }
                                else {
                                    s[setting.settingsKey] = (0, validate_1.validate)(frame?.contentDocument?.querySelector(`#${setting.target}`)?.value || '') || 'Fehler';
                                }
                                break;
                            case 'input-number':
                                if (setting.subtarget) {
                                    s[setting.subtarget][setting.settingsKey] = parseFloat(frame?.contentDocument?.querySelector(`#${setting.target}`)?.value || '0') || 0;
                                }
                                else {
                                    s[setting.settingsKey] = parseFloat(frame?.contentDocument?.querySelector(`#${setting.target}`)?.value || '0') || 0;
                                }
                                break;
                            case 'input-choose':
                                let value = frame?.contentDocument?.querySelector(`#${setting.target}`)?.value, found = false;
                                setting.options.forEach((option) => {
                                    if (option.value == value)
                                        found = true;
                                });
                                if (!found) {
                                    value = setting.default;
                                }
                                if (setting.subtarget) {
                                    s[setting.subtarget][setting.settingsKey] = value;
                                }
                                else {
                                    s[setting.settingsKey] = value;
                                }
                                break;
                            default:
                                console.error(`Can't save setting ${setting.name} @ ${el.name} with target ${el.target} to storage @ subcategory ${setting.subtarget ?? 'none'} and category ${setting.settingsKey} with type ${setting.type}`);
                        }
                    });
                }
            });
            localStorage.storage_resi_base = JSON.stringify(s);
            (0, reload_1.reload)();
        }
        frame.contentDocument.querySelectorAll('.tab[for]').forEach((e) => {
            e?.addEventListener('click', (e) => {
                let target = e.target;
                frame.contentDocument?.querySelector('.tab-active')?.classList.remove('tab-active');
                frame.contentDocument?.querySelector('.tab-content-active')?.classList.remove('tab-content-active');
                target?.classList.add('tab-active');
                frame.contentDocument?.querySelector(`#tab_${target.getAttribute('for')}`)?.classList.add('tab-content-active');
            });
        });
        frame.contentDocument.querySelectorAll('input[type="checkbox"]').forEach((e) => {
            console.log(e);
            e.addEventListener('change', () => {
                console.log('change');
                let el = frame.contentDocument?.querySelector(`.card-collapse[for-module="${e.id}"]`);
                console.log(el);
                if (e.checked && el?.classList.contains('collapsed'))
                    el?.classList.remove('collapsed');
                if (!e.checked && !el?.classList.contains('collapsed'))
                    el?.classList.add('collapsed');
            });
        });
        frame.contentDocument.querySelectorAll('.card.card-collapse .card-collapse-toggle').forEach((e) => {
            e.addEventListener('click', (event) => {
                let el = event.target;
                el.parentElement?.parentElement?.parentElement?.parentElement?.classList.toggle('collapsed');
            });
        });
        frame.contentDocument.querySelector('#saveCodebaseSettings')?.addEventListener('click', saveCodebaseSettings);
        frame?.removeEventListener('load', loadCodebaseFrame);
    }
    ;
    element.addEventListener('click', async () => {
        // @ts-ignore
        openFrame('', '1/1/4/5');
        if (!frame) {
            (0, variableError_1.variableIsIncorrect)('frame', frame);
        }
        frame?.addEventListener('load', loadCodebaseFrame);
    });
    //run functions
    modules_1.modules.forEach(async (el) => {
        try {
            if (s[el.settingsTarget]) {
                if (location.pathname != "/" && el.allSite) {
                    await el.func(s);
                }
                if (location.pathname == "/") {
                    await el.func(s);
                }
            }
        }
        catch (e) {
            console.error(`Fehler im Modul ${el.name}: ${e}`);
        }
    });
    //write log on main site
    if (window.location.pathname == '/') {
        var log = `Running ${scriptInfo_1.scriptInfo.name} in Version ${scriptInfo_1.scriptInfo.version} on site ${window.location.href}!`;
        modules_1.modules.forEach((el) => {
            log += `\n${el.name}: ${s[el.settingsTarget] ? '✔ aktiv' : '✘ inaktiv'}`;
        });
        log += `\nDas Team der Codebase wünscht viel Spaß!
Bei Fehlern kopiere bitte diesen Text und füge ihn in deine Fehlermeldung ein. Der Text enthält wichtige Informationenn zu deinen verwendeten Modulen.`;
        console.log(log);
    }
    document.querySelectorAll('.openCodebaseSettings').forEach((el) => {
        el?.addEventListener('click', () => {
            document.querySelector('#Codebase')?.click();
        });
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=beta.js.map