// (1)
console.log(hello);
var hello = "world";
// undefined

// (2)
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
// magnet

function test() {
  var needle = "haystack";
  var needle = "magnet";
  console.log(needle);
}
test();

// (3)
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);

// super cool

function print() {
  brendan = "only okay";
  console.log(brendan);
}
var brendan = "super cool";
console.log(brendan);

// (4)
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
// chicken
// half-chicken

function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
var food = "chicken";
console.log(food);
eat();

// (5)
mean();
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
console.log(food);
// error mean not a function
// mean is blank and the function call is empty as well



// (6)
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

// undefined
// rock
// r&b
// disco

var genre = "disco";
console.log(genre);
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

// (7)
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}

console.log(dojo);

// san jose
// seattle
// burbank
// san jose

dojo = "san jose";
console.log(dojo);
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
  dojo = "san jose";
  console.log(dojo);
}
learn();

// (8)
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
} else if (dojo.students <= 0) {
        dojo = "closed for now";
}
return dojo;
}

// error tried to assign const var to closed for now on 88

function makeDojo(name, students) {
    const dojo = {};
    // needs params
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
}   else if (dojo.students <= 0) {
        dojo = "closed for now";
        // change dojo to return
}
return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
