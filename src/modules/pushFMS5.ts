import {
    checkAndAskForNotificationPermission
} from "../generalFunctions/notificationFunction";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function pushFMS5(s: ReSiCodebaseSettingsType): Promise<void> {
    if (!await checkAndAskForNotificationPermission()) return;
    // @ts-ignore
    socket.on("vehicleFMS", (vehicleFMSObject) => {
        if (`${vehicleFMSObject.userVehicleFMS}`.includes("5")) {
            new Notification("Sprechwunsch!", {
                body: `Dein Fahrzueg ${vehicleFMSObject.userVehicleName} im Rettungssimulator hat einen Sprechwunsch!`
            });
        }
    });
}