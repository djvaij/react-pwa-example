import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { IDocument } from '../types/documents';

// Actions types of the reducer
type Action =
  | { type: 'ADD_DOCUMENT'; payload: IDocument }
  | { type: 'REMOVE_DOCUMENT'; payload: string }
  | { type: 'UPDATE_DOCUMENT'; payload: IDocument };

// Initial state
const initialState: IDocument[] = [];

// Reducer
const documentReducer = (state: IDocument[], action: Action): IDocument[] => {
  switch (action.type) {
    case 'ADD_DOCUMENT':
      return [...state, action.payload];
    case 'REMOVE_DOCUMENT':
      return state.filter((doc) => doc.id !== action.payload);
    case 'UPDATE_DOCUMENT':
      return state.map((doc) =>
        doc.id === action.payload.id ? action.payload : doc,
      );
    default:
      return state;
  }
};

// Context
const DocumentsContext = createContext<{
  state: IDocument[];
  addDocument: (doc: IDocument) => void;
  removeDocument: (id: string) => void;
  updateDocument: (doc: IDocument) => void;
}>({
  state: initialState,
  addDocument: () => {},
  removeDocument: () => {},
  updateDocument: () => {},
});

// Context Provider
const DocumentsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(documentReducer, initialState);

  const addDocument = (doc: IDocument) => {
    dispatch({ type: 'ADD_DOCUMENT', payload: doc });
  };

  const removeDocument = (id: string) => {
    dispatch({ type: 'REMOVE_DOCUMENT', payload: id });
  };

  const updateDocument = (doc: IDocument) => {
    dispatch({ type: 'UPDATE_DOCUMENT', payload: doc });
  };

  return (
    <DocumentsContext.Provider
      value={{ state, addDocument, removeDocument, updateDocument }}
    >
      {children}
    </DocumentsContext.Provider>
  );
};

// Hook for using the context
const useDocuments = () => useContext(DocumentsContext);

export { DocumentsProvider, useDocuments };
