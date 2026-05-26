// 커스텀 에러
class MuyError extends Error {}

// try {
//     // 뭔가 내가 마음에 안드는 상황
//     throw new MuyError("somethings go wrong");
// } catch(e) {
//     console.log(e);
//     throw e; // 그대로 상위로 올려서 처리를 막을 수 있음
//     // 이걸 처리할 새로운 catch가 있거나, 시스템 실행 종료
//     console.log("뒤는 도달 못하고... 이것은 아마 표시되지 않을 것이야 ㅋㅋ")
// }


// // function 1 : function 외부로 전파
// function f() {
//     return f2(); //function은 return으로만 외부로 내보낼 수 있다
// }
// function f2() {
//     throw new Error("??")
//     return true;
// }
// try {
//     console.log("f",f());
// } catch (e) {
//     console.log(e);
// }
// // function 2 : function return & finally
// try {
//     console.log(1);
//     a.a; // 일종의 return

// }

function ff() {
    try {
        if (Math.random()>=0.5){
            a.a;
        }
        const a=0;
        return "Try 리턴"
    } catch {
        return "Catch 리턴"
        console.log(a);
    } finally {
        // finally가 무조건 마지막에 실행되기 때문에
        // 앞에서 return은 함수블록을 종료시키는 의미만 있고, 반환에서는 우선권 x
        return "finally 리턴"
        console.log(a);
        // finally에서는 리턴을 사용하면 x
    }
}

console.log(ff());