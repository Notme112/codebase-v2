export async function checkAndAskForNotificationPermission(): Promise<unknown> {
    return new Promise(async (res) => {
        if (Notification.permission === "granted") {
            res(true);
        } else if (Notification.permission !== 'denied') {
            await Notification.requestPermission((perm) => {
                if (perm === "granted") {
                    res(true);
                } else {
                    res(false);
                }
            });
        }
    })
}