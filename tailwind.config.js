/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
             backgroundImage: {
        'hero': "url('/src/app/images/back.jpg')",
      },
        },
    },
    plugins: [],
};
