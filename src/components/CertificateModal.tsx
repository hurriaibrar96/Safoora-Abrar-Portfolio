import React, { useState } from 'react';
import { X, ExternalLink, Download, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDocUrl?: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  initialDocUrl
}) => {
  const allDocs = EXPERIENCES.flatMap((exp) =>
    exp.documents.map((doc) => ({
      ...doc,
      issuer: exp.company,
      period: exp.period
    }))
  );

  const [selectedDocUrl, setSelectedDocUrl] = useState<string>(
    initialDocUrl || (allDocs[0]?.url ?? '')
  );

  if (!isOpen) return null;

  const currentDoc = allDocs.find((d) => d.url === selectedDocUrl) || allDocs[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#040814]/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div className="bg-[#0c1735] w-full max-w-4xl h-[90vh] max-h-[800px] rounded-2xl border border-blue-700/80 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-blue-800 bg-[#081024]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-cyan-300 flex items-center justify-center border border-blue-500/40">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h2 id="cert-modal-title" className="text-sm font-extrabold text-white leading-tight">
                Verified Credentials &amp; Experience Letters
              </h2>
              <p className="text-[11px] text-cyan-300/80">
                Official documentation issued by companies and organizations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentDoc && (
              <a
                href={currentDoc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-900/60 hover:bg-blue-800 border border-blue-700 rounded-lg"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-blue-300 hover:text-white hover:bg-blue-900/60 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 min-h-0 overflow-hidden">
          {/* Selector sidebar (4 cols) */}
          <div className="md:col-span-4 border-r border-blue-900/60 p-3 sm:p-4 overflow-y-auto space-y-2 bg-[#081026]">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block px-2 mb-2 font-bold">
              Select Document ({allDocs.length})
            </span>

            {allDocs.map((doc, idx) => {
              const isSelected = doc.url === currentDoc?.url;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedDocUrl(doc.url)}
                  className={`w-full text-left p-3 rounded-xl border text-xs transition-colors flex items-start gap-2.5 ${
                    isSelected
                      ? 'bg-blue-600/30 border-cyan-400 text-white shadow-md'
                      : 'bg-[#0c1735]/60 border-blue-900/70 text-blue-200 hover:bg-[#0c1735] hover:border-blue-700'
                  }`}
                >
                  <FileText className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? 'text-cyan-400' : 'text-blue-400'}`} />
                  <div className="min-w-0">
                    <p className={`font-bold truncate ${isSelected ? 'text-white' : 'text-blue-100'}`}>
                      {doc.title}
                    </p>
                    <p className="text-[11px] text-blue-300/80 truncate mt-0.5">
                      {doc.issuer} · {doc.period}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Document Preview Viewport (8 cols) */}
          <div className="md:col-span-8 flex flex-col h-full bg-[#050b18] overflow-hidden">
            {currentDoc ? (
              <div className="flex-1 flex flex-col h-full">
                <div className="bg-[#091228] px-4 py-2 border-b border-blue-900 flex items-center justify-between text-xs">
                  <div className="truncate pr-2">
                    <span className="font-bold text-white">{currentDoc.title}</span>
                    <span className="text-cyan-300 ml-2 text-[11px]">({currentDoc.issuer})</span>
                  </div>
                  <a
                    href={currentDoc.url}
                    download
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:text-white"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>

                <div className="flex-1 w-full h-full p-2">
                  <iframe
                    src={`${currentDoc.url}#view=FitH`}
                    title={currentDoc.title}
                    className="w-full h-full rounded-lg border border-blue-900 bg-white"
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-blue-300">
                Select a document to preview
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
