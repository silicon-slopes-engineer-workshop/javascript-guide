let reviews: number[] = [4, 3, 5, 2, 1, 2, 3, 6, 7];
let total: number = 0;

for (let i = 0; i < reviews.length; i++){
	console.log(reviews[i]);
	total += reviews[i];
}

let average: number = total / reviews.length;

console.log("Review average = " + average);