function changeSrc2Front() {
    document.getElementById("codeEditor").src="files/codeeditorFrontend.gif";

    const btn1 = document.getElementById('frontendBtn');
    const btn2 = document.getElementById('backendBtn');
    btn1.style = ' color:white; background-color: #38444d;';
    btn2.style = ' color:black; background-color: rgb(236, 236, 236);';

}

function changeSrc2Back() {
    document.getElementById("codeEditor").src="files/codeeditorBackend.gif";

    const btn1 = document.getElementById('backendBtn');
    const btn2 = document.getElementById('frontendBtn');
    btn1.style = ' color:white; background-color: #38444d;';
    btn2.style = ' color:black; background-color: rgb(236, 236, 236);';
}