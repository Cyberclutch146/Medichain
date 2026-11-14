export interface BiomarkerPoint {
  date: string;
  displayDate: string;
  value: number;
  unit: string;
  lab: string;
  status: 'normal' | 'improving' | 'high' | 'review';
}

export interface LabResultItem {
  name: string;
  value: string;
  unit: string;
  referenceRange: string;
  status: 'Normal' | 'High' | 'Doctor Review';
}

export interface CryptographicReceipt {
  reportId: string;
  fileHashSha256: string;
  saltHex: string;
  saltedCommitmentKeccak256: string;
  smartContractAddress: string;
  transactionHash: string;
  blockNumber: number;
  blockTimestamp: string;
  labSignerAddress: string;
  networkName: string;
  verifiedInBrowser: boolean;
}

export interface LabReport {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  labName: string;
  summary: string;
  keyBiomarkers: LabResultItem[];
  verifiedAuthentic: boolean;
  receipt: CryptographicReceipt;
}

export interface DoctorAccess {
  doctorName: string;
  title: string;
  institution: string;
  specialty: string;
  expiresAt: string;
  daysRemaining: number;
  active: boolean;
  auditLog: {
    timestamp: string;
    action: string;
    actor: string;
  }[];
}
