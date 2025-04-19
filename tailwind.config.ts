module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#7a1d1d",
                    500: "#741b1b",
                    900: "#5a0e0e",
                },
            },
        },
    },
    plugins: [],
};
