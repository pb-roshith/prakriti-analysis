import NavUI from './component/navUI'
import BodyUI from './component/bodyUI';

function App() {
  return (
    <div style={{backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', backgroundImage: `url(${'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1696071245/12643219_5039684_w9tsh7.jpg'})` }}>
      <NavUI></NavUI>
      <BodyUI></BodyUI>
    </div>
  );
}

export default App;
