//@ts-check

// eslint-disable-next-line no-unused-vars
import * as net from "node:net"


/**
 * @param {net.Socket} socket  
 * @returns
 * @throws {string} 
 * */
async function authHandler(socket){
    const maxDelay = 5000
    /**@type {import('./interface').IServerMessage<"AUTHENTICATION_REQUEST">} */
    const authenticationRequest = {
        type: "AUTHENTICATION_REQUEST",
    }
    let isAuthProcessCompleted = false

    // Register response handler
    const afterAuthResponse = /**@param {boolean} isAuthorized **/ (isAuthorized) => {
        isAuthProcessCompleted = true
        if(!isAuthorized){throw new Error("Unauthorized")}
    }
    const onAuthResponse = (data) => authResponseListener(data).then(afterAuthResponse)
    socket.on('data', onAuthResponse)


    // Send request
    socket.write(JSON.stringify(authenticationRequest))
    const waitForAuthResponse = setTimeout(() => {
        isAuthProcessCompleted = true
        console.error("Authentication response never came back")
    }, maxDelay)
    
    // wait for authentication completion
    while(!isAuthProcessCompleted){}

    // cleanup
    clearTimeout(waitForAuthResponse)
    socket.removeListener("data", onAuthResponse)

    return 
}


/**
 * TODO: Continue here
 * @param {*} socket 
 * @param {*} callback 
 */
async function subscriptionHandler(socket, callback){
    const maxDelay = 5000
    /**@type {import('./interface').IServerMessage<"SUBSCRIPTION_REQUEST">} */
    const subscriptionRequest = {
        type: "SUBSCRIPTION_REQUEST",
    }
    let isSubscriptionProcessCompleted = false
    
    // Register response handler
    const afterSubscriptionResponse = /**@param {boolean} isAuthorized **/ (isAuthorized) => {
        isSubscriptionProcessCompleted = true
        if(!isAuthorized){throw new Error("Unauthorized")}
    }
    const onSubscriptionResponse = (data) => {
        getSubscriptionField(socketDataToString(data))
    }

}


/** 
 * @param {Buffer | string} data  
 * @returns {Promise<boolean>}
 * */
async function subscriptionResponseListener(data){

}


/** 
 * @param {any} message  
 * @returns {Promise<boolean>}
 * */
async function isSubscriberAuthorized(message){
    if(message.type == "AUTH_RESPONSE"){
        return true
    } else {return false}
}


/** 
 * @param {Buffer | string} data  
 * @returns {Promise<boolean>}
 * */
async function authResponseListener(data){
    /**@type {string} */
    let dataStr;
    if(typeof data == "string"){dataStr = data}
    else{dataStr = data.toString()}
    const message = JSON.parse(dataStr)

    return isSubscriberAuthorized(message)
}


/** 
 * @param {Buffer | string} data  
 * @returns {string}
 * */
function socketDataToString(data){
    let dataStr;
    if(typeof data == "string"){dataStr = data}
    else{dataStr = data.toString()}
    return dataStr
}


/**
 * 
 * @param {string} message 
 * @param {net.Socket} socket
 * 
 */
function handleSubscriptionResponse(message, socket){
    const subscriptionQuery = parseSubscriptionMessage(message)?.message
    if(!subscriptionQuery){throw new Error("Subscription message did not respect interface")}
    const subscriptionField = getSubscriptionField(subscriptionQuery)

}


/**
 * 
 * @param {string} message 
 * @returns {import("./interface").IClientSubscriptionResponse | undefined} 
 */
function parseSubscriptionMessage(message){
    const messageJson = JSON.parse(message);
    if(messageJson.type !== 'SUBSCRIPTION_RESPONSE' || !messageJson.message){
        return undefined
    }
    return messageJson
}


/**
 * TODO: Implement subscription validation
 * @param {string} subscriptionQuery
 * @returns {string|undefined} 
 */
function getSubscriptionField(subscriptionQuery){
    return "true"
}