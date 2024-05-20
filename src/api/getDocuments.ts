import { IDocument } from '../types/documents';

export const getDocuments = async (): Promise<{ documents: IDocument[] }> => {
  return {
    documents: [],
  };
};
