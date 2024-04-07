import { createContext, Context } from "react";

export type Mode = 'dark' | 'light';

export interface Theme {
  theme: { mode: Mode };
  updateTheme: (newTheme: { mode: Mode } | undefined) => void;
}

const defaultTheme: Theme = {
  theme: { mode: 'dark' },
  updateTheme: (newTheme: { mode: Mode } | undefined) => { },
};

export const ThemeContext: Context<Theme> = createContext<Theme>(defaultTheme);