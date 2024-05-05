
class Ninja{
    constructor(nombre,salud=200,velocidad=3,fuerza=3){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=velocidad;
        this.fuerza=fuerza;
    }

    sayName(){
        console.log('Nombre',this.nombre)

    }
    showStats(){
        console.log("Nombre",this.nombre);
        console.log("Fuerza",this.fuerza);
        console.log("Velocidad",this.velocidad);
        console.log("Salud",this.salud);
    }
    drinkSake(){
        this.salud+=10
    }
}

/* const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats(); */

class Sensei extends Ninja{
    constructor(nombre,salud=10,velocidad=3,fuerza=3,sabiduria=10){
        super(nombre,salud,velocidad,fuerza);
        this.sabiduria=sabiduria;
    }
    
    
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
    drinkSake(){
        super.drinkSake()
    }
}

/* // ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
-> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
-> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
 */