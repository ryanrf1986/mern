class Ninja {
    constructor(name, health =0, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName = () => console.log(`ninjas name is: ${ this.name }`);
    showStats =() =>console.log(`Ninjas name is: ${ this.name }.\nNinjas strength: ${ this.strength }.\nNinjas speed: ${ this.speed }.\nNinjas health : ${ this.health }`);
    drinkSake = () => this.health += 10;
}


class Sensei extends Ninja {
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
        this.wiseMessage =[ 'What one programmer can do in one month, two programmers can do in two months']
    }
    speakWisdom = () => {
        this.drinkSake();
        console.log(this.wiseMessage);
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.showStats();

const superSensei = new Sensei('Master Splinter');
superSensei.speakWisdom();
superSensei.showStats();