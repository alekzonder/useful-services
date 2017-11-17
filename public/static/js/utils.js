function copyToClipboard(event, text) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    var tmp = document.createElement('input');

    document.documentElement.appendChild(tmp);
    tmp.value = text;
    tmp.focus();
    tmp.setSelectionRange(0, text.length);
    document.execCommand('copy');
    document.documentElement.removeChild(tmp);

    if (event.target) {
        var savedInnerHTML = event.target.innerHTML;
        event.target.innerHTML = 'copied';

        setTimeout(function () {
            event.target.innerHTML = savedInnerHTML;
        }, 2000);
    }
}

function navigateTo(url) {
    window.location.href = url;
}
