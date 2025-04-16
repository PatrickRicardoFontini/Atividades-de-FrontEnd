
import { Link } from "react-router-dom";
import { rooms } from "../data/rooms";

export const Rooms = () => (
  <div>
    <h2>Quartos Disponíveis</h2>
    <ul>
      {rooms.map((room) => (
        <li key={room.id}>
          <Link to={`/rooms/${room.id}`}>{room.name}</Link> - R${room.price}
        </li>
      ))}
    </ul>
  </div>
);
