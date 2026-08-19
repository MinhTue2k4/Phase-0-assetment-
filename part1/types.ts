export interface User {
    id: string;
    name: string;
}

export interface Order {
    id: string;
    userId: string;
    amount: number;
    status: 'paid' | 'pending';
}
