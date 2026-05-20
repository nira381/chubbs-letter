import { MemoryGroup, LoveLetter } from './types';

// Real Google Drive File IDs extracted from folder
export const DRIVE_IMAGE_IDS: { [key: string]: string } = {
  "1.1": "1nx3GzkqPSvMkdV1HtIMa1LCgjkAYJSOF",
  "1.2": "1XoZHYfbrJG_IWAK8B99Zl2RHhQJskEz6",
  "1.3": "10IyQKx0Fy4n2yo9n56jeSIKexcv3VGsU",
  "1.4": "16I3F_J3A3c8toGeH3oEW9qlQlcpxv-ew",
  "2.1": "1gfQLM0rMelibX049YLRHBP2KOPR4IcSO",
  "2.2": "1bXXqSmiKOwcnRJVZ9lmLNGuoCvbTzAiP",
  "2.3": "1gcjRgbJERlWAhob28RugyNv5kqKopNoZ",
  "2.4": "1fhMJWBvBO5pUFu-LNQkMcDxqEQuE1MDt",
  "2.5": "130m_lPVJXvA76Z2Op4SQt3ThETos0ism",
  "2.6": "1F9JLrCdXvzx5KrdcQDcI33C2mlHWj8t2",
  "3.1": "1rdVBLLylP2fW40PR2-q7RUYDKIZmuRKw",
  "3.2": "1L1iizq--LUqPG0qEHQ-bJcjyY9T-a4i5",
  "3.3": "1stDMKHLB43Eld0HXxccZ7KjiCFFKki3Y",
  "4.1": "1QVpF_WOoVUxJf342WsiVq-Vtt8zl5yGz",
  "4.2": "1qAwydcnwlpJNAm3odDRA3k3fhuYmMyWM",
  "4.3": "1PxCNjWmB0L-K73jNL-RdDi80tx48hjTi",
  "4.4": "1yj7QiAk3pU1pWC53F7YNOigihCWXABox",
  "4.5": "1yGOwdSGfaB0wfDryuTwiF4QGswKvPxy0",
  "4.6": "1ZLfkOm7018tllx3lxQTJ4oyfuOvLG28B"
};

export const getImageUrl = (key: string): string => {
  const id = DRIVE_IMAGE_IDS[key];
  if (!id) return '';
  // Rapid Google usercontent image delivery proxy which bypasses iframe cookie restrictions
  return `https://lh3.googleusercontent.com/d/${id}`;
};

