class feedController{

    constructor(){
        this._boxTitle = document.querySelector(".jsTitle");
        this._boxText = document.querySelector(".jsText");
        this._bottomPost = document.querySelector(".jsSubmit");

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