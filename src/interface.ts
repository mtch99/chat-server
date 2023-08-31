export interface IEventHandler {
    setNext: IEventHandler
}


export enum ServerMessageType {
    AUTHENTICATION_REQUEST = "AUTHENTICATION_REQUEST",
    SUBSCRIPTION_REQUEST = "SUBSCRIPTION_REQUEST",
    SUBSCRIPTION_DATA = "SUBSCRIPTION_DATA"
}

export enum ClientMessageType {
    AUTH_RESPONSE = "AUTH_RESPONSE",
    SUBSCRIPTION_RESPONSE = "SUBSCRIPTION_RESPONSE"
}


export interface IServerMessage<T extends keyof typeof ServerMessageType> {
    type: T
    message?: any
}



export interface IClientMessage <T extends keyof typeof ClientMessageType>{
    type: T
    message?: any
}


export interface IClientSubscriptionResponse extends IClientMessage<"SUBSCRIPTION_RESPONSE"> {
    message: string
}


export interface IOPort{
    input: any
    output: any
}





/** YO I felt a enlightened loool */
/**
 * @param {any} CI Create request input
 * @param {any} CO Create request output
 * @param {any} UI Update request interface 
 * @param {any}
 */
export interface IDatabase<CI,CO, UI,UO, DI,DO, RI,RO>{
    listeners: IDatabaseListener<CO, UO, DO>[]
    create(input: CI): CO
    update(input: UI): UO
    delete(input: DI): DO 
    read(input: RI): RO
}


export interface IDatabaseListener<C, U, D>{
    onCreate(event: C): void
    onUpdate(event: U): void
    onDelete(event: D): void
}


interface DBObject<C, R, U, D>{

}


interface DomainObject<C, R, U, D>{

}
/** */


export interface IChatDatabase {
    listeners: IChatDatabaseListener
    createMessage: (message: string) => void
}


export interface IChatDatabaseListener {
    onCreateMessage: (message: string) => void
    
}