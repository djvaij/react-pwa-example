import { useEffect, useState } from 'react';
import { IDocument, getDocuments } from '../../api/getDocuments';
import { NoDocuments } from '../NoDocuments';

export const DocumentsList = () => {
  const [documents, setDocuments] = useState<IDocument[]>([]);

  useEffect(() => {
    getDocuments().then((data) => setDocuments(data.documents));
  }, []);

  return (
    <div className="documents-list">
      {documents.length > 0 &&
        documents.map((document) => (
          <div className="document" key={document.id}>
            {document.name}
          </div>
        ))}
      {documents.length === 0 && <NoDocuments />}
    </div>
  );
};
