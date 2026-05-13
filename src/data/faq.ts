export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Cómo reservo mi fecha?',
    answer:
      'Para reservar tu fecha debes abonar el 50% del valor del servicio. El pago se realiza por transferencia bancaria. Una vez confirmado el pago, tu fecha queda completamente asegurada. Contáctanos por WhatsApp o email para iniciar el proceso.',
  },
  {
    id: '2',
    question: '¿Los servicios incluyen domicilio?',
    answer:
      'Los precios publicados no incluyen domicilio. El servicio se presta en nuestro estudio en Carrera 4 #11-34, Cota, Cundinamarca. Para consultar disponibilidad de servicio a domicilio para eventos especiales, contáctanos directamente y cotizamos según ubicación.',
  },
  {
    id: '3',
    question: '¿Qué ocurre si necesito cancelar mi reserva?',
    answer:
      'En caso de cancelación, el valor abonado no se reembolsa, pero queda guardado como crédito para futuros servicios con nosotras. Te recomendamos confirmar bien tu fecha antes de realizar el abono para evitar inconvenientes.',
  },
  {
    id: '4',
    question: '¿Con cuánto tiempo debo reservar para mi boda?',
    answer:
      'Para eventos de novia recomendamos reservar con al menos 2 a 3 meses de anticipación, especialmente en temporadas altas como diciembre y junio-julio. Esto garantiza disponibilidad y tiempo suficiente para la asesoría previa y la sesión de prueba.',
  },
  {
    id: '5',
    question: '¿En qué consiste la preparación de piel?',
    answer:
      'La preparación de piel incluye limpieza profunda, tratamiento con máscara LED multicromática (cada color tiene beneficios específicos: rojo estimula colágeno, azul combate bacterias, verde mejora pigmentación, etc.), esferas de hielo para drenaje linfático y mascarilla hidroplástica para hidratación intensiva. Es el paso fundamental para que el maquillaje dure más y luzca impecable.',
  },
  {
    id: '6',
    question: '¿Pueden maquillar también a mis damas de honor?',
    answer:
      'Sí, contamos con servicios adicionales para invitadas. Maquillaje y peinado completo desde $220.000, maquillaje solo desde $150.000, o peinado solo desde $60.000. Es ideal para coordinar todo el look del cortejo nupcial y que todas luzcan radiantes en tu gran día.',
  },
];
