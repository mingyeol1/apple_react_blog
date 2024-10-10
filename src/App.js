import './App.css'; //css폴더를 임폴트해서 받아옴.
import { useState } from 'react';

function App() {


  let [글제목, set글제목] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학'])
  let [따봉, set따봉] = useState([0,0,0]);
  let [modal, setModal] = useState(false);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>매기블로그</h4>
      </div>
  
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = "여자 코트 추천";
        set글제목(copy);
      }}>글수정</button>

      <button onClick={() => {
        let 정렬 = [...글제목].sort();
       
        set글제목(정렬)
      }}>가나다정렬</button>

      {
        글제목.map(function(a ,i){
          return(
          <div className="list" key={i}>
          <h4 onClick={()=> {modal === true ? setModal(false) : setModal(true)}}>{글제목[i]} 
          <span onClick={()=>{ 
            let copy = [...따봉];
            copy[i] = copy[i] + 1;
            set따봉(copy)  
   }}>👍</span> {따봉[i]} 
          </h4>
          <p>2월 17일 글발행</p>
           </div>
          )
        })
      }

      {
        modal === true ? <Modal set글제목={set글제목} 글제목={글제목}/> : false
      }

    </div>
  );
}

function Modal(props){
 return (
  <div className='modal'>
  <h4>{props.글제목[0]}</h4>
  <p>날짜</p>
  <p>상세내용</p>
  <button onClick={()=> {
    let copy = [...props.글제목];
    copy[0] = '여자코트 추천'
    props.set글제목(copy);
  }}>변경</button>
  </div>
 )
}

export default App;
