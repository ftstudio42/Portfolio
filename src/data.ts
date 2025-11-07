import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Ft Studio",
  role: "Game Developer Team",
  introduction: "Hello! We are a group of young developers building our own game studio.",
  description: "Our team was formed last year by a group of passionate and dynamic young people in the field of game development. Our first game, Slidle, is a successful demo that taught us a lot about both the development process and the importance of teamwork. Inspired by the 42 philosophy that brought us together, our team actively follows new members and support programs to keep growing and improving.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/intro.pdf`,
  links: {
    github: "https://github.com/ftstudio42"
  }
};

export const games: Game[] = [
  {
    name: "Slidle",
    description: "The game is a sliding puzzle with word mechanics that offers a unique, educational, and engaging experience, supported by complex background systems like word analysis and scoring, with its Leaderboard and Market still in the demo stage.",
    genres: ["Puzzle", "Words"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/ftstudio42/Slidle" },
    ],
    media: [
      { source: "/images/games/Slidle/main.jpeg", type: MediaType.Image },
      { source: "/images/games/Slidle/game.jpeg", type: MediaType.Image },
      { source: "/images/games/Slidle/login.jpeg", type: MediaType.Image },
      { source: "/images/games/Slidle/leaders.jpeg", type: MediaType.Image },
    ],
  },
  {
    name: "Otis: Seeker Of The Truth",
    description: "Otis wakes up in a strange world filled with mysterious plants and embarks on a journey through puzzles and adventures to uncover the truth.",
    genres: ["Adventure", "3D", "Puzzle"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/halukozdemir/Otis-Seeker-of-the-Truth" },
    ],
    media: [
      { source: "/images/games/Otis-Seeker-Of-The-Truth/main.png", type: MediaType.Image },
      { source: "/images/games/Otis-Seeker-Of-The-Truth/map1.png", type: MediaType.Image },
      { source: "/images/games/Otis-Seeker-Of-The-Truth/char.png", type: MediaType.Image },
      { source: "/images/games/Otis-Seeker-Of-The-Truth/map2.png", type: MediaType.Image },
    ],
  }
];