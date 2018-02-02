/* Retrieves 5 most recent contributions from set GitHub user */
$(document).ready(function() {
    another();
});

function mdToHTML(item, index){
    function poster(){
    var converter = new showdown.Converter();
    $('#gitStub' + index).append('<div class="readme">' + converter.makeHtml(this.responseText) + '</>');
    }
    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener("load", poster);
    xhttp.open("GET", item, true);
    xhttp.send();
}

function another(){
    $.ajax({
        
    url: "https://api.github.com/users/dtice/repos",
    dataType: "text",
    
    success: function(data) {
        
        var json = $.parseJSON(data);
        
        for (var i=0;i<json.length;++i)
        {
            mdToHTML('https://raw.githubusercontent.com/dtice/'+json[i].name+'/master/README.md', i);
        }
    }
});
}

