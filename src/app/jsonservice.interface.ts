export interface JSONServiceInterface<T> {
    items: T[];

    fetchItems(): Promise<T[]>;
}
