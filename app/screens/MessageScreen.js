import React from 'react'
import { FlatList } from "react-native"
import ListItem from '../components/ListItem'

const messages = [
    {
        id: 1,
        title: "T1",
        description: 'D1',
        image: require('../assets/download (1).png')
    },
    {
        id: 1,
        title: "T1",
        description: 'D1',
        image: require('../assets/download (1).png')
    }
]

const MessageScreen = () => {
    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    key={item.id}
                    title={item.title}
                    subTitle={item.description}
                    image={item}
                />}
        />
    )
}

export default MessageScreen
