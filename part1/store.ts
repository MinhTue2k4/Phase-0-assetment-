import type { Order, User } from './types.js';
import { fetchOrders, fetchUsers } from './api.js';

export const store = {
    users: [] as User[],
    orders: [] as Order[],
};

export const userNameById = new Map(store.users.map((u) => [u.id, u.name]));

export async function loadUsers(): Promise<void> {
    store.users = await fetchUsers();
}

export async function loadOrders(): Promise<void> {
    store.orders = await fetchOrders();
}

export async function archiveOldOrders(): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 80));
    const before = store.orders.length;
    store.orders = store.orders.filter((o) => o.status !== 'pending');
    return before - store.orders.length;
}
