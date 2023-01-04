import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function countChat(s: ReSiCodebaseSettingsType): Promise<void>{
    function countCharackters() {
        let charackters = document.querySelector<HTMLInputElement>("#chatInput")?.value.length.toString();
        if (!charackters) {
            charackters = "0";
        };
        if (charackters.length == 1) {
            charackters = "00" + charackters
        } else if (charackters.length == 2) {
            charackters = "0" + charackters
        }
        let element = document.querySelector("#chracktarsChatCount")
        if (!element) {
            return;
        }
        element.innerHTML = charackters;
        if (parseInt(charackters)>500) {
            document.querySelector("#chracktarsChatCount")?.classList.add("label-danger");
            document.querySelector("#chracktarsChatCount")?.classList.remove("label-success");
        } else {
            document.querySelector("#chracktarsChatCount")?.classList.add("label-success");
            document.querySelector("#chracktarsChatCount")?.classList.remove("label-danger");
        }
    };
    const chat = document.querySelector('#new-chat-jump-to');
    if (!chat) {
        return;
    }
    const old = chat.innerHTML;
    let element = document.querySelector('#chatInput');
    if (!element) {
        return;
    }
    ['keyup', 'focus'].forEach((event) => {
        if (!element) {
            return;
        }
        element.addEventListener(event, () => {
            chat.innerHTML = (old + '&nbsp;<span class="label label-success" id="chracktarsChatCount" style="width: 12%">000</span>')
            // @ts-ignore
            showJumpToNewChat()
            countCharackters()
        })
    });
    ['focusout', 'submit'].forEach((event) => {
        if (!element) {
            return;
        }
        element?.addEventListener(event, () => {
            chat.innerHTML = old
            // @ts-ignore
            hideJumpToNewChat()
        })
    })
}