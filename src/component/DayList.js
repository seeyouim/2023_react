import dummy from "../db/data.json"
import {Link } from "react-router-dom";
export default function DayList(){
    // console.log(dummy); 
    // json 같은 반복 처리 할때는 주로 map을 사용
    return(
        <ul className="list_day">
            {dummy.days.map(k => (
                <li key={k.id}><Link to={`/day/${k.day}`}>Day{k.day}</Link> </li>
            ))}
        </ul>
    );
}