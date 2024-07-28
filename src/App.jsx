import './App.css';
import './Store'
import Header from './Components/Header';
import { useState } from 'react';
import './data'
import MovieList from './Components/MovieList';
import bGImg from './Components/Images/3feb9d7a97a93cac67eb291272ab227e.jpg'
import Store from './Store';

function App() {

  const [movieName, setMovieName] = useState('Weather With You');
  const [description, setDescription] = useState('Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.')
 
  return (
    <Store.Provider value={{movieName, setMovieName, description, setDescription }}>
      <div>
        <Header />
        <div className='banner'>
          <img className='background' src={bGImg} alt="" />
          <h3 className='movieName'>{movieName}</h3>
          <div className='description'>{description}</div>
        </div>
        <div className='newRelease'>
          <h2 className='title'>New Release</h2>
          <MovieList></MovieList>
        </div>
      </div>
    </Store.Provider>
  );
}

export default App;
