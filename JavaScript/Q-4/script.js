let marks = [];
for (let i = 1; i <= 5; i++) {
  marks.push(+prompt(`Enter marks for subject ${i}:`));
}

let total = 0;
let failCount = 0;

for (let m of marks) {
  total += m;
  if (m < 40) failCount++;
}

let avg = total / 5;
let percentage = avg;
let grade = "";

if (percentage >= 90) grade = "A+";
else if (percentage >= 75) grade = "A";
else if (percentage >= 60) grade = "B";
else if (percentage >= 40) grade = "C";
else grade = "Fail";

if (failCount >= 2) {
  console.log("Repeat Year");
} else {
  console.log("Average:", avg.toFixed(2));
  console.log("Percentage:", percentage.toFixed(2) + "%");
  console.log("Grade:", grade);
}
