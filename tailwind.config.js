/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cyan': 'hsl(180, 66%, 49%)',
                'cyan-hover': 'hsl(180, 66%, 65%)',
                'dark-voilet': 'hsl(257, 27%, 26%)',
                'red': 'hsl(0, 87%, 67%)',
                'gray': 'hsl(0, 0%, 70%)',
                'grayish-violet': 'hsl(257, 7%, 63%)',
                'very-dark-blue': 'hsl(255, 11%, 22%)',
                'very-dark-violet': 'hsl(260, 8%, 14%)'
            },

            boxShadow: {
                'menuBox': "0 0 15px 0px #ffffff0d" 
            },
            
            backgroundImage: {
                'promote-desktop': "url('img/bg-boost-desktop.svg')",
                'promote-mobile': "url('img/bg-boost-mobile.svg')",
                'shorten-desktop': "url('img/bg-shorten-desktop.svg')",
                'shorten-mobile': "url('img/bg-shorten-mobile.svg')"
            }
        },
    },
    plugins: [],
}