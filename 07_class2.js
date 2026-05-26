// 상속과 static을 다룰 예정임.....
// 상속이란?
class Animal {
    #name;
    constructor(name) {
        this.#name = name;
    }
    speak(){ console.log(this.#name)}
}
const a = new Animal("기니피그");
a.speak();

class Cat extends Animal { // 이미 기존에 구현해 놓은 클래스를 써서 일부 내용을 공유하는 신규 클래스를 만드는 방법
    #age;
    constructor(name,age) {
        // 냅두면 상속받은 원래 출처의 생성자가 기본으로 활성화
        // 우리가 직접 생성자를 만들면 그게 새로운게.
        // 상속 받은 직전 클래스
        super(name); // 즉 상속은 super임
        this.#age = age;
    }
    speak() {
        super.speak()
        console.log(`나는 ${this.#age}살이다옹`)
    }
}
const b = new Cat("나비", 10);
const c =new Cat("비스마르크", 50);
c.speak();
b.speak();

//static
class Animal {
    count = 0; //인스턴스 귀속 -> new 만들면 그 객체에서 count 영역시 생김
    static count = 0; //클래스 귀속 -> 별도 저장공간에 class
    #name;
    constructor(name) {
        this.#name = name;
        this.count++;
        Animal.count++;
    }
    speak(){ console.log(this.#name)}
}
const a = new Animal("기니피그");
a.speak();
console.log(a.count, b.count, c.count)