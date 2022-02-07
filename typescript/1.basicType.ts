{ 
    // string,number,boolean,array
    let name:string = "jung";
    let age:number = 123;
    let trueFalse = true
    let nameArray:string[] = ['k','l','j']
    let ageArray:Array<number> = [1,2,3]
    //ageArray.push("2") //에러
    ageArray.push(2)

    // tuple 
    let tuple : [string,number] 
    tuple = ['a',1] //[a,1] , ['a','1'] 등등 모두에러

    //void ,never 
    function printName():void{
        console.log(name)
    }
    function Loop():never{
        while(true){} //infinite loop 
    }
    function Loop2():never{
        throw new Error() // error  
    }

    //enum
    enum language {
        Java,
        JavaScript = 10,
        TypeScript
    }
    console.log(language[10]) //JavaScript
    console.log(language['TypeScript']) //11

    let myLanguage:language  //위에 3개의 변수만 입력가능
    myLanguage = language.Java //myLanguage = language.Python 에러

    //null,undefined 

    let a:null = null
    let b:undefined = undefined
}



