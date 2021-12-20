'use strict'

class FizzBuzz {

    exec(param1) {
        if (!Number.isInteger(param1)) {
            return false
        } else {
            for (let i = 1; i <= param1; i++) {
                if (i % 3 == 0 && i % 5 == 0) {
                    console.log("Fizz Buzz")
                } else if (i % 3 == 0) {
                    console.log("Fizz")
                } else if (i % 5 == 0) {
                    console.log("Buzz")
                } else {
                    console.log(i)
                }
            }
        }
    }

    test() {
        console.log("++++ Tes Fizz Buzz ++++")
        this.exec(30)
    }

}

module.exports = FizzBuzz
