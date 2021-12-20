export class Palindrome {

    palindrome(param1: any): string {
        let input:string;
        if(typeof param1 !== "string"){
            input=param1.toString()
        }else{
            input=param1
        }
        let arrayInput:any[] = input.trim().split('')
        let arrayInputLength:number = arrayInput.length - 1
        for (let i:number = arrayInputLength; i >= 0; i--) {
            if (arrayInput[i] != arrayInput[(arrayInputLength - i)]) {
                return "Bukan Palindrome"
            }
        }
        return "Palindrome"
    }
    test():void {
        console.log("++++ Tes Palindrome ++++")
        console.log("Apakah Asep Sutiono palindrome? " + this.palindrome("Asep Sutiono"))
        console.log("Apakah 11211 palindrome? " + this.palindrome(11211))
    }
}
