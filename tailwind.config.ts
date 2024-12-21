/*
  Mukul's Personal Website is a Website
  Copyright (C) 2024 Mukul Kedia

  Mukul's Personal Website is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  Mukul's Personal Website is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with Mukul's Personal Website. If not, see <https://www.gnu.org/licenses/>.
*/

import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.astro"],
  darkMode: ["selector", `[data-dark="true"]`],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["CascadiaCode", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: [
      {
        mukuls: {
          primary: "#93c5fd",
          secondary: "#86efac",
          accent: "#f87171",
          "color-scheme": "dark",
          neutral: "oklch(26% 0.019 237.69)",
          "neutral-content": "oklch(70% 0.019 237.69)",
          "base-100": "oklch(22% 0.019 237.69)",
          "base-200": "oklch(20% 0.019 237.69)",
          "base-300": "oklch(18% 0.019 237.69)",
          "base-content": "#9fb9d0",
          info: "#89e0eb",
          success: "#addfad",
          warning: "#f1c891",
          error: "#ffbbbd",
          "--rounded-box": "1.2rem",
          "--rounded-btn": "0.8rem",
          "--rounded-badge": "0.4rem",
          "--tab-radius": "0.7rem",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      {
        cyberpunk: {
          primary: "oklch(74.22% 0.209 6.35)",
          secondary: "oklch(83.33% 0.184 204.72)",
          accent: "oklch(71.86% 0.2176 310.43)",
          neutral: "oklch(23.04% 0.065 269.31)",
          "neutral-content": "oklch(94.51% 0.179 104.32)",
          "base-100": "oklch(94.51% 0.179 104.32)",
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--tab-radius": "0",
        },
      },
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      {
        wireframe: {
          "color-scheme": "light",
          primary: "#b8b8b8",
          secondary: "#b8b8b8",
          accent: "#b8b8b8",
          neutral: "#ebebeb",
          "base-100": "oklch(100% 0 0)",
          "base-200": "#eeeeee",
          "base-300": "#dddddd",
          info: "#0000ff",
          success: "#008000",
          warning: "#a6a659",
          error: "#ff0000",
          "--rounded-box": "0.2rem",
          "--rounded-btn": "0.2rem",
          "--rounded-badge": "0.2rem",
          "--tab-radius": "0.2rem",
        },
      },
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
} satisfies Config;
