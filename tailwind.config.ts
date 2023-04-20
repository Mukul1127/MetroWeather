/*
This file is part of MetroWeather.

MetroWeather is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

MetroWeather is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with MetroWeather. If not, see
<https://www.gnu.org/licenses/>.

© 2022-2023 Copyright: Open-Meteo.com
*/

import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  theme: { fontFamily: { sans: [
    "Inter", "sans-serif",
    "InterVar", "sans-serif",
  ] } },
  content: ["./index.html", "./Today/index.html", "./Future/index.html", "./src/**/*.{js,ts,jsx,tsx}", "./Today/Today.ts", "./Future/Future.ts"],
  plugins: [import("flowbite/plugin")]
} satisfies Config