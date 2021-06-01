export default class Nota {


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

    add(title, note, categoria_idx){
        this.data.push(new DataNota(
            title, note, categoria_idx
        ));
        this.notify()
    }

    delete(id){
        this.data.splice(id, 1);
        this.notify();
    }
}

class DataNota {

    title = null;
    note = null;
    categoria_idx = null;

    constructor(title, note, categoria_idx){
        this.title = title;
        this.note = note;
        this.categoria_idx = categoria_idx;
    }
}