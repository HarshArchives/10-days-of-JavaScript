/**
 * @author geekyharsh05
 */

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    const characters = s.split("");
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join("");
    console.log(reversedString);
  } catch (error) {
    let errorMessage = error.message;
    console.log(errorMessage);
    console.log(s);
  }
}
