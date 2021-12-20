export class FizzBuzz {
    execute(param1: number): void {
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
    test():void {
        console.log("++++ Tes Fizz Buzz ++++")
        this.execute(30)
    }
}
