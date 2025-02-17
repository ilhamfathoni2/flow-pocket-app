import { createFont, createTamagui, createTokens } from 'tamagui'
// import { config as defaultConfig } from '@tamagui/config'
import { defaultConfig } from '@tamagui/config/v4'

// ✅ Buat Custom Font
const poppinsFont = createFont({
    family: 'Poppins-Regular',
    size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20,
        6: 24,
        7: 28,
    },
    lineHeight: {
        1: 18,
        2: 20,
        3: 22,
        4: 24,
        5: 26,
        6: 30,
        7: 34,
    },
    weight: {
        1: '300', // Light
        2: '400', // Regular
        3: '500', // Medium
        4: '600', // SemiBold
        5: '700', // Bold
        6: '900', // Black
    },
    face: {
        300: { normal: 'Poppins-Light', italic: 'Poppins-LightItalic' },
        400: { normal: 'Poppins-Regular', italic: 'Poppins-Italic' },
        500: { normal: 'Poppins-Medium', italic: 'Poppins-MediumItalic' },
        600: { normal: 'Poppins-SemiBold', italic: 'Poppins-SemiBoldItalic' },
        700: { normal: 'Poppins-Bold', italic: 'Poppins-BoldItalic' },
        900: { normal: 'Poppins-Black', italic: 'Poppins-BlackItalic' },
    },
})

// ✅ Buat Custom Warna
const colors = {
    darkGray: '#3B3F3E',
    teal: '#83C5BE',
    black: '#0A1A35',
    white: '#FFFFFF',
    whiteBg: '#F9F8FD',
    lightRed: '#D55B5B',
    darkRed: '#B94B4B',
    green: '#389C7B',
    greenLight: '#63B59A',
    darkGreen: '#328C6E',
    almostBlack: '#262626',
    deepGray: '#202020',
    grayCs: '#647097',
    softRed: '#F57777',
    mintGreen: '#69D7B3',
    blue: '#2A60FF',
    orange: '#E38C21',
    purple: '#6A40D0',
}

// ✅ Buat Custom Tokens (Tetap mempertahankan tokens bawaan)
const tokens = createTokens({
    ...defaultConfig.tokens, // Tetap gunakan tokens bawaan
    color: {
        ...colors, // Tambahkan warna custom
    },
})

// ✅ Gabungkan Semua ke dalam Config
const config = createTamagui({
    ...defaultConfig, // Gunakan semua konfigurasi bawaan
    fonts: {
        ...defaultConfig.fonts, // Tetap gunakan font bawaan
        body: poppinsFont, // Custom Font untuk body
        heading: poppinsFont, // Custom Font untuk heading
    },
    tokens, // Masukkan tokens yang sudah dibuat
    themes: {
        ...defaultConfig.themes, // Gunakan semua theme bawaan
        customLight: {
            ...defaultConfig.themes.light, // Gunakan theme light sebagai dasar
            ...colors, // Tambahkan warna custom
        },
        customDark: {
            ...defaultConfig.themes.dark, // Gunakan theme dark sebagai dasar
            ...colors, // Tambahkan warna custom
        },
    },
})


export type AppConfig = typeof config

declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends AppConfig { }
}

export default config
