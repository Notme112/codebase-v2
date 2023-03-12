import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function alertNewSharedMissions(s: ReSiCodebaseSettingsType): Promise<void> {
    //@ts-ignore
    socket.on("newMission", (mission) => {
        //@ts-ignore
        if(mission.isShared) noticeModal('Freigabe', 'Neue Verbandsfreigabe von ' + mission.userName)
    });
}