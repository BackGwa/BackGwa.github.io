
function mailto() {
    const email = document.createElement('a');
    email.href = 'mailto:backgwa@icloud.com';
    email.click();
}

function contact() {
    parent.open_app("contact", true);
}