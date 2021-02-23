export default class Categoria {

    data = null;

    constructor(){
        this.data = [];
    }

    add(title){
        console.log(this.data);
        
        this.data.push({title});
    }
}