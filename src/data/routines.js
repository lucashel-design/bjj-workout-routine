const ex = (item) => {
  const [title, mode = "time", value = 60, video = ""] = item.split("|");

  if (mode === "reps") {
    return {
      title,
      mode: "reps",
      reps: Number(value),
      repInterval: 3,
      video,
    };
  }

  return {
    title,
    mode: "time",
    duration: Number(value),
    reps: "",
    video,
  };
};

const R = ({
  id,
  date,
  dayLabel,
  title,
  category,
  intensity,
  objective,
  description,
  warmup = [],
  exercises = [],
  rounds = 1,
  roundRest,
  cooldown = [],
}) => ({
  id,
  date,
  dayLabel,
  title,
  category,
  intensity,
  objective,
  description,
  warmup: warmup.map(ex),
  exercises: exercises.map(ex),
  rounds,
  ...(roundRest ? { roundRest } : {}),
  cooldown: cooldown.map(ex),
});

const competitionStrategyWarmup = [
  // RONDA 1 - ACTIVACIÓN ESPECÍFICA - 3 min
  "Ronda 1 - Posición de lucha + pasos laterales|time|30|",
  "Ronda 1 - Cambio de nivel / Level change|time|30|",
  "Ronda 1 - Sprawl suave + volver de pie|time|30|",
  "Ronda 1 - Technical stand-up|time|30|",
  "Ronda 1 - Shrimp / escape de cadera|time|30|",
  "Ronda 1 - Puente + giro lateral|time|30|",

  // RONDA 2 - DERRIBO 1 - 3 min
  "Ronda 2 - Arm drag + single leg|time|180|",

  // RONDA 3 - DERRIBO 2 - 3 min
  "Ronda 3 - Snap down + espalda|time|180|",

  // RONDA 4 - PULL GUARD 1 - 3 min
  "Ronda 4 - Collar-sleeve + raspado|time|180|",

  // RONDA 5 - PULL GUARD 2 - 3 min
  "Ronda 5 - Cerrada + raspado|time|180|",
];

