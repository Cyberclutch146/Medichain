'use client';

import React, { useState } from 'react';
import { DoctorAccess } from '../types';
import { ShieldCheck, ShieldAlert, Clock, CheckCircle2, UserCheck, Lock } from 'lucide-react';

interface DoctorAccessCardProps {
  access: DoctorAccess;
  onRevokeAccess: () => void;
  onGrantAccess: () => void;
}

export function DoctorAccessCard({
  access,
  onRevokeAccess,
  onGrantAccess,
}: DoctorAccessCardProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <section className="bg-surface rounded-2xl border border-rule p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-rule">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-ink">
            Doctor Sharing &amp; Consent
          </h2>
          <p className="text-sm text-muted mt-0.5">
            You hold the decryption keys. You can grant or revoke clinician access instantly.
          </p>
        </div>

        <div>
          {access.active ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sage/50 text-verdigris border border-verdigris/20">
              <span className="w-2 h-2 rounded-full bg-verdigris" />
              <span>Active Consent</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-paper text-muted border border-rule">
              <span className="w-2 h-2 rounded-full bg-muted" />
              <span>Sharing Paused</span>
            </div>
          )}
        </div>
      </div>

      {access.active ? (
        <div className="py-6 border-b border-rule">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-paper border border-rule flex items-center justify-center text-verdigris flex-shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">{access.doctorName}</h3>
                <p className="text-xs text-muted mt-0.5">{access.title}</p>
                <p className="text-xs text-muted">{access.institution}</p>
                <div className="flex items-center gap-1 text-xs text-verdigris font-medium mt-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Access expires in {access.daysRemaining} days ({access.expiresAt})</span>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col justify-end">
              {showConfirm ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onRevokeAccess();
                      setShowConfirm(false);
                    }}
                    className="min-h-[44px] px-4 py-2 bg-vermilion text-surface rounded-lg text-xs font-semibold hover:bg-vermilion/90 transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-vermilion"
                  >
                    Confirm Revoke
                  </button>
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="min-h-[44px] px-4 py-2 border border-rule rounded-lg text-xs text-muted hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-verdigris"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowConfirm(true)}
                  className="min-h-[44px] px-4 py-2 border border-vermilion/30 text-vermilion hover:bg-vermilion/10 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-vermilion"
                >
                  <ShieldAlert className="w-4 h-4" />
                  <span>Revoke Access</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="py-6 border-b border-rule">
          <div className="p-4 rounded-xl bg-paper border border-rule flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-muted flex-shrink-0" />
              <div className="text-xs">
                <strong className="text-ink font-semibold block">Clinician sharing is currently paused.</strong>
                Your diagnostic panels remain private in your vault until you choose to reconnect Dr. Rao.
              </div>
            </div>
            <button
              onClick={onGrantAccess}
              className="min-h-[44px] px-4 py-2 bg-verdigris text-surface rounded-lg text-xs font-semibold hover:bg-verdigris-hover transition-colors whitespace-nowrap self-end sm:self-center shadow-xs focus-visible:outline-2 focus-visible:outline-verdigris"
            >
              Grant 7-Day Access
            </button>
          </div>
        </div>
      )}

      {/* Human-Readable Access Timeline */}
      <div className="pt-6">
        <h3 className="text-sm font-semibold text-ink mb-4">
          Decryption &amp; Audit Timeline
        </h3>
        <div className="space-y-4">
          {access.auditLog.map((log, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs">
              <div className="w-2 h-2 rounded-full bg-verdigris mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="font-medium text-ink block">{log.action}</span>
                <span className="text-muted text-[11px] tabular-nums">
                  By {log.actor} • {log.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
