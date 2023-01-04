import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function hideDeletedMessagesInChat(s: ReSiCodebaseSettingsType): Promise<void>{
    function deleteMessages() {
        document.querySelectorAll(".message-deleted").forEach(e => e?.remove());
    };
    // @ts-ignore
    socket.on("associationMessageDelete", associationMessageDeleteObject => {
        deleteMessages();
    });
    deleteMessages();
}