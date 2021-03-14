for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log("---names loop---");
var names = ["Chris", "Jay", "Kyle", "Ming"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("My name is " + name_1);
}
console.log("---pets loop---");
var pets = ["dog", "cat", "fish", "bird"];
for (var _a = 0, pets_1 = pets; _a < pets_1.length; _a++) {
    var pet = pets_1[_a];
    console.log(pet);
}
console.log("--push--");
pets.push("horse");
pets.push("snake");
pets.push("hamster");
for (var i = 0; i < pets.length; i++) {
    if (pets[i] == "snake") {
        console.log("ah snake!"); // sorry whoever has a snake as pet
    }
    else {
        console.log("Aw.." + pets[i]);
    }
}
