export interface IDocument {
  id: string;
  name: string;
  description: string;
  type: string;
  date: string;
}

export const getDocuments = async (): Promise<{ documents: IDocument[] }> => {
  return {
    documents: [],
  };
};
