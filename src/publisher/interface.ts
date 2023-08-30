export interface ISubscriber<T>{
    id: string
    subscription: any
    receive(data: T): void
    endSubscription(): void
}