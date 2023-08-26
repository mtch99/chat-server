# Roadmap

- [ ] Create a database client
    - Spec:
        - [ ] Execute requests
        - [ ] Delegate response handling to another class: 
            ResponseHandler:
            - [ ] notify error listeners
            - [ ] notify success listeners
    - Tasks:
        - [x] Create a mongodb client
        - [x] Containerize the client
            - [x] Import mongodb servcice docker-compose file
            - [x] Spin up mongo service and creat a Database called chat
        - [x] Create ChatDatabase Client class




- [ ] Create a publisher 
    - Spec: 
        - [ ] Register client apps  for realtime updates
        - [ ] Allow multiple channels for subscribers
        - [ ] Publish messages to subscribers 
            - [ ] Listen to database table updates
        - [ ] WebSocket communication with subscriber
            WebSocketServer:
            - [ ] Establish communication with client apps
            - [ ] Delegate responsablity for webscket events handling to its creator
            WebSocketHandler:
            - [ ] Handle websocket newConnection in the SubscriptionHandler
                - [x] Authentication
                - [ ] Subscription Validation
                    - [ ] Validate Subscription query
                        - [ ] get subscription field
                            - [ ] Take a look at tes.js
                    - [ ] Register subscription
                        - [ ] Create Subscription class with socket and Subscription field
                        - [ ] Create a fieldToPublisherMap
                        - [ ] Register the socket in a 
 