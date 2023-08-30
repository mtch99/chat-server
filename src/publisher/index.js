//@ts-check

/**
 * Abstract Publisher
 */
export class APublisher{
    /**@type {Map<string, Map<string, import("./interface").ISubscriber>} */
    subscribersPerChannel = new Map()


    // TODO: initialize channel keys in subscribersPerChannel map
    constructor(){

    }


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

        // Check that the channel exists
        const channelExists = this.subscribersPerChannel.get(channel)?true:false
        if(!channelExists){throw new Error("Channel not found")}

        // Store subscriber
        this.subscribersPerChannel.get(channel)?.set(id, subscriber)

        return subscriber
    }


    /** 
     * @param {string} channel  
     * @param {any} data 
     * */
    publish(channel, data){
        const subscribersMap = this.subscribersPerChannel.get(channel);
        if(!subscribersMap){throw new Error("Channel not found")}

        for(const [, subscriber] of subscribersMap){
            subscriber.receive(data)
        }
    }



    /**
     * @param {string} id  
     * @param {string} channel 
    */
    endSubscription(id, channel){
        this.subscribersPerChannel.get(channel)?.delete(id)
    }
}