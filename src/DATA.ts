import { Plan, Providers } from "./lib/types";

export const PLANS: Record<Providers, Plan[]> = {
  THREE: [
    {
      data: "unlimited",
      id: "jskldjf",
      provider: "THREE",
      region: "UK",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 22,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 20.5,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 18.5,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 16.5,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "1TB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
    {
      data: 40,
      id: "kjadshfkjads",
      provider: "THREE",
      region: "UK",
      type: "Voice_Data",
      features: [
        "UK's Unlimited Voice call",
        "125GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
      variants: {
        1: {
          id: 1,
          rate: 19.5,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 18,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 16.5,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 15.5,
          validityString: "12-months",
        },
      },
    },
    {
      data: 40,
      id: "sadjhfjds",
      provider: "THREE",
      region: "UK",
      type: "Voice_Data",
      features: [
        "UK's Unlimited Voice call",
        "40GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
      variants: {
        1: {
          id: 1,
          rate: 17.5,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 16.5,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 15.5,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 14.5,
          validityString: "12-months",
        },
      },
    },
    {
      data: "unlimited",
      id: "kjadshfjhxadfd",
      provider: "THREE",
      region: "UK_EU",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 22,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 20.5,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 18.5,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 16.5,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "1TB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
  ],
  EE: [
    {
      data: "unlimited",
      id: "jdshfjhdsfjshfswer",
      provider: "EE",
      region: "UK",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 39,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 38,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 37,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 36,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "750GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
    {
      data: "unlimited",
      id: "kdjfkjadskfa",
      provider: "EE",
      region: "UK_EU",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 39,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 38,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 37,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 36,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "750GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
    {
      data: 50,
      id: "kaleejfeqlfnads",
      provider: "EE",
      region: "UK",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 19.5,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 18.5,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 16.5,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 15.5,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "50GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
    {
      data: 10,
      id: "kajsfjweqewfvb",
      provider: "EE",
      region: "UK",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 15,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 14,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 12.5,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 11,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "10GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
  ],
  O2: [
    {
      data: "unlimited",
      id: "jfjewhrcbv",
      provider: "O2",
      region: "UK",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 21,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 20,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 19,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 17,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "750GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
    {
      data: 50,
      id: "klsjadfjwefv",
      provider: "O2",
      region: "UK",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 18,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 17,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 16,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 14,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "50GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
    {
      data: "unlimited",
      id: "lefojvnnv",
      provider: "O2",
      region: "UK",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 15.5,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 14.5,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 13.5,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 12,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "20GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
  ],
  VODAFONE: [
    {
      data: "unlimited",
      id: "madsfjhdvncv",
      provider: "VODAFONE",
      region: "UK",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 22.5,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 21.5,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 20.5,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 19,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "750GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
    {
      data: 25,
      id: "kjdsfjscsadc",
      provider: "VODAFONE",
      region: "UK",
      type: "Voice_Data",
      variants: {
        1: {
          id: 1,
          rate: 18.5,
          validityString: "30-days",
        },
        "3": {
          id: 3,
          rate: 17.5,
          validityString: "3-months",
        },
        "6": {
          id: 6,
          rate: 16.5,
          validityString: "6-months",
        },
        "12": {
          id: 12,
          rate: 15.5,
          validityString: "12-months",
        },
      },
      features: [
        "UK's Unlimited Voice call",
        "25GB High Speed Data",
        "Enjoy hotspot",
        "No Roaming (UK Only)",
        "5G High Speed Connection",
      ],
    },
  ],
};
