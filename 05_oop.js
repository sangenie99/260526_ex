//JS OOP
//객체 리터럴
const o1 = {
    "속성명": "값",
    "속성명2": "값",
    myFun: function(a,b) {
        console.log(this) // 이 리터럴로 만들어질 객체를 객체 내부에서 호출하는 방법. [ES6] 이후부터는 function도 사용하지 않고 myFun()로 사용 가능.
    },
    myFun2: () => {
        console.log("myFun2");
    }
};
console.log(o1);

// prototype 생성자
function Student(name, major) { // 외부에서 받을 매개변수
    this.name =name;
    this.major = major;
    this.country = "한국"
    this.hello = () => console.log("안녕");
}

const s1 = Student("홍길동", "컴퓨터"); // 리터럴 객체 생성
console.log(s1); // 생성자 함수 앞에 new 가 없으면 일반 함수로 취급되어 this가 global로 변경되어 undefined

const s2 = new Student("홍길동", "컴퓨터"); // new 유무
console.log(s2)

const s3 = new Student("홍길동", "컴퓨터");
console.log(s3)
//프로토타입 기반 생성자 -> 프로퍼티로 같은 값을 공유해야 할 때(인스턴스마다 생성하지 않고 외부에서 관리)