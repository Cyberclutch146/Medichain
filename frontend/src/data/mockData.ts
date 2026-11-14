import { BiomarkerPoint, LabReport, DoctorAccess } from '../types';

export const PATIENT_INFO = {
  name: "Asha Sharma",
  age: 44,
  condition: "Type-2 Diabetes Management",
  abhaId: "91-4820-1928-3019",
};

export const HBA1C_TRAJECTORY: BiomarkerPoint[] = [
  {
    date: "2025-10-22",
    displayDate: "Oct 2025",
    value: 8.6,
    unit: "%",
    lab: "Dr. Lal PathLabs",
    status: "high",
  },
  {
    date: "2026-03-18",
    displayDate: "Mar 2026",
    value: 8.0,
    unit: "%",
    lab: "Apollo Diagnostics",
    status: "improving",
  },
  {
    date: "2026-09-04",
    displayDate: "Sep 2026",
    value: 7.4,
    unit: "%",
    lab: "City Diagnostics",
    status: "improving",
  },
];

export const MOCK_REPORTS: LabReport[] = [
  {
    id: "rep-001",
    title: "Comprehensive Glycemic & Renal Panel",
    date: "2026-09-04",
    displayDate: "4 Sep 2026",
    labName: "City Diagnostics, New Delhi",
    summary: "Your glycemic markers have improved significantly over the past 6 months. Serum creatinine is slightly elevated at 1.3 mg/dL, which Dr. Rao will review during your consultation.",
    verifiedAuthentic: true,
    keyBiomarkers: [
      { name: "HbA1c", value: "7.4", unit: "%", referenceRange: "< 7.0 for T2D", status: "Normal" },
      { name: "Fasting Blood Sugar", value: "138", unit: "mg/dL", referenceRange: "70 – 99", status: "High" },
      { name: "Serum Creatinine", value: "1.3", unit: "mg/dL", referenceRange: "0.6 – 1.1", status: "Doctor Review" },
      { name: "eGFR", value: "78", unit: "mL/min/1.73m²", referenceRange: "> 60", status: "Normal" },
    ],
    receipt: {
      reportId: "rep-001",
      fileHashSha256: "0x8f4b23a9d701e8c45f201b5a932d1e0f8c7e6b5a4d3c2b1a0f9e8d7c6b5a4d3c",
      saltHex: "0xa81c9b2075f11e038db4f434771be52e1289cf4901b8e49320d7ca6193b2a8e7",
      saltedCommitmentKeccak256: "0x43a890e54b67fa918b958c279a0d8e12f345b678c9012d34e567f89012a34b56",
      smartContractAddress: "0x892a0149182374B09182C0E83210459B98A0A71E",
      transactionHash: "0x5d92a174c8b3e512f4901a88b432e189a071c324567890123456789abcdef012",
      blockNumber: 14892104,
      blockTimestamp: "04 Sep 2026, 14:45:12 UTC",
      labSignerAddress: "0x2B1A809C6F71A3482C7E01D92B3C9A8149A0E324",
      networkName: "Polygon Amoy L2 Testnet",
      verifiedInBrowser: true,
    },
  },
  {
    id: "rep-002",
    title: "Fasting Metabolic & Lipid Panel",
    date: "2026-03-18",
    displayDate: "18 Mar 2026",
    labName: "Apollo Diagnostics",
    summary: "Lipid profile shows stable triglycerides and healthy HDL. Fasting glucose down 14% compared to baseline evaluation.",
    verifiedAuthentic: true,
    keyBiomarkers: [
      { name: "HbA1c", value: "8.0", unit: "%", referenceRange: "< 7.0 for T2D", status: "High" },
      { name: "Total Cholesterol", value: "182", unit: "mg/dL", referenceRange: "< 200", status: "Normal" },
      { name: "Triglycerides", value: "148", unit: "mg/dL", referenceRange: "< 150", status: "Normal" },
      { name: "Fasting Glucose", value: "152", unit: "mg/dL", referenceRange: "70 – 99", status: "High" },
    ],
    receipt: {
      reportId: "rep-002",
      fileHashSha256: "0x3c9e12a4f567b890c123d45e67f89012a34b5678c9012d34e567f89012a34b56",
      saltHex: "0x77f2b10a9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f",
      saltedCommitmentKeccak256: "0x12d34e567f89012a34b5678c9012d34e567f89012a34b5678c9012d34e567f89",
      smartContractAddress: "0x892a0149182374B09182C0E83210459B98A0A71E",
      transactionHash: "0x98a7b6c5d4e3f2109876543210fedcba9876543210abcdef0123456789abcdef",
      blockNumber: 13421908,
      blockTimestamp: "18 Mar 2026, 11:20:04 UTC",
      labSignerAddress: "0x8F91A23C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A",
      networkName: "Polygon Amoy L2 Testnet",
      verifiedInBrowser: true,
    },
  },
  {
    id: "rep-003",
    title: "Baseline Diabetic Health Check",
    date: "2025-10-22",
    displayDate: "22 Oct 2025",
    labName: "Dr. Lal PathLabs",
    summary: "Initial baseline assessment following clinical consultation. Elevated glycemic markers requiring dietary adjustment and metformin regimen.",
    verifiedAuthentic: true,
    keyBiomarkers: [
      { name: "HbA1c", value: "8.6", unit: "%", referenceRange: "< 7.0 for T2D", status: "High" },
      { name: "Fasting Blood Sugar", value: "174", unit: "mg/dL", referenceRange: "70 – 99", status: "High" },
      { name: "Post-Prandial Sugar", value: "230", unit: "mg/dL", referenceRange: "< 140", status: "High" },
      { name: "Serum Creatinine", value: "1.1", unit: "mg/dL", referenceRange: "0.6 – 1.1", status: "Normal" },
    ],
    receipt: {
      reportId: "rep-003",
      fileHashSha256: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
      saltHex: "0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e",
      saltedCommitmentKeccak256: "0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b",
      smartContractAddress: "0x892a0149182374B09182C0E83210459B98A0A71E",
      transactionHash: "0x4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c",
      blockNumber: 11980345,
      blockTimestamp: "22 Oct 2025, 09:34:20 UTC",
      labSignerAddress: "0x5C6D7E8F9A0B1C2D3E4F5A6B7C8D9E0F1A2B3C4D",
      networkName: "Polygon Amoy L2 Testnet",
      verifiedInBrowser: true,
    },
  },
];

export const INITIAL_DOCTOR_ACCESS: DoctorAccess = {
  doctorName: "Dr. Arvind Rao, MD",
  title: "Senior Consultant Endocrinologist",
  institution: "Fortis Memorial Research Institute",
  specialty: "Diabetes & Metabolic Disorders",
  expiresAt: "20 Sep 2026, 11:59 PM",
  daysRemaining: 6,
  active: true,
  auditLog: [
    {
      timestamp: "Today at 9:12 AM",
      action: "Decrypted and reviewed September Glycemic Panel",
      actor: "Dr. Arvind Rao",
    },
    {
      timestamp: "4 Sep 2026, 2:45 PM",
      action: "Anchored cryptographic commitment on Polygon Amoy",
      actor: "City Diagnostics (Signed)",
    },
    {
      timestamp: "4 Sep 2026, 2:40 PM",
      action: "Encrypted with AES-256-GCM envelope key",
      actor: "Patient Vault (Asha Sharma)",
    },
  ],
};
