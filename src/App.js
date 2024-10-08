import './App.css'; //css폴더를 임폴트해서 받아옴.
import { useState } from 'react';

function App() {


  let [글제목, set글제목] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학'])
  let [따봉, set따봉] = useState(0);



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

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => set따봉(따봉+1)}>👍</span> { 따봉 }</h4>
        <p>2월 17일 글발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 글발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 글발행</p>
      </div>
    </div>
  );
}

export default App;
