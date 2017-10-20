//@ts-check
/**
 * 
 * @param {string | number | {}} data 
 */
function msgBox(data) {
    var str;
    if (typeof data=='string') {
        str = data.toUpperCase();
    } else if (typeof data!='number') {
        str = JSON.stringify(data);
    } else str = data.toFixed(2);
    return window.confirm(str);
}
