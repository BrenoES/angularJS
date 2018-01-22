window.onload = function() {
    if (is.ie()) {        
        var msg = document.createElement('h1');
        msg.className = "vagas-encerradas";
        msg.innerHTML = "Vagas encerradas!"
        document.getElementById("alerta").appendChild(msg);
    } else {     
        console.log('%cWooza ', 'color: #163354; font-size: 24px;');
        console.log("Primeira dica:")
        console.log("TyBpbXBvcnRhbnRlIMOpIHRlciBlc3RpbG8uIE91IG7Do28gdGVyLCBlbSBhbGd1bnMgY2Fzb3MgOyk=")
    }
};
