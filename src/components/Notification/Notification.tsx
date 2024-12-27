import * as signalR from '@microsoft/signalr';
import { useEffect, useState } from 'react';
import Message from '../Message/Message';

function Notification () {
    const [connection, setConnection] = useState(null);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
            const newConnection = new signalR
                .HubConnectionBuilder()
                .withUrl("https://localhost:44394/chatHub", {})
                .withAutomaticReconnect()
                .build();

            setConnection(newConnection);
        }
    , []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('Connected!');
                    connection.on('ReceiveMessage', (user, message)  => {
                        console.log('Receive message: ', message);
                        setNotifications(notifications => [...notifications, {user, message}]);
                    })
                })
                .catch(e => console.log('Connection failed: ', e))
        }
    }, [connection])

    return (
        <div>
            <h2>Mensagens</h2>
            {notifications.map(notification => (<Message name={notification.user} time={"15:10"} message={notification.message}/> ))}
        </div>
    )
}

export default Notification