import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function ownSound(s:ReSiCodebaseSettingsType): Promise<void> {
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