
export interface AsyncResult<T> {
    (): Promise<T>;
}

export interface AsyncResultList<T> {
    (): Promise<T[]>;
}
