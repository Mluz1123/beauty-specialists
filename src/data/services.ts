export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'preparacion-piel',
    title: 'Preparación de Piel',
    description:
      'Paso esencial para una aplicación uniforme y duradera. Incluye limpieza profunda, hidratación y tecnología LED multicromática.',
    image: '/img/gallery_glow.png',
    alt: 'Preparación de piel con máscara LED y esferas de hielo',
    features: [
      'Máscara LED multicromática',
      'Esferas de hielo (drenaje linfático)',
      'Mascarilla hidroplástica',
      'Masaje facial y de cuello',
    ],
  },
  {
    id: 'maquillaje-novia',
    title: 'Maquillaje de Novia',
    description:
      'Luce radiante en el día más especial de tu vida. Maquillaje de larga duración con preparación de piel incluida.',
    image: '/img/service_novias.png',
    alt: 'Maquillaje profesional de novia con acabado impecable',
    features: [
      'Piel blindada de larga duración',
      'Pestañas punto a punto o completas',
      'Iluminación de torso y escote',
      'Asesoría virtual previa incluida',
    ],
  },
  {
    id: 'peinados-novia',
    title: 'Peinados de Novia',
    description:
      'Semirecogidos, recogidos o sueltos. Peinados elegantes diseñados para perdurar durante toda tu celebración.',
    image: '/img/gallery_hairstyle.png',
    alt: 'Peinado elegante para novia en día de boda',
    features: [
      'Semirecogido de alta costura',
      'Recogido elegante',
      'Peinado suelto con ondas',
      'Postura de vestido y velo',
    ],
  },
  {
    id: 'maquillaje-social',
    title: 'Maquillaje Social',
    description:
      'Ideal para grados, proms e invitadas a eventos. Maquillaje profesional que resalta tu belleza natural.',
    image: '/img/service_social.png',
    alt: 'Maquillaje social profesional para eventos',
    features: [
      'Preparación de piel incluida',
      'Ojos y labios definidos',
      'Pestañas punto a punto o completa',
      'Peinado incluido',
    ],
  },
  {
    id: 'quinceañera',
    title: 'Plan Quinceañera',
    description:
      'Tu momento más especial merece un look perfecto. Maquillaje y peinado diseñados especialmente para tu gran día.',
    image: '/img/service_quince.png',
    alt: 'Maquillaje y peinado para quinceañera',
    features: [
      'Asesoría virtual previa (1 hora)',
      'Preparación de piel con esferas de hielo',
      'Maquillaje completo y peinado',
      'Cambio de estilo para la rumba (opcional)',
    ],
  },
  {
    id: 'unas-spa',
    title: 'Uñas & Spa',
    description:
      'Complementa tu look con uñas perfectas. Acrílicas, Jelly Tip, Spa de manos y pies para una experiencia de belleza completa.',
    image: '/img/service_social.png',
    alt: 'Servicio de uñas acrílicas y spa de manos y pies',
    features: [
      'Uñas Acrílicas',
      'Uñas Jelly Tip',
      'Spa de Manos completo',
      'Spa de Pies completo',
    ],
  },
];
