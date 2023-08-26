export class APublisher{
    /**@type {Map<string, Subscriber[]>} */
    subscribersPerChannel = new Map()


    /**
     * Determine subscription channel
     * Store Subscriber 
     * Set its unsubscribe method
     * @param {*} subsription 
     */
    static register(subscription){

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



// TODO: Define Subscription claa
