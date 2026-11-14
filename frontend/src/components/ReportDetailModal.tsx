'use client';

import React, { useEffect, useState } from 'react';
import { LabReport } from '../types';
import { X, ShieldCheck, FileText, ArrowRight, Share2, Check } from 'lucide-react';

interface ReportDetailModalProps {
  report: LabReport | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenReceipt: (report: LabReport) => void;
  onShareWithDoctor: (report: LabReport) => void;
}

export function ReportDetailModal({
  report,
  isOpen,
  onClose,
  onOpenReceipt,
  onShareWithDoctor,
}: ReportDetailModalProps) {
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showPdfPreview) {
          setShowPdfPreview(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, showPdfPreview, onClose]);

  if (!isOpen || !report) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="report-modal-title"
      className="fixed inset-0 z-40 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/30 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-surface border border-rule text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between pb-5 border-b border-rule">
            <div>
              <h2 id="report-modal-title" className="text-xl font-semibold text-ink tracking-tight">
                {report.title}
              </h2>
              <p className="text-xs text-muted mt-1 tabular-nums">
                {report.labName} • Issued {report.displayDate}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 -mr-2 -mt-2 rounded-lg text-muted hover:text-ink hover:bg-paper transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-verdigris"
              aria-label="Close report details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* PDF In-App Preview Banner */}
          {showPdfPreview ? (
            <div className="my-5 p-4 rounded-xl bg-paper border border-rule">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-verdigris" />
                  <span className="text-xs font-semibold text-ink">Decrypted Document View: {report.title}.pdf</span>
                </div>
                <button
                  onClick={() => setShowPdfPreview(false)}
                  className="text-xs text-muted hover:text-ink font-medium"
                >
                  Return to Summary
                </button>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-rule/60 text-xs font-mono text-muted space-y-1.5">
                <p className="text-ink font-sans font-medium">Original Lab Header: {report.labName}</p>
                <p>Patient Name: Asha Sharma | Age: 44 | Sex: Female</p>
                <p>Specimen Collected: {report.displayDate} 08:30 IST | Verified: 100% Cryptographic Match</p>
                <p className="text-verdigris font-sans font-medium pt-2">✓ Digital signature verified by lab public key.</p>
              </div>
            </div>
          ) : (
            <>
              {/* Plain English Summary */}
              <div className="py-5">
                <h3 className="text-sm font-semibold text-ink mb-2">
                  Clinical Synthesis
                </h3>
                <p className="text-sm text-ink leading-relaxed bg-paper/60 p-4 rounded-xl border border-rule">
                  {report.summary}
                </p>
              </div>

              {/* Key Biomarkers Table */}
              <div className="py-2">
                <h3 className="text-sm font-semibold text-ink mb-3">
                  Key Biomarkers
                </h3>
                <div className="border border-rule rounded-xl overflow-hidden divide-y divide-rule">
                  {report.keyBiomarkers.map((biomarker) => (
                    <div
                      key={biomarker.name}
                      className="px-4 py-3 flex items-center justify-between text-sm hover:bg-paper/30 transition-colors"
                    >
                      <div>
                        <span className="font-medium text-ink">{biomarker.name}</span>
                        <span className="text-xs text-muted block tabular-nums">
                          Ref: {biomarker.referenceRange} {biomarker.unit}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-base font-semibold text-ink tabular-nums">
                          {biomarker.value}{' '}
                          <span className="text-xs font-normal text-muted">{biomarker.unit}</span>
                        </span>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                            biomarker.status === 'Normal'
                              ? 'bg-sage/40 text-verdigris border border-verdigris/20'
                              : biomarker.status === 'Doctor Review'
                              ? 'bg-amber/10 text-amber border border-amber/30'
                              : 'bg-vermilion/10 text-vermilion border border-vermilion/20'
                          }`}
                        >
                          {biomarker.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Cryptographic Link */}
          <div className="pt-4 pb-2 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-verdigris font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Cryptographically Anchored on Polygon Amoy</span>
            </div>
            <button
              onClick={() => onOpenReceipt(report)}
              className="text-verdigris hover:text-verdigris-hover font-medium underline underline-offset-2 flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-verdigris"
            >
              <span>View Technical Receipt</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action Footer */}
          <div className="pt-5 mt-4 border-t border-rule flex flex-col sm:flex-row items-center justify-end gap-2.5">
            <button
              onClick={() => setShowPdfPreview(!showPdfPreview)}
              className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-lg border border-rule text-xs font-medium text-ink hover:bg-paper transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-verdigris"
            >
              <FileText className="w-4 h-4 text-muted" />
              <span>{showPdfPreview ? 'Hide Document Preview' : 'View Original PDF'}</span>
            </button>
            <button
              onClick={() => onShareWithDoctor(report)}
              className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-lg bg-verdigris text-surface text-xs font-medium hover:bg-verdigris-hover transition-colors flex items-center justify-center gap-1.5 shadow-xs focus-visible:outline-2 focus-visible:outline-verdigris"
            >
              <Share2 className="w-4 h-4" />
              <span>Share with Doctor</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
