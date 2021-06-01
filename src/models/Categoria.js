export default class Categoria
{
    data = null;
    
    constructor(){
        this.data = [];
        this._subscriber = [];
    }

    subscribe(handlerFunc)
    {
        this._subscriber.push(handlerFunc);
    }

    unSubscribe(handlerFunc)
    {
        this._subscriber = this._subscriber.filter(func => func !== handlerFunc);
    }

    notify()
    {
        this._subscriber.forEach(handlerFunc =>{
            handlerFunc(this.data);
        });
    }

    add(title){       
        this.data.push({title});
        this.notify();
    }
}