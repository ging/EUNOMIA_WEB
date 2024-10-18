import dynamic from 'next/dynamic';

const P5BannerLight = dynamic(() => import('./P5BannerLightComponent'), {
  ssr: false,  // Evita la renderización del lado del servidor
});

export default P5BannerLight;