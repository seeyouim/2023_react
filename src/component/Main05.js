import styles from './Main04.module.css'
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// 1. props에 대한 정보를 모두 삭제 하자
// 2. redux를 설치하자() : https://react-redux.js.org/introduction/getting-started
//    ** 1. npm install react-redux
//    ** 2. npm install redux react-redux
// 만약, ERROR in ./src/component/EmptyPage.js 4:0-40 가 난다면!
// Module not found: Error : Can't resolve 'react-router-dom'
// ** npm install react-router-dom --save
// 3. import 하기
// 4. store 생성
// 5. store에 들어 갈 reducer 함수(현재 state상태와 action을 인자로 받는다.) 만들기
// 6. react-redux를 사용하기 위해서 3가지 import 하기
//    import { Provider, useSelector, useDispatch } from "react-redux";
//    ** Provider => 사용할 범위에 지정해준다.
//    ** useSelector => 어떤 state 값을 사용할 지를 선택,
//    ** useDispatch => state값 변경

function reducer(currentState, action) {
    // const[number, setNumber] = useState(1) 과 같은 의미!
    if(currentState === undefined){
        return{number : 4 };
    }
    // 현재 상태 복사 => newState
    const newState = {...currentState}
    // action으로 인해서 정보가 변경된다.
    if((action.type === 'PLUS')) {
        newState.number ++;
    }else if((action.type === 'MINUS')) {
        newState.number --;
    }
    return newState;
}

// createStore 반드시 reducer를 인자로 넣어야 된다.
const store = createStore(reducer);

export default function Main05() {
    // const[number, setNumber] = useState(1);
    return(
        <div id={styles.container}>
            {/* Reducer의 단점을 보완한게 Redux */}
            <h1> Root </h1>
            <div id={styles.grid}>
                {/* Provider => 사용할 범위에 지정해준다. */}
                    <Provider store={store}>
                        <Left1 />
                        <Right1 />
                    </Provider>
            </div>
        </div>
    );
}

function Left1(props) {
    return(
        <div>
            <h1>Left1 </h1>
            <Left2 />
        </div>
    );
}

function Left2(props) {
    return(
        <div>
           <h1>Left2 </h1>
           <Left3 />
        </div>
    );
}

function Left3(props) {
    // function f(state) {
    //    return state.number;
    // }
    // 어떤state 값을 사용할 지를 선택, 함수를 인자로 받는다.
    // const number = useSelector(f)

    const number = useSelector((state)=>state.number)
    return(
        <div>
            <h1>Left3 : {number} </h1>
        </div>
    );
}

function Right1(props) {
    return(
        <div>
            <h1>Right1</h1>
            <Right2 />
        </div>
    );
}

function Right2(props) {
    return(
        <div>
            <h2>Right2</h2>
            <Right3 />
        </div>
    );
}

function Right3(props) {
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Right3</h2>
            {/* 버튼을 눌렀을 때 reducer의 state 값이 변경된다. => useDispatch() */}
            <input type='button' value='+' onClick={()=>{
                // 실행할 때의 약속어를 넣어주자
                // 약속어 확인은 reducer if((action.type === 'PLUS')){}
                dispatch({type : 'PLUS'});
            }} />

            <input type='button' value='-' onClick={()=>{
                // 실행할 때의 약속어를 넣어주자
                // 약속어 확인은 reducer if((action.type === 'MINUS')){}
                dispatch({type : 'MINUS'});
            }} />
        </div>
    );
}