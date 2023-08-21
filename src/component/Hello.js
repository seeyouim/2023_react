import World from "./World";

// JavaScript 에서 변수 설정: var(변수), >>> let(변수), const(상수)
const Hello = function () {
    // jsx는 하나의 태그만 만들 수 있음
    return(
        <div>
        <h2>Hello</h2>
        <World></World>
        </div>
    )
}

export default Hello;