import Appliance from "./Appliance";

const Room = (props) => {
  return ( 
    <>
      <h1>{props.room.type} {props.room?.num}</h1>
      {props.room?.appliances ? props.room?.appliances.map(appli => <Appliance appliance={appli}/>): null}
    </>
  )
}
 
export default Room;