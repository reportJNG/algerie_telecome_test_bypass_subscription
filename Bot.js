const expiredcard = [
  "9942629644461006",
  "7197933484649693",
  "2797951870589684",
  "9922621632669537",
  "0601042289361473",
  "3510179894223166",
  "6430233503537673",
];

function random16Digit() {
  return Math.floor(Math.random() * 1e16)
    .toString()
    .padStart(16, "0");
}

for (let i = 0; i < 10; i++) {
  console.log(random16Digit());
}
