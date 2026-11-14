'use client';

import React, { useState } from 'react';
import { BiomarkerPoint } from '../types';
import { TrendingDown, Info } from 'lucide-react';

interface HeroTrajectoryProps {
  points: BiomarkerPoint[];
  onSelectPoint?: (point: BiomarkerPoint) => void;
}

export function HeroTrajectory({ points, onSelectPoint }: HeroTrajectoryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(points.length - 1);
  const current = points[selectedIdx] || points[points.length - 1];

  // SVG dimensions for the calm curve
  const width = 640;
  const height = 180;
  const paddingX = 48;
  const paddingY = 28;

  // Values span from 7.0 to 9.0 for clear scaling
  const minVal = 6.8;
  const maxVal = 9.0;

  const getX = (idx: number) => {
    if (points.length <= 1) return width / 2;
    return paddingX + (idx / (points.length - 1)) * (width - 2 * paddingX);
  };

  const getY = (val: number) => {
    return height - paddingY - ((val - minVal) / (maxVal - minVal)) * (height - 2 * paddingY);
  };

  // Generate smooth cubic bezier SVG path
  const pathD = points.reduce((acc, point, idx) => {
    const x = getX(idx);
    const y = getY(point.value);
    if (idx === 0) return `M ${x} ${y}`;
    const prevX = getX(idx - 1);
    const prevY = getY(points[idx - 1].value);
    const cpX1 = prevX + (x - prevX) / 2;
    const cpY1 = prevY;
    const cpX2 = prevX + (x - prevX) / 2;
    const cpY2 = y;
    return `${acc} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
  }, '');

  // Target healthy band (y coordinates for 7.0% and below)
  const targetY = getY(7.0);

  return (
    <section className="bg-surface rounded-2xl border border-rule p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
            Good morning, Asha.
          </h1>
          <p className="text-muted text-base mt-1.5 flex items-center gap-1.5">
            <span className="text-verdigris font-medium flex items-center gap-1">
              <TrendingDown className="w-4 h-4 inline" />
              Down 1.2%
            </span>
            <span>since baseline. Your glycemic trend is heading in the right direction.</span>
          </p>
        </div>

        <div className="flex sm:flex-col items-baseline sm:items-end gap-2 sm:gap-0">
          <div className="text-3xl sm:text-4xl font-bold tracking-tight text-ink tabular-nums">
            {current.value}
            <span className="text-lg font-normal text-muted ml-0.5">%</span>
          </div>
          <div className="text-xs text-muted tabular-nums">
            HbA1c • {current.displayDate}
          </div>
        </div>
      </div>

      {/* The calm SVG curve */}
      <div className="relative w-full overflow-hidden pt-2 pb-4">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          className="w-full h-auto overflow-visible select-none"
          aria-label="Longitudinal HbA1c trajectory chart showing descent from 8.6% to 7.4%"
        >
          {/* Target reference zone (< 7.0%) */}
          <rect
            x={paddingX - 12}
            y={targetY}
            width={width - 2 * paddingX + 24}
            height={height - paddingY - targetY + 8}
            fill="var(--color-sage)"
            fillOpacity="0.45"
            rx="6"
          />
          <text
            x={paddingX}
            y={targetY + 18}
            className="text-[11px] fill-verdigris font-medium select-none"
          >
            Target Zone (&lt; 7.0% for managed T2D)
          </text>

          {/* Baseline reference guideline */}
          <line
            x1={paddingX}
            y1={targetY}
            x2={width - paddingX}
            y2={targetY}
            stroke="var(--color-verdigris)"
            strokeWidth="1"
            strokeDasharray="4 4"
            strokeOpacity="0.4"
          />

          {/* Smooth trend curve */}
          <path
            d={pathD}
            fill="none"
            stroke="var(--color-verdigris)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Data points */}
          {points.map((point, idx) => {
            const x = getX(idx);
            const y = getY(point.value);
            const isSelected = selectedIdx === idx;

            return (
              <g
                key={point.date}
                role="button"
                tabIndex={0}
                aria-label={`Select ${point.displayDate} lab result: HbA1c ${point.value}%`}
                className="cursor-pointer group focus-visible:outline-2 focus-visible:outline-verdigris"
                onClick={() => {
                  setSelectedIdx(idx);
                  if (onSelectPoint) onSelectPoint(point);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedIdx(idx);
                    if (onSelectPoint) onSelectPoint(point);
                  }
                }}
              >
                {/* 44px equivalent hit area */}
                <circle cx={x} cy={y} r="22" fill="transparent" />

                {/* Halo for selected point */}
                {isSelected && (
                  <circle
                    cx={x}
                    cy={y}
                    r="10"
                    fill="var(--color-verdigris)"
                    fillOpacity="0.25"
                  />
                )}

                {/* Point dot */}
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill="var(--color-surface)"
                  stroke="var(--color-verdigris)"
                  strokeWidth="2.5"
                  className="transition-transform group-hover:scale-125"
                />

                {/* Value label above point */}
                <text
                  x={x}
                  y={y - 12}
                  textAnchor="middle"
                  className="text-xs font-semibold fill-ink tabular-nums select-none"
                >
                  {point.value}%
                </text>

                {/* Date label below */}
                <text
                  x={x}
                  y={height - 4}
                  textAnchor="middle"
                  className={`text-[11px] select-none tabular-nums ${
                    isSelected ? 'fill-ink font-semibold' : 'fill-muted'
                  }`}
                >
                  {point.displayDate}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="pt-3 border-t border-rule/70 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-muted gap-2">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-muted flex-shrink-0" />
          <span>Verified cross-provider synthesis: Dr. Lal PathLabs, Apollo Diagnostics & City Diagnostics</span>
        </div>
        <div className="tabular-nums">
          Current: <strong className="text-ink font-medium">{current.lab}</strong>
        </div>
      </div>
    </section>
  );
}
