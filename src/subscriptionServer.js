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
        
    }
}


