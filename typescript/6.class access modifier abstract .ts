{
    //접근제한자
    //public:자식클래스,인스턴스 모두 접근가능
    //protected: 자식 클래스에서만 접근가능
    //private:해당 클래스 내부에서만 접근가능
    //static: 정적멤버변수
    class Car {
        public name:string = "car"
        private color: string //private대신 # 사용해도 됨
        protected door: string
        static wheels = 4
        constructor(color: string) {
            this.color = color
        }
        start() {
            console.log("start")
            console.log(Car.wheels)//console.log(this.wheels) 에러 : 정적멤버 변수는 this가 아니라 class명을 적어줘야
        }
    }
    class Bmw extends Car{
        constructor(color:string){
            super(color)
        }
        show(){
            console.log(super.name) //console.log(super.color) //에러 
            console.log(super.door) 
        }

    }
    const bmw = new Bmw("red")
    console.log(bmw.name) //color,door 접근 x
    bmw.name ="car2" //만약 수정불가능하게 만들려면 readonly 키워드 사용하면 됨
    console.log(Car.wheels)

    //추상 class
    abstract class Car2 {
        public name:string
        constructor(name: string) {
            this.name = name
        }
        abstract start():void //추상메서드는 , 자식클래스에서 반드시 구현해줘야됨
    }

    //const car2 = new Car2("red") //추상클래스는 new키워드사용해서 인스턴스 생성x , 상속을 이용해서만 가능
    class Bmw2 extends Car2{
        constructor(name:string){
            super(name)
        }
        start(){
            console.log(super.name) //console.log(super.color) //에러 
        }

    }


}