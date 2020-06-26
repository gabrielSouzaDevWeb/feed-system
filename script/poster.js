function posterText(){
    var titleText = document.querySelector("#title");
    var textArea = document .querySelector("#text");
    var feed= document.querySelector(".feed");
    //CREATE
    var newFlex_item = document.createElement("div");
    var newtitle = document.createElement("h2");
    var newHR = document.createElement("hr");
    var newP= document.createElement("p");

    submit.addEventListener("click", function(){
        //
        console.log(getTitle());
        console.log(getText());
        console.log(createPost());
        console.log(addTags());
        createPost();
        addTags();
        clearTexts();
    });

    function getTitle(){
        var text_title = titleText.value; 
        return text_title;
    }
    function getText(){
        var text_area = textArea.value;
        return text_area;
    }
    function createPost(){//creater flex-item in feed
        newFlex_item.classList.add("feed-item", "flex-item", "new-item");
        return feed.appendChild(newFlex_item);
    }
    function addTags(){//Essa function tá fazendo muita coisa
        let newItem = document.querySelector(".new-item");
        return newItem.appendChild(newtitle).innerHTML=getTitle(),newItem.appendChild(newHR),newItem.appendChild(newP).innerHTML=getText();
    }
    function addTextInTag(){

    }
    function clearTexts(){
        return titleText.value = "", textArea.value="";
    }

}

window.onload = posterText;