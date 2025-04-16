
import { useParams, useNavigate } from "react-router-dom";
import { rooms } from "../data/rooms";

export const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const room = rooms.find((r) => r.id === id);

  if (!room) return <p>Quarto não encontrado.</p>;

  const handleReserve = () => {
    navigate("/booking-success");
  };

  return (
    <div>
      <h2>{room.name}</h2>
      <p>{room.description}</p>
      <p><strong>Preço:</strong> R${room.price}</p>
      <button onClick={handleReserve}>Reservar</button>
    </div>
  );
};
