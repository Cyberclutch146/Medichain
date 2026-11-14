'use client';

import React from 'react';
import { LabReport } from '../types';
import { X, ShieldCheck, FileText, ArrowRight, Share2 } from 'lucide-react';

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
  if (!isOpen || !report) return null;

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto">
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
              <h2 className="text-xl font-semibold text-ink tracking-tight">
                {report.title}
              </h2>
              <p className="text-xs text-muted mt-1 tabular-nums">
                {report.labName} • Issued {report.displayDate}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-muted hover:text-ink hover:bg-paper transition-colors"
              aria-label="Close report details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Plain English Summary */}
          <div className="py-5">
            <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
              Clinical Synthesis
            </h3>
            <p className="text-sm text-ink leading-relaxed bg-paper/60 p-4 rounded-xl border border-rule">
              {report.summary}
            </p>
          </div>

          {/* Key Biomarkers Table */}
          <div className="py-2">
            <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
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
                          ? 'bg-amber/10 text-amber border border-amber/20'
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

          {/* Cryptographic Link */}
          <div className="pt-4 pb-2 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-verdigris font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Cryptographically Anchored on Polygon Amoy</span>
            </div>
            <button
              onClick={() => onOpenReceipt(report)}
              className="text-verdigris hover:text-verdigris-hover font-medium underline underline-offset-2 flex items-center gap-1"
            >
              <span>View Technical Receipt</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action Footer */}
          <div className="pt-5 mt-4 border-t border-rule flex flex-col sm:flex-row items-center justify-end gap-2.5">
            <button
              onClick={() => {
                alert(`Viewing original decrypted PDF: ${report.title}.pdf`);
              }}
              className="w-full sm:w-auto px-4 py-2 rounded-lg border border-rule text-xs font-medium text-ink hover:bg-paper transition-colors flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-muted" />
              <span>View Original PDF</span>
            </button>
            <button
              onClick={() => onShareWithDoctor(report)}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-verdigris text-surface text-xs font-medium hover:bg-verdigris-hover transition-colors flex items-center justify-center gap-1.5 shadow-xs"
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
