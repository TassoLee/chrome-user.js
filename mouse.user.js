// ==UserScript==
// ==/UserScript==

document.addEventListener('dblclick', CloseTheTab, true);
document.addEventListener('mousedown', mousedown, true);
document.addEventListener('contextmenu', contextmenu, true);

function CloseTheTab() {
    window.close();
}

var shouldPrevent;

function mousedown (e) {
    var target = e.target;
    if (target.nodeName == 'A' && e.button == 2 && !e.ctrlKey) {
        CreateMouseMiddleKeyClickEvent(e);
        shouldPrevent = true;
    }
}

function contextmenu (e) {
    if (shouldPrevent) {
        e.preventDefault();
        shouldPrevent = false;
    }
}

function CreateMouseMiddleKeyClickEvent(event) {
    var clickEvent = document.createEvent ("MouseEvent");
    clickEvent.initMouseEvent ("click", true, true, window, 0, 
                                event.screenX, event.screenY, event.clientX, event.clientY, 
                                event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, 
                                1, null);
    event.target.dispatchEvent (clickEvent);
}
