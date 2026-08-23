import { archiveOldOrders, loadOrders, loadUsers, store } from './store.js';
import { printReport } from './report.js';

async function main(): Promise<void> {
    await loadUsers();
    await loadOrders();

    printReport();

    await archiveOldOrders();

    console.log('Xong. So don con lai:', store.orders.length);
}

main();
