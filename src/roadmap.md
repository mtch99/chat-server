# Roadmap

- [ ] Create a database client
    - Spec:
        - [ ] Execute requests
        - [ ] Delegate response handling to another class: 
            ResponseHandler:
            - [ ] notify error listeners
            - [ ] notify success listeners
    - Tasks:
        - [ ] Create a mongodb client
        - [ ] Containerize the client
            - [ ] Import mongodb servcice docker-compose file
            - [ ] Spin up mongo service and creat a Database called chat
        - [ ] Create ChatDatabase Client class
            - [ ] Create empty db request methods
            - [ ] Look for a good ORM and implement 


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
            WebsocketHandler:
            - [ ] Handle websocket events

