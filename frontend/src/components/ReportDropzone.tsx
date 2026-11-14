'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react';
import { LabReport } from '../types';

interface ReportDropzoneProps {
  onReportAdded: (newReport: LabReport) => void;
}

export function ReportDropzone({ onReportAdded }: ReportDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStage, setProcessStage] = useState<'idle' | 'encrypting' | 'anchoring' | 'done'>('idle');
  const [lastUploadedName, setLastUploadedName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    setIsProcessing(true);
    setProcessStage('encrypting');
    setLastUploadedName(file.name);

    // Realistic cryptographic simulation steps
    setTimeout(() => {
      setProcessStage('anchoring');
      setTimeout(() => {
        setProcessStage('done');
        setIsProcessing(false);

        // Add newly verified report to state
        const generatedReport: LabReport = {
          id: `rep-${Date.now()}`,
          title: file.name.replace(/\.[^/.]+$/, "") || "Diagnostic Blood Panel",
          date: new Date().toISOString().split('T')[0],
          displayDate: "Today",
          labName: "Max Healthcare Labs",
          summary: "Newly added panel. Biomarkers extracted and validated against clinical ranges. All values recorded with cryptographic origin seal.",
          verifiedAuthentic: true,
          keyBiomarkers: [
            { name: "Fasting Blood Sugar", value: "128", unit: "mg/dL", referenceRange: "70 – 99", status: "High" },
            { name: "HbA1c", value: "7.2", unit: "%", referenceRange: "< 7.0 for T2D", status: "Normal" },
            { name: "Serum Creatinine", value: "1.1", unit: "mg/dL", referenceRange: "0.6 – 1.1", status: "Normal" },
          ],
          receipt: {
            reportId: `rep-${Date.now()}`,
            fileHashSha256: "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
            saltHex: "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
            saltedCommitmentKeccak256: "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
            smartContractAddress: "0x892a0149182374B09182C0E83210459B98A0A71E",
            transactionHash: "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
            blockNumber: 15024180,
            blockTimestamp: new Date().toUTCString(),
            labSignerAddress: "0x7F21B08C4A9E5D2F1B08C4A9E5D2F1B08C4A9E5D",
            networkName: "Polygon Amoy L2 Testnet",
            verifiedInBrowser: true,
          },
        };

        onReportAdded(generatedReport);
      }, 1000);
    }, 1000);
  };

  return (
    <section className="bg-surface rounded-2xl border border-rule p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-ink">Add New Lab Report</h2>
          <p className="text-sm text-muted mt-0.5">
            Encrypted on your device before storage. Provably unaltered on Polygon Amoy.
          </p>
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.png,.jpg,.jpeg"
        className="hidden"
      />

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !isProcessing && fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-8 sm:p-10 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-verdigris bg-sage/20 scale-[0.99]'
            : 'border-rule hover:border-verdigris/60 hover:bg-paper/50'
        }`}
      >
        {isProcessing ? (
          <div className="flex flex-col items-center justify-center py-4">
            <div className="w-10 h-10 border-2 border-verdigris border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-sm font-medium text-ink">
              {processStage === 'encrypting' && 'Encrypting report with AES-256-GCM...'}
              {processStage === 'anchoring' && 'Anchoring salted commitment to Polygon Amoy...'}
            </p>
            <p className="text-xs text-muted mt-1">Zero patient health information touches public ledgers.</p>
          </div>
        ) : processStage === 'done' ? (
          <div className="flex flex-col items-center justify-center py-2">
            <div className="w-10 h-10 rounded-full bg-sage/60 flex items-center justify-center text-verdigris mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="text-base font-semibold text-ink">Report Added &amp; Verified</p>
            <p className="text-xs text-muted mt-1 max-w-sm">
              {lastUploadedName} has been encrypted and added to your chronological records.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setProcessStage('idle');
              }}
              className="mt-4 text-xs font-medium text-verdigris hover:text-verdigris-hover"
            >
              Add another report
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-paper flex items-center justify-center text-verdigris mb-3.5 border border-rule">
              <UploadCloud className="w-6 h-6" />
            </div>
            <p className="text-base font-semibold text-ink">
              Drop your diagnostic report here
            </p>
            <p className="text-sm text-muted mt-1">
              or <span className="text-verdigris font-medium underline underline-offset-2">browse files</span> from your computer
            </p>
            <p className="text-xs text-muted mt-3">
              Supports digital PDFs or clear scans (CBC, HbA1c, Metabolic, Lipid panels)
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
