import {
    ReSiCodebaseSettingsType
} from "../types/codebase";

export async function titleChange(s: ReSiCodebaseSettingsType): Promise<void> {
    document.title = s.titleChangeSettings ? s.titleChangeSettings.title ? s.titleChangeSettings.title : 'rettungssimulator.online' : 'rettungssimulator.online'
}