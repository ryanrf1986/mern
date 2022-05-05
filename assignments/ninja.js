const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Ninja {
    constructor(name, health = 0, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName = console.log(`ninjas name is: ${ this.name }`);
    showStats = console.log(`Ninjas name is: ${ this.name }.\nNinjas strength: ${ this.strength }.\nNinjas speed: ${ this.speed }.\nNinjas health health: ${ this.health }`);
    drinkSake = () => this.health += 10;
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

