import { IBook, IBookWithAverage } from "@/interface/IBooks";
import { createContext, ReactNode, useState } from "react";


interface ContextProps {
  selectedBook: IBookWithAverage;
  setSelectedBook: (book: IBookWithAverage) => void;
  signInModal: boolean;
  setSignInModal: (status: boolean) => void;
  detailsModal: boolean;
  setDetailsModal: (status: boolean) => void;
}

export const ModalControllerContext = createContext<ContextProps>({} as ContextProps);

interface ProviderProps {
  children: ReactNode;
}

export const ModalControllerProvider = ({children}: ProviderProps) => {
  const [selectedBook, setSelectedBook] = useState<IBookWithAverage>({} as IBookWithAverage)
  const [signInModal, setSignInModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);

  return (
    <ModalControllerContext.Provider value={{selectedBook, setSelectedBook, signInModal, setSignInModal, detailsModal, setDetailsModal}}>
      {children}
    </ModalControllerContext.Provider>
  )
}

