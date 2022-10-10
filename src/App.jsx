import logo from './logo.svg';
import './App.css';
import FloorPlan from './FloorPlan';

function App() {
  const floorPlanJSON = [{
    type: "Bedroom", 
    num: 1,
  }, {
    type: "Kitchen",
    appliances: [{type:"Oven"},{type:"Sink"}]
  },{
    type:"Full Bath"
  },{
    type:"Bedroom",
    num: 2,
  },{
    type:"Living Room"
  },{
    type:"Half Bath"
  },{
    type: "Bedroom",
    num: 3
  }]
  
  return (
    <div className="App">
      <FloorPlan plan={floorPlanJSON}/>
    </div>
  );
}

export default App;
