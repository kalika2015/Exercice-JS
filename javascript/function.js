/**
 * Created by stagiaire on 06/09/2018.
 */



var compt = 0;

function augTaillePolice() {
    var article = document.querySelector('#article');
    if(compt == 0) {
        article.style.fontSize = "20px";
        compt = 1;
    }else {
        article.style.fontSize = "16px";
        compt = 0;
    }

}



