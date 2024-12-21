/*
  MeteoNow is a Weather App
  Copyright (C) 2024 Mukul Kedia

  MeteoNow is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  MeteoNow is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with MeteoNow. If not, see <https://www.gnu.org/licenses/>.
*/

import js from "@eslint/js";
import tseslint from "typescript-eslint";

import tailwind from "eslint-plugin-tailwindcss";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  tailwind.configs["flat/recommended"],
  eslintPluginAstro.configs["flat/recommended"],
  eslintPluginPrettierRecommended,
  {
    ignores: [".astro/", "dist/"],
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
