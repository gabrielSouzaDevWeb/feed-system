class feedController{

    constructor(){
        this._boxTitle = document.querySelector(".jsTitle");
        this._boxText = document.querySelector(".jsText");
        this._feed = document.querySelector('.jsFeed');
        this._newPost='';
        this.btnEvent();
        

    }

    btnEvent(){
        let btnPost = document.querySelector(".jsSubmit");

        btnPost.addEventListener('click',e=>{
            //this.createTags();
            //this.createTexts();
            this.createPost();
            console.log(this._newPost);
            
        });

    }

   
    createPost(){
       
        this.newPost();

    }

    newDiv(){
        this._newPost= document.createElement('div');
        this._newPost.classList.add('feed-item', 'flex-item', "jsNewItem");
        this._feed.appendChild(this._newPost);
        
    }

    newPost(){
       this.newDiv();
       this.addElements(this.newTitleH2(), this.boxTitle);
       this.addElements(this.newHr(), '');
       this.addElements(this.newTextP(), this.boxText);
       this.clearTexts();

        
    }

    clearTexts(){
        return this._boxTitle.value="", this._boxText.value='';
    }
    addElements(value, textValue){
        this._newPost.appendChild(value).innerHTML = textValue;

    }
    

    newTitleH2(){//value = this.boxTitle
        let title = document.createElement('h2');
        return title;

    }
    newHr(){
        return document.createElement('hr');
    }

    newTextP(){
        return document.createElement('p');
    }

    get boxTitle(){
        return this._boxTitle.value;
    }

    set boxTitle(value){
        this._boxTitle.innerHTML = value;
    }

    get boxText(){
        return this._boxText.value;
    }

    set boxText(value){
        this._boxText.innerHTML = value;
    }


}