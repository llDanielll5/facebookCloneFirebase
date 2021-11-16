import './App.css';
import Header from './Header';
import Stories from './Stories';
import FeedForm from './FeedForm'
import FeedPost from './FeedPost';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Stories></Stories>
      <FeedForm></FeedForm>

      <FeedPost nome="Daniel" conteudo="Aprenda verdadeiramente como ser um programador full-stack com Daniel" horario="20:45 "></FeedPost>
      


    </div >
  );
}

export default App;
