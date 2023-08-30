//@ts-check

/**
 * Abstract Publisher
 */
export class APublisher{
    /**@type {Map<string, Map<string, import("./interface").ISubscriber>} */
    subscribersPerChannel = new Map()


    /**
     * Determine subscription channel
     * Store Subscriber 
     * Set its unsubscribe method
     * @param {string} channel 
     * @param {(data: any) => void} onData 
     * @return {import("./interface").ISubscriber} 
     */
    register(channel, onData){
        const id = crypto.randomUUID()

        /** @type {import("./interface").ISubscriber} */
        const subscriber = {
            id,
            subscription: undefined,
            receive: (data) => onData(data),
            endSubscription: () => this.endSubscription(id, channel)
        }

        return subscriber
    }


    /**
     * @param {string} id  
     * @param {string} channel 
    */
    endSubscription(id, channel){
        this.subscribersPerChannel.get(channel)?.delete(id)
    }


    /**
     * 
     * @param {string} channel 
     * @param {any} data 
     */
    send(channel, data){
        const subscribers = this.subscribersPerChannel.get(channel) || []
        for (const subscriber of subscribers){
            subscriber.notify(data)
        }
    }


    /** Every concrete instance implement this */
    onNewData(){

    }
}