/* Retrieves 5 most recent contributions from set GitHub user */
$(document).ready(function() {
    something("gitStub0");
    something("gitStub1");
    something("gitStub2");
    something("gitStub3");
    something("gitStub4");
    something("gitStub5");
});

function something(item){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById(item).innerHTML = "<h3>Title goes here</h3>" + "<br>" + this.responseText;
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/bagder/libbrotli/master/README.md", true);
    xhttp.send();
}