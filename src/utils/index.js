export function isElementInView(elementId) {
    const el = document.getElementById(elementId);
    if (!el) {
        return false;
    }
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    var isVisible = elemTop >= 0 || (elemBottom - 50) >= 0;
    return isVisible;
}