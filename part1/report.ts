import { store } from './store.js';

export function printReport(): void {
    console.log('--- BAO CAO ---');

    const paid = store.orders.filter((o) => o.status === 'paid');

    let revenue = 0;
    for (const order of paid) {
        revenue += order.amount;
    }
    console.log('Doanh thu (don paid):', revenue);

    const perUser = new Map<string, number>();
    for (const order of paid) {
        perUser.set(order.userId, (perUser.get(order.userId) ?? 0) + order.amount);
    }

    const userNameById = new Map(store.users.map((u) => [String(u.id), u.name]));

    for (const [userId, total] of perUser) {
        const name = userNameById.get(userId) ?? 'Unknown';
        console.log(`  ${name}: ${total}`);
    }
}
