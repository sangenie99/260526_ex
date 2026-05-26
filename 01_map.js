// MAP
// 1. Map Vs Object

const o = {};
o.a ="a";
o.b="b";
o["c d"] = "c d";
// k, v -> 호출할 수 있는 이름 => 값
o["e"] = function() {
    console.log(o);
};
// 숫자를 넣으면 배열로 인식된다든가
// 1. 효율적이지도 않고
// 2. Key value라는 목적에도 충실하지도 않다.
console.log(o);

const map = new Map(); // new - 생성자 -> Map()
// 데이터를 관리하는 여러 함수들을 내장
// map.get, map.set, map.has ...
//왜 별도의 map이 JS에서 필요하게 되었는가? (object로 충분하지 않나?)
o["aa"] = 1234; //식별자 규칙을 위반하지 않는 (공백, 특수문자)
//객체명[프로퍼티명(리터럴 - 타자형태로 쳐서 표현할 수 있는 값)] =값
o.bb=12345;

//map은 set이라는 전용함수로 처리
//map.set(키, 값)
map.set("aa", 1234);
map.set("bb", 12345);

//CRUD <- 다 거침
console.log(o["aa"], o.aa)
map.get("aa"); // 세팅할 값이 없으니까
// map.get(호출하려는 키)

// 객체에서 특정한 프로퍼티가 포함되었는지 'in'으로 검증
console.log("aa" in o);

//특정한 키의 포함 여부
console.log(map.has("aa"));
console.log(map.has("cc"));
//key-map 연결시킨다.

// 바로 get of에 넣을 수 없음. 변환.
for (const c of Object.entries(o)) {
    console.log(c);
}

//delete o[프로퍼티명]
map.delete("aa"); // 삭제하는 것도 delete로 따로 있다.
console.log(map);

//객체였으면 Object.* 외부 유틸리티를 썼어야하는...
console.log(map.entries()); // map이 들고 있는 이터러블
console.log(map.keys());
console.log(map.values());

for(const c of map) { //변환과정 등을 거치지 않아도 
    // iterable하다 -> 순회할 수 있다.
}
//객체는 스스로 길이 관련된 게 x
console.log(Object.values(o).length);
console.log(map.size);

const m = new Map();
m.set("counter", 0)

if (m.has("counter") && typeof m.get("counter") === "number") {
    m.set("counter", m.get("counter") + 1);
}
console.log(m.get("counter"));

console.log("=====================");

// 2. 사용법
const appleMap = new Map();

appleMap.set("반지", 100);
appleMap.set("바지", 2000);
appleMap.set("신발", 30000);

// get() 메서드
console.log(appleMap.get("반지")); // 반지의 값을 출력
console.log(appleMap.get("신발")); // 신발의 값을 출력

// size 속성
console.log(appleMap.size); // 3 (반지, 바지, 신발)

// has() 메서드
console.log(appleMap.has("신발")); // true (신발이 있음)
console.log(appleMap.has("양말")); // false (양말이 없음)

// delete() 메서드
appleMap.delete("바지");
console.log(appleMap.size); // 2 (바지가 삭제됨)

// clear() 메서드 (전체 삭제)
appleMap.clear();
console.log(appleMap.size); // 0 (모든 데이터 삭제)

// for..of 루프로 순회
const myMap = new Map();
myMap.set("사과", 5);
myMap.set("바나나", 3);
myMap.set("오렌지", 2);

for (const [fruit, count] of myMap) {
    console.log(`${fruit}의 개수는 ${count}개 입니다.`);
}

// 2. map vs map
//  hash map, hash table의 자료 구조를 사용해서 k-v를 구현해서 dictionary 랑 store 같은거다.
// 자료구조로서의 map과 map() 함수가 있다.
// map()으로서의 map은 일괄적으로 변환시키는 것을 map이라고도 한다.


const mm = new Map();
[].map()
// Array.from(mm.entries()).map(([k,v]) => console.log(k,v));