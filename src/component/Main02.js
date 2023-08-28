    import {useState} from "react";
    function Head(props) {
        return(
            <header>
                {/* E => 이벤트 */}
                <h1><a href="/" onClick={(e) => {
                    // 페이지 리로드를 하지 않게 하자
                    e.preventDefault();
                    // Head 컴포넌트에 onChangeMode를 실행 한다.
                    props.onChangeMode();
                }}>{props.title}</a></h1>
            </header>
        );
    }
    function Nav(props) {
        console.log(props)
        const arr = [];
        for (let i = 0; i < props.topics.length; i++) {
            let t = props.topics[i];
            arr.push(<li key={t.id}>{t.id} . 
            <a id={t.id} href={"/read/"+t.id} onClick={(e) => {
                e.preventDefault();
                props.onChangeMode(t.id);
            }}>{t.title}</a></li>);
            
        }
        return(
            <nav>
                <ol>
                    {arr}
                </ol>
            </nav>
        );
    }
    function Article(props) {
        return(
            <article>
                <h2>{props.title}</h2>
                {props.body}
            </article>
        );
    }
    function Create() {
        return <article>
            <h2>Create</h2>
            <form onSubmit={(e)=>{
                const title = e.target.title.value;
                const body = e.target.body.value;
                // props.onCreate(title,body);
            }}>
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" value="Create" /> </p>  

            </form>
        </article>
    }
    export default function Main02() {
        
        const topics = [
            {id:1, title:"HTML", body:"Hypertext Markup Language"},
            {id:1, title:"CSS", body:"Cascading Style Sheets"},
            {id:1, title:"JS", body:"JavaScript"},
        ];
        const [mode, setMode] = useState('WELCOME');
        const [id, setId] = useState(null);
        const [nextId, setNextId] = useState(4);
        let content = null;
        if(mode === 'WELCOME'){
            content = <Article title="Welcome" body="Hello, WEB"></Article>;
        }else if(mode === 'READ'){
            let title, body = null;
            for (let i = 0; i < topics.length; i++) {
                // id를 조작하기 위해서 useState를 사용하자
            if(topics [i].id === Number(id)){
                title = topics[i].title;
                body = topics[i].body;
            }
                
            }

            content = <Article title={title} body={body} />;
        }else if(mode === 'CREATE'){
            content = <Create onCreate={(_title, _body)=>{
                const newTopics = {id:nextId, title:_title, body:_body};
                // top 배열을 복사해서 newTops를 만든다.
                const newTopics2 = [...topics]
                // newTopics에 파라미터로 넘어온 값을 배열로 만든 newTopics 추가
                newTopics2.push(newTopics);
                setMode('READ')
                setId(nextId)
                setNextId(nextId+1)
            }} />
        }
        
        return(
            <div>
                {/* 컴포넌트, props */}
                <Head title="WEB" onChangeMode={()=>{
                // alert("Head");
                setMode("WELCOME");
                }} />
                <Nav topics={topics} onChangeMode={(id) => {
                    // alert(id);
                    setMode("READ");
                    setId(id);
                }}/>
                {/* <article title="Welcome" body="Hello, WEB"></article> */}
                {content}
                <a href="/create" onClick={(e)=>{
                    e.preventDefault();
                    setMode('CREATE');  
                }}>Create</a>
            </div>
        );
    }