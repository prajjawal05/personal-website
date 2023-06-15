export function isElementInView(elementId) {
    const el = document.getElementById(elementId);
    console.log(elementId, el);
    if (!el) {
        return false;
    }
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    var isVisible = (elemTop + 150) < window.innerHeight && elemBottom >= 0;
    return isVisible;
}