export default class Nota {

    data = null;

    constructor(){
        this.data = [];
    }

    add(title, note, categoria_idx){
        this.data.push(new DataNota(
            title, note, categoria_idx
        ));
    }

    delete(id){
        this.data.splice(id, 1);
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