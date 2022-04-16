import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#292929',
    secondary: '#2F2E2E',
    tertiary: '#A02B22',
    quadary: '#2FB658',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#CCCCCC'
}

export const SIZES = {
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    width,
    height
}

export const FONTS = {
    h1: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'Roboto-Light', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'Roboto-Light', fontSize: SIZES.body4, lineHeight: 22 },
}