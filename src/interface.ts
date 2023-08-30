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