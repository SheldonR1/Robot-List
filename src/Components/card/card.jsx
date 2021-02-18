
import "./card.css"
export const Card=(props)=>(
     <div className="card-container">
          <img alt="user" src={`https://robohash.org/${props.user.id}?set=set1`} />
          <h2>{props.user.name}</h2>
          <p>{props.user.phone}</p>
           </div>
);
 