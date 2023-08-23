import dummy from "../db/data.json"
export default function DayList(){
    // console.log(dummy); 
    // json 같은 반복 처리 할때는 주로 map을 사용
    return(
        <ul className="list_day">
            {dummy.days.map(day => (
                <li key={day.id}>Day {day.day} </li>
            ))}
        </ul>
    );
}