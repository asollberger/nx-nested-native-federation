export interface Account {
    type: string;
}

export interface Client {
    name: string;
}

export interface RequestStoreDto {
    accounts: Record<string, Account>;
    clients: Record<string, Client>;
}
