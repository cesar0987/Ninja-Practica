
class Ninja{
    constructor(nombre,salud=10,velocidad=3,fuerza=3){
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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
