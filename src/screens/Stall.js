import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

import { Container, Header } from '../components';

const Stall = ({ setIsLeave, data: { title, currentTemp } }) => {
    return (
        <Container>
            <Header />
            <Text>{title}</Text>
            <Text>{currentTemp}</Text>
            <Button
                title="กลับไปหน้า Home"
                onPress={() => setIsLeave(false)}
            />
        </Container>
    );
}

export default Stall;