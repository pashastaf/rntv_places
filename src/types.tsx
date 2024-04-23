export type Destination = {
    id: number;
    name: string;
    country: string;
  };
  
  export type PizzaSize = 'S' | 'M' | 'L' | 'XL';
  
  export type CartItem = {
    id: string;
    destination: Destination;
    destination_id: number;
    size: PizzaSize;
    quantity: number;
  };
  
  export const OrderStatusList: OrderStatus[] = [
    'New',
    'In work',
    'Complete',
  ];
  
  export type OrderStatus = 'New' | 'In work' | 'Complete';
  
  export type Order = {
    id: number;
    created_at: string;
    total: number;
    user_id: string;
    status: OrderStatus;
  
    order_items?: OrderItem[];
  };
  
  export type OrderItem = {
    id: number;
    destination_id: number;
    destination: Destination;
    order_id: number;
    size: PizzaSize;
    quantity: number;
  };
  
  export type Profile = {
    id: string;
    group: string;
  };
  