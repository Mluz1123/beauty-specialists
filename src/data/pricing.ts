export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
  notIncluded: string[];
  isRecommended: boolean;
  ctaLabel: string;
}

export interface AdditionalService {
  name: string;
  price: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'social',
    name: 'Plan Social',
    subtitle: 'Para invitadas, grados y proms',
    price: '$250.000',
    duration: '~1.5 horas',
    features: [
      'Preparación de piel',
      'Maquillaje completo con piel blindada',
      'Ojos definidos y labios',
      'Pestañas (punto a punto o completa)',
      'Cejas',
      'Peinado (semirecogido, recogido o suelto)',
    ],
    notIncluded: ['Blower', 'Domicilio'],
    isRecommended: false,
    ctaLabel: 'Agendar ahora',
  },
  {
    id: 'novias-basico',
    name: 'Plan de Novias',
    subtitle: 'Para el día de tu boda',
    price: '$450.000',
    duration: '~3 horas',
    features: [
      'Asesoría virtual previa (1 hora)',
      'Preparación de piel (esferas de hielo y máscaras)',
      'Maquillaje completo con piel blindada',
      'Ojos, labios y cejas',
      'Pestañas (punto a punto o completa)',
      'Iluminación de torso, brazos y escote',
      'Peinado (semirecogido, recogido o suelto)',
    ],
    notIncluded: ['Blower', 'Domicilio'],
    isRecommended: false,
    ctaLabel: 'Reservar mi fecha',
  },
  {
    id: 'novias-completo',
    name: 'Desde el Principio hasta el Final',
    subtitle: 'La experiencia completa para tu boda',
    price: '$990.000',
    duration: 'Prueba 2h + Evento 6h',
    features: [
      'Asesoría presencial (2 maquillajes, 2 peinados)',
      'Preparación de piel completa (esferas, máscara y mascarilla)',
      'Maquillaje completo con piel blindada',
      'Ojos, labios, cejas y pestañas',
      'Iluminación de torso, brazos y escote',
      'Peinado a elección',
      'Postura de vestido y velo',
      'Cambio de estilo después de la ceremonia',
    ],
    notIncluded: ['Domicilio'],
    isRecommended: true,
    ctaLabel: 'Quiero este plan',
  },
];

export const additionalServices: AdditionalService[] = [
  { name: 'Plan Quinceañera', price: '$350.000' },
  { name: 'Plan "Decidamos Juntas" (Novia con prueba)', price: '$850.000' },
  { name: 'Prueba de peinado y maquillaje (Novia)', price: '$400.000' },
  { name: 'Prueba de peinado y maquillaje (Quinceañera)', price: '$250.000' },
  { name: 'Cambio de estilo después de la ceremonia', price: '$200.000' },
  { name: 'Invitada (maquillaje y peinado)', price: '$220.000' },
  { name: 'Maquillaje invitada', price: '$150.000' },
  { name: 'Peinado invitada', price: 'Desde $60.000' },
  { name: 'Sesión de Hidratación Facial (Mascarilla y Máscara)', price: '$110.000' },
  { name: 'Uñas Acrílicas', price: '$195.000' },
  { name: 'Uñas Jelly Tip', price: '$175.000' },
  { name: 'Spa de Manos', price: '$17.000 – $47.000' },
  { name: 'Spa de Pies', price: '$28.000 – $54.000' },
  { name: 'Depilación Completa', price: '$130.000' },
  { name: 'Blower', price: 'Desde $25.000' },
  { name: 'Color', price: 'Desde $280.000' },
];
