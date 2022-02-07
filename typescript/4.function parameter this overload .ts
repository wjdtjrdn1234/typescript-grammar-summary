{
    //optional parameter
    function helloWorld(name?:string){ // string or undefined
        return `hello ${name} world`
    }
    const example1 = helloWorld()
    const example2 = helloWorld("typescript") //const example3 = helloWorld(123) 에러
    

    //default parameter
    function helloWorld2(name = "javascript"){ // string or undefined
        return `hello ${name} world`
    }
    const example3 = helloWorld2()
    const example4 = helloWorld2("typescript")  //const example5 = helloWorld(123) 에러
   

    //type narrowing
    function introduce(name: string, age?: number) { //선택적 매개변수가 필수매개변수보다 앞에오면 에러
        if (age !== undefined) {
            return `name:${name} age:${age}`
        }
        else {
            `name:${name}`
        }
    }
    console.log(introduce('jung',42))
    console.log(introduce('lee'))


    //rest parameter
    function add(...nums:Array<number>){ //... : 배열로 나타내줌 : parameter가 정확히 몇개들어오는지 못할경우 유용
        return nums.reduce((accum , num) => accum+num , 0) //0:초기값
    }
    console.log(add(1,2,3))
    console.log(add(1,2,3,4,5))


    //this
    interface User{
        name:string
    }
    const Jo: User = {name:'jo'}
    function showName(this:User){
        console.log(this.name)
    }
    const j = showName.bind(Jo)
    j() // jo 출력

    //overload
    //매개변수의 type에 따라 return해주는 결과값의 type이 결정됨 ->function overload(매개변수의 갯수나 타입에따라 다르게 동작)
    interface UserOverLoad{
        name:string
        age:number
    }

    function overload(name:string,age:string): string;
    function overload(name:string,age:number): UserOverLoad;
    function overload(name:string,age:number|string): UserOverLoad | string{
        if(typeof age === "number"){
            return {
                name,age
            }
        }
        else{
            return "string return"
        }
    }
    const k:UserOverLoad = overload('k', 40)
    const t:string = overload('t','55')
}