'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentTab: 'overview' | 'reports' | 'doctor';
  onSelectTab: (tab: 'overview' | 'reports' | 'doctor') => void;
  reportCount: number;
}

export function Header({ currentTab, onSelectTab, reportCount }: HeaderProps) {
  return (
    <header className="border-b border-rule bg-surface/90 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-verdigris flex items-center justify-center text-surface font-semibold text-sm">
            M
          </div>
          <div>
            <span className="font-semibold text-ink tracking-tight text-base">MediChain</span>
            <span className="text-muted text-xs ml-2 hidden sm:inline">Asha Sharma</span>
          </div>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => onSelectTab('overview')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              currentTab === 'overview'
                ? 'bg-paper text-ink font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => onSelectTab('reports')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
              currentTab === 'reports'
                ? 'bg-paper text-ink font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            <span>Reports</span>
            <span className="text-xs px-1.5 py-0.5 rounded-full bg-rule text-muted tabular-nums">
              {reportCount}
            </span>
          </button>
          <button
            onClick={() => onSelectTab('doctor')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              currentTab === 'doctor'
                ? 'bg-paper text-ink font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            Doctor Access
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-1.5 text-xs text-verdigris font-medium bg-sage/50 px-2.5 py-1 rounded-full border border-verdigris/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Vault Encrypted</span>
        </div>
      </div>
    </header>
  );
}
