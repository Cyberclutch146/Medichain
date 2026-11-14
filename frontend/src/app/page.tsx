'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { HeroTrajectory } from '../components/HeroTrajectory';
import { ReportDropzone } from '../components/ReportDropzone';
import { ReportList } from '../components/ReportList';
import { ReportDetailModal } from '../components/ReportDetailModal';
import { ReceiptDrawer } from '../components/ReceiptDrawer';
import { DoctorAccessCard } from '../components/DoctorAccessCard';
import { MOCK_REPORTS, HBA1C_TRAJECTORY, INITIAL_DOCTOR_ACCESS } from '../data/mockData';
import { LabReport, CryptographicReceipt, DoctorAccess } from '../types';
import { ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  const [currentTab, setCurrentTab] = useState<'overview' | 'reports' | 'doctor'>('overview');
  const [reports, setReports] = useState<LabReport[]>(MOCK_REPORTS);
  const [doctorAccess, setDoctorAccess] = useState<DoctorAccess>(INITIAL_DOCTOR_ACCESS);
  const [selectedReportDetail, setSelectedReportDetail] = useState<LabReport | null>(null);
  const [selectedReceipt, setSelectedReceipt] = useState<CryptographicReceipt | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleReportAdded = (newReport: LabReport) => {
    setReports((prev) => [newReport, ...prev]);
    showToast(`Added and verified: ${newReport.title}`);
  };

  const handleRevokeDoctorAccess = () => {
    setDoctorAccess((prev) => ({
      ...prev,
      active: false,
      auditLog: [
        {
          timestamp: 'Just now',
          action: 'Revoked Dr. Arvind Rao access',
          actor: 'Patient (Asha Sharma)',
        },
        ...prev.auditLog,
      ],
    }));
    showToast('Doctor access revoked. Decryption keys are now locked.');
  };

  const handleGrantDoctorAccess = () => {
    setDoctorAccess((prev) => ({
      ...prev,
      active: true,
      daysRemaining: 7,
      expiresAt: '21 Sep 2026, 11:59 PM',
      auditLog: [
        {
          timestamp: 'Just now',
          action: 'Granted 7-day consultation access',
          actor: 'Patient (Asha Sharma)',
        },
        ...prev.auditLog,
      ],
    }));
    showToast('Granted 7-day consultation access to Dr. Arvind Rao.');
  };

  const handleShareWithDoctor = (report: LabReport) => {
    showToast(`Shared "${report.title}" with Dr. Arvind Rao.`);
    setSelectedReportDetail(null);
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        reportCount={reports.length}
      />

      {/* Floating notification toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-ink text-surface px-4 py-2.5 rounded-xl shadow-lg text-xs font-medium flex items-center gap-2 border border-rule/20 animate-fade-in">
          <ShieldCheck className="w-4 h-4 text-verdigris" />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
        {currentTab === 'overview' && (
          <>
            {/* Screen 1 Hero: Trajectory */}
            <HeroTrajectory points={HBA1C_TRAJECTORY} />

            {/* Screen 1 Primary Action: Dropzone */}
            <ReportDropzone onReportAdded={handleReportAdded} />

            {/* Screen 1 Past Reports: Quiet verified list */}
            <ReportList
              reports={reports}
              onSelectReport={(rep) => setSelectedReportDetail(rep)}
            />

            {/* Screen 1 Peace of Mind Anchor: Doctor Access Banner */}
            <div className="bg-surface rounded-2xl border border-rule p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-paper border border-rule flex items-center justify-center text-verdigris flex-shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">
                    {doctorAccess.active ? (
                      <span>Active sharing with {doctorAccess.doctorName}</span>
                    ) : (
                      <span className="text-vermilion">Clinician access is currently revoked</span>
                    )}
                  </h3>
                  <p className="text-xs text-muted">
                    {doctorAccess.active
                      ? `Access expires in ${doctorAccess.daysRemaining} days. You can revoke it anytime in one tap.`
                      : 'Dr. Rao cannot view your records until you re-grant consent.'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setCurrentTab('doctor')}
                className="text-xs font-medium text-verdigris hover:text-verdigris-hover flex items-center gap-1 self-end sm:self-center"
              >
                <span>Manage consent</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}

        {currentTab === 'reports' && (
          <>
            <ReportDropzone onReportAdded={handleReportAdded} />
            <ReportList
              reports={reports}
              onSelectReport={(rep) => setSelectedReportDetail(rep)}
            />
          </>
        )}

        {currentTab === 'doctor' && (
          <DoctorAccessCard
            access={doctorAccess}
            onRevokeAccess={handleRevokeDoctorAccess}
            onGrantAccess={handleGrantDoctorAccess}
          />
        )}
      </main>

      {/* Screen 2: Report Detail Modal */}
      <ReportDetailModal
        report={selectedReportDetail}
        isOpen={!!selectedReportDetail}
        onClose={() => setSelectedReportDetail(null)}
        onOpenReceipt={(rep) => {
          setSelectedReceipt(rep.receipt);
        }}
        onShareWithDoctor={handleShareWithDoctor}
      />

      {/* Under-the-hood Cryptographic Receipt Drawer */}
      <ReceiptDrawer
        receipt={selectedReceipt}
        isOpen={!!selectedReceipt}
        onClose={() => setSelectedReceipt(null)}
      />

      <footer className="border-t border-rule py-6 text-center text-xs text-muted">
        <p>MediChain AI • India DPDP 2025/2026 Ready • Client-Side Encrypted (AES-256-GCM)</p>
      </footer>
    </div>
  );
}
