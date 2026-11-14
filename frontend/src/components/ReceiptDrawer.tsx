'use client';

import React, { useEffect } from 'react';
import { CryptographicReceipt } from '../types';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

interface ReceiptDrawerProps {
  receipt: CryptographicReceipt | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ReceiptDrawer({ receipt, isOpen, onClose }: ReceiptDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !receipt) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="receipt-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/30 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface border-l border-rule shadow-xl flex flex-col justify-between">
          <div className="p-6 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-rule">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sage/60 flex items-center justify-center text-verdigris">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="receipt-drawer-title" className="text-base font-semibold text-ink">
                    Cryptographic Receipt
                  </h3>
                  <p className="text-xs text-muted">Public EVM Proof of Authenticity</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 -mr-2 rounded-lg text-muted hover:text-ink hover:bg-paper transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-verdigris"
                aria-label="Close receipt drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Browser Verification Badge */}
            <div className="my-5 p-3.5 rounded-xl bg-sage/30 border border-verdigris/20 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-verdigris flex-shrink-0 mt-0.5" />
              <div className="text-xs text-ink">
                <strong className="font-semibold text-verdigris block">Verified Mathematically in Browser</strong>
                The local document hash and salt match the on-chain commitment registered on Polygon Amoy. No server was trusted for this verification.
              </div>
            </div>

            {/* Technical Parameters */}
            <div className="space-y-4 text-xs">
              <div>
                <label className="text-muted block mb-1">Local Document Hash (SHA-256)</label>
                <div className="p-2.5 rounded-lg bg-paper font-mono text-[11px] text-ink break-all border border-rule select-all">
                  {receipt.fileHashSha256}
                </div>
              </div>

              <div>
                <label className="text-muted block mb-1">Salted Commitment (Keccak-256)</label>
                <div className="p-2.5 rounded-lg bg-paper font-mono text-[11px] text-ink break-all border border-rule select-all">
                  {receipt.saltedCommitmentKeccak256}
                </div>
              </div>

              <div>
                <label className="text-muted block mb-1">Random Salt (Kept in Patient Vault)</label>
                <div className="p-2.5 rounded-lg bg-paper font-mono text-[11px] text-ink break-all border border-rule select-all">
                  {receipt.saltHex}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-paper border border-rule">
                  <span className="text-muted block mb-0.5 text-[11px]">Network</span>
                  <span className="font-medium text-ink">{receipt.networkName}</span>
                </div>
                <div className="p-3 rounded-lg bg-paper border border-rule">
                  <span className="text-muted block mb-0.5 text-[11px]">Block Number</span>
                  <span className="font-medium text-ink tabular-nums">{receipt.blockNumber.toLocaleString()}</span>
                </div>
              </div>

              <div>
                <label className="text-muted block mb-1">Smart Contract Address</label>
                <div className="p-2.5 rounded-lg bg-paper font-mono text-[11px] text-ink break-all border border-rule select-all">
                  {receipt.smartContractAddress}
                </div>
              </div>

              <div>
                <label className="text-muted block mb-1">Transaction Anchor</label>
                <a
                  href={`https://amoy.polygonscan.com/tx/${receipt.transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-paper font-mono text-[11px] text-verdigris hover:text-verdigris-hover flex items-center justify-between border border-rule transition-colors group focus-visible:outline-2 focus-visible:outline-verdigris"
                >
                  <span className="truncate mr-2">{receipt.transactionHash}</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-muted group-hover:text-verdigris" />
                </a>
              </div>

              <div className="pt-2 text-[11px] text-muted flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-verdigris" />
                <span>Zero patient identifying information (PHI) is stored on the ledger.</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-rule bg-paper/50 flex justify-end">
            <button
              onClick={onClose}
              className="min-h-[44px] px-5 py-2.5 rounded-lg bg-ink text-surface text-xs font-medium hover:bg-ink/90 transition-colors focus-visible:outline-2 focus-visible:outline-verdigris"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
