
export interface Room {
    id: string;
    name: string;
    description: string;
    price: number;
  }
  
  export const rooms: Room[] = [
    { id: '1', name: 'Quarto Luxo', description: 'Vista para o mar, cama king-size.', price: 500 },
    { id: '2', name: 'Quarto Simples', description: 'Ideal para uma pessoa.', price: 200 },
    { id: '3', name: 'Suíte Master', description: 'Jacuzzi e varanda.', price: 800 },
  ];
  