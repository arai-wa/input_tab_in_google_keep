/**
 * This code enables you to input tab(\t) into memos.
 */
	
document.onkeydown = function (e) {
    if (e.keyCode === 9) {
        e.preventDefault();
        event.returnValue = false;
        document.execCommand('insertText',false , '\t');
    }
};
