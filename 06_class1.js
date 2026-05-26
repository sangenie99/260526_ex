// class
class Person {
    // 생성자
    constructor(name) { //생성자의 매개변수로 받고
        this.name = name; // 소명ㄹ하지 않고 Person내부의 property로 남음   
        this.age;
        this.address = "대한민국";
    }
    #age = 20; // #을 붙이면 클래스 외부에서는 접근 불가
    // 접근 불가가 되었을 때는 3가지
    // 1. 앞으로 이 값은 변화하지 않거나 내부 작업에만 필요함
    // 2. 은닉성(모듈화, 객체지향) => 메모리주소 자체를 노출하지 않고 접근자/메서드를 통해서만 변경하여 차후 검증이나 복잡한 로직을 대응.
    // 3. 인스턴스의 상태 저장
    
    address;
    hi() {
        console.log(`${this.name}에요. 반갑습니다.`)
    }
}

const p1 = new Person("상구");
const p2 = new Person("윌리엄")
console.log(p1)
p1.hi();

//필ㄷ, 멤버변수, 속성 => 각각 객체(인스턴스)별로 별도의 저장공간을 가지는 개념
console.log(p1.name,p2.name);