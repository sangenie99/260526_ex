// 고차함수  <- 함수를 parameterfh 로 받거나 return하는 경우

//sort
const a = [1, 13, 5, 8, 3];
// 정렬한다 ->for문? 이건 죽음이야
console.log(a.sort()); // [1,13,3,5,8];
//자바스크립트의 기본 정렬은 '문자열'화 시킨다음에 정렬을 합니다.
//  13,2 ->2가 뒤에옴
// [1]-3, [2]-.. => 작은 순서에서 큰순서로 배치나흔 것 오름차순
// 오름차순 : 데이터가 등장하는 방향과 데이터가 커지는 방향이 일치할 때 (ascending)
// 내림차순 : 데이터가 등장하는 방향과 데이터가 커지는 방향이 반대일 때 (descending)

console.log(a); //자바스크립트에서는 sort method 사용시 본래값도 변경을 하고, 변경된 값(배열)도 리턴을 한다.
// a.toSorted - 원본에 영향을 미치지 않고 정렬된 결과만 가져다주는 내장 메서드
function compare(a,b) { // 앞 원소, 뒤 원소 2개
    // 1 5 13 8 2
    //1-5 -> -4 -> 1이 앞에옴
    // 5-13 -> -8 -> 5가 앞에옴
    // 13-8 -> 5 -> 13이 앞에옴

    return a-b; //내림차순일때는 b-a
};

const compare2 = function(a,b) {
    return b-a;
}
console.log(a.sort(compare));
console.log(a.sort(compare2));
console.log(a.sort((a,b)=> a-b));

const a2 = [1,-1,5,-19,7];

//화살표 함수가 가장 일반적으로 고차원 함수 수현시 parameter로 사용
console.log(a2.sort((a,b)=> Math.abs(a) - Math.abs(b)));

//배열 내장 매서드 <- 함수를 parameter로 쓰기 때문에 고차 함수
// 배열 내장 method에 parameter로 들어가는 함수  -> fn(value, index, arra)
// value : 값 자체. index : 0부터 시작되는 인덱스, array: 전체 배열


//() 없이 붙이면 알아서 필요할 때 호출해서 써라 / () 붙이면 -> 값을 써라
a2.forEach((v) => console.log(v));
// 배열 내장 메서드에 패러미터로 들어가는 함수 -> fn(value, index, array)
// value: 값 자체. index: 0부터 시작되는 인덱스, array: 전체 배열

// for of, for in, for와 비슷한데 -> 중간에 흐름제어를 못하는 for문.

//map -> 대체. a,b,c,d,e-> (...) => a',b',c',d',e'
console.log(a2);
console.log(a.map((v) => Math.abs(v)));
console.log(a2.map(Math.abs)); //return하는 결과만 반환. -> [1,1,5,19,7]
console.log(a2.map((v, i) => {
    if (i%2 == 0){
        return v**2;
    } else {
        return 0;
    }
}));

console.log(a2.map((v, i) => (i%2 ==0 ? v **2 :0)));
console.log(a2.map((v, i) => (!(i%2) ? v **2 :0))); // 숏 코딩.
// 배열 -> for문, 압축되지 않은 표현식 -> (함수화) -> 배열내장 method + 고급 연산자들을 사용해서 표현식 압축

console.log(a2); // map 원본에 영향을 안미침. - 복사본을 만든다 [...arr] <- fn으로 하나씩 작업을 한 셈.


// filter - map이랑 비슷한데 결과가 무조건 true/false. -> true인 것들만 남겨서 신규 배열을 만든다.
// console.log(a2.filter((v) => v%2 ==0));
// console.log(a2.filter((v) => v%3 ==0));
// console.log(a2.filter((_, i) =>i !==0 && i%3 ==0));

// const aa = [];
// for (const v of a2) {
//     if (v % 3 ==) {
//         aa.push(v);
//     }
// }
// 별도의 변수/상수로 새로운 리턴값을 지정해줘야함 (scope, 구현상의 편의 등...)

// Reduce -> 배열을 1개의 값으로 변환. => 잘 써야한다.
const a4 = [1, 10, 5, 4, 7];
// 1. 숫자 연산
// forEach, map, filter => v, i, a /sort >e1, e2
// fn(prev, cur, i, arr)
// fn(acc, cur)
let sum = 0
for (const v of a4) {
    sum += v;
};
console.log(sum);
a4.reduce((prev, cur)=> prev + cur);

// chaining
const d = ["Bob", "alice", "jane"]
// a나 b로 시작하는 단어중에 3글자 이하인 것을 찾으시오
console.log(d.filter(v => (v[0] === 'a' || v[0] ==='b') && v.length <= 3));

console.log(
    d
    .map((v) => v.toLowerCase())
    .filter((v) => v[0] === 'a' || v[0] ==='b')
    .filter((v) => v.length <=3)
    //체이닝
);