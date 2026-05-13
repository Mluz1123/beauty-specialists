export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  review: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Valentina Rodríguez',
    service: 'Plan de Novias',
    rating: 5,
    review:
      'Erika es absolutamente increíble. El día de mi boda me sentí la novia más hermosa gracias a su trabajo. El maquillaje duró todo el día y la noche sin retoques.',
    avatar: '/images/avatar-1.jpg',
  },
  {
    id: '2',
    name: 'Camila Torres',
    service: 'Maquillaje Social',
    rating: 5,
    review:
      'Fui para el grado de mi hija y quedé encantada. Erika entendió perfectamente lo que quería y el resultado fue espectacular. Sin duda volveré para todos mis eventos.',
    avatar: '/images/avatar-2.jpg',
  },
  {
    id: '3',
    name: 'Isabella Martínez',
    service: 'Plan Quinceañera',
    rating: 5,
    review:
      'Mi quinceañera fue perfecta gracias a Beauty Specialists. El maquillaje y el peinado fueron exactamente lo que soñé. Erika es muy profesional y sumamente paciente.',
    avatar: '/images/avatar-3.jpg',
  },
  {
    id: '4',
    name: 'Daniela Ospina',
    service: 'Preparación de Piel',
    rating: 5,
    review:
      'La sesión de preparación de piel con la máscara LED fue una experiencia increíble. Mi piel quedó luminosa y suave, el maquillaje posterior duró muchísimo más.',
    avatar: '/images/avatar-4.jpg',
  },
  {
    id: '5',
    name: 'María Fernanda López',
    service: 'Plan "Decidamos Juntas"',
    rating: 5,
    review:
      'Hice la prueba previa con Erika y fue la mejor decisión. Llegué al altar con total confianza sabiendo exactamente cómo luciría. Un trabajo de lujo, totalmente recomendada.',
    avatar: '/images/avatar-5.jpg',
  },
  {
    id: '6',
    name: 'Sara González',
    service: 'Maquillaje de Novia',
    rating: 5,
    review:
      'El día de mi matrimonio Erika llegó puntual, fue muy profesional y el resultado fue impresionante. Todas mis invitadas me preguntaban quién me había maquilado.',
    avatar: '/images/avatar-6.jpg',
  },
  {
    id: '7',
    name: 'Luisa Ramírez',
    service: 'Uñas Acrílicas',
    rating: 5,
    review:
      'Las uñas acrílicas quedaron perfectas para mi boda, combinaron ideal con mi vestido y el maquillaje. El paquete completo de belleza fue una experiencia de lujo.',
    avatar: '/images/avatar-7.jpg',
  },
  {
    id: '8',
    name: 'Andrea Pérez',
    service: 'Plan Completo Novia',
    rating: 5,
    review:
      'Contraté el plan completo y fue la mejor inversión para mi boda. Erika estuvo conmigo desde la prueba hasta el final de la celebración. ¡Absolutamente recomendada!',
    avatar: '/images/avatar-8.jpg',
  },
];
