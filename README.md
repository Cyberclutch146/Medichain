# MediChain AI

> **A Decentralised, AI-Powered Healthcare Records and Intelligence Ecosystem**  
> *Provably unaltered medical records, transparent patient-controlled consent, and clinician-ready longitudinal intelligence.*

[![Status](https://img.shields.io/badge/Status-Pre--Development%20Blueprint-blue?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#)
[![DPDP Ready](https://img.shields.io/badge/DPDP%20India-2025%2F2026%20Compliant-emerald?style=flat-square)](#)
[![ABDM Target](https://img.shields.io/badge/ABDM-M1%20%26%20M3%20Aligned-orange?style=flat-square)](#)
[![Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20FastAPI%20%7C%20Supabase%20%7C%20Polygon-purple?style=flat-square)](#)

---

## 📑 Table of Contents

1. [Executive Overview & Vision](#1-executive-overview--vision)
2. [Market Context & The Indian Digital Health Landscape](#2-market-context--the-indian-digital-health-landscape)
3. [The Product Wedge (What MediChain AI Is & Isn't)](#3-the-product-wedge-what-medichain-ai-is--isnt)
4. [System Architecture & Core Principles](#4-system-architecture--core-principles)
5. [The Three Pillars](#5-the-three-pillars)
   - [5.1 Web2 Application & Backend](#51-web2-application--backend)
   - [5.2 AI/ML Document Intelligence & RAG](#52-aiml-document-intelligence--rag)
   - [5.3 Web3 Cryptographic Trust & Verification](#53-web3-cryptographic-trust--verification)
6. [Personas & End-to-End User Journeys](#6-personas--end-to-end-user-journeys)
7. [UI/UX Design Specification & Visual Identity](#7-uiux-design-specification--visual-identity)
8. [Database Schema & Data Models](#8-database-schema--data-models)
9. [REST API Specification](#9-rest-api-specification)
10. [Security, Privacy & Regulatory Compliance (DPDP & ABDM)](#10-security-privacy--regulatory-compliance-dpdp--abdm)
11. [Architectural Decision Records (ADRs)](#11-architectural-decision-records-adrs)
12. [Repository & Project Directory Structure](#12-repository--project-directory-structure)
13. [Getting Started & Local Development Setup](#13-getting-started--local-development-setup)
14. [Testing & Verification Strategy](#14-testing--verification-strategy)
15. [Implementation Roadmaps](#15-implementation-roadmaps)
    - [Roadmap A: 36-Hour Hackathon MVP](#roadmap-a-36-hour-hackathon-mvp)
    - [Roadmap B: 9–15 Month Production Roadmap](#roadmap-b-915-month-production-roadmap)
16. [Cost Analysis & Infrastructure Economics](#16-cost-analysis--infrastructure-economics)
17. [Guidelines for AI Coding Agents (AGENTS.md)](#17-guidelines-for-ai-coding-agents-agentsmd)
18. [Disclaimers & Source Notes](#18-disclaimers--source-notes)

---

## 1. Executive Overview & Vision

Healthcare documentation today is deeply fragmented across paper binders, diagnostic portals, WhatsApp attachments, and disconnected electronic medical record (EMR) silos. Patients cannot easily trace chronological biomarker trends or understand out-of-range clinical parameters, clinicians are forced to scan through unformatted PDF stacks within 8-minute consult windows, and there is zero cryptographic certainty that an uploaded diagnostic PDF has not been altered or backdated.

**MediChain AI** solves this through a unified, patient-centric ecosystem:
- **Unified Patient Vault:** Longitudinal storage where diagnostic reports and prescriptions are decrypted on-demand under strict patient consent.
- **AI-Powered Clinical Extraction & Synthesis:** OCR and Vision-Language models extract lab parameters into validated, standardized FHIR-compatible observation vectors, charting historical deltas and generating doctor-ready one-page summaries.
- **Cryptographic Document Anchoring:** SHA-256 salted commitments anchored on public EVM blockchains establish non-repudiation and tamper evidence without violating privacy laws or exposing patient health information (PHI).
- **Radical Access Transparency:** Append-only, cryptographic hash-chained audit trails giving patients real-time, plain-language visibility into exactly who viewed what file, for what purpose, and under which consent window.

```mermaid
flowchart LR
    A["Patient / Lab\n(Uploads Document)"] --> B["Client-Side SHA-256\n+ AES-256-GCM Encryption"]
    B --> C["FastAPI Policy Boundary\n(Authorization + Audit Log)"]
    C --> D["AI Document Pipeline\n(Extraction, Plausibility & Validation)"]
    D --> E["Patient Review & Confirmation\n(Human-in-the-Loop)"]
    E --> F["Blockchain Anchor\n(Salted Keccak256 Commitment)"]
    E --> G["Longitudinal Analytics\n(Biomarker Trends & Deltas)"]
    F --> H["Independent Verifier\n(Tamper Detection via viem)"]
    G --> I["Clinician One-Pager\n(Source-Linked Trends)"]
```

---

## 2. Market Context & The Indian Digital Health Landscape

### 2.1 The Ayushman Bharat Digital Mission (ABDM) Reality
India's digital health infrastructure has achieved unprecedented scale:
- **96+ Crore ABHA Numbers** generated as of late 2026.
- **100+ Crore Health Records** linked across hospitals, diagnostic labs, and state registries.
- **5.47+ Lakh Registered Healthcare Facilities** on the Health Facility Registry (HFR).
- **10.5+ Lakh Registered Healthcare Professionals** on the Healthcare Professionals Registry (HPR).
- **Aarogya Setu 2.0:** Launched on 29 June 2026 by the National Health Authority (NHA) as a public Personal Health Record (PHR) featuring ABHA integration, AI health summaries, and Google Gemma 4-powered lab digitization via the open Medical Data Toolkit.

### 2.2 Why MediChain AI Does Not Compete With ABDM
ABDM establishes that **health records remain federated with the creator** (hospital/lab) and move strictly through time-bound, patient-revocable consent artifacts. Building another simple "PDF locker + AI summary" is redundant—it is already state-backed and free.

Instead, MediChain AI positions itself as the **interoperable trust and clinician synthesis layer**:
1. **ABDM M1 Alignment:** Seamless ABHA authentication and profile linking.
2. **ABDM M3 (HIU) Alignment:** Consuming consent-based health data transfers and generating structured longitudinal analytics that legacy EMRs cannot compile.
3. **Closing the Authenticity Gap:** While standard PHRs accept any user-uploaded PDF blindly, MediChain AI provides cryptographic proof of integrity and origin.

---

## 3. The Product Wedge (What MediChain AI Is & Isn't)

### 3.1 The Wedge
The strategic entry point is **Verifiable Chronic Condition Records & Clinician Workflow**:
- Targeting chronic-illness patients (diabetes, renal, cardiac, thyroid) who accumulate multi-year lab reports across disparate diagnostic providers.
- Giving consulting physicians a **1-page synthesized trend sheet** before the consultation begins, with every historical data point clickable to its original verified PDF bounding box.

### 3.2 Feature Matrix vs Competitors

| Dimension | Aarogya Setu 2.0 | Eka Care | HealthPlix / Practo | MediChain AI |
|:---|:---:|:---:|:---:|:---:|
| **Patient PHR** | Yes (Free) | Yes (Free) | EMR / Booking Silo | **Yes (Free, Patient-Owned)** |
| **ABDM Alignment** | Native Gov Platform | Approved Private PHR | Doctor EMR Focused | **Phase 2 (M1 Auth, M3 HIU)** |
| **AI Extraction** | Gemma 4 + Toolkit | Proprietary API | Basic Notes / EMR | **PaddleOCR / VLM + Plausibility Bounds** |
| **Extraction Confirm Gate** | Undocumented | Partial | N/A | **Mandatory Human-in-the-Loop** |
| **Cryptographic Tamper-Evidence** | None | None | None | **Core: Salted Blockchain Commitments** |
| **Signed Issuer Non-Repudiation** | None | None | None | **Core: EIP-712 Lab/Doctor Signatures** |
| **Patient-Facing Access Log** | Basic Consent State | Undocumented | None | **Append-Only Hash Chained Log** |
| **Clinician 1-Page Synthesis** | General Insights | Doctor EMR View | Doctor Prescription View | **Cross-Provider Longitudinal Delta Sheet** |
| **Self-Hostable Privacy Pipeline** | Partial (Open Toolkit) | Closed SaaS | Closed SaaS | **Fully Decoupled Open-Source Pipeline** |

### 3.3 Explicit Non-Goals
- ❌ **No Automated Medical Diagnosis:** MediChain AI provides structured descriptive intelligence, never diagnostic verdicts or drug dosing instructions.
- ❌ **No Health Data on Public Blockchains:** Zero PHI, zero ciphertext, zero patient identities ever touch a blockchain transaction or event log.
- ❌ **No Unverified Data Overwrites:** Extracted parameters are never committed to permanent analytical storage without explicit human confirmation.

---

## 4. System Architecture & Core Principles

```mermaid
graph TB
    subgraph CLIENT_TIER["Client Tier (Web & Mobile)"]
        PA["Patient Client\n(Next.js App Router)"]
        DA["Doctor Workspace\n(Next.js App Router)"]
        VO["Browser Verifier\n(Web Crypto SHA-256 + viem)"]
    end

    subgraph POLICY_BOUNDARY["Application Tier (Single Trust Boundary)"]
        API["FastAPI Core Service\n(Routing, Pydantic v2, CORS, Rate Limiting)"]
        POL["Policy Engine (policy.py)\ncan_read() / can_write() Authorization"]
        AUD["Audit Logger (audit.py)\nCryptographic Append-Only Hash Chain"]
        CRY["Envelope Crypto Engine (crypto.py)\nAES-256-GCM + Per-Patient KEK"]
        REL["Blockchain Relayer Service\n(Gas-Capped EIP-1559 Relayer)"]
    end

    subgraph WORKERS["Asynchronous AI & Ingestion Workers"]
        PDF["PDF Parser (pdfplumber)"]
        OCR["PaddleOCR / Vision-LLM Fallback"]
        VAL["Validation Engine\n(LOINC, Plausibility Bounds, Whitelist)"]
        RAG["RAG Service\n(SQL Observation Tool + pgvector Semantic Tool)"]
    end

    subgraph PERSISTENCE["Data & Infrastructure Tier"]
        SUPA_AUTH["Supabase Auth (JWT)"]
        SUPA_DB["PostgreSQL 16 + pgvector"]
        SUPA_STORE["Encrypted Object Storage (Private Bucket)"]
        CHAIN["EVM Testnet (Polygon Amoy)\nDocumentRegistry.sol"]
    end

    PA -->|Bearer JWT| API
    DA -->|Bearer JWT| API
    API --> POL
    POL --> AUD
    POL --> CRY
    CRY --> SUPA_STORE
    API --> SUPA_DB
    API --> SUPA_AUTH
    API --> WORKERS
    API --> REL
    REL -->|register(commitment)| CHAIN
    VO -->|Direct RPC Read (No API Trust)| CHAIN
```

### Architectural Tenets
1. **Single Policy Enforcement Point:** Every file read, observation query, or extraction result must evaluate `policy.py:can_read(actor, document)` before data access is granted.
2. **Envelope Encryption by Default:** Storage leaks cannot reveal health records. Files are encrypted with random per-document keys (DEK) wrapped under patient-level key encryption keys (KEK).
3. **Decoupled Verification Path:** The verifier in the browser reads the EVM blockchain contract directly over public RPCs; it never trusts the MediChain backend to validate document integrity.
4. **Append-Only Auditability:** Read access events are hash-chained (`event_hash = SHA256(prev_hash || canonical_event)`) and periodically anchored to the blockchain via Merkle roots.

---

## 5. The Three Pillars

```mermaid
flowchart TD
    subgraph P1["Pillar 1: Web2 Foundation"]
        W1["Next.js App Router"]
        W2["FastAPI Async Service"]
        W3["Supabase Auth + Postgres + Storage"]
        W4["Row Level Security (RLS)"]
    end

    subgraph P2["Pillar 2: AI/ML Intelligence"]
        A1["Dual-Mode Extraction (Digital vs Scan)"]
        A2["JSON Schema Structuring"]
        A3["Clinical Bounds & LOINC Validation"]
        A4["Human-in-the-Loop Confirmation"]
        A5["Grounded Dual-Engine RAG"]
    end

    subgraph P3["Pillar 3: Web3 Cryptographic Trust"]
        B1["DocumentRegistry.sol Contract"]
        B2["Salted Commitments (Keccak256)"]
        B3["EIP-712 Issuer Signatures"]
        B4["Browser-Side Independent Verifier"]
        B5["Audit Log Merkle Anchoring"]
    end

    P1 --- P2 --- P3
```

### 5.1 Web2 Application & Backend
- **Frontend Framework:** Next.js (TypeScript, React 19, Tailwind CSS, shadcn/ui). Server components handle layout and initial data waterfalls; client components manage interactive canvas previews, charts, and Web Crypto APIs.
- **Backend Framework:** Python 3.12+ FastAPI with async SQLAlchemy 2.0 and Pydantic v2. Provides high-throughput async processing and native bindings to Python medical and ML libraries.
- **Storage & Relational Tier:** Supabase managed PostgreSQL equipped with `pgvector` for embedding search and private encrypted buckets for ciphertext storage.

### 5.2 AI/ML Document Intelligence & RAG
The extraction engine operates on a fail-safe 10-stage processing pipeline:

```mermaid
flowchart LR
    S1["1. File Ingestion\n& AES-256 Encrypt"] --> S2{"2. Digital PDF\nText Layer?"}
    S2 -- Yes --> S4["4. Structured Schema\nPrompting (LLM)"]
    S2 -- No --> S3["3. PaddleOCR v6 /\nVision Model (VLM)"]
    S3 --> S4
    S4 --> S5["5. Plausibility Bounds\n& LOINC Mapping"]
    S5 --> S6{"6. Flagged Values or\nConfidence < 0.85?"}
    S6 -- Yes --> S7["7. Mandatory Human\nConfirmation UI"]
    S6 -- No --> S8["8. Persist Observations\n+ FHIR Export"]
    S7 --> S8
    S8 --> S9["9. Longitudinal Trends\n& Plain Summary"]
    S8 --> S10["10. Register Salted Hash\non Blockchain"]
```

#### Dual-Engine Grounded RAG Assistant
1. **Deterministic Structured Engine (SQL):** Quantitative questions (e.g., *"How has my HbA1c shifted over the last 9 months?"*) execute deterministic SQL queries over verified records in the `observations` table.
2. **Semantic Text Engine (pgvector):** Unstructured clinical notes, sonography impressions, and discharge summaries are embedded into 384-dimensional or 768-dimensional vectors scoped strictly by `patient_id` and active `consent_id`.
3. **Guardrails & Safety Defenses:** LLM system prompts strictly enforce refusal of medical advice, dosing modifications, or cross-patient inference. Untrusted document strings are isolated using strict delimiter fencing.

### 5.3 Web3 Cryptographic Trust & Verification
#### The On-Chain / Off-Chain Data Boundary

| Component | On-Chain Data | Off-Chain Data | Rationale |
|:---|:---:|:---:|:---|
| **Medical Report File** | ❌ No | Encrypted Object Storage | Storage costs, patient privacy, and DPDP right to erasure |
| **Patient Identification** | ❌ No | PostgreSQL (Encrypted) | Strict DPDP compliance |
| **Document Fingerprint** | `bytes32 commitment` | `salt` + original SHA-256 | Rainbow-table resistance & salted privacy |
| **Registrar Address & Block Time** | `address`, `uint64` | Mirrored in PostgreSQL | Immutable time-stamp proof independent of operator |
| **Issuer Identity (Lab/Doctor)** | Issuer Ethereum Address | Verified Institution Registry | Origin verification via digital signatures |
| **Consents & Permissions** | ❌ No | PostgreSQL Policy Layer | Dynamic revocation; on-chain permissioning is bypassable |
| **Audit Log Integrity** | Periodic Merkle Root | Append-only event rows | Detects operator tampering with historical access logs |

#### Smart Contract Reference Implementation
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title DocumentRegistry
 * @dev Anchors salted document commitments and audit Merkle roots for MediChain AI.
 */
contract DocumentRegistry is Ownable {
    struct Entry {
        address registrar;
        uint64 timestamp;
    }

    // Mapping: commitment => Entry (registrar, timestamp)
    mapping(bytes32 => Entry) public entries;
    
    // Mapping: authorized lab/doctor addresses
    mapping(address => bool) public issuers;

    event Registered(bytes32 indexed commitment, address indexed registrar, uint64 ts);
    event RootAnchored(bytes32 indexed root, uint64 ts);
    event IssuerStatusChanged(address indexed issuer, bool status);

    constructor() Ownable(msg.sender) {}

    function setIssuer(address issuer, bool status) external onlyOwner {
        issuers[issuer] = status;
        emit IssuerStatusChanged(issuer, status);
    }

    function register(bytes32 commitment) external {
        require(entries[commitment].timestamp == 0, "Document commitment already registered");
        require(commitment != bytes32(0), "Invalid null commitment");
        
        entries[commitment] = Entry(msg.sender, uint64(block.timestamp));
        emit Registered(commitment, msg.sender, uint64(block.timestamp));
    }

    function anchorRoot(bytes32 root) external onlyOwner {
        emit RootAnchored(root, uint64(block.timestamp));
    }

    function verify(bytes32 commitment) external view returns (bool exists, address registrar, uint64 timestamp) {
        Entry memory entry = entries[commitment];
        return (entry.timestamp != 0, entry.registrar, entry.timestamp);
    }
}
```

---

## 6. Personas & End-to-End User Journeys

### 6.1 Core Personas

```mermaid
classDiagram
    class Patient {
        +UUID id
        +String ABHA_ID
        +String FullName
        +uploadDocument()
        +confirmExtraction()
        +grantConsent()
        +revokeConsent()
        +viewAccessLog()
    }
    class Doctor {
        +UUID id
        +String HPR_ID
        +String MedicalCouncilReg
        +viewPatientSummary()
        +verifyDocumentIntegrity()
        +issuePrescription()
    }
    class DiagnosticLab {
        +UUID id
        +String NABL_License
        +uploadReport()
        +signEIP712Report()
        +anchorCommitment()
    }
    class PlatformAdmin {
        +UUID id
        +verifyInstitution()
        +monitorAnomalies()
        +executeCryptoShred()
    }
```

### 6.2 Key Operational Workflows

#### Patient Document Ingestion & Verification
1. **Upload:** Asha uploads a 3-page lipid profile PDF.
2. **Local Digest & Stream:** Client generates SHA-256 hash. Backend receives stream, verifies digest, generates 32-byte cryptographically secure random salt, encrypts the file with AES-256-GCM, and persists ciphertext to Supabase Storage.
3. **Intelligent Ingestion:** Backend extracts parameters (Total Cholesterol, Triglycerides, HDL, LDL). The validation engine flags LDL (178 mg/dL) as elevated based on lab reference bounds.
4. **Human Confirmation:** Asha reviews the parameters on a split-screen viewer showing bounding boxes on the original PDF. She confirms the values.
5. **Blockchain Anchoring:** Confirmation triggers the backend relayer, which submits `register(keccak256(SHA256 || salt))` to Polygon Amoy.

#### Doctor Consultation & Tamper Verification
1. **Consent Invitation:** Asha shares her 6-month diabetic profile with Dr. Rao with a 48-hour auto-expiring access grant.
2. **Consult Review:** Dr. Rao logs in via OTP, views Asha's synthesized one-page delta sheet, and inspects historical HbA1c trajectory.
3. **Integrity Verification:** Dr. Rao clicks **Verify** on a specific report. Dr. Rao's browser:
   - Downloads the decrypted report bytes + salt over the authenticated API.
   - Computes `keccak256(SHA256(downloaded_file) || salt)` in Web Crypto.
   - Queries `DocumentRegistry.sol` directly on Polygon Amoy via a public RPC.
   - Confirms the timestamp and registrar address, rendering a green **Cryptographically Unaltered** badge.

#### Revocation & Access Log Audit
1. Asha navigates to **Access Management** and revokes Dr. Rao's permission.
2. Dr. Rao's subsequent HTTP requests instantly return `403 Forbidden`.
3. Asha reviews her **Activity Log**, displaying the exact UTC timestamps Dr. Rao opened each record, verified against the tamper-evident hash-chained log.

---

## 7. UI/UX Design Specification & Visual Identity

### 7.1 Clinical Design Philosophy
MediChain AI is styled as a **serious, trustworthy clinical instrument**, deliberately avoiding playful consumer-SaaS aesthetics. It uses a high-legibility layout, muted paper-like tones, subtle bordered structures, and restrained status accents.

### 7.2 Design Tokens

```css
:root {
  /* Surface & Base Tokens */
  --color-ink: #10222E;              /* Primary typography & dark chrome */
  --color-paper: #F6F4EE;            /* Warm non-glare application canvas */
  --color-surface: #FFFFFF;          /* Pure white card and table containers */
  --color-rule: #D5D9D6;             /* Structural border lines and dividers */
  --color-slate: #5B6B76;            /* Secondary muted typography */

  /* Semantic Clinical Accents */
  --color-verdigris: #1F7A6D;        /* Primary action, in-range, verified badge */
  --color-verdigris-deep: #14584F;   /* Headings, active states */
  --color-sage: #DDE8E2;             /* Verified badge fill, normal range band */
  --color-seal-blue: #2B5FA8;        /* Informational AI chips & grounded citations */
  --color-seal-blue-tint: #E3ECF8;   /* AI insight background panels */
  --color-amber: #B7791F;            /* Caution, unverified state, review required */
  --color-vermilion: #B4421C;        /* Critical out-of-range flag, hash mismatch */

  /* Typography Stacks */
  --font-serif: "Source Serif 4", "Fraunces", Georgia, serif;
  --font-sans: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "IBM Plex Mono", Menlo, Consolas, monospace;
}
```

### 7.3 Signature UI Components
1. `<SealBadge status="verified|unregistered|mismatch|signed" />`: A clean circular stamp indicating cryptographic standing across list, detail, and doctor views.
2. `<RangeBar value={val} min={low} max={high} unit={unit} />`: A horizontal bounded spectrum placing patient readings inside or outside reference bands with clear numeric labels.
3. `<SourceCropViewer fileUrl={url} bbox={[x0,y0,x1,y1]} />`: Interactive canvas highlighting the exact source text crop from the raw PDF corresponding to an extracted biomarker.

---

## 8. Database Schema & Data Models

The relational schema is maintained through **SQLAlchemy 2.0 Async Models** and migrated using **Alembic**.

```mermaid
erDiagram
    users ||--o{ patient_profiles : "extends (1:1)"
    users ||--o{ doctor_profiles : "extends (1:1)"
    users ||--o{ institutions : "affiliated with"
    users ||--o{ documents : "uploads / owns"
    users ||--o{ consents : "grants / receives"
    users ||--o{ access_events : "triggers"

    documents ||--o{ observations : "contains"
    documents ||--o| summaries : "has"
    documents ||--o{ chain_registrations : "anchored via"
    documents ||--o{ chunks : "tokenized into"

    consents ||--o{ consent_documents : "scopes"
    documents ||--o{ consent_documents : "governed by"

    users {
        uuid id PK
        string role "patient | doctor | lab | admin"
        string email UK
        string full_name
        string phone
        timestamptz created_at
    }

    documents {
        uuid id PK
        uuid patient_id FK
        uuid issuer_institution_id FK
        string category "lab | prescription | scan"
        string title
        date doc_date
        string storage_path
        bytea enc_dek
        bytea enc_iv
        bytea salt_enc
        bytea commitment
        string status "processing | confirmed | failed"
        timestamptz created_at
    }

    observations {
        uuid id PK
        uuid document_id FK
        uuid patient_id FK
        string analyte_code "LOINC mapping"
        string analyte_name
        float value_num
        string value_text
        string unit
        float ref_low
        float ref_high
        string flag "H | L | Normal"
        float confidence
        int source_page
        jsonb bbox
        bool user_corrected
        float original_value
    }

    consents {
        uuid id PK
        uuid patient_id FK
        uuid grantee_id FK
        string purpose
        timestamptz starts_at
        timestamptz expires_at
        timestamptz revoked_at
    }

    access_events {
        bigserial id PK
        timestamptz ts
        uuid actor_id FK
        uuid patient_id FK
        uuid document_id FK
        string action "read | verify | export"
        uuid consent_id FK
        bytea prev_hash
        bytea event_hash
    }

    chain_registrations {
        uuid id PK
        uuid document_id FK
        string network
        string contract_address
        string tx_hash
        bigint block_number
        timestamptz block_time
    }
```

---

## 9. REST API Specification

Base Path: `/api/v1`  
Authentication: `Authorization: Bearer <Supabase_JWT>`

| Method | Endpoint | Authorized Roles | Description |
|:---|:---|:---:|:---|
| `POST` | `/auth/session/exchange` | Any | Validates Supabase JWT, creates user profile, returns app claims |
| `GET` | `/me` | Any | Fetches current user profile and role details |
| `POST` | `/documents` | Patient, Lab | Multipart file upload (max 15MB). Encrypts file, creates processing record |
| `GET` | `/documents` | Patient | Lists patient documents with filters (`category`, `date`, `status`) |
| `GET` | `/documents/{id}` | Patient, Consented Doctor | Retrieves document metadata; writes to `access_events` |
| `GET` | `/documents/{id}/file` | Patient, Consented Doctor | Streams decrypted file bytes; sets `X-Doc-Salt` header for verification |
| `GET` | `/documents/{id}/extraction`| Patient, Consented Doctor | Retrieves structured extracted parameters and AI summary |
| `PATCH`| `/observations/{id}` | Patient | Overrides/corrects extracted parameter; tracks original value in history |
| `POST` | `/documents/{id}/confirm` | Patient | Confirms extraction; triggers blockchain relayer registration |
| `GET` | `/documents/{id}/verification`| Patient, Consented Doctor | Retrieves on-chain registration state, tx hash, and block timestamp |
| `GET` | `/analytics/series` | Patient, Consented Doctor | Query param: `?analyte=LOINC&from=date&to=date` → longitudinal time-series |
| `GET` | `/analytics/compare` | Patient, Consented Doctor | Query param: `?doc_a=id&doc_b=id` → side-by-side delta table |
| `POST` | `/assistant/query` | Patient, Consented Doctor | RAG assistant endpoint; answers questions citing verified records |
| `POST` | `/consents` | Patient | Grants doctor access to specific documents with defined expiry |
| `DELETE`| `/consents/{id}` | Patient | Immediately revokes an active consent grant |
| `GET` | `/consents` | Patient, Doctor | Lists active and expired consents |
| `GET` | `/access-log` | Patient | Returns patient's chronological, plain-language audit timeline |
| `GET` | `/doctor/patients` | Doctor | Lists all patients with active, unexpired consents |
| `GET` | `/doctor/patients/{id}/summary`| Doctor | Generates 1-page clinician longitudinal trend summary (JSON / PDF) |

---

## 10. Security, Privacy & Regulatory Compliance (DPDP & ABDM)

### 10.1 India Digital Personal Data Protection (DPDP) Act Compliance
- **Rule 4 Consent Manager Ready:** Consents are modeled as distinct, portable, revocable artifacts with explicit purpose specifications.
- **Rule 6 Security Safeguards:** End-to-end envelope encryption, strict role-based access control, and comprehensive activity logging.
- **Mandatory 1-Year Log Retention:** All audit records in `access_events` are maintained for at least 365 days.
- **72-Hour Breach Notification Protocol:** Incident response runbook detailing notification to the Data Protection Board of India and affected data principals.
- **Crypto-Shredding Right to Erasure:** Upon verified patient deletion requests, the file ciphertext, salt, and patient KEK are permanently purged, rendering on-chain salted commitments cryptographically unrecoverable.

### 10.2 Cryptographic Key Management & Storage Architecture
```
[Patient Record Ingestion]
       │
       ▼
Generate random 256-bit DEK
       │
       ├─► AES-256-GCM Encrypt(Raw File) ──► Ciphertext ──► Private Bucket
       │
       └─► AES-KeyWrap(Master KEK, DEK)  ──► enc_dek   ──► PostgreSQL Record
```

---

## 11. Architectural Decision Records (ADRs)

### ADR-01: Drop Prisma in Favor of Pure SQLAlchemy 2.0 Async
- **Context:** Initial prototypes considered using Prisma in Next.js and SQLAlchemy in FastAPI.
- **Decision:** Standardize exclusively on SQLAlchemy 2.0 Async and Alembic migrations.
- **Rationale:** Dual ORMs accessing the same PostgreSQL database cause schema drift, duplicate definitions, and bypass the central FastAPI policy authorization layer.

### ADR-02: Off-Chain Policy Enforcement vs On-Chain Access Control
- **Context:** Early Web3 health architectures attempted to store permissions on-chain via smart contracts.
- **Decision:** Execute all authorization checks off-chain in FastAPI, anchoring only document commitments and audit Merkle roots on-chain.
- **Rationale:** The backend controls file decryption keys, making on-chain permission checks redundant. Storing patient identifiers on-chain also directly violates DPDP right-to-erasure requirements.

### ADR-03: Zero Real Patient Health Information Sent to Free-Tier Hosted LLMs
- **Context:** Free-tier LLM endpoints reserve rights to utilize prompt payloads for model training.
- **Decision:** Restrict free hosted LLM APIs exclusively to synthetic test data during hackathon phases.
- **Rationale:** Transmitting real patient records to public free APIs violates basic medical confidentiality and Indian DPDP mandates.

---

## 12. Repository & Project Directory Structure

```
d:/Medichain/
├── .github/
│   └── workflows/
│       ├── backend-ci.yml           # Python lint, typecheck, pytest
│       ├── frontend-ci.yml          # Next.js build, eslint, vitest
│       └── contracts-ci.yml         # Hardhat compile, test, gas report
├── backend/
│   ├── app/
│   │   ├── main.py                  # FastAPI factory & middleware
│   │   ├── core/
│   │   │   ├── config.py            # Environment settings
│   │   │   ├── security.py          # JWT verification & RBAC
│   │   │   ├── crypto.py            # AES-256-GCM envelope encryption
│   │   │   ├── policy.py            # Central can_read / can_write gate
│   │   │   └── logging.py           # Structured logger (No-PHI)
│   │   ├── db/
│   │   │   ├── session.py           # Async SQLAlchemy engine
│   │   │   ├── models/              # SQLAlchemy model definitions
│   │   │   └── alembic/             # Database migrations
│   │   ├── modules/
│   │   │   ├── auth/                # Session exchange router & service
│   │   │   ├── documents/           # Upload, list, metadata endpoints
│   │   │   ├── extraction/          # OCR, LLM schema parser, validation
│   │   │   ├── analytics/           # Trend series & comparison endpoints
│   │   │   ├── consent/             # Grant, revoke, and audit router
│   │   │   ├── chain/               # Relayer service & contract client
│   │   │   └── assistant/           # Grounded RAG query router
│   │   └── workers/
│   │       ├── extract_worker.py    # Background extraction processing
│   │       └── anchor_worker.py     # Background blockchain relayer
│   ├── tests/
│   │   ├── unit/                    # Crypto, policy, & validation tests
│   │   ├── api/                     # Consent matrix endpoint test suite
│   │   └── eval/                    # 50-report gold set accuracy eval
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── app/
│   │   ├── (auth)/                  # Login and onboarding screens
│   │   ├── (patient)/               # Vault, analytics, and sharing screens
│   │   ├── (doctor)/                # Clinician dashboard and review views
│   │   └── (verify)/                # Standalone public document verifier
│   ├── components/
│   │   ├── ui/                      # shadcn/ui base primitives
│   │   ├── seal/                    # SealBadge status stamps
│   │   ├── charts/                  # Recharts longitudinal trends
│   │   └── viewer/                  # PDF canvas & bounding box crops
│   ├── lib/
│   │   ├── api/                     # Generated OpenAPI TypeScript client
│   │   ├── crypto/                  # Browser Web Crypto SHA-256
│   │   └── web3/                    # viem public client for contract reads
│   ├── package.json
│   └── tailwind.config.ts
├── contracts/
│   ├── contracts/
│   │   └── DocumentRegistry.sol     # Anchoring smart contract
│   ├── scripts/
│   │   └── deploy.ts                # Polygon Amoy deployment script
│   ├── test/
│   │   └── DocumentRegistry.test.ts # Hardhat contract test suite
│   └── hardhat.config.ts
├── docs/                            # Deep analysis, PRD, and tech specs
├── .env.example
├── AGENTS.md                        # AI coding agent prompt guidelines
└── README.md
```

---

## 13. Getting Started & Local Development Setup

### 13.1 Prerequisites
- **Node.js:** v20.x or higher + `pnpm`
- **Python:** v3.12 or higher
- **PostgreSQL:** Local instance or free Supabase cloud instance
- **Polygon Amoy Testnet RPC & Funded Relayer Wallet** (via Alchemy Faucet)

### 13.2 Environment Setup
Create a root `.env` file referencing `.env.example`:

```bash
# Supabase Configuration
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
DATABASE_URL="postgresql+asyncpg://postgres:password@localhost:5432/medichain"

# Application Encryption Key (32-byte Base64 string for dev)
MASTER_KEK="U2VjcmV0S2V5Rm9yRGV2RW52ZWxvcGVFbmNyeXB0aW9uMTIzNA=="

# AI Service Keys
GEMINI_API_KEY="your-google-ai-studio-key"

# Blockchain Configuration (Polygon Amoy)
POLYGON_AMOY_RPC_URL="https://polygon-amoy.g.alchemy.com/v2/your-alchemy-key"
RELAYER_PRIVATE_KEY="0x_your_funded_testnet_private_key"
DOCUMENT_REGISTRY_ADDRESS="0x_deployed_contract_address"
```

### 13.3 Backend Setup
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
alembic upgrade head
uvicorn app.main:app --reload --port 8000
```

### 13.4 Frontend Setup
```bash
cd frontend
pnpm install
pnpm dev --port 3000
```

### 13.5 Smart Contract Deployment
```bash
cd contracts
pnpm install
npx hardhat test
npx hardhat run scripts/deploy.ts --network amoy
```

---

## 14. Testing & Verification Strategy

```mermaid
flowchart TD
    subgraph TESTS["Testing Pyramid"]
        E2E["Playwright E2E\n(Full Ingestion & Tamper Demo)"]
        GOLD["50-Report Gold Set Eval\n(Analyte-Level Accuracy Checks)"]
        API_TEST["Consent Matrix API Tests\n(Every Role × Every Endpoint)"]
        UNIT["Unit Tests\n(AES-GCM, Policy Engine, Smart Contract)"]
    end
    UNIT --> API_TEST --> GOLD --> E2E
```

### 14.1 Key Test Commands
- **Backend Unit & Consent Matrix Tests:**
  ```bash
  cd backend && pytest -v tests/
  ```
- **Smart Contract Hardhat Tests:**
  ```bash
  cd contracts && npx hardhat test
  ```
- **End-to-End Browser Tamper Test:**
  ```bash
  cd frontend && pnpm test:e2e
  ```

---

## 15. Implementation Roadmaps

### Roadmap A: 36-Hour Hackathon MVP

| Timeframe | Workstream | Key Deliverables |
|:---:|:---|:---|
| **Hours 0–2** | Environment & Scaffolding | Monorepo setup, Supabase link, design token integration |
| **Hours 2–6** | Foundation & Auth | Supabase Auth exchange, SQLAlchemy models, baseline migrations |
| **Hours 6–10** | Ingestion & Crypto | AES-256-GCM module, encrypted upload to private storage |
| **Hours 10–16** | AI Extraction Engine | Dual-mode parser, JSON schema structuring, split-screen confirm UI |
| **Hours 16–20** | Longitudinal Trends | Biomarker delta calculations, Recharts trend charts, summary card |
| **Hours 20–24** | Smart Contract & Anchor | Deploy `DocumentRegistry.sol` to Amoy, relayer integration, viem verifier |
| **Hours 24–28** | Access Control & Auditing | Consent grant/revoke endpoints, hash-chained audit timeline |
| **Hours 28–30** | Doctor Synthesis View | One-page clinician dashboard, source-linked report navigation |
| **Hours 30–32** | Grounded Q&A Assistant | Policy-scoped RAG assistant handling 3 core clinical question archetypes |
| **Hours 32–34** | Polish & Tamper Test | Pre-loading synthetic demo data, rehearsing live file-tamper test |
| **Hours 34–36** | Dry Run & Backup Video | 3 consecutive demo rehearsals, backup walkthrough recording |

### Roadmap B: 9–15 Month Production Roadmap

```mermaid
gantt
    title MediChain AI Full Production Roadmap
    dateFormat  YYYY-MM-DD
    section Foundation & Security
    Hardened Architecture & KMS          :2026-11-15, 30d
    DPDP & Security Audit (VAPT)         :2026-12-15, 45d
    section Core Clinical Platforms
    Doctor & Lab Portals                 :2027-01-15, 60d
    EIP-712 Signed Issuance              :2027-02-15, 45d
    section National Interoperability
    ABDM M1 & M3 Integration            :2027-03-15, 90d
    section Scaling & Mobile
    React Native Mobile Apps             :2027-05-15, 60d
    Production Mainnet Anchoring         :2027-06-15, 30d
```

---

## 16. Cost Analysis & Infrastructure Economics

| Operational Stage | Monthly Cost (INR) | Monthly Cost (USD) | Primary Cost Drivers |
|:---|:---:|:---:|:---|
| **Hackathon Prototype** | ₹0 – ₹100 | \$0 – \$1 | Free-tier Supabase, Render, Vercel, Amoy Faucets |
| **Private Beta (100–500 users)** | ₹5,200 – ₹10,500 | \$57 – \$117 | Supabase Pro (\$25), Always-on API (\$7), Paid Flash API |
| **Commercial Scale (50k MAU)** | ₹2.5L – ₹7.5L | \$2,800 – \$8,300 | HA Managed Postgres, KMS HSM, Private GPU, VAPT & DPO |

---

## 17. Guidelines for AI Coding Agents (AGENTS.md)

When collaborating on this repository using automated AI coding agents:
1. **Vertical Slices Only:** Implement one functional slice at a time (e.g., *Model + Migration + Endpoint + Unit Test*). Never request full application builds in a single prompt.
2. **Never Bypass Policy:** Never query documents or observations directly without routing through `policy.py:can_read()`.
3. **Keep Smart Contracts Minimal:** Do not add complex business logic or storage mappings to `DocumentRegistry.sol`. Keep contract code under 60 lines.
4. **Preserve Documentation Integrity:** Retain all existing code comments, docstrings, and architectural tags (`[FACT]`, `[ASSUMPTION]`).

---

## 18. Disclaimers & Source Notes

- **Not Medical Advice:** MediChain AI is an informational and document verification platform. It does not provide medical advice, diagnosis, or treatment.
- **Not Legal Counsel:** Regulatory interpretations of the Digital Personal Data Protection (DPDP) Act, 2025/2026 Rules, and ABDM sandbox requirements are technical planning summaries. Consult qualified Indian healthcare data counsel prior to production launch.
- **Reference Blueprint:** Sourced from [MediChain_AI_Blueprint.pdf](file:///D:/Medichain/MediChain_AI_Blueprint.pdf) (v1.0, 7 November 2026).

---

*Built with precision for India's digital healthcare transformation.*
