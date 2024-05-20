let isBold = false;
let isItalic = false;
let isUnderline = false;

function toggleBold() {
    const textInput = document.getElementById('textInput');
    isBold = !isBold;
    textInput.style.fontWeight = isBold ? 'bold' : 'normal';
}

function toggleItalic() {
    const textInput = document.getElementById('textInput');
    isItalic = !isItalic;
    textInput.style.fontStyle = isItalic ? 'italic' : 'normal';
}

function toggleUnderline() {
    const textInput = document.getElementById('textInput');
    isUnderline = !isUnderline;
    textInput.style.textDecoration = isUnderline ? 'underline' : 'none';
}

function changeFontFamily() {
    const textInput = document.getElementById('textInput');
    const fontFamily = prompt('Enter Font Family');
    if (fontFamily) {
        textInput.style.fontFamily = fontFamily;
    }
    textInput.style.fontFamily = isfontFamily ? 'Segoe UIe' : 'normal';
}

function changeFontSize() {
    const textInput = document.getElementById('textInput');
    const fontSize = prompt('Enter fontSize');
    if (fontSize) {
        textInput.style.fontSize = fontSize;
    }
}

function changeFontColor() {
    const textInput = document.getElementById('textInput');
    const fontColor = prompt('Enter font color ');
    if (fontColor) {
        textInput.style.color = fontColor;
    }
}
