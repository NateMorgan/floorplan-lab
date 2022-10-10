import Room from "./Room";

const FloorPlan = (props) => {
  return ( 
    <>
      {props.plan.map(room =>
        <div>
          <Room room={room}/>
        </div>
        )}
    </>
   );
}
 
export default FloorPlan;