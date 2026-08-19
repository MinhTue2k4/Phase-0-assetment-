import type { Order, User } from './types.js';

const RAW = `{
  "users": [
    { "id": "u1", "name": "An" },
    { "id": "u2", "name": "Binh" },
    { "id": "u3", "name": "Chi" }
  ],
  "orders": [
    { "id": "o1", "userId": "u1", "amount": 120.5, "status": "paid" },
    { "id": "o2", "userId": "u1", "amount": "80", "status": "paid" },
    { "id": "o3", "userId": "u2", "amount": 200, "status": "pending" },
    { "id": "o4", "userId": "u3", "amount": 50, "status": "paid" },
    { "id": "o5", "userId": "u2", "amount": 30, "status": "pending" }
  ]
}`;

async function readData(): Promise<{ users: unknown[]; orders: unknown[] }> {
    await new Promise((resolve) => setTimeout(resolve, 120));
    return JSON.parse(RAW);
}

export async function fetchUsers(): Promise<User[]> {
    const data = await readData();
    return data.users as User[];
}

export async function fetchOrders(): Promise<Order[]> {
    const data = await readData();
    return data.orders as Order[];
}
