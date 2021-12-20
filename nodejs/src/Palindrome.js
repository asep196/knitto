'use strict'

class Palindrome {

    exec(param1) {
        if (typeof param1 === "string") {
            return this.palindrome(param1)
        } else if (typeof param1 === "number") {
            let numbToStr = param1.toString()
            return this.palindrome(numbToStr)
        }
    }

    palindrome(input) {
        let arrayInput = input.trim().split('')
        let arrayInputLength = arrayInput.length - 1
        for (let i = arrayInputLength; i >= 0; i--) {
            if (arrayInput[i] != arrayInput[(arrayInputLength - i)]) {
                return "Bukan Palindrome"
            }
        }
        return "Palindrome"
    }

    test() {
        console.log("++++ Tes Palindrome ++++")
        console.log("Apakah Asep Sutiono palindrome? " + this.exec("Asep Sutiono"))
        console.log("Apakah 11211 palindrome? " + this.exec(11211))
    }

}

module.exports = Palindrome
