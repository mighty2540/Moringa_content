// Suppose you’re building a feature where users enter their birth year, and your application displays their age on their profile page.
// To design this feature, you could specify: “Calling the function currentAgeForBirthYear(1984) should return 40.”
// This approach helps you write tests that confirm whether your code fulfills this feature as intended:

// Unit Test - focuses on a specific part of your code, given   X input it should produce Y output

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(40);
  });
});