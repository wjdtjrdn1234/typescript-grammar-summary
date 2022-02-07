{
    let user: object
    user = {
        name: 'jung',
        age: 20
    }
    //console.log(user.name) //에러 -> object prototype에는 name이라는 속성x
    interface User {
        name:string
        age:number
        gender?:string //optional
        readonly birthday : number //readonly 수정x
        [grade:number] : score //성적-> A~F가 끝인데 string으로 받기엔 너무 범위가 김
    }

    type score = 'A'|'B'|'C'|'D'|'F' //union

    let user2: User = {
        name: 'jung',
        age: 42,
        birthday:2000,
        1:"A" //빼줘도 에러안남 
    }
    console.log(user2.age)
    user2.age = 32 
    user2.gender = "male" 
    // user.birthday = 2002 //에러



}