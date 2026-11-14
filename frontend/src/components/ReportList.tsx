'use client';

import React from 'react';
import { LabReport } from '../types';
import { Check, ChevronRight, FileText } from 'lucide-react';

interface ReportListProps {
  reports: LabReport[];
  onSelectReport: (report: LabReport) => void;
}

export function ReportList({ reports, onSelectReport }: ReportListProps) {
  return (
    <section className="bg-surface rounded-2xl border border-rule p-6 sm:p-8">
      <div className="flex items-baseline justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-ink">Diagnostic Records</h2>
          <p className="text-sm text-muted mt-0.5">
            Chronological lab panels with independent cryptographic proof of origin.
          </p>
        </div>
        <span className="text-xs text-muted tabular-nums">
          {reports.length} panels stored
        </span>
      </div>

      <div className="divide-y divide-rule">
        {reports.map((report) => (
          <div
            key={report.id}
            onClick={() => onSelectReport(report)}
            className="py-4 first:pt-1 last:pb-1 flex items-center justify-between cursor-pointer group hover:bg-paper/40 -mx-3 px-3 rounded-lg transition-colors"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-paper border border-rule flex items-center justify-center text-ink/70 group-hover:text-verdigris transition-colors flex-shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink group-hover:text-verdigris transition-colors leading-snug">
                  {report.title}
                </h3>
                <p className="text-xs text-muted mt-1 tabular-nums">
                  {report.labName} • {report.displayDate}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-verdigris font-medium bg-sage/40 px-2.5 py-1 rounded-full border border-verdigris/20">
                <Check className="w-3.5 h-3.5" />
                <span>Verified Authentic</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted group-hover:text-ink transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
