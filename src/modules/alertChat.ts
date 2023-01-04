import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function alertChat(s: ReSiCodebaseSettingsType): Promise<void> {
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