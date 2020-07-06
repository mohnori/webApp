class Cow{
    constructor(name,type,colure) {
        this.name = name;
        this.type = type;
        this.colure = colure;
    }
    moo(){
        console.log(`My name ${this.name},I am a ${this.type},My Color ${this.colure}`);
    }
}
const myCow = new Cow('Lisa','Milk','Red');
console.log(myCow);
myCow.moo();

