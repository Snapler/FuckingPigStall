/* Root */

import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Container, Header } from './components';

import { Home, Stall } from './screens';

import { COLORS, SIZES, FONTS } from './constants';

const App = () => {
    const [isLeave, setIsLeave] = useState(false);
    const [data, setData] = useState(null);

    return (
        <>
            {(isLeave)
                ? <Stall setIsLeave={setIsLeave} data={data} />
                : <Home setIsLeave={setIsLeave} setData={setData} />}
        </>
    );
}

export default App;

/*
    Don't Repeat Yourself - DRY
    Maintenance - Scalibility
    Single Responsiblity
*/