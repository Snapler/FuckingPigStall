import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Pig Environment Tracker</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        elevation: 5
    }
});

export default Header;