import { createContext } from 'react';

export interface ContextProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteNote: (id: string) => void;
  handleAddNote: (text: string) => void;
  handleEditNote: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ) => void;
}

export const NotesContext = createContext<ContextProps | null>(null);
