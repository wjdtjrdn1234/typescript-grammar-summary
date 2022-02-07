{
    interface Add{
        (num1:number,num2:number):number
    }
    const add:Add = (x,y)=>{return x+y}
    add(10,20) 
    //add(20,'10') 에러

    //interface로 class 정의 : implements
    interface Car{
        color:string,
        wheels:number,
        start():void
    }
    class benz implements Car{ //interface 속성 입력안하면 에러
        color
        wheels
        constructor(color:string,wheels:number){
            this.color = color
            this.wheels = wheels
        }
        start() {console.log("~~")}
    }
    const newCar = new benz('white',4)
    newCar.start()

    //interface끼리 확장 : extends
    interface Audi extends Car{
        speed:number
        stop():void
    } 
    const audi: Audi = {
        color: "black",
        wheels: 4,
        speed:140,
        start() {console.log("~~")},
        stop() {console.log("~~")}
    }
    audi.stop()

    //2개 동시에 확장가능 
    interface Toy{
        name:"string"
    }
    interface ToyCar extends Car,Toy{
        price:number
    }
}