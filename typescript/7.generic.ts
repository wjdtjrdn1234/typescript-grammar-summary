{
     //generic : 클래스,함수,인터페이스를 다양한 타입으로 제사용 가능
     function getSize<T>(arr:Array<T>):number{
         return arr.length
     }
     const ex1 = [1,2,3]
     const ex2 = ["a","b","c"]
     const ex3 = [false,true,true]
     const ex4 = [{},{},{name:"Tim"}]
     getSize<number>(ex1)
     getSize<string>(ex2)
     getSize<boolean>(ex3)
     getSize<object>(ex4)

     //interface generic
     interface Mobile<T>{
         name:string,
         price:number,
         option:T
     }
     const m1 :Mobile<object>={
         name:"s1",
         price:2000,
         option:{
             color:"red"
         }
     }
     const m2 :Mobile<string>={
        name:"s2",
        price:3000,
        option:"none"
    }

    //generic 활용
    interface User{
        name:string
        age:number
    }
    interface Car{
        name:number
        color:number
    }
    interface Book{
        price:number
    }
    function showName<T extends {name:string}>(data:T):string{ //그냥 T만 할시 에러발생
        return data.name
    }
    const user:User ={name:"a",age:10}
    const car:Car = {name:121,color:123}
    const book:Book = {price:200}

    showName(user)
    //showName(car) //에러
    // showName(book) //에러

}