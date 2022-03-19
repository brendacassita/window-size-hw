import logo from './logo.svg';
import './App.css';
import WindowDemo from './WindowDemo'
import WindowSize from './WindowSize';
import useWindowSize from './useWindowSize'
import { PRIMARY_COLOR } from './Colors'
import Button from './Button';

function App() {
    const windowSize = useWindowSize()
  
    
    const renderThings = ()=>{
      return (
        <div>
                <WindowSize />
                <WindowDemo />
        </div>
      )
    }

    return (
      <div className='App' style={{border:`2px solid ${PRIMARY_COLOR}`}}>
        <h1>App Component</h1>
        <WindowSize />
        <p>{JSON.stringify(windowSize)}</p>
        {/* <Button> </Button> */}
     
      </div>
    );
  }


export default App
