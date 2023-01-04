type Setting = {
    default: string | number | boolean;
    options: Array;
    preset: string;
    name: string;
    type: string;
    target: string;
    settingsKey: string;
    subtarget: string;
    options?: [] | undefined;
}
type ReSiCodebaseSettingsType = {
    resetAAO: ReSiCodebaseSubsettingType;
    audio: ReSiCodebaseSubsettingType;
    titleChangeSettings: ReSiCodebaseSubsettingType;
    filterKMActualActive: boolean;
    collapseCardsAssociation: ReSiCodebaseSubsettingType;
    distaceVehicle: ReSiCodebaseSubsettingType;
    filterKHActive: boolean;
    filterKHSettings: ReSiCodebaseSubsettingType;
    text: ReSiCodebaseSubsettingType;
    autoCollapseCards: ReSiCodebaseSubsettingTyp,
    [k:string]: any
}
type ReSiCodebaseSubsettingType = {
    keyToReset?: string;
    newCall?: string;
    fms5?: string;
    finish?: string;
    error?: string;
    fms?: string;
    title?: string;
    autoCollapseCards?: boolean;
    distance?: number;
    hidePatientsRelease?: boolean;
    showPatientsInfo?: boolean;
    alliKH?: boolean;
    ownKH?: boolean;
    maxDistanceKH?: number;
    stream_mode?: string;
}
type ScriptInfoType = {
    version: string;
    name: string;

};
export type { ReSiCodebaseSettingsType, Setting, ScriptInfoType };