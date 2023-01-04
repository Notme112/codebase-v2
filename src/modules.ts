import { gesamtmuenzen } from "./modules/gesamtmuenzen";
import { toplist } from "./modules/toplist";
import { einsatzlisteMax } from "./modules/einsatzlisteMax";
import { flogout } from "./modules/flogout";
import { streammode } from "./modules/streammode";
import { ownSound } from "./modules/onwSound";
import { autocomplete } from "./modules/autocomplete";
import { einsatzzaehler } from "./modules/einsatzzaehler";
import { pushFMS5 } from "./modules/pushFMS5";
import { zeitwechsel } from "./modules/zeitwechsel";
import { uhr } from "./modules/uhr";
import { settingsInNavbar } from "./modules/settingsInNavbar";
import { countChat } from "./modules/countChat";
import { alertChat } from "./modules/alertChat";
import { filterKH } from "./modules/filterKH";
import { missionStatistics } from "./modules/missionStatistics";
import { showNAChance } from "./modules/showNAChance";
import { switchAlarmingMode } from "./modules/switchAlarmingMode";
import { differenceToAnotherUser } from "./modules/differenzToAnotherUser";
import { distanceVehicle } from "./modules/distanceVehicle";
import { titleChange } from "./modules/titleChange";
import { alertFMS5 } from "./modules/alertFMS5";
import { statisticsLST } from "./modules/statisticsLST";
import { collapseCardsInAssociation } from "./modules/collapseCardsInAssociation";
import { hideDevelopedStepsAtRoadmap } from "./modules/hideDevelopedStepsAtRoadmap";
import { hideDeletedMessagesInChat } from "./modules/hideDeletedMessagesInChat";
import { searchInMissionOverview } from "./modules/searchInMissionOverview";
import { searchVehicle } from "./modules/searchVehicle";
import { showAverageMoneyInMissionOverview } from "./modules/showAverageMoneyInMissionOverview";
import { resetAAOHotkey } from "./modules/resetAAOHotkey";
import { autofocusMissionNew } from "./modules/autofocusMissionNew";
import { improvedAAOMovement } from "./modules/improvedAAOMovement";
import { shortlinks } from "./modules/shortlinks";
import { filterAssociationMembers } from "./modules/filterAccosiationMembers";
import { averageMoneyInMissionOverview } from "./modules/averageMoneyInMissionOverview";
import { removeEventText } from "./modules/removeEventText";
import { bigMap } from "./modules/bigMap";
import { mapMode } from "./modules/mapMode";

