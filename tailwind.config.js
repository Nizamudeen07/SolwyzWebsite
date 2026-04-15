/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // if you're using /app dir
    "./pages/**/*.{js,ts,jsx,tsx}", // if you're using /pages dir
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screen: {
        'screen1366': '1366px',
        'screen1460': '1460px',
      },

      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      backgroundColor: {
        bgColor: '#000000',
      },


      backgroundImage: {
        bannerBackground: "url('/Background.svg')",
        webDesign: "url('/website-design-software-provide-modish-template-online-retail-business_1.png')",
        footerMap: "url('/assets/footer/footer.png')",
        footerMapMob: "url('/assets/footer/footerMobile.png')",
        aboutbanner: "url('/about/about.png')",
        aboutbannerMob: "url('/about/aboutMob.png')",
        careersbanner: "url('/Careers/careers.png')",
        serviceDetailBg: "url('/service/detail.png')",
        serviceDetailBgMob: "url('/service/detailMob.png')",
        innovateBg: "url('/about/innovateBg.png')",
        impactBg: "url('/about/impactBg.png')",
        integrateeBg: "url('/about/integrateBg.png')",
      }

    },
  },
  plugins: [],
};

export default config;
