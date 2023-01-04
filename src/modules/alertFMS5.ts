import { ReSiCodebaseSettingsType } from "../types/codebase"

export async function alertFMS5(s: ReSiCodebaseSettingsType): Promise<void>{
    try {
        // @ts-ignore
        socket.on("vehicleFMS", (vehicleFMSObject) => {
            // @ts-ignore
            if (vehicleFMSObject.userVehicleFMS != 5 || (vehicleFMSObject.userName != null && vehicleFMSObject.userName != ReSi.userName)) return
            // @ts-ignore
            if (window.location.href.endsWith('#dispo=true') || window.location.href.endsWith('&dispo=true') || window.location.href.includes('#dispo=true') || window.location.href.includes('&dispo=true') || location.hash == '') modal(`Sprechwunsch`, `${vehicleFMSObject.userVehicleName} hat einen Sprechwunsch`, 'öffnen', 'schließen', () => {
                if (vehicleFMSObject.vehicleID == 43) {
                    // @ts-ignore
                    openFrame(`/vehicle/${vehicleFMSObject.userVehicleID}`, '1/2/4/4')
                } else {
                    // @ts-ignore
                    openFrame(`/mission/${vehicleFMSObject.userMissionID}`, '1/1/4/5')
                }
            })
        })
    } catch (e) {
        console.error('socket not found')
    }
}