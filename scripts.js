/**
 * This code enables you to input tab(\t) into memos.
 */
	
document.onkeydown = (event) => {
    if (event.keyCode === 9) {
        event.preventDefault();
        document.execCommand('insertText', false, '\t');
    }
};
