    import dummy from "../db/data.json"
    import {useParams} from "react-router-dom";
import Word from "./Word";
    export default function Day(){
        // url에 포함된 day값을 가져오기 위해서 userParams()
        // userParams()는 라우터에서 제공
        // 날짜가 1인것만 출력하기 위함
        const day = useParams().day;
        console.log("day : " + day);
        // filter는 해석 그대로 걸러주는 역할을 하는 함수이다.
        // 주로 특징 조건을 만족하는  새로운 배열을 필요로 할 때 사용하는 편
        // SQL로 치면 where절에서 하는 행위를 하는 함수
        const wordList = dummy.words.filter(k => (k.day === Number(day)));
        return(
            <div>
            <table>
                <tbody>
                    {/* map은 배열의 요소를 하나씩 추출해서 처리 할때 사용,
                    k는 배열에서 나온 하나의 요소를 의미한다. */}
                    {wordList.map(k =>(
                        // 컴포넌트에 속성을 부여하는것 => props
                        <Word word={k} key={k.id}></Word>
                    ))} 
                </tbody>
            </table>
            </div>
        );
    }