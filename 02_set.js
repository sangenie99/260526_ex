// Set
// 집함 -> 스스로가 각자가 다른 것과 구분되는 원소인 자료형

// object, map도 보면 특정 '키'에는 한 값만 들어갈 수 있음

const m = new Map();
m.set('a', 1234);
m.set('b', 1234);
// 중간에 해시가 꼈으니까 a-> 각자 같은 값을 껴도 된다.
console.log(m);

m.set("a", 5678); // a라는 키에 대응할 수 있는 값은 1개이기 때문에 '덮어쓰기' 가능
console.log(m);
// a라는 키는 중복이 안된다. a에 들어가는 값은 중복될 수 있음

const s = new Set();
s.add(1234); // 키를 넣는 부분이 없음
console.log(s); //값이 곧 키다.
// 중복을 허용하지 않는다 -> 값에도
s.add(1234);
console.log(s);


//entry 형태로 넣으면 바로 기존의 객체나 배열 등을 바탕으로 생성할 수 있음
const mm= new Map(Object.entries({a:"a"}));
console.log(mm);

//같은 값을 감지해서 정리를 해버린다.
const ss = new Set(['a','b','c','a','b','c']);
console.log(ss);

//for문으로 객체, 배열, 맵 등을 사용해서 중복 정리하기를 할 수는 있는데
// 속도도 느리고 구현 나이도도 적지 않은 편(set 직접 다른 자료구조로 구현하기)
console.log(s.has(1234));
s.delete(1234);
console.log(s.has(1234));

s.add(1234);
s.add(567);
s.add(89);
for(const c of s) {
    console.log(c);
}

//set vs set
// 자료구조 set: 1.밸류가 곧 키인 (중복 제거 연산) 2. 집합 연산을 지원하는 자료구조 (부분 집합)

//map할때 바진 것...
const o = {};
console.log("o.a" + o.a); //undefined
const mmm = new Map();
console.log("mmm.get('a')", mmm.get('a')); //undefined
// Java, Python -> 없는 키를 호출 했을 때의 반응이 다르다
// Java(get) : 없는 것 호출하려면 null, Python은 key Error가 나거나 get으로 하면 None