export const modules = [{
        name: "Gesamtmünzenzähler",
        description: "Zeigt in der Seitenleiste die gesamt verdienten Münzen an.",
        settingsTarget: "gesamtmuenzen",
        helpLink: "",
        version: "1.0.0",
        author: "NiZi112",
        target: "gesamtmuenzenCheck",
        func: gesamtmuenzen,
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
        func: toplist,
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
        func: einsatzlisteMax,
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
        func: flogout,
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
        func: streammode, 
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
        func: ownSound,
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
        func: autocomplete,
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
        func: einsatzzaehler,
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
        func: pushFMS5,
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
        func: zeitwechsel,
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
        func: uhr,
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
        func: settingsInNavbar,
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
        func: countChat,
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
        func: alertChat,
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
        func: filterKH,
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
        func: switchAlarmingMode,
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
        func: missionStatistics,
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
        func: showNAChance,
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
        func: differenceToAnotherUser,
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
        func: distanceVehicle,
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
        func: titleChange,
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
        func: alertFMS5,
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
        func: statisticsLST,
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
        func: collapseCardsInAssociation,
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
        func: hideDevelopedStepsAtRoadmap,
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
        func: hideDeletedMessagesInChat,
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
        func: searchInMissionOverview,
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
        func: searchVehicle,
        keywords: ["Einsatz", "Suche", "Fahrzeug", "Wache", "finden", "suchen"],
        hasSettings: false,
        allSite: true,
        settings:[]
    },
    {
        name: "showAverageMoneyInMissionOverview",
        description: "Zeigt den durchscnittlichen Verdienst pro Einsatz in der Einsatzübersicht an.",
        settingsTarget: "showAverageMoneyInMissionOverview",
        version: "1.0.0",
        author: "NiZi112",
        target: "showAberageMoneyInMissionOverviewCheck",
        func: showAverageMoneyInMissionOverview,
        keywords: ["Geld", "Einsatz", "Durchschnitt", "Münzen", "Übersicht", "Overview", "Einsatzübersicht"],
        hasSettings: false,
        allSite: false,
        settings:[]
    },
    {
        name: "ResetAAO per Hotkey",
        description: "Tragt einen einzelnen Buchstaben hier ein, um mit diesem die AAO zurückzusetzen.",
        settingsTarget: "resetAAO",
        version: "1.0.0",
        author: "NiZi112",
        target: "resetAAOCheck",
        func: resetAAOHotkey,
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
        func: autofocusMissionNew,
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
                {value: 'newMissionNameInput', name: 'Einsatzname'},
                {value: 'newNameInput', name: 'Anrufender'},
                {value: 'newMissionRoadInput', name: 'Straße'},
                {value: 'newMissionHousenumberInput', name: 'Hausnummer'},
                {value: 'newMissionCustomText', name: 'Freitext'}
            ]
        }]
    },
    {
        name: "Shortlinks",
        description: "Bietet unter der Werbung einen schnellen Zugriff auf Forum, Wiki & FAQ.",
        settingsTarget: "shortlinks",
        version: "1.0.0",
        author: "NiZi112",
        target: "shortlinksCheck",
        func: shortlinks,
        keywords: ["schnell", "Zugriff", "Links", "Forum", "Wiki", "FAQ", "Fragen"],
        hasSettings: false,
        allSite: false,
        settings: []
    },
    {
        name: "Verbessertes AAO-bearbeiten",
        description: "Lässt euch beim bearbeiten eurer AAO diese gleich 5 Schritte auf einmal verschieben",
        settingsTarget: "improvedAAOMovement",
        version: "1.0.0",
        author: "NiZi112",
        target: "improvedAAOMovementCheck",
        func: improvedAAOMovement,
        keywords: ["AAO", "Alarm- und Auchrückeordnung", "Verbesserung", "einfacher", "Bewegung"],
        hasSettings: false,
        allSite: true,
        settings: []
    },
    {
        name: "Verbandsmitglieder filtern",
        description: "Lässt euch auf der Seite eines Verbandes auswählen, welche Art von Mitgliedern euch angezeigt werden soll",
        settingsTarget: "FilterAssociationMembers",
        version: "1.0.0",
        author: "NiZi112",
        target: "FilterAssociationMembersCheck",
        func: filterAssociationMembers,
        keywords: ["Verband", "Mitglieder", "Filter", "einfacher", "Überblick"],
        hasSettings: false,
        allSite: true,
        settings: []
    },
    {
        name: "Durchschnittlicher Verdienst in der Einsatzübersicht",
        description: "Zeigt euch den durchschnittlichen Verdienst aller Einsätze in der Einsatzübersicht.",
        settingsTarget: "AverageMoneyInMissionOverview",
        version: "1.0.0",
        author: "NiZi112",
        target: "AverageMoneyInMissionOverviewCheck",
        func: averageMoneyInMissionOverview,
        keywords: ["Einsatz", "Einsätze", "*bersicht", "Münzen", "Geld"],
        hasSettings: false,
        allSite: true,
        settings: []
    },
    {
        name: "Event-Label in der Kopfleiste entfernen",
        description: "Entfernt das Label aus der Kopfleiste, sofern es den Text \"Event\" enthält.",
        settingsTarget: "RemoveEventtext",
        version: "1.0.0",
        author: "NiZi112",
        target: "removeEventTextCheck",
        func: removeEventText,
        keywords: ["Event", "Saison", "Saisonal", "entfernen", "Einsätze"],
        hasSettings: false,
        allSite: false,
        settings: []
    },
    {
        name: "Karte dauerhaft groß",
        description: "Setzt die Karte nach dem Schließen eines Fenster wieder in den großen Modus",
        settingsTarget: "bigMap",
        version: "1.0.0",
        author: "NiZi112",
        target: "bigMapCheck",
        func: bigMap,
        keywords: ["Karte", "iFrame", "schließen", "groß", "Map"],
        hasSettings: false,
        allSite: false,
        settings: []
    },
    {
        name: "Mapmode",
        description: "Erweiter das Spiel um einen Modus, in dem nur die Karte zu sehen ist.",
        settingsTarget: "mapMode",
        version: "1.0.0",
        author: "NiZi112",
        target: "mapModeCheck",
        func: mapMode,
        keywords: ["Map", "Karte", "groß", "Modus", "dauerhaft"],
        hasSettings: false,
        allSite: false,
        settings: []
    }
];