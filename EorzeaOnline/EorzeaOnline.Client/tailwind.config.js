/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{razor,html,cshtml}"],
    theme: {
        extend: {
            fontFamily: {
                "archivo": ['Archivo Narrow', 'sans-serif']
            }
        },
    },
    plugins: [],
}