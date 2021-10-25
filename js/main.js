var mainHtml = '';

function mainPage(){
    
     mainHtml = '<div class="screen screen-start" id="start">' +
        '<header>' +
        '<h1>' + 'Tic Tac Toe' + '</h1>' +
        '<a href="#" class="button">'+ 'Start game' + '</a>' +
        '</header>' +
        '</div>'
    
    
    
}


document.getElementById('start').innerHTML = mainHtml;
//window.onload = mainPage;