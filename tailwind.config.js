/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Google Sans Flex"', '"Outfit"', 'sans-serif'],
            },
            colors: {
                // Extending colors if needed, but default teal/gray are sufficient.
            }
        },
    },
    plugins: [],
}
