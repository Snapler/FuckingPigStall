import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';

const Container = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    }
});

export default Container;