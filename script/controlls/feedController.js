class feedController{

    constructor(){
        this._boxTitle = document.querySelector(".jsTitle");
        this._boxText = document.querySelector(".jsText");
        this.btnEvent();

    }

    btnEvent(){
        let btnPost = document.querySelector(".jsSubmit");

        btnPost.addEventListener('click',e=>{
            this.createTags();
            this.createTexts();

        });

    }

   
    createTags(){
       let newPost= document.createElement('div');
       let newTitle = document.createElement('h2');
       let newHr= document.createElement('hr');
       let newP= document.createElement('p');

       //foreach\



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