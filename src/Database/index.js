import { MongoClient } from "mongodb";


// Initialize mongo client
const mongoClientUrl = "mongodb://root:example@mongo:27017"
const mongoClient = new MongoClient(mongoClientUrl)
const chatDatabaseName = "chat"

class ChatDatabaseClient {

    _observer = {
        onMessageCreated: (message) => {}
    }
    database = mongoClient.db(chatDatabaseName)
    messageCollection = this.database.collection('messages')

    async listAllMessages(){
        const messageList = []
        const cursor = this.messageCollection.find({})
        for await (const message of cursor){
            messageList.push(message)
        }
        return messageList
    }


    async createMessage(message){
        const response = await this.messageCollection.insertOne(message)
        const newMessage = {...message, id:response.insertedId}
        this._observer.onMessageCreated(newMessage)
        return newMessage
    }

    /**
     * 
     * @param {*} observer 
     */
    setObserver(observer){
        if(!observer.onMessageCreated){
            throw new Error(`Given observer is has invalid interface`)
        }
        this._observer = observer
    }

    close(){mongoClient.close()}
}

export const client = new ChatDatabaseClient()