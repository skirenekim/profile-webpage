import { pdf } from '@react-pdf/renderer';
import { createElement } from 'react';
import { CVDocument } from './CVDocument';

export function useDownloadCV() {
  const downloadCV = async () => {
    const blob = await pdf(createElement(CVDocument)).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SeongKyungKim_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return { downloadCV };
}
