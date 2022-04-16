import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';

const StallBox = ({ data: { title, currentTemp }, setIsLeave, setData }) => {
    return (
        <TouchableOpacity
            style={styles.box}
            onPress={() => {
                setData({ title, currentTemp });
                setIsLeave(true);
            }}
        >
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>{title}</Text>
            <Text style={{ ...FONTS.body3, color: COLORS.white }}>Current Temp: {currentTemp}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: SIZES.width * 0.40,
        height: SIZES.width * 0.40,
        marginHorizontal: 20,
        marginTop: 35,
        backgroundColor: COLORS.secondary,
        elevation: 5,
        borderRadius: 18
    }
});

export default StallBox;