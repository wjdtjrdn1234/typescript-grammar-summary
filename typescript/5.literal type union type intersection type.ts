{
    //literal types
    const name1 = "kim" //type : "kim" -> 정해진 문자열 type을 가진것을 literal types라고 함
    let name2 = "lee" //type: string
    type Job = "police" | "teacher"| "developer" //literal types
    interface User{
        name:string
        job:Job
    }
    const user: User = {
        name: "jung",
        job: "developer" //student :에러
    }

    //union types
    interface Car{
        name:"car"
        color:string
        start():void
    }
    interface Mobile{
        name:"mobile"
        color:string
        call():void
    }
    //type narrowing
    function getGift(gift:Car | Mobile){
        console.log(gift.color)
        if(gift.name === "car"){ //동일한속성을 가지고 구분가능한것을 , 식별가능한 union type이라고 함
            gift.start()
        }
        else{
            gift.call()
        }
    }

    //intersection types
    interface Car2{
        name:string
        start():void
    }
    interface Toy{
        name:string
        color:string
    }
    const toyCar: Toy & Car2 ={
        name: "bmw",
        start(){console.log("~")},
        color:"white"
    }


}