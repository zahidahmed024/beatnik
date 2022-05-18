import { s } from "../utils";

export const colors = {
    accent: '#2995E0',
    primary: '#3C65AE',
    secondary: '#00A013',
    danger: '#B60201',
    text: '#4A4A4A',
    white: '#ffffff',
    warning: '#B89158',
    border: '#E9E9E9',
    lightPrimary: '#EAF1F9',
    lightSecondary: '#E6FFEB',
    lightWarning: '#FDF3E9',
};

export const fontSizes = {
    h1: {
        fontSize: s(30),
        fontWeight: 'bold',
    },
    h2: {
        fontSize: s(24),
        color: colors.text,
    },
    h3: {
        fontSize: s(20),
        color: colors.text,
    },
    h4: {
        fontSize: s(16),
        color: colors.text,
    },
    h5: {
        fontSize: s(14),
        color: colors.text,
    },
    h6: {
        fontSize: s(12),
        color: colors.text,
    },
    h7: {
        fontSize: s(10),
        color: colors.text,
    }
}