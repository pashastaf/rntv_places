import { Order } from '@/src/types';
import destinations from './destiantions';
import dayjs from 'dayjs';

const now = dayjs();

const orders: Order[] = [
  {
    id: 23123,
    created_at: now.subtract(1, 'hour').toISOString(),
    total: 31.4,
    status: 'New',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 23123,
        size: 'M',
        quantity: 2,
        destination_id: destinations[0].id,
        destination: destinations[0],
      },
      {
        id: 2,
        order_id: 23123,
        size: 'L',
        quantity: 1,
        destination_id: destinations[1].id,
        destination: destinations[1],
      },
    ],
  },
  {
    id: 32145,
    created_at: now.subtract(3, 'days').toISOString(),
    total: 11.4,
    status: 'Complete',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 32145,
        size: 'M',
        quantity: 2,
        destination_id: destinations[3].id,
        destination: destinations[3],
      },
    ],
  },
  {
    id: 23445,
    created_at: now.subtract(3, 'weeks').toISOString(),
    total: 11.4,
    status: 'In work',
    user_id: '1',
    order_items: [
      {
        id: 1,
        order_id: 23445,
        size: 'M',
        quantity: 1,
        destination_id: destinations[3].id,
        destination: destinations[3],
      },
      {
        id: 2,
        order_id: 23445,
        size: 'M',
        quantity: 1,
        destination_id: destinations[7].id,
        destination: destinations[7],
      },
      {
        id: 3,
        order_id: 23445,
        size: 'L',
        quantity: 1,
        destination_id: destinations[8].id,
        destination: destinations[8],
      },
    ],
  },
];

export default orders;