const routines = [
  R({
    id: "2026-05-28-movilidad-core",
    date: "2026-05-28",
    dayLabel: "Jueves 28/05",
    title: "Movilidad + core",
    category: "bajo",
    intensity: "movilidad",
    objective: "Soltar el cuerpo y reforzar estabilidad.",
    description:
      "Trabajo ligero de movilidad, respiración y core para recuperar sin perder activación.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Dead bug|time|45|",
      "Bird dog|time|45|",
      "Plancha frontal|time|45|",
      "90/90 de cadera|time|60|",
      "Cat-cow|time|60|",
      "Respiración 4-6|time|120|",
    ],

    rounds: 2,

    cooldown: [
      "Respiración nasal lenta|time|180|",
    ],
  }),

  R({
    id: "2026-05-29-potencia-bjj",
    date: "2026-05-29",
    dayLabel: "Viernes 29/05",
    title: "Potencia BJJ",
    category: "duro",
    intensity: "potencia",
    objective: "Mejorar explosividad y cambios rápidos de ritmo.",
    description:
      "Trabajo intenso con movimientos explosivos y cardio específico.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Jump squats|reps|6|",
      "Sprawls|reps|8|",
      "Flexiones explosivas|reps|6|",
      "Bear crawl|time|30|",
      "Technical stand-up|time|30|",
    ],

    rounds: 5,
    roundRest: 60,

    cooldown: [
      "Movilidad de cadera|time|60|",
      "Respiración nasal|time|180|",
    ],
  }),

  R({
    id: "2026-05-30-fuerza-util",
    date: "2026-05-30",
    dayLabel: "Sábado 30/05",
    title: "Fuerza útil",
    category: "medio",
    intensity: "fuerza",
    objective: "Desarrollar fuerza funcional para grappling.",
    description:
      "Trabajo controlado de tirón, pierna y agarre.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Peso muerto rumano|reps|8|",
      "Dominadas|reps|6|",
      "Remo con barra|reps|10|",
      "Goblet squat|reps|10|",
      "Pinch grip con discos|time|30|",
    ],

    rounds: 4,

    cooldown: [
      "Estiramiento de antebrazo|time|60|",
      "Respiración nasal lenta|time|180|",
    ],
  }),

  R({
    id: "2026-05-31-recuperacion",
    date: "2026-05-31",
    dayLabel: "Domingo 31/05",
    title: "Recuperación activa",
    category: "bajo",
    intensity: "descanso-activo",
    objective: "Bajar fatiga y recuperar articulaciones.",
    description:
      "Sesión muy ligera para facilitar recuperación.",

    warmup: competitionStrategyWarmup,

    exercises: [
      // RONDA 2 - DERRIBO 1 - 3 min
  "Ronda 2 - Arm drag + single leg|time|180|",

  // RONDA 3 - DERRIBO 2 - 3 min
  "Ronda 3 - Snap down + espalda|time|180|",

  // RONDA 4 - PULL GUARD 1 - 3 min
  "Ronda 4 - Collar-sleeve + raspado|time|180|",

  // RONDA 5 - PULL GUARD 2 - 3 min
  "Ronda 5 - Cerrada + raspado|time|180|",
      "Movilidad de hombros|time|60|",
      "Movilidad de cadera|time|60|",
      "Respiración lenta|time|180|",
    ],

    rounds: 1,

    cooldown: [
      "Respiración relajada|time|180|",
    ],
  }),

  R({
    id: "2026-06-01-cardio-rounds",
    date: "2026-06-01",
    dayLabel: "Lunes 01/06",
    title: "Cardio rounds",
    category: "duro",
    intensity: "cardio",
    objective: "Mejorar resistencia específica de combate.",
    description:
      "Rounds intensos con descanso corto.",

    warmup: [
      "Ronda 2 - Arm drag + single leg|time|180|",

  // RONDA 3 - DERRIBO 2 - 3 min
  "Ronda 3 - Snap down + espalda|time|180|",

  // RONDA 4 - PULL GUARD 1 - 3 min
  "Ronda 4 - Collar-sleeve + raspado|time|180|",

  // RONDA 5 - PULL GUARD 2 - 3 min
  "Ronda 5 - Cerrada + raspado|time|180|",
    ],

    exercises: [
      "Sprawls|time|30|",
      "Mountain climbers|time|30|",
      "Thrusters|time|30|",
      "Shadow grappling|time|30|",
    ],

    rounds: 6,
    roundRest: 45,

    cooldown: [
      "Respiración 4-6|time|180|",
    ],
  }),

  R({
    id: "2026-06-02-movilidad-agarre",
    date: "2026-06-02",
    dayLabel: "Martes 02/06",
    title: "Movilidad + agarre",
    category: "medio",
    intensity: "movilidad-fuerza",
    objective: "Mantener movilidad mientras refuerzas agarre.",
    description:
      "Sesión mixta de movilidad y fuerza ligera.",

    warmup: [
      "Ronda 2 - Arm drag + single leg|time|180|",

  // RONDA 3 - DERRIBO 2 - 3 min
  "Ronda 3 - Snap down + espalda|time|180|",

  // RONDA 4 - PULL GUARD 1 - 3 min
  "Ronda 4 - Collar-sleeve + raspado|time|180|",

  // RONDA 5 - PULL GUARD 2 - 3 min
  "Ronda 5 - Cerrada + raspado|time|180|",
    ],

    exercises: [
      "Sprawls|time|30|",
      "Mountain climbers|time|30|",
      "Thrusters|time|30|",
      "Shadow grappling|time|30|",
    ],

    rounds: 3,

    cooldown: [
      "Respiración nasal lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-03-tecnica-ritmo",
    date: "2026-06-03",
    dayLabel: "Miércoles 03/06",
    title: "Técnica + ritmo",
    category: "bajo",
    intensity: "tecnico",
    objective: "Moverte más fluido y técnico.",
    description:
      "Trabajo suave centrado en coordinación y movimiento.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Technical stand-up|time|45|",
      "Hip escape|time|45|",
      "Bear crawl suave|time|45|",
      "Respiración controlada|time|120|",
    ],

    rounds: 3,

    cooldown: [
      "Respiración nasal lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-04-fuerza-control",
    date: "2026-06-04",
    dayLabel: "Jueves 04/06",
    title: "Fuerza + control",
    category: "medio",
    intensity: "fuerza",
    objective: "Generar fuerza estable y control corporal.",
    description:
      "Trabajo técnico y controlado sin llegar al fallo.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Peso muerto rumano|reps|8|",
      "Flexiones lentas|reps|10|",
      "Remo con barra|reps|10|",
      "Plancha frontal|time|45|",
    ],

    rounds: 4,

    cooldown: [
      "Respiración nasal|time|180|",
    ],
  }),

  R({
    id: "2026-06-05-rounds-intensos",
    date: "2026-06-05",
    dayLabel: "Viernes 05/06",
    title: "Rounds intensos",
    category: "duro",
    intensity: "cardio",
    objective: "Subir tolerancia al esfuerzo acumulado.",
    description:
      "Trabajo tipo combate con ritmo alto.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Sprawls|time|30|",
      "Mountain climbers|time|30|",
      "Bear crawl|time|30|",
      "Shadow grappling|time|30|",
    ],

    rounds: 6,
    roundRest: 45,

    cooldown: [
      "Respiración 4-6|time|180|",
    ],
  }),

  R({
    id: "2026-06-06-recuperacion-total",
    date: "2026-06-06",
    dayLabel: "Sábado 06/06",
    title: "Recuperación total",
    category: "bajo",
    intensity: "recuperacion",
    objective: "Recuperar energía y articulaciones.",
    description:
      "Día suave para mantener movilidad y descanso activo.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Caminar suave|time|1200|",
      "Movilidad de cadera|time|60|",
      "Movilidad de hombros|time|60|",
    ],

    rounds: 1,

    cooldown: [
      "Respiración lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-07-potencia-bjj",
    date: "2026-06-07",
    dayLabel: "Domingo 07/06",
    title: "Potencia BJJ",
    category: "duro",
    intensity: "potencia",
    objective: "Explosividad y reacción rápida.",
    description:
      "Trabajo potente para scrambles y entradas explosivas.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Jump squats|reps|6|",
      "Sprawls|reps|8|",
      "Flexiones explosivas|reps|6|",
      "Technical stand-up|time|30|",
    ],

    rounds: 5,
    roundRest: 60,

    cooldown: [
      "Respiración nasal|time|180|",
    ],
  }),

  R({
    id: "2026-06-08-fuerza-agarre",
    date: "2026-06-08",
    dayLabel: "Lunes 08/06",
    title: "Fuerza + agarre",
    category: "medio",
    intensity: "fuerza",
    objective: "Reforzar tirón y agarre.",
    description:
      "Sesión controlada enfocada en fuerza útil.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Dominadas|reps|6|",
      "Remo con barra|reps|10|",
      "Pinch grip con discos|time|30|",
      "Colgado en barra|time|30|",
    ],

    rounds: 4,

    cooldown: [
      "Respiración lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-09-movilidad",
    date: "2026-06-09",
    dayLabel: "Martes 09/06",
    title: "Movilidad",
    category: "bajo",
    intensity: "movilidad",
    objective: "Reducir tensión y mejorar rango.",
    description:
      "Trabajo ligero de movilidad y respiración.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "90/90 de cadera|time|60|",
      "Cat-cow|time|60|",
      "Rotaciones torácicas|time|60|",
      "Movilidad de hombros|time|60|",
    ],

    rounds: 2,

    cooldown: [
      "Respiración 4-6|time|180|",
    ],
  }),

  R({
    id: "2026-06-10-cardio-bjj",
    date: "2026-06-10",
    dayLabel: "Miércoles 10/06",
    title: "Cardio BJJ",
    category: "duro",
    intensity: "cardio",
    objective: "Aumentar resistencia de combate.",
    description:
      "Rounds intensos con descanso corto.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Sprawls|time|30|",
      "Mountain climbers|time|30|",
      "Bear crawl|time|30|",
      "Shadow grappling|time|30|",
    ],

    rounds: 6,
    roundRest: 45,

    cooldown: [
      "Respiración nasal|time|180|",
    ],
  }),

  R({
    id: "2026-06-11-fuerza-pierna",
    date: "2026-06-11",
    dayLabel: "Jueves 11/06",
    title: "Fuerza pierna",
    category: "medio",
    intensity: "fuerza",
    objective: "Generar estabilidad y potencia de pierna.",
    description:
      "Trabajo de fuerza útil y controlado.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Goblet squat|reps|10|",
      "Peso muerto rumano|reps|8|",
      "Sentadilla búlgara|reps|8|",
      "Plancha frontal|time|45|",
    ],

    rounds: 4,

    cooldown: [
      "Respiración lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-12-recuperacion",
    date: "2026-06-12",
    dayLabel: "Viernes 12/06",
    title: "Recuperación activa",
    category: "bajo",
    intensity: "recuperacion",
    objective: "Facilitar recuperación física.",
    description:
      "Trabajo muy suave de movilidad y respiración.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Caminar suave|time|1200|",
      "Movilidad de hombros|time|60|",
      "Movilidad de cadera|time|60|",
    ],

    rounds: 1,

    cooldown: [
      "Respiración lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-13-potencia-final",
    date: "2026-06-13",
    dayLabel: "Sábado 13/06",
    title: "Potencia final",
    category: "duro",
    intensity: "potencia",
    objective: "Mantener explosividad sin exceso de fatiga.",
    description:
      "Trabajo rápido y corto.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Sprawls|reps|6|",
      "Jump squats|reps|5|",
      "Flexiones explosivas|reps|5|",
      "Technical stand-up|time|30|",
    ],

    rounds: 4,
    roundRest: 60,

    cooldown: [
      "Respiración nasal|time|180|",
    ],
  }),

  R({
    id: "2026-06-14-descarga",
    date: "2026-06-14",
    dayLabel: "Domingo 14/06",
    title: "Descarga",
    category: "bajo",
    intensity: "movilidad",
    objective: "Reducir fatiga acumulada.",
    description:
      "Semana final empieza con descarga ligera.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "90/90 de cadera|time|60|",
      "Movilidad de hombros|time|60|",
      "Respiración lenta|time|120|",
    ],

    rounds: 2,

    cooldown: [
      "Respiración 4-6|time|180|",
    ],
  }),

  R({
    id: "2026-06-15-ritmo-combate",
    date: "2026-06-15",
    dayLabel: "Lunes 15/06",
    title: "Ritmo combate",
    category: "medio",
    intensity: "cardio",
    objective: "Mantener ritmo competitivo.",
    description:
      "Trabajo específico sin destruir recuperación.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Sprawls|time|25|",
      "Mountain climbers|time|25|",
      "Bear crawl|time|25|",
      "Shadow grappling|time|25|",
    ],

    rounds: 5,
    roundRest: 45,

    cooldown: [
      "Respiración lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-16-movilidad",
    date: "2026-06-16",
    dayLabel: "Martes 16/06",
    title: "Movilidad",
    category: "bajo",
    intensity: "movilidad",
    objective: "Mantener movilidad y frescura.",
    description:
      "Trabajo suave y controlado.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Cat-cow|time|60|",
      "90/90 de cadera|time|60|",
      "Movilidad de hombros|time|60|",
    ],

    rounds: 2,

    cooldown: [
      "Respiración nasal lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-17-fuerza-ligera",
    date: "2026-06-17",
    dayLabel: "Miércoles 17/06",
    title: "Fuerza ligera",
    category: "medio",
    intensity: "fuerza",
    objective: "Mantener fuerza sin generar fatiga.",
    description:
      "Volumen reducido y ejecución limpia.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Goblet squat|reps|8|",
      "Dominadas|reps|5|",
      "Flexiones|reps|10|",
      "Plancha frontal|time|40|",
    ],

    rounds: 3,

    cooldown: [
      "Respiración lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-18-cardio-corto",
    date: "2026-06-18",
    dayLabel: "Jueves 18/06",
    title: "Cardio corto",
    category: "medio",
    intensity: "cardio",
    objective: "Mantener motor activo.",
    description:
      "Trabajo corto y dinámico.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Sprawls|time|20|",
      "Mountain climbers|time|20|",
      "Shadow grappling|time|20|",
    ],

    rounds: 4,
    roundRest: 40,

    cooldown: [
      "Respiración nasal|time|180|",
    ],
  }),

  R({
    id: "2026-06-19-descanso-activo",
    date: "2026-06-19",
    dayLabel: "Viernes 19/06",
    title: "Descanso activo",
    category: "bajo",
    intensity: "recuperacion",
    objective: "Recuperar y mantener movilidad.",
    description:
      "Trabajo mínimo para llegar fresco.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Caminar suave|time|900|",
      "Movilidad de cadera|time|60|",
    ],

    rounds: 1,

    cooldown: [
      "Respiración lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-20-activacion",
    date: "2026-06-20",
    dayLabel: "Sábado 20/06",
    title: "Activación",
    category: "medio",
    intensity: "potencia",
    objective: "Activar sin cansar.",
    description:
      "Movimientos rápidos y poco volumen.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Sprawls|reps|5|",
      "Jump squats|reps|4|",
      "Technical stand-up|time|20|",
    ],

    rounds: 3,
    roundRest: 60,

    cooldown: [
      "Respiración nasal|time|180|",
    ],
  }),

  R({
    id: "2026-06-21-movilidad",
    date: "2026-06-21",
    dayLabel: "Domingo 21/06",
    title: "Movilidad",
    category: "bajo",
    intensity: "movilidad",
    objective: "Mantener soltura corporal.",
    description:
      "Sesión ligera.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "90/90 de cadera|time|60|",
      "Movilidad de hombros|time|60|",
    ],

    rounds: 2,

    cooldown: [
      "Respiración lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-22-ritmo",
    date: "2026-06-22",
    dayLabel: "Lunes 22/06",
    title: "Ritmo",
    category: "medio",
    intensity: "cardio",
    objective: "Mantener ritmo competitivo.",
    description:
      "Cardio específico controlado.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Sprawls|time|20|",
      "Shadow grappling|time|20|",
      "Mountain climbers|time|20|",
    ],

    rounds: 4,
    roundRest: 45,

    cooldown: [
      "Respiración nasal|time|180|",
    ],
  }),

  R({
    id: "2026-06-23-fuerza-suave",
    date: "2026-06-23",
    dayLabel: "Martes 23/06",
    title: "Fuerza suave",
    category: "bajo",
    intensity: "fuerza",
    objective: "Mantener tono muscular.",
    description:
      "Trabajo ligero sin fatigar.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Goblet squat|reps|6|",
      "Dominadas|reps|4|",
      "Flexiones|reps|8|",
    ],

    rounds: 2,

    cooldown: [
      "Respiración lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-24-descanso",
    date: "2026-06-24",
    dayLabel: "Miércoles 24/06",
    title: "Descanso",
    category: "bajo",
    intensity: "recuperacion",
    objective: "Recuperar completamente.",
    description:
      "Solo movilidad ligera y respiración.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Movilidad suave|time|300|",
    ],

    rounds: 1,

    cooldown: [
      "Respiración lenta|time|180|",
    ],
  }),

  R({
    id: "2026-06-25-activacion-final",
    date: "2026-06-25",
    dayLabel: "Jueves 25/06",
    title: "Activación final",
    category: "bajo",
    intensity: "activacion",
    objective: "Llegar rápido y fresco.",
    description:
      "Sesión muy corta de activación.",

    warmup: competitionStrategyWarmup,

    exercises: [
      "Sprawls|reps|4|",
      "Technical stand-up|time|20|",
    ],

    rounds: 2,
    roundRest: 60,

    cooldown: [
      "Respiración nasal|time|180|",
    ],
  }),

  R({
    id: "2026-06-26-descanso-total",
    date: "2026-06-26",
    dayLabel: "Viernes 26/06",
    title: "Descanso total",
    category: "bajo",
    intensity: "descanso",
    objective: "Llegar fresco a competición.",
    description:
      "Nada intenso. Solo movilidad ligera opcional.",

    warmup: [],

    exercises: [
      "Respiración lenta|time|180|",
    ],

    rounds: 1,

    cooldown: [],
  }),

  R({
    id: "2026-06-27-competition-day",
    date: "2026-06-27",
    dayLabel: "Sábado 27/06",
    title: "Competition Day",
    category: "duro",
    intensity: "competicion",
    objective: "Competir fresco y rápido.",
    description:
      "Activación ligera antes del combate.",

    warmup: [
      "Jumping jacks|time|30|",
      "Shadow grappling|time|60|",
      "Movilidad de cadera|time|60|",
    ],

    exercises: [
      "Sprawls suaves|reps|3|",
      "Technical stand-up|time|20|",
    ],

    rounds: 1,

    cooldown: [],
  }),
];

const monthlyPlan = routines.map(({ date, dayLabel, id, category }) => ({
  date,
  dayLabel,
  routineId: id,
  category,
}));

export function getTodayRoutine(dateString) {
  const today = monthlyPlan.find((day) => day.date === dateString);

  if (!today) return null;

  return routines.find((routine) => routine.id === today.routineId) || null;
}

export function getRandomRoutineByCategory(category) {
  const filtered = routines.filter((routine) => routine.category === category);

  if (!filtered.length) return null;

  return filtered[Math.floor(Math.random() * filtered.length)];
}