import { createContext } from 'react';

export interface ColorChangeProps {
  toggleColorPane: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

export const ColorChangeContext = createContext<ColorChangeProps | any>(null);
