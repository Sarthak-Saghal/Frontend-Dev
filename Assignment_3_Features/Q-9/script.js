const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Mina","age":"22"}',
];

const clean = [];
const errors = [];

console.log("Raw Data:", rawData);

for (let i = 0; i < rawData.length; i++) {
  debugger;

  const line = rawData[i];

  try {
    const parsed = JSON.parse(line);

    if (!parsed.user || !parsed.age) {
      throw new Error("Missing required keys (user, age)");
    }

    parsed.age = Number(parsed.age);

    if (parsed.age < 18) {
      throw new Error("User under 18, filtered");
    }

    clean.push(parsed);

    console.log(`
Line: ${i}
User: ${parsed.user}
Age: ${parsed.age}
Status: VALID`);
  } catch (err) {
    errors.push({ line: i, error: err.message });

    console.log(`
Line: ${i}
Entry: ${line}
Error: ${err.message}
Status: INVALID`);
  }
}

console.log("Valid Entries:", clean);
console.log("Errors:", errors);
