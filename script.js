class Products {
    constructor (productId , productName , price , remainingAmount , image){
        this._productId = productId;
        this._productName = productName;
        this._price = price;
        this._remainingAmount = remainingAmount;
        this._image = image;
    }
    get productId(){
        return this._productId;
    }

    get prodcutName(){
        return this._productName;
    }
    
    get price() {
        return this._price;
    }

    get remainingAmount() {
        return this._remainingAmount;
    }

    get image() {
        return this._image;
    }
}