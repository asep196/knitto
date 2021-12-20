"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palindrome = void 0;
class Palindrome {
    palindrome(param1) {
        let input;
        if (typeof param1 !== "string") {
            input = param1.toString();
        }
        else {
            input = param1;
        }
        let arrayInput = input.trim().split('');
        let arrayInputLength = arrayInput.length - 1;
        for (let i = arrayInputLength; i >= 0; i--) {
            if (arrayInput[i] != arrayInput[(arrayInputLength - i)]) {
                return "Bukan Palindrome";
            }
        }
        return "Palindrome";
    }
    test() {
        console.log("++++ Tes Palindrome ++++");
        console.log("Apakah Asep Sutiono palindrome? " + this.palindrome("Asep Sutiono"));
        console.log("Apakah 11211 palindrome? " + this.palindrome(11211));
    }
}
exports.Palindrome = Palindrome;
