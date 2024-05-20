import styles from './App.module.scss';
import { Header } from './components/Header';
import { DocumentsDescription } from './components/DocumentsDescirption';
import { DocumentsList } from './components/DocumentsList';
import { UploadDocumentBtn } from './components/UploadDocumentBtn';
import { UploadDocumentModal } from './components/UploadDocumentModal';
import { useState } from 'react';
import { DocumentsProvider } from './contexts/documentsContext';

function App() {
  const [showUploadModal, setShowUploadModal] = useState(true);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <DocumentsProvider>
          <DocumentsDescription />
          <DocumentsList />
          <UploadDocumentBtn onClick={() => setShowUploadModal(true)} />
          <UploadDocumentModal
            opened={showUploadModal}
            onClose={() => setShowUploadModal(false)}
          />
        </DocumentsProvider>
      </main>
    </div>
  );
}

export default App;
