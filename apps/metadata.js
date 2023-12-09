const app_list = {
    "apps" : {
        "0" : {
            "name" : "프로필",
            "path" : "profile"
        },

        "1" : {
            "name" : "언어 스택",
            "path" : "lang_stack"
        },

        "2" : {
            "name" : "기술 스택",
            "path" : "tech_stack"
        },

        "3" : {
            "name" : "연락처",
            "path" : "contact"
        },

        "4" : {
            "name" : "설정",
            "path" : "setting"
        },
    },

    "index" : 4
}

function append_dock() {
    for (let i = 0; i <= app_list.index; i++) {
        dock.innerHTML += `
        <div class="dock-item" style="background-image: url('./apps/${app_list.apps[i].path}/icon.png')">
            <div class="dock-label">
                ${app_list.apps[i].name}
            </div>
            <div id="app-index-${i}"></div>
        </div>
        `;
    }
}