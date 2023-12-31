const app_list = {
    "apps" : {
        "0" : {
            "name" : "내 프로필",
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
            "name" : "SUITE Simulator",
            "path" : "simulator"
        },

        "4" : {
            "name" : "경력 사항",
            "path" : "memo"
        },
        
        "5" : {
            "name" : "FaceTime",
            "path" : "facetime"
        },

        "6" : {
            "name" : "연락처",
            "path" : "contact"
        },

        "7" : {
            "name" : "터미널",
            "path" : "terminal"
        },

        "8" : {
            "name" : "시스템 설정",
            "path" : "setting"
        },
    },

    "index" : 8
}

function append_dock() {
    for (let i = 0; i <= app_list.index; i++) {
        dock.innerHTML += `
        <div class="dock-item" onclick="open_app('${app_list.apps[i].path.replace("_", "-")}', true)" style="background-image: url('./apps/${app_list.apps[i].path}/icon.png')">
            <div class="dock-label">
                ${app_list.apps[i].name}
            </div>
            <div id="app-index-${i}"></div>
        </div>
        `;
    }
}