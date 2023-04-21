module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    variants: {},
    plugins: [],
    theme: {
        screens: {
            'phone': '200px',
            'tablet': '350px',
            'desktop': '1024px',
        },
    }
};