export const MEMORY_GROUPS: MemoryGroup[] = [
  {
    id: 1,
    title: "Chapter I: The Genesis",
    subtitle: "OUR LITTLE UNIVERSE",
    tagline: "Where the world fell quiet and our narrative took form.",
    description: "Every lifetime has a distinct coordinate where eternity begins. For us, it was the soft, unspoken understanding that we had somehow known each other in every previous horizon.",
    items: [
      {
        id: DRIVE_IMAGE_IDS["1.1"],
        key: "1.1",
        title: "The First Glances",
        caption: "A single look that silently redrew the map of my world.",
        date: "The Prologue",
        location: "Sacred Spacetime",
        group: 1
      },
      {
        id: DRIVE_IMAGE_IDS["1.2"],
        key: "1.2",
        title: "The Subtle Alchemy",
        caption: "Finding infinite gold in our quiet, ordinary conversations.",
        date: "Midnight Coffee",
        location: "The Quiet Corner",
        group: 1
      },
      {
        id: DRIVE_IMAGE_IDS["1.3"],
        key: "1.3",
        title: "Whispered Promises",
        caption: "Where time stopped and we allowed our paths to intertwine completely.",
        date: "Dusk Gathering",
        location: "Under the Golden Lights",
        group: 1
      },
      {
        id: DRIVE_IMAGE_IDS["1.4"],
        key: "1.4",
        title: "Golden Hour Glow",
        caption: "Skins warmed by the fading sun, hearts warmed by a new beginning.",
        date: "First Escapade",
        location: "Our Sanctuary",
        group: 1
      }
    ]
  },
  {
    id: 2,
    title: "Chapter II: Scattered Light",
    subtitle: "MADE OF MOMENTS",
    tagline: "Playful laughter, sweet disarray, and beautiful stolen seconds.",
    description: "Love isn't merely found in grand declarations. It lives in the scattered, unchoreographed frames of our daily rituals — the messy hair, the quiet giggles, and the comfort of absolute presence.",
    items: [
      {
        id: DRIVE_IMAGE_IDS["2.1"],
        key: "2.1",
        title: "Unfiltered Giggles",
        caption: "When the jokes made no sense, but our laughter meant everything.",
        date: "Saturday Glee",
        location: "Cafe Table Seven",
        group: 2
      },
      {
        id: DRIVE_IMAGE_IDS["2.2"],
        key: "2.2",
        title: "Stolen Sunlight",
        caption: "Catching rays and admiring the way the light dances across your face.",
        date: "Sunny Retreat",
        location: "Near the Balcony",
        group: 2
      },
      {
        id: DRIVE_IMAGE_IDS["2.3"],
        key: "2.3",
        title: "Tender Holding",
        caption: "Your hand in mine, tracing lines of an unwritten future.",
        date: "Quiet Walk",
        location: "The Forgotten Trail",
        group: 2
      },
      {
        id: DRIVE_IMAGE_IDS["2.4"],
        key: "2.4",
        title: "Silly Glances",
        caption: "We don't need words to speak a thousand inside jokes.",
        date: "Late Afternoons",
        location: "Living Room Floor",
        group: 2
      },
      {
        id: DRIVE_IMAGE_IDS["2.5"],
        key: "2.5",
        title: "Atmospheric Bliss",
        caption: "Surrendering to the warm weight of being completely home next to you.",
        date: "Rainy Sunday",
        location: "Cozy Quarters",
        group: 2
      },
      {
        id: DRIVE_IMAGE_IDS["2.6"],
        key: "2.6",
        title: "Dreamy Gazing",
        caption: "I looked at you, and suddenly the chaos of the city faded into white noise.",
        date: "Dusk Reverie",
        location: "Skyline Overlook",
        group: 2
      }
    ]
  },
  {
    id: 3,
    title: "Chapter III: The Constellation",
    subtitle: "TIME STOPPED HERE",
    tagline: "Tracing the orbits of two souls revolving around a single center gravity.",
    description: "Our days turned into months, mapping out an intricate sky. Each memory became a star, and together they composed a constellation that could weather any dark night.",
    items: [
      {
        id: DRIVE_IMAGE_IDS["3.1"],
        key: "3.1",
        title: "The Anchoring",
        caption: "Finding stability in your gaze while everything else was shifting.",
        date: "Autumn Crisp",
        location: "The Harbor Bridge",
        group: 3
      },
      {
        id: DRIVE_IMAGE_IDS["3.2"],
        key: "3.2",
        title: "Spontaneous Escapes",
        caption: "Leaving behind the maps to explore the secret places of our hearts.",
        date: "Wanderlust",
        location: "Mist-covered Hills",
        group: 3
      },
      {
        id: DRIVE_IMAGE_IDS["3.3"],
        key: "3.3",
        title: "Silent Horizon",
        caption: "Watching the sun disappear, knowing our tomorrow was already safe.",
        date: "Climactic Dusk",
        location: "The End of the Land",
        group: 3
      }
    ]
  },
  {
    id: 4,
    title: "Chapter IV: Eternity In Frames",
    subtitle: "SOME MEMORIES DESERVE FOREVER",
    tagline: "The emotional crescendo of our shared horizon.",
    description: "If I could paint a masterpiece of my life, it would consist solely of your silhouettes. This is our forever — captured elegantly in frames that will never grow old, never fade, and always remind us who we are.",
    items: [
      {
        id: DRIVE_IMAGE_IDS["4.1"],
        key: "4.1",
        title: "Elysian Warmth",
        caption: "A golden symphony of trust, laughter, and unbreakable devotion.",
        date: "Summer Radiance",
        location: "The Meadow",
        group: 4
      },
      {
        id: DRIVE_IMAGE_IDS["4.2"],
        key: "4.2",
        title: "Echoes of Heartbeats",
        caption: "In the silence, our rhythms align like a perfectly rehearsed orchestra.",
        date: "Symphony of Two",
        location: "The Velvet Parlor",
        group: 4
      },
      {
        id: DRIVE_IMAGE_IDS["4.3"],
        key: "4.3",
        title: "The Cinematic Whisper",
        caption: "You represent every beautiful piece of poetry I have ever sought to understand.",
        date: "Enchanted Dusk",
        location: "Under the Hanging Vines",
        group: 4
      },
      {
        id: DRIVE_IMAGE_IDS["4.4"],
        key: "4.4",
        title: "Timeless Sanctuary",
        caption: "Every square inch of the universe feels secure when you are near.",
        date: "Winters Glow",
        location: "Beside the Hearth",
        group: 4
      },
      {
        id: DRIVE_IMAGE_IDS["4.5"],
        key: "4.5",
        title: "Infinite Reflection",
        caption: "Seeing my absolute best self mirrored in your magnificent hazel eyes.",
        date: "Infinite Reflection",
        location: "Mirrored Lake",
        group: 4
      },
      {
        id: DRIVE_IMAGE_IDS["4.6"],
        key: "4.6",
        title: "Our Forever Frame",
        caption: "The culmination of a thousand paths converging into our eternal home.",
        date: "To Be Continued...",
        location: "The Infinite Shore",
        group: 4
      }
    ]
  }
];

export const GENERAL_LETTER: LoveLetter = {
  sender: "Niranjan The Mass",
  recipient: "Chubbs",
  subject: "A Letter Pressed in Gold Foil",
  content: [
    "Idhuleh verum namma edutha recent photos dha irundhirkum so kochikadheee papa. Now back to letter,",
    "I wanted to build you something that feels like the way you love, beautiful, intentional, extremely rare, and absolutely timeless.",
    "Sometimes I catch myself looking at you while you are laughing, and the entire world simply drops its volume. It feels as if time itself steps back to admire the way your happiness makes the universe a little warmer.",
    "Thank you for being my anchor, my beautiful adventure, and my absolute favorite chapter. You are the poetry I want to read forever.",
    "This gallery is my little digital love letter to you, created with every ounce of my heart.",
    "With you, every single frame feels alive. Let's keep creating space, keeping time, and filling our universe with endless light under our own shared stars."
  ],
  signoff: "Yours lovingly"
};

export const AMBIENT_PHRASES = [
  "our little universe",
  "time stopped here",
  "made of moments",
  "you feel like home",
  "some memories deserve forever",
  "every frame feels alive"
];
