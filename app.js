let isInEditMode = true
let showSourceCode = false


function enabledEditMode (){
    textEditorDocument.document.designMode= 'on'
}


function execCmd (cmd){
    textEditorDocument.document.execCommand(cmd)
}

function execCmdWithArg (cmd, arg){
    textEditorDocument.document.execCommand(cmd, true, arg)
}


function toggleEdit (){
    if(isInEditMode){
        textEditorDocument.document.designMode= 'off' ;
        isInEditMode = false
    } else {
        textEditorDocument.document.designMode= 'on';
        isInEditMode = true
    }
}

function toggleSourceCode(){
if (showSourceCode){
    textEditorDocument.document.getElementsByTagName('body')
    [0].innerHTML =textEditorDocument.document.getElementsByTagName('body')[0].textContent
showSourceCode = false 
}else {
    textEditorDocument.document.getElementsByTagName('body')
    [0].textContent =textEditorDocument.document.getElementsByTagName('body')[0].innerHTML
    showSourceCode = true
}
}
//innerHTML => mohtavaye tag ro miare ba tagaye html,mesl code ba mohtavash barkhord mikone
//textContent => faghat matne dakhel tagha ro miare, yani khoroji nahaee ro mide
// iframe dakelesh manan ye document kamel hast va hame tagha mesl body ro dakhel khodesh dare