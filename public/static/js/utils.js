function copyToClipboard(event, text) {
    if (event) {
        event.preventDefault();
    }

    let tmp = document.createElement('input');
    document.documentElement.appendChild(tmp);
    tmp.value = text;
    tmp.focus();
    tmp.setSelectionRange(0, text.length);
    document.execCommand('copy');
    document.documentElement.removeChild(tmp);

    if (event.target) {
        event.target.innerHTML = 'copied';
    }
}
