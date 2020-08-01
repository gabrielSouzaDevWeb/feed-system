class feedController{

    constructor(){
        this._boxTitle = document.querySelector(".jsTitle");
        this._boxText = document.querySelector(".jsText");
        this._feed = document.querySelector('.jsFeed');
        this._newPost='';
        //this.createTags('p div p h2 p h3');
        //console.log();
        this.btnEvent();
        

    }

    btnEvent(){
        let btnPost = document.querySelector(".jsSubmit");

        btnPost.addEventListener('click',e=>{
            //this.createTags();
            //this.createTexts();
            this.createPost();
            
            
        });

    }

   
    createPost(){
       
        this.newPost();

    }

    newDiv(){
        this._newPost= document.createElement('div');
        this._newPost.classList.add('feed-item', 'flex-item', "jsNewItem");
        //this._feed.appendChild(this._newPost);
        //this._feed.append(this.createTags("p div p h2"));
        this.createTags("div h2 hr p ");
        
    }

    newPost(){
       this.newDiv();
       /*this.addElements(this.newTitleH2(), this.boxTitle);
       this.addElements(this.newHr(), '');
       this.addElements(this.newTextP(), this.boxText);*/
       this.clearTexts();

        
    }

    clearTexts(){
        return this._boxTitle.value="", this._boxText.value='';
    }
    addElements(value, textValue){
        this._newPost.appendChild(value).innerHTML = textValue;

    }

    createTags(tags){
        tags.split(' ').forEach(tag=> {
            switch (tag) {
                case "div":
                    let newDiv = document.createElement(`${tag}`);
                    this._newPost = newDiv;
                    newDiv.classList.add("flex-item");
                    this._feed.append(newDiv);

                    break;
                case 'h2':
                    let newH2 = document.createElement(`${tag}`);
                    newH2.innerHTML = this.boxTitle;
                    this._newPost.appendChild(newH2);

                    break;

                case "p":
                    let newP= document.createElement(`${tag}`);
                    newP.innerHTML= this.boxText;
                    this._newPost.appendChild(newP);

                    break;

                
                default:
                    let element = document.createElement(`${tag}`);
                    this._newPost.appendChild(element);

                    break;
            }
        });
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