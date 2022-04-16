import React from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
    StyleSheet
} from 'react-native';

import { Container, Header, StallBox } from '../components';

import { COLORS, SIZES, FONTS } from '../constants';

import { data } from '../utils';

const Home = ({ setIsLeave, setData }) => {
    return (
        <Container>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    {data.map((value, index) => <StallBox key={index} data={value} setIsLeave={setIsLeave} setData={setData} />)}
                </View>
            </ScrollView>
        </Container>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

export default Home;