import dynamic from 'next/dynamic';

const P5Banner = dynamic(() => import('./P5BannerComponent'), {
  ssr: false,  // Evita la renderización del lado del servidor
});

export default P5Banner;