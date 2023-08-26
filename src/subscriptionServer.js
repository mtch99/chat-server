//@ts-check
import * as net from 'node:net';



/**
 * @typedef SocketHandler
 * @property {(handler: SocketHandler)=>void} setNext
 * @property  {(socket: net.Socket)=>Promise<void>} onNewConnection
 */


/**
 * @type {SocketHandler}
 */
export const socketErrorHandler = {

    /**@param {net.Socket} socket */
    onNewConnection: (socket) => {
        socket.addListener('end', () => {
            console.log('connection ended');
        })
        throw new Error(`Error from ${socket}`)
    }
}



// Inject authorizer, inject query validator, repository   





class SubscriptionRepository {
    
    __subscriptionsPerChannel = new Map();
    
    /**@argument {string} channel 
     * @argument {net.Socket} subscription
    */
    onNewSubscription(channel, subscription){
        this.__subscriptionsPerChannel.set(channel, subscription);
    }

    sendToChannel(channel, data){

    }
}


class AuthSocketHandler {
    constructor(){

    }


}


/**
 * @typedef NewSocketHandler
 * @property {(net.Socket)} socket
 * @property {(socket: net.Socket) => net.Socket?} handleNewSocket
 * @property {NewSocketHandler} next
 * @property {(handler: NewSocketHandler)=> void} setNext
 */






class Subscriber {
    /**@type {net.Socket} */

    /**@param {net.Socket} socket */
    constructor(socket){
        this.socket = socket;
    }


    /**
     * 
     * @param {Object} data 
     */
    notify(data){
        this.socket.write(JSON.stringify(data));
    }

}



export class SubscriptionServer {
    _server = new net.Server().addListener("connection", this.onNewConnection.bind(this))
    activeSockets = new Map();  
    subscriptionHandler
    
    /**@param {SocketHandler} subscriptionHandler */
    constructor(subscriptionHandler, ){
        this.subscriptionHandler = subscriptionHandler
    }

    
    /** 
     * 
     * @param {net.Socket} socket
     * */
    onNewConnection(socket){
        /**TODO: Import handler from subscriptionHandler file */
        const endEventHandler = new EndEventHandler(socket)
    }


    setEndEventHandler(socket){
        var endEventHandler = new EndEventHandler(socket)
    }


}




class EndEventHandler {
    /** @param {net.Socket} socket*/
    constructor(socket) {
        this.socket = socket;
    }

    /** @param {(socket: net.Socket)=>Promise<void>} callback () */
    async next(callback) {
        await callback(this.socket).catch(
            err => console.error(err),
        );
        return ;
    }
}




