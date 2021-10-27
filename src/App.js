
import './App.css';
import Profile from './components/Profile';

function App() {
  const handleName = (name) => {
   (name!=='anonym')? (alert(`hi i am ${name}`)) : alert("plz edit your profile")
   }
  return (
    <div className="App">
      <Profile photo="https://image.ibb.co/dUTfmJ/profile_img.jpg" profession="job" fullName="hamza" bio="this is my bio" handleName={handleName}/>
      <Profile handleName={handleName} profession="another job" fullName="nisss" bio=" this is another bio" />
      <Profile handleName={handleName}  />
    </div>
  );
}

export default App;
