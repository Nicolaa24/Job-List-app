/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     screens: {
      'lg': {'max':'992px'},
      'md': {'max':'768px'},
      'sm': {'max':'480px'},
    },
    extend: {
      colors: {
        BackgroundColor: '#EFF0F5',
        titleColor: '#3A4562',
        descriptionColor: '#878D9D',
        paginationArrow: '#7D859C',
        paginationNumber: '#70778B',
        buttonDetail: '#384564',
        detailBg: '#2A3047',
        detailColorName: '#E7EAF0',
        detailColor: '#E8EBF3',
        detailLocationIcon: '#D8D8D8',
        employmentType: 'rgba(161, 177, 219, 0.317343)',
        blueBorder: 'rgba(85, 105, 158, 0.3)',
        benefits: 'rgba(255, 207, 0, 0.15)',
        yellowBorder: '#FFCF00',
        benefitsYellow: '#988B49',
        blue : '#55699E'
      }
    },
  },
  plugins: [],
};
