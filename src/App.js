

function Header(props) {
  return <header>
      <h1><a href='/'>{props.title}</a></h1>


  </header>
}
function Nav(props) {
  const arr =[];
  for (let i = 0; i < props.topics.length; i++) {
       let t = props.topics[i];
       arr.push(<li key={t.id}><a href="/ "></a>{t.title}</li>)
  }
  return <nav>
        <ol>
          {arr}      
        </ol>
      </nav>
}
function Article(props) {
  // 배열
  return <article>
        <h2>{props.title}</h2>
        {props.body}
        
         </article>
}
function App() {
 const topics = [
  {id:1, title:'HTML', body:'HyperText Markup Language'},
  {id:2, title:'CSS', body:'Cascading Style Sheets'},
  {id:3, title:'JS', body:'JavaScript'},
 ]
  return (
    <div className="App">
    <Header title="REACT" />
    <Nav topics={topics}/>
    <Article title="Welcome" body="Hello, WEB" />
    <Article title="Hi" body="Hello React" />
    
    </div>
  );
}

export default App;
