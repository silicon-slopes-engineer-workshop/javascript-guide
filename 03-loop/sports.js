var sports = ["Golf", "Soccer", "Badminton", "Basketball", "Swimming"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
console.log("-------");
// simplified for loop
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
}
console.log("-------");
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var sport = sports_2[_a];
    if (sport == "Badminton") {
        console.log("I have try " + sport);
    }
    else {
        console.log("I haven't try " + sport);
    }
}
