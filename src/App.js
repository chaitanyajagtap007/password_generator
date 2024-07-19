import logo from './logo.svg';
import './App.css';
import Color from './Components/Color';
import Card from './Components/Card';
import Card_data from './Components/Card_data';
import Time from './Components/Time';
import Passwordgenerator from './Components/Passwordgenerator';

function App() {
  return (
    <>
      {/* 1st demo color changer */}

        {/* <Color/> */}
        
      {/* 2nd create a card  */}
        
        {/* <div className="container-fluid">
          <div className="row">
            <Card img={Card_data[0].img} name={Card_data[0].name} desc={Card_data[0].desc} btn={Card_data[0].btn} />
            <Card img={Card_data[1].img} name={Card_data[1].name} desc={Card_data[1].desc} btn={Card_data[1].btn} />
            <Card img={Card_data[2].img} name={Card_data[2].name} desc={Card_data[2].desc} btn={Card_data[2].btn} />
            <Card img={Card_data[3].img} name={Card_data[3].name} desc={Card_data[3].desc} btn={Card_data[3].btn} />
            <Card img={Card_data[4].img} name={Card_data[4].name} desc={Card_data[4].desc} btn={Card_data[4].btn} />
            <Card img={Card_data[5].img} name={Card_data[5].name} desc={Card_data[5].desc} btn={Card_data[5].btn} />
            <Card img={Card_data[6].img} name={Card_data[6].name} desc={Card_data[5].desc} btn={Card_data[5].btn} />
            <Card img={Card_data[7].img} name={Card_data[7].name} desc={Card_data[5].desc} btn={Card_data[5].btn} />
          </div>  
        </div> */}
      
    {/* 3rd Demo Live Time */}

        {/* <Time/> */}

    
    {/* 4th Demo Password Generator */}
      
      <Passwordgenerator/>
    </>
  );
}

export default App;
