class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}





class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }
    attack( target){
        target.resilience = target.resilience - this.power;
        console.log(target.resilience);
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target) {
        if( target instanceof Unit ) {
            // implement card text here
            if(this.stat === "resilience"){
                target.res = target.res + this.magnitude;
                console.log(target.name, "Resilience is now:", target.resilience);
            }
            else{
                target.power = target.power + this.magnitude;
                console.log(target.name, "Power is now:", target.power);
            }
        } else {
            console.log( "Target must be a unit!" );
        }
    }
}

//turn1
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4 );
const effect1 = new Effect('Hard Algorithm', 2, "Increase target's resilience by 3","resilience", 3);
effect1.play(unit1);


// turn2
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
const effect2 = new Effect('Unhandled Promise Rejection', 1, "reduce target's resilience by 2", "resilience", -2);
effect2.play(unit1);

// turn3
const effect3 = new Effect('Pair Programming', 3, "Increase target's power by 2","power", 2);
effect3.play(unit1);
unit1.attack(unit2);




