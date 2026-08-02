// Auto-generated from a 46-scheme dataset (Central + Tamil Nadu state schemes) plus
// hand-curated legacy entries not present in that dataset. See CLAUDE.md / conversation
// history for the source and conversion notes (dedup of repeated entries, citation-artifact
// cleanup, and mapping of the richer eligibility_filters shape onto this app's Eligibility type).

export type Gender = "male" | "female" | "other";
export type Category = "general" | "obc" | "sc" | "st" | "ews";
export type MaritalStatus = "unmarried" | "married" | "widowed";
export type Occupation =
  | "farmer"
  | "student"
  | "unemployed"
  | "salaried"
  | "self-employed"
  | "daily-wage"
  | "homemaker"
  | "senior-citizen";

export interface Eligibility {
  minAge?: number;
  maxAge?: number;
  gender?: Gender[];
  maritalStatus?: MaritalStatus[];
  maxIncome?: number;
  incomeBasis?: "individual" | "household";
  occupation?: Occupation[];
  states?: string[];
  categories?: Category[];
  disabilityRequired?: boolean;
}

export interface SchemeBenefit {
  title: string;
  description: string;
  amount: string;
  frequency: string;
  mode: string;
}

export interface SchemeDocument {
  name: string;
  mandatory: boolean;
}

export interface ApplicationChannel {
  type: string;
  name: string;
  website?: string;
}

export interface SchemeApplication {
  modes: string[];
  whereToApply: ApplicationChannel[];
  steps: string[];
  fee: string;
  processingTime: string;
  renewalRequired: boolean;
  renewalFrequency?: string;
  offlineFormAvailable: boolean;
}

export interface SchemeHelpline {
  phone: string;
  email?: string;
  workingHours?: string;
  tollFree?: boolean;
}

export interface SchemeFaq {
  question: string;
  answer: string;
}

export interface AssistanceCenter {
  name: string;
  purpose: string;
}

export interface OfficialResources {
  officialWebsite?: string;
  applicationPortal?: string;
  officialGuidelines?: string;
  downloadForms?: string;
}

export interface Scheme {
  id: string;
  name: string;
  shortName?: string;
  governmentLevel: "Central" | "State";
  state?: string;
  ministry: string;
  department?: string;
  category: string;
  subCategory?: string;
  summary: string;
  objective?: string;
  launchYear?: string;
  status?: string;
  beneficiaryTypes: string[];
  benefits: SchemeBenefit[];
  eligibilityNotes: string[];
  notEligible: string[];
  documents: SchemeDocument[];
  optionalDocuments: string[];
  application: SchemeApplication;
  assistanceCenters: AssistanceCenter[];
  officialResources: OfficialResources;
  helpline: SchemeHelpline;
  faq: SchemeFaq[];
  relatedSchemes: string[];
  importantNotes: string[];
  tags: string[];
  difficultyLevel?: string;
  estimatedCompletionTime?: string;
  languagesSupported: string[];
  lastUpdated?: string;
  eligibility: Eligibility;
}

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export const OCCUPATIONS: { value: Occupation; label: string }[] = [
  { value: "farmer", label: "Farmer" },
  { value: "student", label: "Student" },
  { value: "unemployed", label: "Unemployed" },
  { value: "salaried", label: "Salaried worker" },
  { value: "self-employed", label: "Self-employed / small business" },
  { value: "daily-wage", label: "Daily wage labourer" },
  { value: "homemaker", label: "Homemaker" },
  { value: "senior-citizen", label: "Retired / senior citizen" },
];

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: "general", label: "General" },
  { value: "obc", label: "OBC" },
  { value: "sc", label: "Scheduled Caste (SC)" },
  { value: "st", label: "Scheduled Tribe (ST)" },
  { value: "ews", label: "EWS" },
];

export const MARITAL_STATUSES: { value: MaritalStatus | "any"; label: string }[] = [
  { value: "any", label: "Prefer not to say / Any" },
  { value: "unmarried", label: "Unmarried" },
  { value: "married", label: "Married" },
  { value: "widowed", label: "Widowed" },
];

export const schemes: Scheme[] = [
  {
    "id": "cg001",
    "name": "Pradhan Mantri Jan Dhan Yojana",
    "shortName": "PMJDY",
    "governmentLevel": "Central",
    "ministry": "Ministry of Finance",
    "department": "Department of Financial Services",
    "category": "Financial Inclusion",
    "subCategory": "Banking",
    "summary": "Pradhan Mantri Jan Dhan Yojana (PMJDY) is the National Mission for Financial Inclusion aimed at providing every household with access to banking services including savings accounts, remittance, credit, insurance, pension and Direct Benefit Transfer (DBT).",
    "objective": "To provide affordable banking services to every eligible citizen and promote financial inclusion.",
    "launchYear": "2014",
    "status": "Active",
    "beneficiaryTypes": [
      "Citizens",
      "Unbanked Individuals",
      "Low Income Households",
      "Rural Residents",
      "Urban Residents"
    ],
    "benefits": [
      {
        "title": "Zero Balance Savings Account",
        "description": "Basic Savings Bank Deposit Account with no minimum balance requirement.",
        "amount": "N/A",
        "frequency": "One-time account opening",
        "mode": "Bank Account"
      },
      {
        "title": "RuPay Debit Card",
        "description": "Free RuPay Debit Card issued to account holders.",
        "amount": "Free",
        "frequency": "One-time",
        "mode": "Bank"
      },
      {
        "title": "Accident Insurance",
        "description": "Accident insurance cover for eligible RuPay card holders.",
        "amount": "Up to ₹2,00,000",
        "frequency": "As per scheme rules",
        "mode": "Insurance"
      },
      {
        "title": "Overdraft Facility",
        "description": "Eligible account holders can avail overdraft facility.",
        "amount": "Up to ₹10,000",
        "frequency": "As eligible",
        "mode": "Bank"
      },
      {
        "title": "Direct Benefit Transfer",
        "description": "Government subsidies and benefits can be credited directly into the account.",
        "amount": "Varies",
        "frequency": "Scheme dependent",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen.",
      "Should not already have a Basic Savings Bank Deposit Account under PMJDY.",
      "Individuals aged 10 years and above can open an account (minor accounts subject to bank rules)."
    ],
    "notEligible": [
      "Persons attempting to open multiple PMJDY basic accounts.",
      "Applicants who fail KYC requirements."
    ],
    "documents": [
      {
        "name": "Aadhaar Card (preferred)",
        "mandatory": false
      },
      {
        "name": "Officially Valid Identity Proof (if Aadhaar unavailable)",
        "mandatory": true
      },
      {
        "name": "Address Proof (if not available in ID)",
        "mandatory": false
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": false
      },
      {
        "name": "Mobile Number",
        "mandatory": false
      }
    ],
    "optionalDocuments": [
      "PAN Card",
      "MNREGA Job Card",
      "Driving Licence",
      "Voter ID"
    ],
    "application": {
      "modes": [
        "Online Information",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "PMJDY Portal",
          "website": "https://pmjdy.gov.in"
        },
        {
          "type": "Bank Branch",
          "name": "Any Public or Private Sector Bank"
        },
        {
          "type": "Bank Mitra",
          "name": "Business Correspondent (Bank Mitra)"
        },
        {
          "type": "Common Service Centre (CSC)",
          "name": "Common Service Centre"
        }
      ],
      "steps": [
        "Visit a participating bank branch or Bank Mitra.",
        "Collect or download the PMJDY account opening form.",
        "Fill in the application form.",
        "Submit KYC documents.",
        "Complete verification.",
        "Receive account number and RuPay Debit Card."
      ],
      "fee": "Free",
      "processingTime": "Generally 1–7 working days (bank dependent)",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Bank Branch",
        "purpose": "Account opening"
      },
      {
        "name": "Bank Mitra (Business Correspondent)",
        "purpose": "Account opening assistance"
      },
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Citizen assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://pmjdy.gov.in",
      "applicationPortal": "https://pmjdy.gov.in",
      "officialGuidelines": "https://pmjdy.gov.in/scheme-detail.aspx",
      "downloadForms": "https://pmjdy.gov.in/account-opening-form"
    },
    "helpline": {
      "phone": "1800 11 0001 / 1800 180 1111",
      "workingHours": "As notified",
      "tollFree": true
    },
    "faq": [
      {
        "question": "Is there a minimum balance requirement?",
        "answer": "No. PMJDY accounts are zero-balance accounts."
      },
      {
        "question": "Can government benefits be credited to this account?",
        "answer": "Yes. PMJDY accounts support Direct Benefit Transfer (DBT)."
      }
    ],
    "relatedSchemes": [
      "Pradhan Mantri Jeevan Jyoti Bima Yojana",
      "Pradhan Mantri Suraksha Bima Yojana",
      "Atal Pension Yojana",
      "Pradhan Mantri Mudra Yojana"
    ],
    "importantNotes": [
      "Only one PMJDY basic account should be maintained per eligible person.",
      "Overdraft facility is subject to bank eligibility conditions.",
      "Insurance benefits are subject to scheme terms and conditions."
    ],
    "tags": [
      "bank",
      "finance",
      "government",
      "DBT",
      "financial inclusion"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "15-30 minutes for application",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 10
    }
  },
  {
    "id": "cg002",
    "name": "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana",
    "shortName": "PM-JAY",
    "governmentLevel": "Central",
    "ministry": "Ministry of Health and Family Welfare",
    "department": "National Health Authority (NHA)",
    "category": "Health",
    "subCategory": "Health Insurance",
    "summary": "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (AB PM-JAY) is the world's largest government-funded health assurance scheme providing cashless hospitalization for eligible beneficiaries at empanelled public and private hospitals across India.",
    "objective": "To provide financial protection against catastrophic health expenditure by offering cashless secondary and tertiary healthcare services to eligible families.",
    "launchYear": "2018",
    "status": "Active",
    "beneficiaryTypes": [
      "Economically Vulnerable Families",
      "Eligible Rural Households",
      "Eligible Urban Workers",
      "Senior Citizens (70+ as per current expansion)"
    ],
    "benefits": [
      {
        "title": "Cashless Health Insurance",
        "description": "Cashless hospitalization at empanelled hospitals.",
        "amount": "Up to ₹5,00,000 per family per year",
        "frequency": "Annual",
        "mode": "Cashless"
      },
      {
        "title": "Hospitalization Coverage",
        "description": "Secondary and tertiary care hospitalization including surgery, medicines, diagnostics and hospital stay.",
        "amount": "Covered",
        "frequency": "As required",
        "mode": "Cashless"
      },
      {
        "title": "Pan India Portability",
        "description": "Treatment can be availed at any empanelled hospital across India.",
        "amount": "Applicable",
        "frequency": "Anytime",
        "mode": "Cashless"
      }
    ],
    "eligibilityNotes": [
      "Must belong to an eligible family identified under PM-JAY criteria.",
      "Rural and urban eligibility is determined using approved deprivation/occupational categories.",
      "Citizens aged 70 years and above can enroll under the expanded coverage irrespective of socio-economic status."
    ],
    "notEligible": [
      "Persons not covered under PM-JAY eligibility criteria unless covered under later government expansions.",
      "Applicants whose beneficiary verification cannot be completed."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Mobile Number",
        "mandatory": true
      },
      {
        "name": "Family Identification Documents (if applicable)",
        "mandatory": false
      }
    ],
    "optionalDocuments": [
      "Ration Card",
      "Family ID",
      "Other Government-issued Identity Proof"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "PM-JAY Beneficiary Portal",
          "website": "https://beneficiary.nha.gov.in"
        },
        {
          "type": "Official Website",
          "name": "PM-JAY",
          "website": "https://pmjay.gov.in"
        },
        {
          "type": "Common Service Centre (CSC)",
          "name": "CSC"
        },
        {
          "type": "Government Hospital",
          "name": "Empanelled Government Hospital"
        },
        {
          "type": "Private Hospital",
          "name": "Empanelled Private Hospital"
        },
        {
          "type": "Ayushman Mitra Help Desk",
          "name": "Hospital Help Desk"
        }
      ],
      "steps": [
        "Check eligibility on the PM-JAY Beneficiary Portal.",
        "Complete Aadhaar-based verification.",
        "Visit a CSC or empanelled hospital if assistance is required.",
        "Generate the Ayushman Card.",
        "Use the card for cashless treatment at empanelled hospitals."
      ],
      "fee": "Free",
      "processingTime": "Usually same day after successful verification",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Card generation and beneficiary assistance"
      },
      {
        "name": "Ayushman Mitra Help Desk",
        "purpose": "Hospital assistance"
      },
      {
        "name": "Empanelled Government Hospital",
        "purpose": "Registration and treatment"
      },
      {
        "name": "Empanelled Private Hospital",
        "purpose": "Cashless treatment"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://pmjay.gov.in",
      "applicationPortal": "https://beneficiary.nha.gov.in",
      "officialGuidelines": "https://nha.gov.in"
    },
    "helpline": {
      "phone": "14555 / 1800-111-565",
      "workingHours": "24x7",
      "tollFree": true
    },
    "faq": [
      {
        "question": "Is there any premium to be paid?",
        "answer": "No. Eligible beneficiaries receive coverage free of cost."
      },
      {
        "question": "Can treatment be taken outside my state?",
        "answer": "Yes. PM-JAY provides nationwide portability at empanelled hospitals."
      }
    ],
    "relatedSchemes": [
      "Ayushman Bharat Digital Mission",
      "Pradhan Mantri Jan Arogya Yojana",
      "Chief Minister Health Insurance Schemes"
    ],
    "importantNotes": [
      "Treatment is available only at empanelled hospitals.",
      "Always verify eligibility before visiting the hospital.",
      "Carry Aadhaar or another accepted identity document during verification."
    ],
    "tags": [
      "health",
      "insurance",
      "government",
      "hospital",
      "cashless"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "10-20 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {}
  },
  {
    "id": "cg003",
    "name": "Pradhan Mantri Kisan Samman Nidhi",
    "shortName": "PM-KISAN",
    "governmentLevel": "Central",
    "ministry": "Ministry of Agriculture and Farmers Welfare",
    "department": "Department of Agriculture and Farmers Welfare",
    "category": "Agriculture",
    "subCategory": "Income Support",
    "summary": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector Scheme that provides financial assistance of ₹6,000 per year to eligible landholding farmer families. The amount is transferred directly into beneficiaries' bank accounts through Direct Benefit Transfer (DBT).",
    "objective": "To supplement the financial needs of eligible farmer families for agricultural and allied activities.",
    "launchYear": "2019",
    "status": "Active",
    "beneficiaryTypes": [
      "Landholding Farmers",
      "Small Farmers",
      "Marginal Farmers"
    ],
    "benefits": [
      {
        "title": "Annual Financial Assistance",
        "description": "Financial assistance is provided directly to eligible farmer families.",
        "amount": "₹6,000 per year",
        "frequency": "Three installments of ₹2,000",
        "mode": "Direct Benefit Transfer (DBT)"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen.",
      "Must belong to a landholding farmer family.",
      "Land records should be registered with the State/UT.",
      "Aadhaar should be linked with the beneficiary.",
      "Bank account should be Aadhaar-seeded.",
      "e-KYC must be completed."
    ],
    "notEligible": [
      "Institutional landholders.",
      "Income tax payers.",
      "Serving or retired constitutional post holders.",
      "Serving or retired government officers/employees (except eligible Class IV/MTS and Group D employees).",
      "Doctors, Engineers, Chartered Accountants, Architects and other professionals paying professional tax.",
      "Farmer families where more than one eligible member receives benefits.",
      "Persons who acquired land after the notified eligibility date without satisfying scheme rules."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Land Ownership Records",
        "mandatory": true
      },
      {
        "name": "Mobile Number",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "PAN Card",
      "Farmer ID (where applicable)"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "PM-KISAN Portal",
          "website": "https://pmkisan.gov.in"
        },
        {
          "type": "Common Service Centre (CSC)",
          "name": "Common Service Centre"
        },
        {
          "type": "Agriculture Department Office",
          "name": "District / Block Agriculture Office"
        },
        {
          "type": "State Agriculture Department",
          "name": "State Nodal Department"
        }
      ],
      "steps": [
        "Register through the PM-KISAN portal or CSC.",
        "Complete Aadhaar authentication.",
        "Submit land ownership details.",
        "Provide Aadhaar-linked bank account details.",
        "Complete mandatory e-KYC.",
        "Wait for State verification and approval."
      ],
      "fee": "Free",
      "processingTime": "Varies by State verification",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Registration and e-KYC"
      },
      {
        "name": "Agriculture Department Office",
        "purpose": "Farmer registration and verification"
      },
      {
        "name": "Village Agriculture Officer",
        "purpose": "Farmer assistance"
      },
      {
        "name": "State Agriculture Department",
        "purpose": "Eligibility verification"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://pmkisan.gov.in",
      "applicationPortal": "https://pmkisan.gov.in",
      "officialGuidelines": "https://pmkisan.gov.in",
      "downloadForms": "https://pmkisan.gov.in/RegistrationFormupdated.aspx"
    },
    "helpline": {
      "phone": "155261 / 011-24300606",
      "email": "pmkisan-ict@gov.in",
      "workingHours": "Government Working Hours",
      "tollFree": true
    },
    "faq": [
      {
        "question": "How much assistance is provided?",
        "answer": "₹6,000 per year in three equal installments of ₹2,000."
      },
      {
        "question": "Is e-KYC mandatory?",
        "answer": "Yes. e-KYC is mandatory to receive benefits."
      }
    ],
    "relatedSchemes": [
      "PM Fasal Bima Yojana",
      "Soil Health Card Scheme",
      "Kisan Credit Card"
    ],
    "importantNotes": [
      "Benefits are transferred through DBT.",
      "Aadhaar-linked bank account is mandatory.",
      "e-KYC is compulsory.",
      "State Government verifies farmer eligibility before payment."
    ],
    "tags": [
      "farmer",
      "agriculture",
      "cash assistance",
      "central government"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "occupation": [
        "farmer"
      ]
    }
  },
  {
    "id": "cg004",
    "name": "Mahatma Gandhi National Rural Employment Guarantee Act",
    "shortName": "MGNREGA",
    "governmentLevel": "Central",
    "ministry": "Ministry of Rural Development",
    "department": "Department of Rural Development",
    "category": "Employment",
    "subCategory": "Rural Employment Guarantee",
    "summary": "MGNREGA is a rights-based employment guarantee programme that provides at least 100 days of guaranteed wage employment in a financial year to every rural household whose adult members volunteer to do unskilled manual work.",
    "objective": "To enhance livelihood security of rural households by guaranteeing wage employment while creating durable rural assets and strengthening rural infrastructure.",
    "launchYear": "2005",
    "status": "Active",
    "beneficiaryTypes": [
      "Rural Households",
      "Unskilled Workers",
      "Women Workers",
      "Scheduled Castes",
      "Scheduled Tribes"
    ],
    "benefits": [
      {
        "title": "Guaranteed Wage Employment",
        "description": "Employment guarantee for eligible rural households.",
        "amount": "Up to 100 days per financial year",
        "frequency": "Annual",
        "mode": "Direct Benefit Transfer (DBT)"
      },
      {
        "title": "Unemployment Allowance",
        "description": "Payable if employment is not provided within 15 days of demand, as per scheme rules.",
        "amount": "As per State Government rules",
        "frequency": "Applicable when eligible",
        "mode": "DBT"
      },
      {
        "title": "Local Employment",
        "description": "Employment should normally be provided within 5 km of the applicant's residence.",
        "amount": "Applicable",
        "frequency": "Whenever work is allotted",
        "mode": "Employment"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen.",
      "Must be 18 years or older.",
      "Must reside in a rural area.",
      "Adult members of a rural household willing to do unskilled manual work are eligible.",
      "Household must obtain a Job Card."
    ],
    "notEligible": [
      "Persons below 18 years of age.",
      "Residents of urban areas.",
      "Persons unwilling to perform unskilled manual work."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Proof of Residence",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      },
      {
        "name": "Bank or Post Office Account Details",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Ration Card",
      "Voter ID"
    ],
    "application": {
      "modes": [
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Gram Panchayat",
          "name": "Local Gram Panchayat"
        },
        {
          "type": "Block Development Office",
          "name": "Programme Officer / BDO"
        },
        {
          "type": "Common Service Centre (CSC)",
          "name": "Common Service Centre"
        },
        {
          "type": "Official Portal",
          "name": "MGNREGA Portal",
          "website": "https://nrega.nic.in"
        }
      ],
      "steps": [
        "Visit the Gram Panchayat.",
        "Apply for a Job Card.",
        "Submit required identity and residence documents.",
        "Receive the Job Card after verification.",
        "Submit a written or verbal request for work.",
        "Employment is to be provided within 15 days of demand."
      ],
      "fee": "Free",
      "processingTime": "Job Card is generally issued within 15 days after verification.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Gram Panchayat",
        "purpose": "Job Card registration and work allocation"
      },
      {
        "name": "Block Development Office",
        "purpose": "Scheme implementation"
      },
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Citizen assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://nrega.nic.in",
      "applicationPortal": "https://nrega.nic.in",
      "officialGuidelines": "https://www.dord.gov.in/offerings/schemes-and-services/details/mahatma-gandhi-rural-employment-guarantee-act-mgnrega-gN2cTNtQWa"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "How many days of employment are guaranteed?",
        "answer": "Up to 100 days of wage employment per financial year for every eligible rural household."
      },
      {
        "question": "What happens if work is not provided?",
        "answer": "Eligible applicants may receive unemployment allowance as per the Act."
      }
    ],
    "relatedSchemes": [
      "Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
      "PM Awas Yojana - Gramin",
      "PM-KISAN"
    ],
    "importantNotes": [
      "Employment is a legal entitlement under the Act.",
      "No contractor or labour intermediary is permitted for MGNREGA works.",
      "Wages are transferred directly to the beneficiary's bank or post office account."
    ],
    "tags": [
      "employment",
      "rural",
      "livelihood",
      "government"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18
    }
  },
  {
    "id": "cg005",
    "name": "Pradhan Mantri Ujjwala Yojana",
    "shortName": "PMUY",
    "governmentLevel": "Central",
    "ministry": "Ministry of Petroleum and Natural Gas",
    "department": "Oil Marketing Companies (IOCL, BPCL & HPCL)",
    "category": "Women Welfare",
    "subCategory": "Clean Cooking Fuel (LPG)",
    "summary": "Pradhan Mantri Ujjwala Yojana (PMUY) provides deposit-free LPG connections to eligible women from poor households to promote clean cooking fuel, improve health, and reduce indoor air pollution.",
    "objective": "To provide clean cooking fuel to poor households by replacing traditional cooking fuels such as firewood, coal, and cow dung with LPG.",
    "launchYear": "2016",
    "status": "Active",
    "beneficiaryTypes": [
      "Women",
      "Poor Households",
      "BPL Families",
      "Rural Families",
      "Economically Weaker Families"
    ],
    "benefits": [
      {
        "title": "Deposit-Free LPG Connection",
        "description": "Government provides financial assistance for a new LPG connection.",
        "amount": "₹1,600",
        "frequency": "One-time",
        "mode": "Subsidy"
      },
      {
        "title": "Free First Refill",
        "description": "Eligible beneficiaries receive the first LPG refill free.",
        "amount": "Free",
        "frequency": "One-time",
        "mode": "In-kind"
      },
      {
        "title": "Free LPG Stove",
        "description": "A two-burner LPG stove is provided free to eligible beneficiaries.",
        "amount": "Free",
        "frequency": "One-time",
        "mode": "In-kind"
      },
      {
        "title": "LPG Subsidy",
        "description": "Eligible beneficiaries receive LPG subsidy as notified by the Government from time to time.",
        "amount": "As per Government notification",
        "frequency": "Eligible refills",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be an Indian citizen.",
      "Applicant must be a woman aged 18 years or above.",
      "Applicant must belong to an eligible poor household.",
      "No member of the household should already have an LPG connection.",
      "Applicant must have a bank account.",
      "Applicant should satisfy PMUY eligibility criteria prescribed by the Government."
    ],
    "notEligible": [
      "Women below 18 years of age.",
      "Households already having an LPG connection.",
      "Applicants not belonging to eligible poor households."
    ],
    "documents": [
      {
        "name": "Filled KYC Form",
        "mandatory": true
      },
      {
        "name": "Aadhaar Card of Applicant",
        "mandatory": true
      },
      {
        "name": "Aadhaar Cards of Adult Family Members",
        "mandatory": true
      },
      {
        "name": "Ration Card / Family Composition Document",
        "mandatory": true
      },
      {
        "name": "Bank Passbook / Cancelled Cheque",
        "mandatory": true
      },
      {
        "name": "Address Proof",
        "mandatory": true
      },
      {
        "name": "Recent Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Self Declaration (for migrant applicants)",
      "Other Government-issued family composition document"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "PMUY Portal",
          "website": "https://pmuy.gov.in"
        },
        {
          "type": "LPG Distributor",
          "name": "Nearest IOCL / BPCL / HPCL Distributor"
        },
        {
          "type": "Common Service Centre (CSC)",
          "name": "Common Service Centre"
        }
      ],
      "steps": [
        "Check eligibility under PMUY.",
        "Fill the PMUY KYC application form.",
        "Submit required documents.",
        "Choose your preferred LPG distributor.",
        "Complete verification.",
        "Receive LPG connection after approval."
      ],
      "fee": "Free",
      "processingTime": "Usually 7-30 days after successful verification.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Application assistance"
      },
      {
        "name": "IOCL LPG Distributor",
        "purpose": "New LPG connection"
      },
      {
        "name": "HP Gas Distributor",
        "purpose": "New LPG connection"
      },
      {
        "name": "Bharat Gas Distributor",
        "purpose": "New LPG connection"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://pmuy.gov.in",
      "applicationPortal": "https://pmuy.gov.in",
      "officialGuidelines": "https://pmuy.gov.in/faq.html",
      "downloadForms": "https://pmuy.gov.in/documents/KYC.pdf"
    },
    "helpline": {
      "phone": "1800-266-6696",
      "workingHours": "24x7",
      "tollFree": true
    },
    "faq": [
      {
        "question": "Who can apply?",
        "answer": "Adult women from eligible poor households without an existing LPG connection."
      },
      {
        "question": "Is there any application fee?",
        "answer": "No. The scheme is completely free for eligible beneficiaries."
      }
    ],
    "relatedSchemes": [
      "PM Awas Yojana",
      "PM Jan Dhan Yojana",
      "PM Suraksha Bima Yojana"
    ],
    "importantNotes": [
      "Only one LPG connection is permitted per eligible household under PMUY.",
      "Bank account should be linked for subsidy transfer.",
      "Original documents may be required during verification."
    ],
    "tags": [
      "women",
      "LPG",
      "central government",
      "fuel",
      "subsidy"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "gender": [
        "female"
      ]
    }
  },
  {
    "id": "cg006",
    "name": "Pradhan Mantri Awas Yojana - Urban",
    "shortName": "PMAY-U",
    "governmentLevel": "Central",
    "ministry": "Ministry of Housing and Urban Affairs",
    "department": "Ministry of Housing and Urban Affairs (MoHUA)",
    "category": "Housing",
    "subCategory": "Urban Housing",
    "summary": "Pradhan Mantri Awas Yojana - Urban (PMAY-U) is a flagship housing scheme that aims to provide all-weather (pucca) houses with basic civic amenities to eligible urban families. Assistance is provided through different verticals including Beneficiary-Led Construction (BLC), Affordable Housing in Partnership (AHP), and Interest Subsidy Scheme (ISS) under PMAY-U 2.0.",
    "objective": "To achieve 'Housing for All' by providing financial assistance for construction, purchase or enhancement of houses for eligible urban families.",
    "launchYear": "2015",
    "status": "Active",
    "beneficiaryTypes": [
      "Urban Poor",
      "Economically Weaker Section (EWS)",
      "Low Income Group (LIG)",
      "Middle Income Group (MIG)",
      "Slum Dwellers",
      "First-time Home Buyers"
    ],
    "benefits": [
      {
        "title": "Financial Assistance",
        "description": "Financial assistance for construction or enhancement of a pucca house under eligible PMAY-U components.",
        "amount": "As per approved PMAY-U component",
        "frequency": "One-time",
        "mode": "DBT"
      },
      {
        "title": "Interest Subsidy",
        "description": "Eligible beneficiaries may receive interest subsidy on housing loans under applicable PMAY-U 2.0 guidelines.",
        "amount": "As per scheme guidelines",
        "frequency": "One-time",
        "mode": "Subsidy"
      },
      {
        "title": "Pucca House",
        "description": "Support for construction or purchase of a permanent house with basic civic amenities.",
        "amount": "Varies",
        "frequency": "One-time",
        "mode": "Housing Assistance"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be an Indian citizen.",
      "Applicant must belong to an eligible urban household.",
      "Applicant or family should not own a pucca house anywhere in India.",
      "Applicant should satisfy income criteria applicable to the selected PMAY-U category.",
      "Applicant should not have previously received housing assistance under eligible Government housing schemes."
    ],
    "notEligible": [
      "Families already owning a pucca house anywhere in India.",
      "Applicants who have already availed eligible Government housing assistance under applicable conditions.",
      "Applicants who do not satisfy PMAY-U eligibility criteria."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Income Certificate",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Address Proof",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "PAN Card",
      "Property Documents",
      "Land Ownership Documents (where applicable)",
      "Caste Certificate (if applicable)"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "PMAY Urban",
          "website": "https://pmay-urban.gov.in"
        },
        {
          "type": "Urban Local Body",
          "name": "Municipality / Municipal Corporation"
        },
        {
          "type": "Common Service Centre (CSC)",
          "name": "Common Service Centre"
        },
        {
          "type": "State Nodal Agency",
          "name": "State Housing Department"
        }
      ],
      "steps": [
        "Verify eligibility under PMAY-U.",
        "Apply through the PMAY-U portal or CSC.",
        "Submit Aadhaar, income and supporting documents.",
        "Application is verified by the Urban Local Body.",
        "After approval, financial assistance is released in stages as per scheme guidelines."
      ],
      "fee": "Free",
      "processingTime": "Varies depending on verification and State implementation.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Urban Local Body (ULB)",
        "purpose": "Application and verification"
      },
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Online application assistance"
      },
      {
        "name": "Municipal Corporation",
        "purpose": "Housing scheme assistance"
      },
      {
        "name": "State Housing Department",
        "purpose": "Scheme implementation"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://pmay-urban.gov.in",
      "applicationPortal": "https://pmay-urban.gov.in",
      "officialGuidelines": "https://pmay-urban.gov.in/guideline"
    },
    "helpline": {
      "phone": "011-23063285",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Who can apply?",
        "answer": "Eligible urban families who do not own a pucca house and satisfy PMAY-U eligibility criteria."
      },
      {
        "question": "Can I apply online?",
        "answer": "Yes. Applications can be submitted through the PMAY-U portal or through a Common Service Centre."
      }
    ],
    "relatedSchemes": [
      "Pradhan Mantri Awas Yojana - Gramin",
      "Pradhan Mantri Jan Dhan Yojana",
      "PM SVANidhi"
    ],
    "importantNotes": [
      "Women ownership or co-ownership is encouraged under several PMAY-U components.",
      "Financial assistance varies depending on the approved PMAY-U component.",
      "Eligibility is verified by the concerned Urban Local Body."
    ],
    "tags": [
      "housing",
      "urban",
      "government",
      "home"
    ],
    "difficultyLevel": "Medium",
    "estimatedCompletionTime": "30-45 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18
    }
  },
  {
    "id": "cg007",
    "name": "Pradhan Mantri Awaas Yojana - Gramin",
    "shortName": "PMAY-G",
    "governmentLevel": "Central",
    "ministry": "Ministry of Rural Development",
    "department": "Department of Rural Development",
    "category": "Housing",
    "subCategory": "Rural Housing",
    "summary": "Pradhan Mantri Awaas Yojana - Gramin (PMAY-G) aims to provide pucca houses with basic amenities to eligible rural households that are houseless or living in kutcha or dilapidated houses.",
    "objective": "To provide safe, durable and affordable housing to eligible rural families and achieve 'Housing for All' in rural India.",
    "launchYear": "2016",
    "status": "Active",
    "beneficiaryTypes": [
      "Rural Households",
      "Houseless Families",
      "Families Living in Kutcha Houses",
      "Economically Weaker Rural Families"
    ],
    "benefits": [
      {
        "title": "Financial Assistance for House Construction",
        "description": "Financial assistance for construction of a pucca house.",
        "amount": "₹1,20,000 (Plain Areas) / ₹1,30,000 (Hilly, North Eastern States & UTs)",
        "frequency": "One-time",
        "mode": "Direct Benefit Transfer (DBT)"
      },
      {
        "title": "MGNREGA Wage Support",
        "description": "Up to 90–95 days of wage employment for house construction under MGNREGA (where applicable).",
        "amount": "As per MGNREGA wage rates",
        "frequency": "One-time",
        "mode": "DBT"
      },
      {
        "title": "Toilet Assistance",
        "description": "Financial assistance for construction of toilets through Swachh Bharat Mission (Gramin).",
        "amount": "As per SBM(G) guidelines",
        "frequency": "One-time",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen.",
      "Must reside in a rural area.",
      "Household should be identified as eligible through SECC 2011 / Awaas+ survey and Gram Sabha verification.",
      "Household should be houseless or living in a kutcha or dilapidated house.",
      "Applicant should satisfy PMAY-G exclusion criteria."
    ],
    "notEligible": [
      "Families owning a pucca house.",
      "Urban residents.",
      "Households excluded under PMAY-G exclusion criteria."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Mobile Number",
        "mandatory": true
      },
      {
        "name": "Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Job Card (if applicable)",
      "Land-related documents (if requested by State authorities)"
    ],
    "application": {
      "modes": [
        "Offline",
        "Online Survey (Awaas+ where applicable)"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "PMAY-G",
          "website": "https://pmayg.dord.gov.in"
        },
        {
          "type": "Gram Panchayat",
          "name": "Local Gram Panchayat"
        },
        {
          "type": "Block Development Office",
          "name": "Block Development Office (BDO)"
        },
        {
          "type": "Common Service Centre (CSC)",
          "name": "Common Service Centre"
        }
      ],
      "steps": [
        "Check eligibility through Gram Panchayat or PMAY-G survey.",
        "Verify beneficiary details.",
        "Complete Aadhaar e-KYC if required.",
        "Beneficiary is approved by Gram Sabha and State authorities.",
        "Financial assistance is released in installments through DBT as construction progresses."
      ],
      "fee": "Free",
      "processingTime": "Depends on beneficiary verification and State approval.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Gram Panchayat",
        "purpose": "Beneficiary identification and application assistance"
      },
      {
        "name": "Block Development Office",
        "purpose": "Scheme implementation"
      },
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Citizen assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://pmayg.dord.gov.in",
      "applicationPortal": "https://pmayg.dord.gov.in",
      "officialGuidelines": "https://pmayg.dord.gov.in"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Who is eligible?",
        "answer": "Eligible rural households identified through SECC/Awaas+ and approved by the Gram Sabha."
      },
      {
        "question": "Is the money paid directly?",
        "answer": "Yes. Assistance is transferred directly to the beneficiary's bank account through DBT."
      }
    ],
    "relatedSchemes": [
      "MGNREGA",
      "Swachh Bharat Mission (Gramin)",
      "Pradhan Mantri Awaas Yojana - Urban"
    ],
    "importantNotes": [
      "Beneficiaries are selected through SECC/Awaas+ data and Gram Sabha verification.",
      "Financial assistance is released in stages linked to construction progress.",
      "Aadhaar-based verification and bank account are generally required."
    ],
    "tags": [
      "housing",
      "rural",
      "government",
      "PMAY"
    ],
    "difficultyLevel": "Medium",
    "estimatedCompletionTime": "30-45 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18
    }
  },
  {
    "id": "cg008",
    "name": "e-Shram",
    "shortName": "e-Shram",
    "governmentLevel": "Central",
    "ministry": "Ministry of Labour and Employment",
    "department": "Ministry of Labour and Employment",
    "category": "Labour",
    "subCategory": "Unorganised Workers",
    "summary": "e-Shram is the National Database of Unorganised Workers (NDUW) launched by the Government of India to register unorganised workers and enable them to access social security and welfare schemes through a single national platform.",
    "objective": "To create a comprehensive Aadhaar-based national database of unorganised workers and improve delivery of government welfare and social security benefits.",
    "launchYear": "2021",
    "status": "Active",
    "beneficiaryTypes": [
      "Unorganised Workers",
      "Migrant Workers",
      "Construction Workers",
      "Gig Workers",
      "Platform Workers",
      "Street Vendors",
      "Domestic Workers",
      "Agricultural Workers",
      "Self-employed Workers"
    ],
    "benefits": [
      {
        "title": "e-Shram Card (UAN)",
        "description": "Unique Universal Account Number (UAN) issued to every registered worker.",
        "amount": "Free",
        "frequency": "One-time",
        "mode": "Digital Card"
      },
      {
        "title": "Access to Government Welfare Schemes",
        "description": "Enables integration with Central and State welfare schemes for eligible workers.",
        "amount": "Scheme Dependent",
        "frequency": "Varies",
        "mode": "Government Benefits"
      },
      {
        "title": "National Worker Database",
        "description": "Worker details are maintained in the National Database of Unorganised Workers.",
        "amount": "N/A",
        "frequency": "Continuous",
        "mode": "Digital"
      },
      {
        "title": "Employment & Skill Linkages",
        "description": "Registered workers may be connected to employment opportunities and skill development programmes.",
        "amount": "Applicable",
        "frequency": "As Available",
        "mode": "Digital"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen.",
      "Must be an unorganised worker.",
      "Age should be between 16 and 59 years.",
      "Should not be a member of EPFO or ESIC.",
      "Should not be covered under the Government-funded National Pension System (NPS)."
    ],
    "notEligible": [
      "Members of EPFO.",
      "Members of ESIC.",
      "Government-funded NPS subscribers.",
      "Workers below 16 years or above 59 years."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Aadhaar-linked Mobile Number",
        "mandatory": true
      },
      {
        "name": "Savings Bank Account with IFSC",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Occupation Proof",
      "Address Proof"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "e-Shram Portal",
          "website": "https://eshram.gov.in"
        },
        {
          "type": "Common Service Centre (CSC)",
          "name": "Common Service Centre"
        },
        {
          "type": "Department of Posts",
          "name": "India Post"
        },
        {
          "type": "UMANG App",
          "name": "UMANG"
        }
      ],
      "steps": [
        "Visit the e-Shram Portal or CSC.",
        "Complete Aadhaar authentication.",
        "Enter personal and occupational details.",
        "Provide bank account details.",
        "Submit the application.",
        "Download the e-Shram Card with UAN."
      ],
      "fee": "Free",
      "processingTime": "Usually immediate after successful Aadhaar verification.",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Registration assistance"
      },
      {
        "name": "Department of Posts",
        "purpose": "Registration assistance"
      },
      {
        "name": "Labour Department Office",
        "purpose": "Worker assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://eshram.gov.in",
      "applicationPortal": "https://eshram.gov.in",
      "officialGuidelines": "https://eshram.gov.in/e-shram-portal"
    },
    "helpline": {
      "phone": "14434 / 1800-889-6811",
      "workingHours": "9:00 AM - 6:00 PM (Daily)",
      "tollFree": true
    },
    "faq": [
      {
        "question": "Is registration free?",
        "answer": "Yes. Registration on the e-Shram portal is completely free."
      },
      {
        "question": "Who can register?",
        "answer": "Any eligible unorganised worker aged 16-59 years who is not covered under EPFO, ESIC or Government-funded NPS."
      }
    ],
    "relatedSchemes": [
      "Atal Pension Yojana",
      "Pradhan Mantri Shram Yogi Maandhan",
      "PM Suraksha Bima Yojana",
      "PM Jeevan Jyoti Bima Yojana"
    ],
    "importantNotes": [
      "Registration generates a unique Universal Account Number (UAN).",
      "Registration does not automatically guarantee monetary benefits.",
      "The e-Shram database helps workers access various Central and State welfare schemes."
    ],
    "tags": [
      "labour",
      "worker",
      "government",
      "social security"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "10-15 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 16,
      "maxAge": 59,
      "occupation": [
        "daily-wage"
      ]
    }
  },
  {
    "id": "cg009",
    "name": "Atal Pension Yojana",
    "shortName": "APY",
    "governmentLevel": "Central",
    "ministry": "Ministry of Finance",
    "department": "Department of Financial Services",
    "category": "Pension",
    "subCategory": "Retirement Pension",
    "summary": "Atal Pension Yojana (APY) is a Government of India pension scheme that provides a guaranteed monthly pension after the age of 60 years. It is aimed at encouraging citizens, especially workers in the unorganised sector, to save for retirement through regular contributions.",
    "objective": "To provide a guaranteed monthly pension and improve old-age income security for Indian citizens.",
    "launchYear": "2015",
    "status": "Active",
    "beneficiaryTypes": [
      "Workers in the Unorganised Sector",
      "Self-employed Individuals",
      "Small Business Owners",
      "Indian Citizens"
    ],
    "benefits": [
      {
        "title": "Guaranteed Monthly Pension",
        "description": "Government guarantees a fixed monthly pension after the subscriber turns 60 years.",
        "amount": "₹1,000 / ₹2,000 / ₹3,000 / ₹4,000 / ₹5,000 per month",
        "frequency": "Monthly",
        "mode": "Bank Transfer"
      },
      {
        "title": "Pension for Spouse",
        "description": "After the subscriber's death, the spouse receives the same pension.",
        "amount": "Same as subscriber",
        "frequency": "Monthly",
        "mode": "Bank Transfer"
      },
      {
        "title": "Nominee Benefit",
        "description": "After the death of both subscriber and spouse, the accumulated pension corpus is paid to the nominee.",
        "amount": "As per pension corpus",
        "frequency": "One-time",
        "mode": "Bank Transfer"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen.",
      "Age should be between 18 and 40 years.",
      "Must have a Savings Bank Account or Post Office Savings Bank Account.",
      "Must contribute until attaining 60 years of age.",
      "Only one APY account is permitted per person."
    ],
    "notEligible": [
      "Persons below 18 years of age.",
      "Persons above 40 years of age.",
      "Individuals without a Savings Bank/Post Office Savings Account.",
      "Persons already having an APY account."
    ],
    "documents": [
      {
        "name": "Savings Bank / Post Office Savings Account",
        "mandatory": true
      },
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Mobile Number",
        "mandatory": false
      },
      {
        "name": "Nominee Details",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "PAN Card"
    ],
    "application": {
      "modes": [
        "Offline",
        "Online"
      ],
      "whereToApply": [
        {
          "type": "Bank",
          "name": "Any Participating Bank"
        },
        {
          "type": "Post Office",
          "name": "India Post"
        },
        {
          "type": "Official Website",
          "name": "Department of Financial Services",
          "website": "https://financialservices.gov.in/atal-pension-yojana"
        }
      ],
      "steps": [
        "Visit your bank or post office.",
        "Fill the APY registration form.",
        "Submit Aadhaar and bank details.",
        "Choose the desired monthly pension amount.",
        "Authorize auto-debit from your savings account.",
        "Receive APY confirmation."
      ],
      "fee": "Free",
      "processingTime": "Usually 1-7 working days.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Participating Banks",
        "purpose": "Registration and account management"
      },
      {
        "name": "India Post",
        "purpose": "Registration"
      },
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Application assistance (where available)"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://financialservices.gov.in/atal-pension-yojana",
      "officialGuidelines": "https://financialservices.gov.in/atal-pension-yojana"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Bank Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "When will I receive pension?",
        "answer": "After attaining 60 years of age."
      },
      {
        "question": "Can I have multiple APY accounts?",
        "answer": "No. Only one APY account is permitted per subscriber."
      }
    ],
    "relatedSchemes": [
      "PM Jeevan Jyoti Bima Yojana",
      "PM Suraksha Bima Yojana",
      "e-Shram"
    ],
    "importantNotes": [
      "Monthly contribution depends on the age at entry and chosen pension amount.",
      "Contributions are automatically debited from the savings account.",
      "Subscribers can choose pension slabs between ₹1,000 and ₹5,000 per month."
    ],
    "tags": [
      "pension",
      "retirement",
      "finance",
      "government"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "15-20 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "maxAge": 40
    }
  },
  {
    "id": "cg010",
    "name": "Sukanya Samriddhi Yojana",
    "shortName": "SSY",
    "governmentLevel": "Central",
    "ministry": "Ministry of Finance",
    "department": "Department of Economic Affairs",
    "category": "Girl Child Savings",
    "subCategory": "Small Savings Scheme",
    "summary": "Sukanya Samriddhi Yojana (SSY) is a Government of India backed small savings scheme for the girl child, launched under the Beti Bachao Beti Padhao initiative. It encourages parents or legal guardians to build long-term savings for a girl's education and future expenses.",
    "objective": "To promote the financial security and education of the girl child through long-term savings with government-backed returns.",
    "launchYear": "2015",
    "status": "Active",
    "beneficiaryTypes": [
      "Girl Child",
      "Parents",
      "Legal Guardians"
    ],
    "benefits": [
      {
        "title": "High Interest Savings",
        "description": "Deposits earn interest at the rate notified by the Government from time to time.",
        "amount": "Current interest rate as notified by Government",
        "frequency": "Quarterly revised",
        "mode": "Savings Account"
      },
      {
        "title": "Tax Benefits",
        "description": "Eligible for tax benefits under Section 80C of the Income Tax Act. Interest and maturity proceeds are tax-exempt under applicable rules.",
        "amount": "As per Income Tax Act",
        "frequency": "Annual",
        "mode": "Tax Benefit"
      },
      {
        "title": "Education Support",
        "description": "Partial withdrawal is permitted for higher education subject to scheme rules.",
        "amount": "Up to 50% of eligible balance",
        "frequency": "One or more withdrawals as permitted",
        "mode": "Bank Transfer"
      }
    ],
    "eligibilityNotes": [
      "Girl child must be an Indian resident.",
      "Account can be opened from birth until the girl attains 10 years of age.",
      "Account can be opened by a parent or legal guardian.",
      "Only one account per girl child is permitted.",
      "Normally, a maximum of two girl child accounts per family is allowed (subject to exceptions for twins/triplets)."
    ],
    "notEligible": [
      "Girl child above 10 years of age at the time of opening (except where permitted under notified rules).",
      "Non-resident girl child.",
      "More than one account in the name of the same girl child."
    ],
    "documents": [
      {
        "name": "Birth Certificate of Girl Child",
        "mandatory": true
      },
      {
        "name": "Identity Proof of Parent/Guardian",
        "mandatory": true
      },
      {
        "name": "Address Proof of Parent/Guardian",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Aadhaar Card",
      "PAN Card"
    ],
    "application": {
      "modes": [
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Post Office",
          "name": "India Post"
        },
        {
          "type": "Authorized Bank",
          "name": "Any Authorized Commercial Bank"
        }
      ],
      "steps": [
        "Visit an authorized bank or post office.",
        "Fill the Sukanya Samriddhi Account application form.",
        "Submit the required documents.",
        "Make the initial deposit.",
        "Account is opened after verification."
      ],
      "fee": "Free",
      "processingTime": "Usually same day to a few working days.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "India Post",
        "purpose": "Account opening and servicing"
      },
      {
        "name": "Authorized Banks",
        "purpose": "Account opening and servicing"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://dea.gov.in/budget-division/sukanya-samriddhi-account",
      "officialGuidelines": "https://www.nsiindia.gov.in"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Bank/Post Office Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Who can open the account?",
        "answer": "A parent or legal guardian can open the account in the name of a girl child below 10 years of age."
      },
      {
        "question": "Where can the account be opened?",
        "answer": "At authorized banks and India Post offices."
      }
    ],
    "relatedSchemes": [
      "Beti Bachao Beti Padhao",
      "Public Provident Fund"
    ],
    "importantNotes": [
      "Deposits can be made for 15 years from the date of opening.",
      "The account matures after 21 years from the date of opening unless closed earlier as per scheme rules.",
      "Interest rates are notified by the Government and may change periodically."
    ],
    "tags": [
      "girl child",
      "savings",
      "finance",
      "government"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "15-20 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 0,
      "maxAge": 10,
      "gender": [
        "female"
      ]
    }
  },
  {
    "id": "cg011",
    "name": "Pradhan Mantri Mudra Yojana",
    "shortName": "PMMY (MUDRA)",
    "governmentLevel": "Central",
    "ministry": "Ministry of Finance",
    "department": "Department of Financial Services",
    "category": "Business Loan",
    "subCategory": "Micro Enterprise Finance",
    "summary": "Pradhan Mantri Mudra Yojana (PMMY) provides collateral-free loans to non-corporate, non-farm micro and small enterprises for starting, expanding, or modernizing businesses. Loans are provided through eligible banks, NBFCs, MFIs, and other Member Lending Institutions (MLIs).",
    "objective": "To provide institutional credit to micro and small businesses and promote entrepreneurship and self-employment.",
    "launchYear": "2015",
    "status": "Active",
    "beneficiaryTypes": [
      "Micro Entrepreneurs",
      "Small Business Owners",
      "Startups",
      "Shopkeepers",
      "Manufacturers",
      "Service Providers",
      "Artisans",
      "Self-employed Individuals"
    ],
    "benefits": [
      {
        "title": "Collateral-Free Business Loan",
        "description": "Business loans are provided without collateral.",
        "amount": "Up to ₹20 lakh (eligible categories)",
        "frequency": "One-time",
        "mode": "Loan"
      },
      {
        "title": "Loan Categories",
        "description": "Loans are classified according to business stage.",
        "amount": "Shishu: Up to ₹50,000 | Kishore: Above ₹50,000–₹5 lakh | Tarun: Above ₹5 lakh–₹10 lakh | Tarun Plus: Above ₹10 lakh–₹20 lakh (eligible borrowers)",
        "frequency": "One-time",
        "mode": "Loan"
      },
      {
        "title": "Working Capital / Term Loan",
        "description": "Loan can be used for working capital or business expansion.",
        "amount": "As sanctioned",
        "frequency": "One-time",
        "mode": "Loan"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen.",
      "Must have a viable non-farm income-generating business.",
      "Business may be in manufacturing, trading, services or eligible allied agricultural activities.",
      "Applicant should satisfy the lending institution's credit norms.",
      "Business should require funding under PMMY limits."
    ],
    "notEligible": [
      "Activities not covered under PMMY.",
      "Applicants failing lender credit assessment.",
      "Loan defaulters as per lender norms."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "PAN Card",
        "mandatory": true
      },
      {
        "name": "Bank Account Details",
        "mandatory": true
      },
      {
        "name": "Business Plan / Project Report",
        "mandatory": true
      },
      {
        "name": "Business Address Proof",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "GST Registration",
      "Udyam Registration",
      "Trade License",
      "Income Tax Returns",
      "Quotation for Machinery/Equipment"
    ],
    "application": {
      "modes": [
        "Offline",
        "Online"
      ],
      "whereToApply": [
        {
          "type": "Public Sector Bank",
          "name": "Participating Bank Branch"
        },
        {
          "type": "Private Bank",
          "name": "Participating Bank Branch"
        },
        {
          "type": "Regional Rural Bank",
          "name": "RRB"
        },
        {
          "type": "Small Finance Bank",
          "name": "Eligible Small Finance Bank"
        },
        {
          "type": "NBFC / MFI",
          "name": "Eligible Lending Institution"
        },
        {
          "type": "Official Portal",
          "name": "JanSamarth Portal",
          "website": "https://www.jansamarth.in"
        }
      ],
      "steps": [
        "Choose an eligible lending institution.",
        "Prepare the business proposal.",
        "Submit the PMMY application with required documents.",
        "Bank evaluates the proposal.",
        "Loan is sanctioned after approval.",
        "Amount is credited to the borrower's account."
      ],
      "fee": "Generally Nil (as per lender guidelines)",
      "processingTime": "Varies by lending institution.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Banks",
        "purpose": "Loan application"
      },
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Application assistance"
      },
      {
        "name": "District Industries Centre (DIC)",
        "purpose": "Business guidance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.financialservices.gov.in/pradhan-mantri-mudra-yojana-pmmy",
      "applicationPortal": "https://www.jansamarth.in",
      "officialGuidelines": "https://www.financialservices.gov.in/pradhan-mantri-mudra-yojana-pmmy"
    },
    "helpline": {
      "phone": "Contact the participating lending institution",
      "workingHours": "Bank Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Is collateral required?",
        "answer": "No. PMMY loans are collateral-free."
      },
      {
        "question": "Who can apply?",
        "answer": "Individuals and eligible micro or small business enterprises engaged in non-farm income-generating activities."
      }
    ],
    "relatedSchemes": [
      "Stand-Up India",
      "PM Vishwakarma",
      "Startup India"
    ],
    "importantNotes": [
      "Loan approval depends on the lending institution's appraisal.",
      "Interest rates are decided by the lending institution.",
      "Business activity must be eligible under PMMY."
    ],
    "tags": [
      "business",
      "loan",
      "entrepreneurship",
      "finance"
    ],
    "difficultyLevel": "Medium",
    "estimatedCompletionTime": "30-60 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "occupation": [
        "self-employed"
      ]
    }
  },
  {
    "id": "cg012",
    "name": "PM Vishwakarma",
    "shortName": "PM Vishwakarma",
    "governmentLevel": "Central",
    "ministry": "Ministry of Micro, Small and Medium Enterprises (MSME)",
    "department": "Ministry of MSME",
    "category": "Traditional Artisans",
    "subCategory": "Skill Development & Enterprise Support",
    "summary": "PM Vishwakarma is a Central Sector Scheme that provides end-to-end support to traditional artisans and craftspeople engaged in 18 notified trades. The scheme offers recognition, skill training, toolkit incentives, collateral-free credit, digital transaction incentives, and marketing support to improve livelihoods and strengthen traditional occupations.",
    "objective": "To strengthen traditional artisans by providing financial assistance, modern tools, skill upgradation, and market access.",
    "launchYear": "2023",
    "status": "Active",
    "beneficiaryTypes": [
      "Traditional Artisans",
      "Craftspeople",
      "Self-employed Workers"
    ],
    "benefits": [
      {
        "title": "PM Vishwakarma Certificate & ID Card",
        "description": "Official recognition as a Vishwakarma artisan.",
        "amount": "Free",
        "frequency": "One-time",
        "mode": "Digital & Physical"
      },
      {
        "title": "Skill Training",
        "description": "Basic and advanced skill training with stipend.",
        "amount": "₹500 per day during training",
        "frequency": "As applicable",
        "mode": "DBT"
      },
      {
        "title": "Toolkit Incentive",
        "description": "Support for purchasing modern tools.",
        "amount": "₹15,000 e-voucher",
        "frequency": "One-time",
        "mode": "e-Voucher"
      },
      {
        "title": "Collateral-Free Loan",
        "description": "Enterprise development loan at concessional interest.",
        "amount": "Up to ₹3 lakh (₹1 lakh + ₹2 lakh)",
        "frequency": "As eligible",
        "mode": "Loan"
      },
      {
        "title": "Marketing Support",
        "description": "Branding, quality certification, advertising, packaging and e-commerce support.",
        "amount": "As applicable",
        "frequency": "Ongoing",
        "mode": "Government Support"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen.",
      "Must be at least 18 years old.",
      "Must be engaged in one of the 18 notified traditional trades.",
      "Should be self-employed in the eligible trade.",
      "Only one beneficiary per family is generally permitted under the scheme.",
      "Applicant should not have availed benefits under PMEGP, PM SVANidhi or Mudra for the same enterprise during the specified period as per scheme guidelines."
    ],
    "notEligible": [
      "Applicants below 18 years of age.",
      "Persons not engaged in any of the 18 notified trades.",
      "Applicants violating scheme eligibility conditions."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Mobile Number",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Occupation Proof (if required)",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "PAN Card",
      "Ration Card",
      "Caste Certificate (if applicable)"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "PM Vishwakarma Portal",
          "website": "https://pmvishwakarma.gov.in"
        },
        {
          "type": "Common Service Centre (CSC)",
          "name": "Common Service Centre"
        },
        {
          "type": "Gram Panchayat / Urban Local Body",
          "name": "Local Verification Authority"
        }
      ],
      "steps": [
        "Visit a Common Service Centre (CSC) or the official portal.",
        "Complete Aadhaar biometric authentication.",
        "Submit personal and occupational details.",
        "Application is verified by the local authority.",
        "Receive PM Vishwakarma Certificate and ID.",
        "Become eligible for training, toolkit incentive and loan benefits."
      ],
      "fee": "Free",
      "processingTime": "Depends on verification by local authorities.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Registration"
      },
      {
        "name": "District Industries Centre (DIC)",
        "purpose": "Scheme assistance"
      },
      {
        "name": "MSME Development Office",
        "purpose": "Guidance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://pmvishwakarma.gov.in",
      "applicationPortal": "https://pmvishwakarma.gov.in",
      "officialGuidelines": "https://pmvishwakarma.gov.in"
    },
    "helpline": {
      "phone": "1800-267-7777",
      "email": "support@pmvishwakarma.gov.in",
      "workingHours": "Government Working Hours",
      "tollFree": true
    },
    "faq": [
      {
        "question": "How many trades are covered?",
        "answer": "The scheme covers 18 traditional artisan trades."
      },
      {
        "question": "Is collateral required for the loan?",
        "answer": "No. Loans under PM Vishwakarma are collateral-free."
      }
    ],
    "relatedSchemes": [
      "PM Mudra Yojana",
      "Stand-Up India",
      "Startup India"
    ],
    "importantNotes": [
      "Registration is carried out through CSCs using Aadhaar biometric authentication.",
      "Beneficiaries receive a PM Vishwakarma Certificate and ID Card.",
      "Training is mandatory before becoming eligible for the first loan tranche."
    ],
    "tags": [
      "artisan",
      "skill",
      "MSME",
      "loan",
      "government"
    ],
    "difficultyLevel": "Medium",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "occupation": [
        "self-employed"
      ]
    }
  },
  {
    "id": "cg013",
    "name": "PM POSHAN (Pradhan Mantri Poshan Shakti Nirman)",
    "shortName": "PM POSHAN",
    "governmentLevel": "Central",
    "ministry": "Ministry of Education",
    "department": "Department of School Education and Literacy",
    "category": "School Education",
    "subCategory": "School Nutrition",
    "summary": "PM POSHAN provides one hot cooked nutritious meal to eligible school children studying in Government and Government-aided schools to improve nutrition, attendance and learning.",
    "objective": "To improve the nutritional status of school children and encourage enrolment, attendance and retention in schools.",
    "launchYear": "2021",
    "status": "Active",
    "beneficiaryTypes": [
      "School Children",
      "Government School Students",
      "Government Aided School Students",
      "Bal Vatika Students"
    ],
    "benefits": [
      {
        "title": "Free Nutritious Mid-Day Meal",
        "description": "One cooked meal on every school working day.",
        "amount": "Free",
        "frequency": "Daily",
        "mode": "In-kind"
      }
    ],
    "eligibilityNotes": [
      "Student must be enrolled in an eligible Government or Government-aided school.",
      "Applicable for Bal Vatika and Classes I to VIII.",
      "Student should regularly attend school."
    ],
    "notEligible": [
      "Students studying in private schools not covered under PM POSHAN.",
      "Students above Class VIII."
    ],
    "documents": [
      {
        "name": "School Admission Record",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Aadhaar Card (if required by State)"
    ],
    "application": {
      "modes": [
        "Automatic through School"
      ],
      "whereToApply": [
        {
          "type": "Government School",
          "name": "Government School"
        },
        {
          "type": "Government Aided School",
          "name": "Government Aided School"
        }
      ],
      "steps": [
        "Enroll in an eligible Government or Government-aided school.",
        "Attend school regularly.",
        "Eligible students automatically receive meals."
      ],
      "fee": "Free",
      "processingTime": "No separate application required.",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "School Headmaster",
        "purpose": "Scheme assistance"
      },
      {
        "name": "District Education Office",
        "purpose": "Scheme information"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://pmposhan.education.gov.in",
      "officialGuidelines": "https://pmposhan.education.gov.in/guideline.html"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "School Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Do students need to apply separately?",
        "answer": "No. Eligible students automatically receive meals through their school."
      },
      {
        "question": "Who receives meals?",
        "answer": "Students of Bal Vatika and Classes I to VIII in eligible Government and Government-aided schools."
      }
    ],
    "relatedSchemes": [
      "ICDS",
      "PMMVY"
    ],
    "importantNotes": [
      "Meals are served only on school working days.",
      "No online registration is required.",
      "The scheme is implemented through schools."
    ],
    "tags": [
      "education",
      "nutrition",
      "children",
      "government"
    ],
    "difficultyLevel": "Very Easy",
    "estimatedCompletionTime": "No application required",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 4,
      "maxAge": 14,
      "occupation": [
        "student"
      ]
    }
  },
  {
    "id": "cg014",
    "name": "Pradhan Mantri Matru Vandana Yojana",
    "shortName": "PMMVY",
    "governmentLevel": "Central",
    "ministry": "Ministry of Women and Child Development",
    "department": "Mission Shakti Division",
    "category": "Maternal Benefit",
    "subCategory": "Maternity Assistance",
    "summary": "Pradhan Mantri Matru Vandana Yojana (PMMVY) is a maternity benefit scheme that provides cash incentives through Direct Benefit Transfer (DBT) to eligible pregnant women and lactating mothers to support nutrition, rest and healthcare during pregnancy and after childbirth.",
    "objective": "To provide partial wage compensation during pregnancy and promote proper maternal and child healthcare practices.",
    "launchYear": "2017",
    "status": "Active",
    "beneficiaryTypes": [
      "Pregnant Women",
      "Lactating Mothers"
    ],
    "benefits": [
      {
        "title": "Cash Assistance",
        "description": "Cash incentive for eligible beneficiaries through Direct Benefit Transfer.",
        "amount": "₹5,000 for eligible first child; additional benefits applicable under PMMVY 2.0 for eligible second girl child as per guidelines",
        "frequency": "One-time (in instalments)",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen.",
      "Must be an eligible pregnant woman or lactating mother.",
      "Should not be in regular employment with the Central Government, State Government or Public Sector Undertaking.",
      "Should not already receive similar maternity benefits under any other law.",
      "Must satisfy PMMVY eligibility conditions under Mission Shakti guidelines."
    ],
    "notEligible": [
      "Women employed in Central Government, State Government or PSUs.",
      "Women already receiving similar maternity benefits under any law.",
      "Applicants not meeting PMMVY eligibility conditions."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Mother and Child Protection (MCP) Card",
        "mandatory": true
      },
      {
        "name": "Bank Account Passbook",
        "mandatory": true
      },
      {
        "name": "Mobile Number",
        "mandatory": true
      },
      {
        "name": "Eligibility Proof (where applicable)",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Ration Card",
      "PM-JAY Card",
      "e-Shram Card",
      "Income Certificate"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "PMMVY Portal",
          "website": "https://pmmvy.wcd.gov.in"
        },
        {
          "type": "UMANG",
          "name": "UMANG Portal",
          "website": "https://web.umang.gov.in"
        },
        {
          "type": "Anganwadi Centre",
          "name": "Nearest Anganwadi Centre"
        },
        {
          "type": "ASHA / ANM",
          "name": "ASHA Worker or ANM"
        }
      ],
      "steps": [
        "Register pregnancy.",
        "Visit Anganwadi Centre or apply online.",
        "Submit required documents.",
        "Application is verified.",
        "Benefit is credited through DBT."
      ],
      "fee": "Free",
      "processingTime": "Varies by State verification process.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Anganwadi Centre",
        "purpose": "Registration and assistance"
      },
      {
        "name": "ASHA Worker",
        "purpose": "Application support"
      },
      {
        "name": "Primary Health Centre (PHC)",
        "purpose": "Maternal health services"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://pmmvy.wcd.gov.in",
      "applicationPortal": "https://pmmvy.wcd.gov.in",
      "officialGuidelines": "https://pmmvy.wcd.gov.in"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "How is the benefit paid?",
        "answer": "Through Direct Benefit Transfer (DBT) into the beneficiary's bank account."
      },
      {
        "question": "Where can I apply?",
        "answer": "At the PMMVY Portal, Anganwadi Centre, ASHA/ANM or through UMANG."
      }
    ],
    "relatedSchemes": [
      "Janani Suraksha Yojana",
      "PM POSHAN",
      "Ayushman Bharat PM-JAY"
    ],
    "importantNotes": [
      "Benefits are released only after verification.",
      "Applications should be submitted within the prescribed timelines.",
      "Aadhaar-linked bank account is recommended for DBT."
    ],
    "tags": [
      "women",
      "maternal",
      "health",
      "government"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "maxAge": 55,
      "gender": [
        "female"
      ],
      "maxIncome": 800000,
      "incomeBasis": "household"
    }
  },
  {
    "id": "cg015",
    "name": "Pradhan Mantri Suraksha Bima Yojana",
    "shortName": "PMSBY",
    "governmentLevel": "Central",
    "ministry": "Ministry of Finance",
    "department": "Department of Financial Services",
    "category": "Accident Insurance",
    "subCategory": "Personal Accident Insurance",
    "summary": "Pradhan Mantri Suraksha Bima Yojana (PMSBY) is a Government-backed personal accident insurance scheme providing financial protection against accidental death and disability at a very low annual premium.",
    "objective": "To provide affordable accidental insurance coverage to all eligible bank account holders.",
    "launchYear": "2015",
    "status": "Active",
    "beneficiaryTypes": [
      "Indian Citizens",
      "Bank Account Holders",
      "Workers",
      "Self-employed Persons",
      "Students"
    ],
    "benefits": [
      {
        "title": "Accidental Death Cover",
        "description": "Insurance benefit in case of accidental death.",
        "amount": "₹2,00,000",
        "frequency": "One-time",
        "mode": "Insurance Claim"
      },
      {
        "title": "Permanent Total Disability",
        "description": "Benefit for total and irrecoverable disability due to accident.",
        "amount": "₹2,00,000",
        "frequency": "One-time",
        "mode": "Insurance Claim"
      },
      {
        "title": "Permanent Partial Disability",
        "description": "Benefit for partial permanent disability.",
        "amount": "₹1,00,000",
        "frequency": "One-time",
        "mode": "Insurance Claim"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen (NRIs with eligible Indian bank accounts may also enroll subject to scheme conditions).",
      "Age should be between 18 and 70 years.",
      "Must have a Savings Bank or Post Office Savings Account.",
      "Must consent to annual auto-debit of premium.",
      "Only one PMSBY account is permitted per person."
    ],
    "notEligible": [
      "Persons below 18 years.",
      "Persons above 70 years.",
      "Individuals without an eligible Savings Bank/Post Office account.",
      "Multiple enrollments by the same individual."
    ],
    "documents": [
      {
        "name": "Savings Bank / Post Office Account",
        "mandatory": true
      },
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Mobile Number",
        "mandatory": false
      }
    ],
    "optionalDocuments": [
      "PAN Card",
      "Nominee Details"
    ],
    "application": {
      "modes": [
        "Offline",
        "Online"
      ],
      "whereToApply": [
        {
          "type": "Bank",
          "name": "Participating Bank"
        },
        {
          "type": "Post Office",
          "name": "India Post"
        },
        {
          "type": "Internet Banking",
          "name": "Participating Bank Net Banking"
        },
        {
          "type": "Mobile Banking",
          "name": "Participating Bank Mobile App"
        }
      ],
      "steps": [
        "Visit a participating bank or post office, or use internet/mobile banking.",
        "Submit the PMSBY consent form.",
        "Authorize annual auto-debit of premium.",
        "Enrollment is confirmed after successful premium deduction."
      ],
      "fee": "₹20 annual premium",
      "processingTime": "Usually immediate to 7 working days.",
      "renewalRequired": true,
      "renewalFrequency": "Yearly",
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Participating Banks",
        "purpose": "Enrollment and claim assistance"
      },
      {
        "name": "India Post",
        "purpose": "Enrollment"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.financialservices.gov.in/pmsby",
      "officialGuidelines": "https://www.financialservices.gov.in/pmsby",
      "downloadForms": "https://www.indiapost.gov.in/insurance-services/pmsby"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Bank Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "What is the annual premium?",
        "answer": "₹20 per year, automatically debited from the linked bank or post office account."
      },
      {
        "question": "What is the insurance cover?",
        "answer": "₹2 lakh for accidental death or total permanent disability and ₹1 lakh for partial permanent disability."
      }
    ],
    "relatedSchemes": [
      "PM Jeevan Jyoti Bima Yojana",
      "Atal Pension Yojana",
      "Pradhan Mantri Jan Dhan Yojana"
    ],
    "importantNotes": [
      "The policy is valid from 1 June to 31 May each year.",
      "The premium is renewed through annual auto-debit.",
      "Only one enrollment per individual is allowed."
    ],
    "tags": [
      "insurance",
      "accident",
      "finance",
      "government"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "10-15 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "maxAge": 70
    }
  },
  {
    "id": "cg016",
    "name": "Pradhan Mantri Jeevan Jyoti Bima Yojana",
    "shortName": "PMJJBY",
    "governmentLevel": "Central",
    "ministry": "Ministry of Finance",
    "department": "Department of Financial Services",
    "category": "Life Insurance",
    "subCategory": "Term Life Insurance",
    "summary": "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) is a Government-backed one-year renewable term life insurance scheme that provides financial protection against death due to any cause for eligible bank account holders.",
    "objective": "To provide affordable life insurance coverage to eligible citizens through participating banks and post offices.",
    "launchYear": "2015",
    "status": "Active",
    "beneficiaryTypes": [
      "Indian Citizens",
      "Bank Account Holders",
      "Workers",
      "Self-employed Persons",
      "Homemakers"
    ],
    "benefits": [
      {
        "title": "Life Insurance Cover",
        "description": "Insurance benefit payable on death due to any reason.",
        "amount": "₹2,00,000",
        "frequency": "One-time",
        "mode": "Insurance Claim"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen (NRIs with eligible bank accounts may also enroll subject to scheme conditions).",
      "Age should be between 18 and 50 years.",
      "Must have a Savings Bank or Post Office Savings Account.",
      "Must consent to annual auto-debit of premium.",
      "Only one PMJJBY account is permitted per person."
    ],
    "notEligible": [
      "Persons below 18 years.",
      "Persons above 50 years at enrollment.",
      "Individuals without an eligible Savings Bank/Post Office account.",
      "Multiple enrollments by the same person."
    ],
    "documents": [
      {
        "name": "Savings Bank / Post Office Account",
        "mandatory": true
      },
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Consent-cum-Declaration Form",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "PAN Card",
      "Nominee Details",
      "Mobile Number"
    ],
    "application": {
      "modes": [
        "Offline",
        "Online"
      ],
      "whereToApply": [
        {
          "type": "Bank",
          "name": "Participating Bank"
        },
        {
          "type": "Post Office",
          "name": "India Post"
        },
        {
          "type": "Internet Banking",
          "name": "Participating Bank Net Banking"
        },
        {
          "type": "Mobile Banking",
          "name": "Participating Bank Mobile App"
        }
      ],
      "steps": [
        "Visit a participating bank or post office, or use internet/mobile banking.",
        "Submit the PMJJBY enrollment form.",
        "Provide consent for annual premium auto-debit.",
        "Enrollment is activated after successful premium deduction."
      ],
      "fee": "₹436 annual premium",
      "processingTime": "Usually immediate to 7 working days.",
      "renewalRequired": true,
      "renewalFrequency": "Yearly",
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Participating Banks",
        "purpose": "Enrollment and claims"
      },
      {
        "name": "India Post",
        "purpose": "Enrollment"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.financialservices.gov.in/pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby",
      "officialGuidelines": "https://www.financialservices.gov.in/pmjjby",
      "downloadForms": "https://www.indiapost.gov.in/insurance-services/pmjjby"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Bank Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "What does PMJJBY cover?",
        "answer": "It provides ₹2 lakh life insurance coverage for death due to any cause."
      },
      {
        "question": "What is the annual premium?",
        "answer": "₹436 per year, deducted automatically from the linked bank account."
      }
    ],
    "relatedSchemes": [
      "Pradhan Mantri Suraksha Bima Yojana",
      "Atal Pension Yojana",
      "Pradhan Mantri Jan Dhan Yojana"
    ],
    "importantNotes": [
      "Insurance coverage is valid from 1 June to 31 May every year.",
      "The policy is renewable annually through auto-debit.",
      "Only one enrollment is permitted per individual."
    ],
    "tags": [
      "insurance",
      "life insurance",
      "finance",
      "government"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "10-15 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "maxAge": 50
    }
  },
  {
    "id": "cg017",
    "name": "Stand-Up India Scheme",
    "shortName": "Stand-Up India",
    "governmentLevel": "Central",
    "ministry": "Ministry of Finance",
    "department": "Department of Financial Services",
    "category": "Entrepreneurship",
    "subCategory": "Business Loan",
    "summary": "Stand-Up India facilitates bank loans for setting up greenfield enterprises by Scheduled Caste (SC), Scheduled Tribe (ST), and women entrepreneurs. The scheme promotes entrepreneurship and job creation through institutional credit.",
    "objective": "To promote entrepreneurship among SC/ST and women entrepreneurs by providing institutional finance for new business ventures.",
    "launchYear": "2016",
    "status": "Active",
    "beneficiaryTypes": [
      "Women Entrepreneurs",
      "SC Entrepreneurs",
      "ST Entrepreneurs",
      "First-time Business Owners"
    ],
    "benefits": [
      {
        "title": "Composite Business Loan",
        "description": "Loan for setting up a greenfield enterprise.",
        "amount": "₹10 lakh to ₹1 crore",
        "frequency": "One-time",
        "mode": "Loan"
      },
      {
        "title": "Working Capital Support",
        "description": "Working capital included as part of the composite loan.",
        "amount": "As sanctioned",
        "frequency": "One-time",
        "mode": "Loan"
      },
      {
        "title": "Credit Guarantee Support",
        "description": "Eligible loans may receive guarantee cover under the Credit Guarantee Scheme.",
        "amount": "As applicable",
        "frequency": "One-time",
        "mode": "Guarantee"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be at least 18 years old.",
      "Applicant must be a woman or belong to the Scheduled Caste (SC) or Scheduled Tribe (ST) category.",
      "Business must be a greenfield enterprise (first-time venture).",
      "Applicant should not be a willful defaulter.",
      "For non-individual enterprises, at least 51% shareholding and controlling stake must be held by an SC/ST or woman entrepreneur."
    ],
    "notEligible": [
      "Applicants below 18 years.",
      "Existing (non-greenfield) businesses.",
      "Willful loan defaulters."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "PAN Card",
        "mandatory": true
      },
      {
        "name": "Caste Certificate (SC/ST applicants)",
        "mandatory": false
      },
      {
        "name": "Business Project Report",
        "mandatory": true
      },
      {
        "name": "Bank Account Details",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Udyam Registration",
      "GST Registration",
      "Business Address Proof"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "Stand-Up Mitra Portal",
          "website": "https://www.standupmitra.in"
        },
        {
          "type": "Scheduled Commercial Bank",
          "name": "Participating Bank Branch"
        },
        {
          "type": "Lead District Manager (LDM)",
          "name": "Lead District Office"
        }
      ],
      "steps": [
        "Prepare a business proposal.",
        "Apply through the Stand-Up Mitra Portal or a participating bank.",
        "Submit required documents.",
        "Bank evaluates the proposal.",
        "Loan is sanctioned after approval."
      ],
      "fee": "Nil (bank processing charges may apply)",
      "processingTime": "Depends on the lending bank.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Scheduled Commercial Banks",
        "purpose": "Loan processing"
      },
      {
        "name": "SIDBI Stand-Up Connect Centres",
        "purpose": "Business guidance"
      },
      {
        "name": "Lead District Manager Office",
        "purpose": "Application assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://financialservices.gov.in/stand-india-scheme-supi",
      "applicationPortal": "https://www.standupmitra.in",
      "officialGuidelines": "https://financialservices.gov.in/stand-india-scheme-supi"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Bank Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Who can apply?",
        "answer": "Women entrepreneurs and SC/ST entrepreneurs above 18 years starting a greenfield enterprise."
      },
      {
        "question": "What is the loan amount?",
        "answer": "From ₹10 lakh to ₹1 crore."
      }
    ],
    "relatedSchemes": [
      "Pradhan Mantri Mudra Yojana",
      "PM Vishwakarma",
      "Startup India"
    ],
    "importantNotes": [
      "Business must be a greenfield (new) enterprise.",
      "Loan repayment can extend up to 7 years with a moratorium of up to 18 months.",
      "Margin money support may be available through convergence with eligible schemes."
    ],
    "tags": [
      "entrepreneurship",
      "loan",
      "women",
      "SC",
      "ST"
    ],
    "difficultyLevel": "Medium",
    "estimatedCompletionTime": "30-60 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "occupation": [
        "self-employed"
      ]
    }
  },
  {
    "id": "cg018",
    "name": "National Food Security Act (Public Distribution System)",
    "shortName": "NFSA / PDS",
    "governmentLevel": "Central",
    "ministry": "Ministry of Consumer Affairs, Food and Public Distribution",
    "department": "Department of Food and Public Distribution",
    "category": "Food Security",
    "subCategory": "Subsidized Food Grains",
    "summary": "The National Food Security Act (NFSA), 2013 provides eligible households with highly subsidized foodgrains through the Public Distribution System (PDS). Eligible beneficiaries receive foodgrains through Fair Price Shops using NFSA ration cards.",
    "objective": "To ensure food and nutritional security by providing eligible households access to subsidized foodgrains.",
    "launchYear": "2013",
    "status": "Active",
    "beneficiaryTypes": [
      "Priority Household (PHH)",
      "Antyodaya Anna Yojana (AAY) Families"
    ],
    "benefits": [
      {
        "title": "Subsidized Food Grains",
        "description": "Eligible beneficiaries receive foodgrains through Fair Price Shops.",
        "amount": "PHH: 5 kg per person/month | AAY: 35 kg per household/month",
        "frequency": "Monthly",
        "mode": "In-kind"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian citizen.",
      "Must be identified as an eligible household by the respective State/UT Government.",
      "Must qualify under Priority Household (PHH) or Antyodaya Anna Yojana (AAY) criteria notified by the State."
    ],
    "notEligible": [
      "Households not identified by the State/UT Government under NFSA.",
      "Duplicate or cancelled ration card holders."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Proof of Residence",
        "mandatory": true
      },
      {
        "name": "Identity Proof",
        "mandatory": true
      },
      {
        "name": "Family Details",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Income Certificate",
      "Mobile Number"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "State Food Department",
          "name": "State Food & Civil Supplies Department"
        },
        {
          "type": "e-Seva / CSC",
          "name": "Common Service Centre (CSC)"
        },
        {
          "type": "Official Portal",
          "name": "NFSA Portal",
          "website": "https://nfsa.gov.in/portal/apply"
        }
      ],
      "steps": [
        "Apply for a new ration card through the State Food Department.",
        "Submit required documents.",
        "Application is verified by the State authority.",
        "Ration card is issued if approved.",
        "Collect foodgrains from the assigned Fair Price Shop."
      ],
      "fee": "As prescribed by the respective State Government.",
      "processingTime": "Varies by State.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Fair Price Shop (FPS)",
        "purpose": "Distribution of foodgrains"
      },
      {
        "name": "Food & Civil Supplies Office",
        "purpose": "Application assistance"
      },
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Online application assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://nfsa.gov.in",
      "applicationPortal": "https://nfsa.gov.in/portal/apply",
      "officialGuidelines": "https://nfsa.gov.in/portal/NFSA-Act"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Who decides eligibility?",
        "answer": "The respective State or UT Government identifies eligible households under NFSA."
      },
      {
        "question": "Where do beneficiaries collect foodgrains?",
        "answer": "From their allotted Fair Price Shop (FPS)."
      }
    ],
    "relatedSchemes": [
      "One Nation One Ration Card",
      "PM POSHAN"
    ],
    "importantNotes": [
      "Eligibility criteria differ across States.",
      "Beneficiaries must possess a valid ration card.",
      "Foodgrain entitlement depends on the beneficiary category (PHH or AAY)."
    ],
    "tags": [
      "food",
      "ration",
      "PDS",
      "government"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {}
  },
  {
    "id": "cg019",
    "name": "One Nation One Ration Card",
    "shortName": "ONORC",
    "governmentLevel": "Central",
    "ministry": "Ministry of Consumer Affairs, Food and Public Distribution",
    "department": "Department of Food and Public Distribution",
    "category": "Food Security",
    "subCategory": "Ration Card Portability",
    "summary": "One Nation One Ration Card (ONORC) enables eligible NFSA ration card holders to access their entitled subsidized foodgrains from any ePoS-enabled Fair Price Shop (FPS) anywhere in India using Aadhaar authentication.",
    "objective": "To provide nationwide portability of ration cards, ensuring uninterrupted food security for migrant and eligible NFSA beneficiaries.",
    "launchYear": "2019",
    "status": "Active",
    "beneficiaryTypes": [
      "NFSA Beneficiaries",
      "Priority Household (PHH)",
      "Antyodaya Anna Yojana (AAY) Families",
      "Migrant Workers"
    ],
    "benefits": [
      {
        "title": "Nationwide Ration Portability",
        "description": "Collect subsidized foodgrains from any ePoS-enabled Fair Price Shop across India.",
        "amount": "As per NFSA entitlement",
        "frequency": "Monthly",
        "mode": "In-kind"
      }
    ],
    "eligibilityNotes": [
      "Must be an NFSA ration card holder.",
      "Ration card should be Aadhaar-linked where applicable.",
      "Beneficiary should be registered under the Public Distribution System (PDS)."
    ],
    "notEligible": [
      "Persons without a valid NFSA ration card.",
      "Cancelled or duplicate ration card holders."
    ],
    "documents": [
      {
        "name": "NFSA Ration Card",
        "mandatory": true
      },
      {
        "name": "Aadhaar Card",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Registered Mobile Number"
    ],
    "application": {
      "modes": [
        "No Separate Application Required"
      ],
      "whereToApply": [
        {
          "type": "Fair Price Shop (FPS)",
          "name": "Any ePoS-enabled Fair Price Shop"
        },
        {
          "type": "State Food Department",
          "name": "Food & Civil Supplies Department"
        }
      ],
      "steps": [
        "Obtain an eligible NFSA ration card from your State.",
        "Ensure Aadhaar is linked with the ration card where required.",
        "Visit any ePoS-enabled Fair Price Shop in India.",
        "Complete Aadhaar/biometric authentication.",
        "Collect your entitled foodgrains."
      ],
      "fee": "Free",
      "processingTime": "Immediate after authentication.",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "Fair Price Shop (FPS)",
        "purpose": "Foodgrain distribution"
      },
      {
        "name": "Food & Civil Supplies Department",
        "purpose": "Ration card services"
      },
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Ration card assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://dfpd.gov.in",
      "applicationPortal": "https://nfsa.gov.in",
      "officialGuidelines": "https://dfpd.gov.in/distribution-of-food-grains/en"
    },
    "helpline": {
      "phone": "1967",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Do I need a new ration card for ONORC?",
        "answer": "No. Existing eligible NFSA ration cards can be used nationwide through portability."
      },
      {
        "question": "Who benefits the most from ONORC?",
        "answer": "Migrant workers and families who move between States or districts."
      }
    ],
    "relatedSchemes": [
      "National Food Security Act (NFSA)",
      "Public Distribution System (PDS)"
    ],
    "importantNotes": [
      "ONORC is a portability facility, not a separate ration card.",
      "Foodgrain entitlement remains the same under NFSA.",
      "Biometric/Aadhaar authentication is generally required at ePoS-enabled Fair Price Shops."
    ],
    "tags": [
      "food",
      "ration",
      "portability",
      "government"
    ],
    "difficultyLevel": "Very Easy",
    "estimatedCompletionTime": "No separate application required",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {}
  },
  {
    "id": "cg020",
    "name": "Soil Health Card Scheme",
    "shortName": "SHC",
    "governmentLevel": "Central",
    "ministry": "Ministry of Agriculture & Farmers Welfare",
    "department": "Department of Agriculture & Farmers Welfare",
    "category": "Agriculture",
    "subCategory": "Soil Health Management",
    "summary": "The Soil Health Card (SHC) Scheme provides farmers with a soil health report containing nutrient status and fertilizer recommendations to improve soil fertility, reduce input costs, and increase crop productivity.",
    "objective": "To promote balanced fertilizer use and sustainable soil health through scientific soil testing.",
    "launchYear": "2015",
    "status": "Active",
    "beneficiaryTypes": [
      "Farmers",
      "Land Owners",
      "Tenant Farmers"
    ],
    "benefits": [
      {
        "title": "Soil Health Card",
        "description": "Provides soil nutrient analysis and crop-wise fertilizer recommendations.",
        "amount": "Free",
        "frequency": "Periodic",
        "mode": "Physical / Digital"
      },
      {
        "title": "Scientific Fertilizer Recommendation",
        "description": "Guidance on nutrient management based on laboratory soil testing.",
        "amount": "Free",
        "frequency": "With every soil test",
        "mode": "Report"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian farmer.",
      "Should own or cultivate agricultural land.",
      "Soil sample should be submitted for testing through the authorized channel."
    ],
    "notEligible": [
      "Persons not engaged in agriculture.",
      "Applicants without cultivable agricultural land."
    ],
    "documents": [
      {
        "name": "Identity Proof",
        "mandatory": true
      },
      {
        "name": "Land Ownership or Cultivation Proof",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Aadhaar Card",
      "Mobile Number"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "Soil Health Card Portal",
          "website": "https://soilhealth.dac.gov.in"
        },
        {
          "type": "Agriculture Department",
          "name": "District Agriculture Office"
        },
        {
          "type": "Soil Testing Laboratory",
          "name": "Government Soil Testing Laboratory"
        },
        {
          "type": "Common Service Centre",
          "name": "CSC"
        }
      ],
      "steps": [
        "Submit a soil sample through the Agriculture Department or authorized laboratory.",
        "The sample is tested for nutrient parameters.",
        "A Soil Health Card is generated.",
        "Download or collect the Soil Health Card."
      ],
      "fee": "Free",
      "processingTime": "Usually 2-4 weeks.",
      "renewalRequired": true,
      "renewalFrequency": "Every 2 years",
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "District Agriculture Office",
        "purpose": "Registration and guidance"
      },
      {
        "name": "Government Soil Testing Laboratory",
        "purpose": "Soil testing"
      },
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Online assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://soilhealth.dac.gov.in",
      "applicationPortal": "https://soilhealth.dac.gov.in",
      "officialGuidelines": "https://soilhealth.dac.gov.in"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Is the Soil Health Card free?",
        "answer": "Yes. Soil testing and issuance of the Soil Health Card are provided free under the scheme."
      },
      {
        "question": "How often should soil be tested?",
        "answer": "Generally once every two years for each land holding."
      }
    ],
    "relatedSchemes": [
      "PM-KISAN",
      "PM Fasal Bima Yojana"
    ],
    "importantNotes": [
      "The Soil Health Card contains test results for major, secondary and micronutrients.",
      "It also provides crop-wise fertilizer recommendations.",
      "The card can be downloaded online after laboratory processing."
    ],
    "tags": [
      "farmer",
      "soil",
      "agriculture",
      "government"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "15-20 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "occupation": [
        "farmer"
      ]
    }
  },
  {
    "id": "cg021",
    "name": "Pradhan Mantri Fasal Bima Yojana",
    "shortName": "PMFBY",
    "governmentLevel": "Central",
    "ministry": "Ministry of Agriculture & Farmers Welfare",
    "department": "Department of Agriculture & Farmers Welfare",
    "category": "Agriculture",
    "subCategory": "Crop Insurance",
    "summary": "Pradhan Mantri Fasal Bima Yojana (PMFBY) is a government-sponsored crop insurance scheme that protects farmers against crop losses due to natural calamities, pests and diseases.",
    "objective": "To provide financial support to farmers suffering crop loss, stabilize farm income, and encourage adoption of modern agricultural practices.",
    "launchYear": "2016",
    "status": "Active",
    "beneficiaryTypes": [
      "Farmers",
      "Land Owners",
      "Tenant Farmers",
      "Sharecroppers"
    ],
    "benefits": [
      {
        "title": "Crop Insurance Coverage",
        "description": "Financial compensation for crop loss due to notified natural calamities, pests and diseases.",
        "amount": "As per insured sum",
        "frequency": "Per insured crop season",
        "mode": "DBT / Insurance Claim"
      },
      {
        "title": "Low Farmer Premium",
        "description": "Farmer pays only a small portion of the insurance premium.",
        "amount": "2% (Kharif), 1.5% (Rabi), 5% (Commercial/Horticulture crops)",
        "frequency": "Per crop season",
        "mode": "Insurance Premium"
      }
    ],
    "eligibilityNotes": [
      "Must be an Indian farmer.",
      "Must cultivate a notified crop in a notified area.",
      "Both loanee and non-loanee farmers are eligible (subject to State implementation).",
      "Crop must be insured within the notified enrollment period."
    ],
    "notEligible": [
      "Farmers cultivating crops not notified under PMFBY.",
      "Applications submitted after the enrollment deadline."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Land Ownership / Cultivation Proof",
        "mandatory": true
      },
      {
        "name": "Sowing Certificate (where applicable)",
        "mandatory": false
      }
    ],
    "optionalDocuments": [
      "Farmer ID",
      "Mobile Number"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "PMFBY Portal",
          "website": "https://pmfby.gov.in"
        },
        {
          "type": "Common Service Centre",
          "name": "CSC"
        },
        {
          "type": "Bank",
          "name": "Participating Bank"
        },
        {
          "type": "Agriculture Department",
          "name": "District Agriculture Office"
        }
      ],
      "steps": [
        "Register on the PMFBY portal or visit a CSC/bank.",
        "Submit farmer, land and crop details.",
        "Upload required documents.",
        "Pay the applicable premium.",
        "Receive insurance policy after verification."
      ],
      "fee": "Farmer premium as per notified crop.",
      "processingTime": "Usually completed before the crop season begins.",
      "renewalRequired": true,
      "renewalFrequency": "Every Crop Season",
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Common Service Centre (CSC)",
        "purpose": "Registration"
      },
      {
        "name": "District Agriculture Office",
        "purpose": "Scheme guidance"
      },
      {
        "name": "Participating Banks",
        "purpose": "Enrollment and premium payment"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://pmfby.gov.in",
      "applicationPortal": "https://pmfby.gov.in",
      "officialGuidelines": "https://pmfby.gov.in/guidelines",
      "downloadForms": "https://pmfby.gov.in"
    },
    "helpline": {
      "phone": "14447",
      "workingHours": "Government Working Hours",
      "tollFree": true
    },
    "faq": [
      {
        "question": "Who can apply?",
        "answer": "Eligible farmers cultivating notified crops in notified areas."
      },
      {
        "question": "How much premium do farmers pay?",
        "answer": "2% for Kharif crops, 1.5% for Rabi crops, and 5% for annual commercial/horticultural crops. The remaining premium is subsidized by the Government."
      }
    ],
    "relatedSchemes": [
      "PM-KISAN",
      "Soil Health Card Scheme"
    ],
    "importantNotes": [
      "Claims are settled directly into the farmer's bank account.",
      "Enrollment must be completed before the notified seasonal deadline.",
      "The scheme covers crop loss due to notified natural calamities, pests and diseases."
    ],
    "tags": [
      "farmer",
      "insurance",
      "crop",
      "government"
    ],
    "difficultyLevel": "Medium",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "English",
      "Hindi",
      "Regional Languages"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "occupation": [
        "farmer"
      ]
    }
  },
  {
    "id": "igns-old-age",
    "name": "Indira Gandhi National Old Age Pension",
    "shortName": "IGNOAPS",
    "governmentLevel": "Central",
    "ministry": "Ministry of Rural Development",
    "category": "Pension",
    "summary": "Monthly pension for senior citizens living below the poverty line.",
    "beneficiaryTypes": [
      "Senior citizens",
      "BPL households"
    ],
    "benefits": [
      {
        "title": "Monthly Old Age Pension",
        "description": "Central assistance paid monthly, plus state contribution where applicable.",
        "amount": "₹200/month (60–79 years), ₹500/month (80+ years)",
        "frequency": "Monthly",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Must be 60 years or older.",
      "Household must be below the poverty line."
    ],
    "notEligible": [
      "Households above the state-notified BPL threshold."
    ],
    "documents": [
      {
        "name": "Age proof",
        "mandatory": true
      },
      {
        "name": "BPL ration card",
        "mandatory": true
      },
      {
        "name": "Aadhaar card",
        "mandatory": true
      },
      {
        "name": "Bank passbook",
        "mandatory": true
      }
    ],
    "optionalDocuments": [],
    "application": {
      "modes": [
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Gram Panchayat / Municipality",
          "name": "Local body office"
        }
      ],
      "steps": [
        "Get the NSAP application from the Panchayat or Municipal office.",
        "Attach age proof and BPL certificate.",
        "Submit to the Block/Ward officer.",
        "Await verification by the sanctioning committee.",
        "Pension is credited monthly to your bank account."
      ],
      "fee": "Free",
      "processingTime": "Varies by district",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Block Development Office",
        "purpose": "Verification and sanction"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://nsap.nic.in",
      "applicationPortal": "https://nsap.nic.in"
    },
    "helpline": {
      "phone": "1800-111-555",
      "tollFree": true
    },
    "faq": [],
    "relatedSchemes": [
      "Indira Gandhi National Disability Pension"
    ],
    "importantNotes": [],
    "tags": [
      "pension",
      "senior citizen"
    ],
    "languagesSupported": [
      "English",
      "Hindi"
    ],
    "eligibility": {
      "minAge": 60,
      "maxIncome": 100000,
      "incomeBasis": "household"
    }
  },
  {
    "id": "nsap-igndps",
    "name": "Indira Gandhi National Disability Pension",
    "shortName": "IGNDPS",
    "governmentLevel": "Central",
    "ministry": "Ministry of Rural Development",
    "category": "Pension",
    "summary": "Monthly pension for persons with severe disability from a below-poverty-line household.",
    "beneficiaryTypes": [
      "Persons with disability",
      "BPL households"
    ],
    "benefits": [
      {
        "title": "Monthly Disability Pension",
        "description": "Central assistance paid monthly, often topped up by the state government.",
        "amount": "₹300–₹500 per month",
        "frequency": "Monthly",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Must be 18–79 years old.",
      "Must have a certified disability of 40% or more.",
      "Household must be below the poverty line."
    ],
    "notEligible": [
      "Households above the state-notified BPL threshold."
    ],
    "documents": [
      {
        "name": "Disability certificate (40%+)",
        "mandatory": true
      },
      {
        "name": "BPL ration card",
        "mandatory": true
      },
      {
        "name": "Aadhaar card",
        "mandatory": true
      },
      {
        "name": "Bank account details",
        "mandatory": true
      }
    ],
    "optionalDocuments": [],
    "application": {
      "modes": [
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Gram Panchayat / Municipality",
          "name": "Local body office"
        }
      ],
      "steps": [
        "Collect the NSAP form from your Gram Panchayat or Municipality.",
        "Attach the disability certificate and BPL proof.",
        "Submit to the Block Development Officer.",
        "Verification is done by the local sanctioning committee.",
        "Track the sanction via nsap.nic.in."
      ],
      "fee": "Free",
      "processingTime": "Varies by district",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Block Development Office",
        "purpose": "Verification and sanction"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://nsap.nic.in",
      "applicationPortal": "https://nsap.nic.in"
    },
    "helpline": {
      "phone": "1800-111-555",
      "tollFree": true
    },
    "faq": [],
    "relatedSchemes": [
      "Indira Gandhi National Old Age Pension"
    ],
    "importantNotes": [],
    "tags": [
      "pension",
      "disability"
    ],
    "languagesSupported": [
      "English",
      "Hindi"
    ],
    "eligibility": {
      "minAge": 18,
      "maxAge": 79,
      "disabilityRequired": true,
      "maxIncome": 100000,
      "incomeBasis": "household"
    }
  },
  {
    "id": "nsp-post-matric",
    "name": "Post-Matric Scholarship for SC/ST Students",
    "shortName": "PMS-SC/ST",
    "governmentLevel": "Central",
    "ministry": "Ministry of Social Justice & Empowerment",
    "category": "Education",
    "summary": "Financial support for SC and ST students studying after class 10.",
    "beneficiaryTypes": [
      "SC students",
      "ST students"
    ],
    "benefits": [
      {
        "title": "Tuition Reimbursement",
        "description": "Full reimbursement of tuition and other non-refundable fees.",
        "amount": "As per institution fee structure",
        "frequency": "Per academic year",
        "mode": "DBT"
      },
      {
        "title": "Maintenance Allowance",
        "description": "Monthly allowance to cover living expenses while studying.",
        "amount": "₹230–₹1,200 per month",
        "frequency": "Monthly",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Must belong to Scheduled Caste or Scheduled Tribe.",
      "Must be studying at post-matriculation (after class 10) level.",
      "Household income must be under the prescribed ceiling."
    ],
    "notEligible": [
      "Students whose household income exceeds the scholarship ceiling."
    ],
    "documents": [
      {
        "name": "Caste certificate",
        "mandatory": true
      },
      {
        "name": "Income certificate",
        "mandatory": true
      },
      {
        "name": "Previous year marksheet",
        "mandatory": true
      },
      {
        "name": "Institution admission proof",
        "mandatory": true
      },
      {
        "name": "Bank account in the student's name",
        "mandatory": true
      }
    ],
    "optionalDocuments": [],
    "application": {
      "modes": [
        "Online"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "National Scholarship Portal",
          "website": "https://scholarships.gov.in"
        }
      ],
      "steps": [
        "Register on scholarships.gov.in with your Aadhaar.",
        "Choose the Post-Matric Scholarship for SC/ST.",
        "Fill academic and bank details.",
        "Upload caste and income certificates.",
        "Submit before the deadline and get the institute to verify."
      ],
      "fee": "Free",
      "processingTime": "Varies by state and institution verification",
      "renewalRequired": true,
      "renewalFrequency": "Every academic year",
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "Institution Nodal Officer",
        "purpose": "Verification"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://scholarships.gov.in",
      "applicationPortal": "https://scholarships.gov.in"
    },
    "helpline": {
      "phone": "0120-6619540"
    },
    "faq": [],
    "relatedSchemes": [],
    "importantNotes": [],
    "tags": [
      "education",
      "scholarship",
      "sc",
      "st"
    ],
    "languagesSupported": [
      "English",
      "Hindi"
    ],
    "eligibility": {
      "minAge": 15,
      "maxAge": 35,
      "occupation": [
        "student"
      ],
      "categories": [
        "sc",
        "st"
      ],
      "maxIncome": 250000,
      "incomeBasis": "household"
    }
  },
  {
    "id": "pmegp",
    "name": "Prime Minister's Employment Generation Programme",
    "shortName": "PMEGP",
    "governmentLevel": "Central",
    "ministry": "Ministry of MSME",
    "category": "Entrepreneurship",
    "summary": "Credit-linked subsidy to help you start your own micro enterprise in manufacturing or services.",
    "beneficiaryTypes": [
      "Unemployed",
      "Self-employed",
      "Students",
      "Aspiring entrepreneurs"
    ],
    "benefits": [
      {
        "title": "Capital Subsidy",
        "description": "Subsidy on the project cost of a new micro enterprise, credited after the bank sanctions the loan.",
        "amount": "15–35% of project cost (up to ₹50 lakh for manufacturing, ₹20 lakh for services)",
        "frequency": "One-time",
        "mode": "Bank-linked subsidy"
      }
    ],
    "eligibilityNotes": [
      "Must be at least 18 years old.",
      "Minimum Class 8 pass required for projects above ₹10 lakh (manufacturing) or ₹5 lakh (services).",
      "Only new units are eligible — existing units already availing another government subsidy cannot apply."
    ],
    "notEligible": [
      "Applicants who have already availed subsidy under another central or state self-employment scheme for the same unit."
    ],
    "documents": [
      {
        "name": "Aadhaar card",
        "mandatory": true
      },
      {
        "name": "PAN card",
        "mandatory": true
      },
      {
        "name": "Project report",
        "mandatory": true
      },
      {
        "name": "Education certificate",
        "mandatory": false
      },
      {
        "name": "Caste / special category certificate",
        "mandatory": false
      }
    ],
    "optionalDocuments": [],
    "application": {
      "modes": [
        "Online"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "KVIC PMEGP e-Portal",
          "website": "https://www.kviconline.gov.in/pmegpeportal"
        }
      ],
      "steps": [
        "Register on the KVIC PMEGP e-portal.",
        "Prepare and upload a project report.",
        "Submit the online application to your district office.",
        "Attend the district task force interview.",
        "Bank sanctions the loan and the subsidy is credited as margin money."
      ],
      "fee": "Free",
      "processingTime": "Generally 60–90 days",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "District Industries Centre",
        "purpose": "Application assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.kviconline.gov.in/pmegpeportal",
      "applicationPortal": "https://www.kviconline.gov.in/pmegpeportal"
    },
    "helpline": {
      "phone": "1800-3000-0034",
      "tollFree": true
    },
    "faq": [],
    "relatedSchemes": [
      "Stand-Up India Scheme",
      "Pradhan Mantri Mudra Yojana"
    ],
    "importantNotes": [],
    "tags": [
      "employment",
      "self-employment",
      "subsidy"
    ],
    "languagesSupported": [
      "English",
      "Hindi"
    ],
    "eligibility": {
      "minAge": 18,
      "occupation": [
        "unemployed",
        "self-employed",
        "student"
      ]
    }
  },
  {
    "id": "tn001",
    "name": "Kalaignar Magalir Urimai Thogai",
    "shortName": "KMUT",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Department of Social Welfare and Women Empowerment",
    "category": "Women Welfare",
    "subCategory": "Direct Benefit Transfer",
    "summary": "Kalaignar Magalir Urimai Thogai is a flagship welfare scheme of the Government of Tamil Nadu that provides monthly financial assistance to eligible women heads of families through Direct Benefit Transfer (DBT).",
    "objective": "To strengthen the financial independence of eligible women heads of households and support household expenses.",
    "launchYear": "2023",
    "status": "Active",
    "beneficiaryTypes": [
      "Women Heads of Families"
    ],
    "benefits": [
      {
        "title": "Monthly Financial Assistance",
        "description": "Financial assistance credited directly to the beneficiary's bank account.",
        "amount": "₹1,000 per month",
        "frequency": "Monthly",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be a woman head of the family.",
      "Must be a permanent resident of Tamil Nadu.",
      "Family should satisfy the eligibility criteria prescribed by the Government.",
      "Applicant should possess a valid family ration card.",
      "Bank account should be linked with Aadhaar for DBT."
    ],
    "notEligible": [
      "Government employees.",
      "Income tax payers.",
      "Families exceeding prescribed eligibility norms.",
      "Existing beneficiaries of certain social security pensions as notified by the Government."
    ],
    "documents": [
      {
        "name": "Family Ration Card",
        "mandatory": true
      },
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Mobile Number",
      "Electricity Bill"
    ],
    "application": {
      "modes": [
        "Offline",
        "Special Government Camps"
      ],
      "whereToApply": [
        {
          "type": "Special Camp",
          "name": "Government Registration Camp"
        },
        {
          "type": "Taluk Office",
          "name": "Taluk Office"
        },
        {
          "type": "e-Sevai Centre",
          "name": "Tamil Nadu e-Sevai Centre"
        }
      ],
      "steps": [
        "Collect the application form from the notified camp or office.",
        "Fill in the application and attach required documents.",
        "Submit the application.",
        "Verification is carried out by the Government.",
        "Eligible beneficiaries receive DBT after approval."
      ],
      "fee": "Free",
      "processingTime": "Varies based on Government verification.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "e-Sevai Centre",
        "purpose": "Application assistance"
      },
      {
        "name": "Taluk Office",
        "purpose": "Verification"
      },
      {
        "name": "District Collector Office",
        "purpose": "Grievance support"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://kmut.tn.gov.in",
      "applicationPortal": "https://kmut.tn.gov.in",
      "officialGuidelines": "https://kmut.tn.gov.in"
    },
    "helpline": {
      "phone": "14417",
      "workingHours": "Government Working Hours",
      "tollFree": true
    },
    "faq": [
      {
        "question": "How much assistance is provided?",
        "answer": "₹1,000 per month is credited directly to the beneficiary's bank account."
      },
      {
        "question": "Who can apply?",
        "answer": "Eligible women heads of families residing in Tamil Nadu who satisfy the Government's eligibility criteria."
      }
    ],
    "relatedSchemes": [
      "Free Bus Travel Scheme for Women",
      "Pudhumai Penn Scheme"
    ],
    "importantNotes": [
      "Benefits are transferred through Direct Benefit Transfer (DBT).",
      "Applications are accepted only during Government-notified enrollment drives.",
      "Eligibility is verified by the concerned authorities before approval."
    ],
    "tags": [
      "women",
      "cash assistance",
      "DBT",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 21,
      "gender": [
        "female"
      ],
      "maxIncome": 250000,
      "incomeBasis": "household",
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn002",
    "name": "Chief Minister's Comprehensive Health Insurance Scheme",
    "shortName": "CMCHIS",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Department of Health and Family Welfare",
    "category": "Health",
    "subCategory": "Health Insurance",
    "summary": "Chief Minister's Comprehensive Health Insurance Scheme (CMCHIS) provides eligible Tamil Nadu families with cashless medical treatment for approved procedures at empanelled Government and private hospitals. The scheme is integrated with Ayushman Bharat PM-JAY in Tamil Nadu.",
    "objective": "To provide quality cashless healthcare and reduce the financial burden of hospitalization for eligible families.",
    "launchYear": "2009",
    "status": "Active",
    "beneficiaryTypes": [
      "Low-income Families",
      "Tamil Nadu Residents",
      "Differently Abled Persons",
      "Eligible PM-JAY Beneficiaries"
    ],
    "benefits": [
      {
        "title": "Cashless Hospital Treatment",
        "description": "Cashless treatment for approved medical and surgical procedures at empanelled hospitals.",
        "amount": "Up to ₹5,00,000 per family",
        "frequency": "As required",
        "mode": "Cashless"
      }
    ],
    "eligibilityNotes": [
      "Must be a resident of Tamil Nadu.",
      "Family should be listed in the State Family (Ration) Card database.",
      "Annual family income should generally not exceed ₹1,20,000 (subject to Government notifications).",
      "Certain categories such as differently abled persons are eligible without the income ceiling."
    ],
    "notEligible": [
      "Non-residents of Tamil Nadu.",
      "Families not meeting the notified eligibility criteria."
    ],
    "documents": [
      {
        "name": "Family Ration Card",
        "mandatory": true
      },
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Income Certificate",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": false
      }
    ],
    "optionalDocuments": [
      "Mobile Number",
      "Disability Certificate (if applicable)"
    ],
    "application": {
      "modes": [
        "Offline",
        "Online"
      ],
      "whereToApply": [
        {
          "type": "Enrollment Centre",
          "name": "CMCHIS Enrollment Centre"
        },
        {
          "type": "Government Hospital",
          "name": "Empanelled Government Hospital"
        },
        {
          "type": "e-Sevai Centre",
          "name": "Tamil Nadu e-Sevai Centre"
        },
        {
          "type": "Official Portal",
          "name": "CMCHIS Portal",
          "website": "https://www.cmchistn.com"
        }
      ],
      "steps": [
        "Visit an enrollment centre or empanelled hospital.",
        "Submit the required documents.",
        "Eligibility is verified.",
        "Health insurance card/e-card is generated.",
        "Avail cashless treatment at empanelled hospitals."
      ],
      "fee": "Free",
      "processingTime": "Generally within a few working days after verification.",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "CMCHIS Enrollment Centres",
        "purpose": "Registration"
      },
      {
        "name": "e-Sevai Centres",
        "purpose": "Application assistance"
      },
      {
        "name": "Empanelled Hospitals",
        "purpose": "Treatment and beneficiary verification"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.cmchistn.com",
      "applicationPortal": "https://www.cmchistn.com",
      "officialGuidelines": "https://www.cmchistn.com/enrollment/how-to-enroll",
      "downloadForms": "https://www.cmchistn.com/enrollment/how-to-enroll"
    },
    "helpline": {
      "phone": "1800-425-3993",
      "workingHours": "24×7",
      "tollFree": true
    },
    "faq": [
      {
        "question": "How much health coverage is available?",
        "answer": "Eligible families receive cashless treatment up to ₹5 lakh for covered procedures."
      },
      {
        "question": "Can treatment be taken in private hospitals?",
        "answer": "Yes, at empanelled private hospitals under CMCHIS."
      }
    ],
    "relatedSchemes": [
      "Ayushman Bharat PM-JAY",
      "Kalaignar Magalir Urimai Thogai"
    ],
    "importantNotes": [
      "Only treatments listed under the scheme are covered.",
      "Cashless treatment is available only at empanelled hospitals.",
      "Carry your Aadhaar and Family Ration Card while visiting the hospital."
    ],
    "tags": [
      "health",
      "insurance",
      "cashless",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "15-30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "maxIncome": 120000,
      "incomeBasis": "household",
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn003",
    "name": "Magalir Vidiyal Payanam Scheme (Free Bus Travel Scheme for Women)",
    "shortName": "MVPS",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Transport Department",
    "category": "Women Welfare",
    "subCategory": "Public Transport",
    "summary": "The Magalir Vidiyal Payanam Scheme provides free travel for women in ordinary fare government town buses across Tamil Nadu. The scheme aims to reduce commuting costs and improve access to employment, education, healthcare, and other essential services.",
    "objective": "To promote women's mobility, financial independence, and participation in education and employment by providing free travel in eligible government buses.",
    "launchYear": "2021",
    "status": "Active",
    "beneficiaryTypes": [
      "Women",
      "Transgender Persons",
      "Persons with Disabilities (as per notified rules)"
    ],
    "benefits": [
      {
        "title": "Free Bus Travel",
        "description": "Unlimited free travel in ordinary fare government town buses.",
        "amount": "100% Fare Waiver",
        "frequency": "Every Journey",
        "mode": "In-kind"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be a woman, transgender person, or other category notified by the Government.",
      "Free travel is available only in eligible ordinary fare town buses operated by State Transport Undertakings.",
      "Passengers should carry a valid identity proof when requested."
    ],
    "notEligible": [
      "Travel in Express, Deluxe, AC, Sleeper or other premium government buses.",
      "Private bus services."
    ],
    "documents": [
      {
        "name": "Any Government Identity Proof (if requested)",
        "mandatory": false
      }
    ],
    "optionalDocuments": [
      "Aadhaar Card",
      "Voter ID",
      "Driving Licence"
    ],
    "application": {
      "modes": [
        "No Separate Application Required"
      ],
      "whereToApply": [
        {
          "type": "Government Bus",
          "name": "Tamil Nadu State Transport Corporation (TNSTC)"
        },
        {
          "type": "Government Bus",
          "name": "Metropolitan Transport Corporation (MTC)"
        }
      ],
      "steps": [
        "Board an eligible ordinary fare government town bus.",
        "Inform the conductor that you are availing the free travel scheme.",
        "Receive a zero-value ticket.",
        "Travel free of cost."
      ],
      "fee": "Free",
      "processingTime": "Immediate",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "TNSTC Depots",
        "purpose": "Scheme information"
      },
      {
        "name": "MTC Depots",
        "purpose": "Passenger assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.tn.gov.in",
      "officialGuidelines": "https://www.tn.gov.in"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Transport Corporation Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Do I need to register for the scheme?",
        "answer": "No. There is no separate registration. Eligible passengers simply board an eligible government town bus and obtain a zero-value ticket."
      },
      {
        "question": "Can I travel free in AC or Express buses?",
        "answer": "No. The scheme is applicable only to ordinary fare government town buses."
      }
    ],
    "relatedSchemes": [
      "Kalaignar Magalir Urimai Thogai",
      "Pudhumai Penn Scheme"
    ],
    "importantNotes": [
      "A zero-value ticket is issued by the conductor for every journey.",
      "The scheme is applicable only on eligible government-operated ordinary town buses.",
      "Premium, AC, Deluxe and Express services are not covered."
    ],
    "tags": [
      "women",
      "transport",
      "free travel",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Very Easy",
    "estimatedCompletionTime": "No application required",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "gender": [
        "female",
        "other"
      ],
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn004",
    "name": "Tamil Pudhalvan Scheme",
    "shortName": "TPS",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Department of Higher Education",
    "category": "Education",
    "subCategory": "Higher Education Scholarship",
    "summary": "The Tamil Pudhalvan Scheme provides monthly financial assistance to eligible male students from Government and Government-aided schools who pursue higher education. The assistance aims to increase college enrolment and reduce dropout rates among economically disadvantaged students.",
    "objective": "To encourage boys from Government and Government-aided schools to pursue higher education by providing monthly financial assistance.",
    "launchYear": "2024",
    "status": "Active",
    "beneficiaryTypes": [
      "Male Students",
      "Government School Students",
      "Government-aided School Students"
    ],
    "benefits": [
      {
        "title": "Monthly Educational Assistance",
        "description": "Financial assistance for eligible students pursuing higher education.",
        "amount": "₹1,000 per month",
        "frequency": "Monthly",
        "mode": "Direct Benefit Transfer (DBT)"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be a male student.",
      "Must have studied from Classes 6 to 12 in a Government or Government-aided school (Tamil medium as notified).",
      "Must have secured admission in a recognized higher education institution.",
      "Must possess an Aadhaar-linked bank account."
    ],
    "notEligible": [
      "Students not admitted to higher education.",
      "Students who did not satisfy the prescribed school education criteria."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Admission Proof",
        "mandatory": true
      },
      {
        "name": "School Transfer / Completion Certificate",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Community Certificate",
      "Mobile Number"
    ],
    "application": {
      "modes": [
        "Institution Based",
        "Online"
      ],
      "whereToApply": [
        {
          "type": "College",
          "name": "Concerned Higher Education Institution"
        },
        {
          "type": "Official Portal",
          "name": "Tamil Pudhalvan Portal"
        }
      ],
      "steps": [
        "Take admission in an eligible higher education institution.",
        "Submit Aadhaar, bank and admission details through the institution.",
        "Verification is carried out by the concerned department.",
        "Monthly assistance is credited through DBT after approval."
      ],
      "fee": "Free",
      "processingTime": "After institutional verification.",
      "renewalRequired": true,
      "renewalFrequency": "Every Academic Year",
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "College Help Desk",
        "purpose": "Student registration"
      },
      {
        "name": "District Higher Education Office",
        "purpose": "Scheme assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.tn.gov.in",
      "officialGuidelines": "https://www.tnbudget.tn.gov.in"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "How much assistance is provided?",
        "answer": "₹1,000 per month through Direct Benefit Transfer."
      },
      {
        "question": "Who is eligible?",
        "answer": "Eligible male students from Government and Government-aided schools pursuing higher education."
      }
    ],
    "relatedSchemes": [
      "Pudhumai Penn Scheme",
      "Naan Mudhalvan"
    ],
    "importantNotes": [
      "Benefits are transferred directly to the student's Aadhaar-linked bank account.",
      "Institutional verification is mandatory.",
      "The scheme aims to improve higher education enrolment among boys from Government schools."
    ],
    "tags": [
      "education",
      "student",
      "scholarship",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "15-30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 17,
      "gender": [
        "male"
      ],
      "occupation": [
        "student"
      ],
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn005",
    "name": "Chief Minister's Breakfast Scheme",
    "shortName": "CMBS",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "School Education Department",
    "category": "School Education",
    "subCategory": "Nutrition",
    "summary": "The Chief Minister's Breakfast Scheme provides free nutritious breakfast to students studying in Government primary schools across Tamil Nadu. The scheme aims to improve nutrition, attendance, classroom concentration and learning outcomes.",
    "objective": "To ensure that children begin the school day with a nutritious meal, thereby improving attendance, reducing classroom hunger and supporting better educational outcomes.",
    "launchYear": "2022",
    "status": "Active",
    "beneficiaryTypes": [
      "Government School Students",
      "Primary School Children"
    ],
    "benefits": [
      {
        "title": "Free Breakfast",
        "description": "Nutritious breakfast served on all school working days.",
        "amount": "Free",
        "frequency": "Daily",
        "mode": "In-kind"
      }
    ],
    "eligibilityNotes": [
      "Student must be enrolled in an eligible Government primary school in Tamil Nadu.",
      "Student should attend school on the working day.",
      "No separate income or caste criteria apply."
    ],
    "notEligible": [
      "Students studying in private schools.",
      "Students studying in schools not covered under the scheme."
    ],
    "documents": [
      {
        "name": "School Admission Record",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "EMIS Student ID"
    ],
    "application": {
      "modes": [
        "No Separate Application Required"
      ],
      "whereToApply": [
        {
          "type": "Government School",
          "name": "Concerned Government Primary School"
        }
      ],
      "steps": [
        "Enroll in an eligible Government primary school.",
        "Attend school regularly.",
        "Breakfast is served before classes begin."
      ],
      "fee": "Free",
      "processingTime": "Immediate",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "Government Primary School",
        "purpose": "Scheme implementation"
      },
      {
        "name": "Block Education Office",
        "purpose": "Scheme support"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.tn.gov.in",
      "officialGuidelines": "https://www.tnbudget.tn.gov.in"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "School Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Do parents need to register separately?",
        "answer": "No. Eligible students automatically receive breakfast through their Government school."
      },
      {
        "question": "Is there any fee?",
        "answer": "No. Breakfast is provided completely free of cost."
      }
    ],
    "relatedSchemes": [
      "PM POSHAN",
      "Pudhumai Penn Scheme",
      "Tamil Pudhalvan Scheme"
    ],
    "importantNotes": [
      "No separate application is required.",
      "The meal is served on school working days.",
      "The scheme aims to improve nutrition, attendance and learning outcomes."
    ],
    "tags": [
      "education",
      "nutrition",
      "school",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Very Easy",
    "estimatedCompletionTime": "No application required",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 5,
      "maxAge": 10,
      "occupation": [
        "student"
      ],
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn006",
    "name": "Pudhumai Penn Scheme (Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme)",
    "shortName": "Pudhumai Penn",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Department of Social Welfare and Women Empowerment",
    "category": "Education",
    "subCategory": "Higher Education Scholarship",
    "summary": "The Pudhumai Penn Scheme provides monthly financial assistance to eligible girl students from Government and Government-aided schools who pursue higher education. The assistance is transferred directly to the student's bank account through Direct Benefit Transfer (DBT).",
    "objective": "To increase the enrolment of girls in higher education and reduce dropout rates by providing monthly financial support.",
    "launchYear": "2022",
    "status": "Active",
    "beneficiaryTypes": [
      "Girl Students",
      "Government School Students",
      "Government-aided School Students"
    ],
    "benefits": [
      {
        "title": "Monthly Educational Assistance",
        "description": "Financial assistance for eligible students pursuing higher education.",
        "amount": "₹1,000 per month",
        "frequency": "Monthly",
        "mode": "Direct Benefit Transfer (DBT)"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be a female student.",
      "Must have studied from Classes 6 to 12 in a Government school (Tamil or English medium) or Government-aided Tamil medium school.",
      "Must be admitted to a recognized undergraduate degree, diploma, or ITI course.",
      "Must have an Aadhaar-linked bank account in the student's name."
    ],
    "notEligible": [
      "Male students.",
      "Students who do not satisfy the Government school eligibility requirement.",
      "Students not enrolled in eligible higher education programmes."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Student Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Admission Letter / Bonafide Certificate",
        "mandatory": true
      },
      {
        "name": "Class X, XI & XII Marksheets",
        "mandatory": true
      },
      {
        "name": "Transfer Certificate",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Community Certificate",
      "Mobile Number"
    ],
    "application": {
      "modes": [
        "Institution Based"
      ],
      "whereToApply": [
        {
          "type": "College",
          "name": "Concerned College / Higher Education Institution"
        },
        {
          "type": "Official Portal",
          "name": "Penkalvi Portal",
          "website": "https://penkalvi.tn.gov.in"
        }
      ],
      "steps": [
        "Take admission in an eligible higher education institution.",
        "Submit Aadhaar, bank account and educational documents to the institution.",
        "The institution verifies eligibility and uploads student details.",
        "After Government approval, ₹1,000 is credited every month through DBT."
      ],
      "fee": "Free",
      "processingTime": "After institutional and Government verification.",
      "renewalRequired": true,
      "renewalFrequency": "Every Academic Year",
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "College Help Desk",
        "purpose": "Registration and document verification"
      },
      {
        "name": "District Higher Education Office",
        "purpose": "Scheme assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://tnsocialwelfare.tn.gov.in",
      "applicationPortal": "https://penkalvi.tn.gov.in",
      "officialGuidelines": "https://tnbudget.tn.gov.in"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "How much assistance is provided?",
        "answer": "₹1,000 per month through Direct Benefit Transfer."
      },
      {
        "question": "Can students apply directly?",
        "answer": "No. Eligible students are registered through their college or institution."
      }
    ],
    "relatedSchemes": [
      "Tamil Pudhalvan Scheme",
      "Naan Mudhalvan"
    ],
    "importantNotes": [
      "The bank account must be in the student's name.",
      "Aadhaar must be linked with the bank account.",
      "Students can continue receiving other eligible scholarships along with Pudhumai Penn, subject to Government rules."
    ],
    "tags": [
      "education",
      "girls",
      "scholarship",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "15-30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 17,
      "gender": [
        "female"
      ],
      "occupation": [
        "student"
      ],
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn007",
    "name": "Naan Mudhalvan",
    "shortName": "NM",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Special Programme Implementation Department / Tamil Nadu Skill Development Corporation (TNSDC)",
    "category": "Skill Development",
    "subCategory": "Career Guidance & Employability",
    "summary": "Naan Mudhalvan is a flagship skill development initiative of the Government of Tamil Nadu that equips school students, college students and youth with industry-relevant skills, career guidance, internships, apprenticeships, competitive exam coaching and placement support through a unified digital platform.",
    "objective": "To bridge the gap between education and industry by improving employability, entrepreneurship and career readiness among Tamil Nadu's youth.",
    "launchYear": "2022",
    "status": "Active",
    "beneficiaryTypes": [
      "School Students",
      "College Students",
      "Polytechnic Students",
      "ITI Students",
      "Youth"
    ],
    "benefits": [
      {
        "title": "Free Skill Development",
        "description": "Industry-aligned training in technical and soft skills.",
        "amount": "Free",
        "frequency": "As per course",
        "mode": "Online / Offline"
      },
      {
        "title": "Career Guidance",
        "description": "Career counselling, aptitude assessment and mentoring.",
        "amount": "Free",
        "frequency": "As applicable",
        "mode": "Portal / Institution"
      },
      {
        "title": "Placement Support",
        "description": "Access to internships, apprenticeships, hackathons and placement opportunities.",
        "amount": "Free",
        "frequency": "As available",
        "mode": "Portal"
      }
    ],
    "eligibilityNotes": [
      "Must be studying in or graduated from an eligible institution in Tamil Nadu.",
      "Applicable to Government, Government-aided and participating private educational institutions depending on the programme.",
      "Must register through the Naan Mudhalvan Portal or institution."
    ],
    "notEligible": [
      "Applicants not enrolled in eligible programmes or institutions."
    ],
    "documents": [
      {
        "name": "Student ID / College ID",
        "mandatory": true
      },
      {
        "name": "Educational Institution Details",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Aadhaar Card",
      "Mobile Number",
      "Email Address"
    ],
    "application": {
      "modes": [
        "Online",
        "Institution Based"
      ],
      "whereToApply": [
        {
          "type": "Official Portal",
          "name": "Naan Mudhalvan Portal",
          "website": "https://www.naanmudhalvan.tn.gov.in"
        },
        {
          "type": "Educational Institution",
          "name": "School / College / Polytechnic / ITI"
        }
      ],
      "steps": [
        "Register through the Naan Mudhalvan portal or participating institution.",
        "Complete student profile.",
        "Choose eligible courses or programmes.",
        "Attend training and assessments.",
        "Access internships, apprenticeships and placement opportunities."
      ],
      "fee": "Free",
      "processingTime": "Usually immediate after registration.",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "Educational Institutions",
        "purpose": "Registration and student support"
      },
      {
        "name": "Tamil Nadu Skill Development Corporation (TNSDC)",
        "purpose": "Programme support"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.naanmudhalvan.tn.gov.in",
      "applicationPortal": "https://www.naanmudhalvan.tn.gov.in",
      "officialGuidelines": "https://www.naanmudhalvan.tn.gov.in/about/"
    },
    "helpline": {
      "phone": "+91 99622 20527",
      "email": "support@naanmudhalvan.in",
      "workingHours": "10:00 AM - 6:00 PM",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Is there any registration fee?",
        "answer": "No. Registration and skill programmes are free for eligible participants."
      },
      {
        "question": "What services are available?",
        "answer": "Skill training, internships, apprenticeships, hackathons, career guidance and placement support."
      }
    ],
    "relatedSchemes": [
      "Pudhumai Penn Scheme",
      "Tamil Pudhalvan Scheme"
    ],
    "importantNotes": [
      "Courses vary depending on the student's institution and discipline.",
      "Industry partners conduct many of the training programmes.",
      "Students can access internships, apprenticeships and placement opportunities through the portal."
    ],
    "tags": [
      "skill development",
      "student",
      "employment",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "10-15 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 14,
      "occupation": [
        "student"
      ],
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn008",
    "name": "Dr. Muthulakshmi Reddy Maternity Benefit Scheme",
    "shortName": "MRMBS",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Department of Public Health and Preventive Medicine",
    "category": "Women Welfare",
    "subCategory": "Maternity Benefit",
    "summary": "The Dr. Muthulakshmi Reddy Maternity Benefit Scheme provides financial assistance and nutrition support to eligible pregnant and lactating women to ensure safe pregnancy, institutional delivery and proper nutrition for both mother and child. The scheme is integrated with PMMVY in Tamil Nadu.",
    "objective": "To reduce maternal and infant mortality, encourage antenatal care and institutional deliveries, and improve maternal nutrition.",
    "launchYear": "1987",
    "status": "Active",
    "beneficiaryTypes": [
      "Pregnant Women",
      "Lactating Mothers"
    ],
    "benefits": [
      {
        "title": "Maternity Assistance",
        "description": "Cash assistance along with nutrition kits for eligible beneficiaries.",
        "amount": "Up to ₹18,000",
        "frequency": "Paid in instalments",
        "mode": "Direct Benefit Transfer (DBT) + Nutrition Kits"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be a resident of Tamil Nadu.",
      "Pregnant woman must be at least 19 years of age.",
      "Applicable for the first two eligible deliveries.",
      "Pregnancy should be registered through PICME and an RCH ID obtained.",
      "Beneficiary should receive antenatal care and deliver in an eligible health institution as prescribed."
    ],
    "notEligible": [
      "Women below 19 years of age.",
      "Pregnancies not registered through PICME.",
      "Cases not satisfying Government guidelines."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "PICME / RCH ID",
        "mandatory": true
      },
      {
        "name": "Pregnancy Registration Record",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Family Card",
      "Mobile Number"
    ],
    "application": {
      "modes": [
        "Online",
        "Through Health Worker"
      ],
      "whereToApply": [
        {
          "type": "PICME Portal",
          "name": "PICME",
          "website": "https://picme.tn.gov.in"
        },
        {
          "type": "Primary Health Centre",
          "name": "Government PHC"
        },
        {
          "type": "Village Health Nurse",
          "name": "VHN / UHN"
        }
      ],
      "steps": [
        "Register pregnancy through PICME.",
        "Obtain RCH ID.",
        "Complete antenatal check-ups.",
        "Submit Aadhaar and bank account details.",
        "Receive instalments after satisfying the prescribed conditions."
      ],
      "fee": "Free",
      "processingTime": "Instalments released after verification.",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "Primary Health Centre",
        "purpose": "Registration and verification"
      },
      {
        "name": "Village Health Nurse",
        "purpose": "Pregnancy registration"
      },
      {
        "name": "Government Hospital",
        "purpose": "Scheme assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://picme.tn.gov.in",
      "applicationPortal": "https://picme.tn.gov.in",
      "officialGuidelines": "https://picme.tn.gov.in"
    },
    "helpline": {
      "phone": "104",
      "workingHours": "24×7",
      "tollFree": true
    },
    "faq": [
      {
        "question": "How much assistance is provided?",
        "answer": "Eligible women receive benefits up to ₹18,000 including cash assistance and nutrition kits."
      },
      {
        "question": "Is PICME registration mandatory?",
        "answer": "Yes. Pregnancy must be registered in PICME to obtain an RCH ID and receive scheme benefits."
      }
    ],
    "relatedSchemes": [
      "PMMVY",
      "Chief Minister's Comprehensive Health Insurance Scheme"
    ],
    "importantNotes": [
      "Benefits are released in multiple instalments.",
      "PICME registration is mandatory.",
      "Nutrition kits are also provided along with cash assistance."
    ],
    "tags": [
      "women",
      "maternity",
      "health",
      "DBT",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Medium",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 19,
      "gender": [
        "female"
      ],
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn009",
    "name": "Moovalur Ramamirtham Ammaiyar Ninaivu Marriage Assistance Scheme",
    "shortName": "MRANMAS",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Department of Social Welfare and Women Empowerment",
    "category": "Women Welfare",
    "subCategory": "Marriage Assistance",
    "summary": "The Moovalur Ramamirtham Ammaiyar Ninaivu Marriage Assistance Scheme provides financial assistance to eligible women from economically weaker families to support marriage expenses and encourage women's education. Applications are now processed through online/e-Sevai services.",
    "objective": "To reduce the financial burden of marriage for poor families while encouraging girls to continue their education.",
    "launchYear": "1989",
    "status": "Active",
    "beneficiaryTypes": [
      "Women from Economically Weaker Families"
    ],
    "benefits": [
      {
        "title": "Marriage Financial Assistance",
        "description": "Financial assistance is provided based on the applicant's educational qualification.",
        "amount": "Up to ₹50,000",
        "frequency": "One-time",
        "mode": "Direct Benefit Transfer (DBT)"
      }
    ],
    "eligibilityNotes": [
      "Bride must be at least 18 years old.",
      "Bridegroom must be at least 21 years old.",
      "Applicant must be a resident of Tamil Nadu.",
      "Family should satisfy the prescribed income criteria.",
      "Educational qualification should meet Scheme-I or Scheme-II requirements."
    ],
    "notEligible": [
      "Applicants below the prescribed marriage age.",
      "Families exceeding the notified income limit.",
      "Applicants not meeting the educational criteria."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Family Ration Card",
        "mandatory": true
      },
      {
        "name": "Income Certificate",
        "mandatory": true
      },
      {
        "name": "Age Proof",
        "mandatory": true
      },
      {
        "name": "Educational Certificates",
        "mandatory": true
      },
      {
        "name": "Marriage Invitation / Marriage Proof",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Community Certificate",
      "Passport-size Photograph"
    ],
    "application": {
      "modes": [
        "Online",
        "e-Sevai Centre"
      ],
      "whereToApply": [
        {
          "type": "e-Sevai Centre",
          "name": "Tamil Nadu e-Sevai Centre"
        },
        {
          "type": "Online Portal",
          "name": "Tamil Nadu e-Governance Portal"
        },
        {
          "type": "District Office",
          "name": "District Social Welfare Office"
        }
      ],
      "steps": [
        "Collect all required documents.",
        "Submit the application through e-Sevai or the online portal.",
        "Officials verify eligibility and documents.",
        "After approval, assistance is credited to the beneficiary's bank account."
      ],
      "fee": "As per e-Sevai service charges",
      "processingTime": "20-30 working days",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "Tamil Nadu e-Sevai Centre",
        "purpose": "Application submission"
      },
      {
        "name": "District Social Welfare Office",
        "purpose": "Verification and grievance support"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.tnsocialwelfare.tn.gov.in",
      "applicationPortal": "https://www.tnesevai.tn.gov.in",
      "officialGuidelines": "https://www.tnsocialwelfare.tn.gov.in"
    },
    "helpline": {
      "phone": "044-28524499",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "How much assistance is available?",
        "answer": "Eligible applicants receive assistance up to ₹50,000 depending on the applicable category."
      },
      {
        "question": "Where can I apply?",
        "answer": "Applications can be submitted through Tamil Nadu e-Sevai Centres or the notified online portal."
      }
    ],
    "relatedSchemes": [
      "Pudhumai Penn Scheme",
      "Dr. Muthulakshmi Reddy Maternity Benefit Scheme"
    ],
    "importantNotes": [
      "Applications are submitted online through e-Sevai.",
      "Income and educational criteria apply.",
      "Verification is carried out by the Social Welfare Department."
    ],
    "tags": [
      "women",
      "marriage",
      "financial assistance",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Medium",
    "estimatedCompletionTime": "30-45 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "gender": [
        "female"
      ],
      "maritalStatus": [
        "unmarried"
      ],
      "maxIncome": 72000,
      "incomeBasis": "household",
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn010",
    "name": "Old Age Pension Scheme",
    "shortName": "OAP",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Commissionerate of Revenue Administration and Disaster Management",
    "category": "Social Security",
    "subCategory": "Pension",
    "summary": "The Old Age Pension Scheme provides a monthly pension to eligible destitute senior citizens in Tamil Nadu who have no adequate means of livelihood. The scheme is implemented under the State Social Security Pension Schemes and, where applicable, in convergence with the National Social Assistance Programme (NSAP).",
    "objective": "To provide financial support and social security to destitute elderly persons.",
    "launchYear": "1962",
    "status": "Active",
    "beneficiaryTypes": [
      "Senior Citizens",
      "Destitute Elderly"
    ],
    "benefits": [
      {
        "title": "Monthly Pension",
        "description": "Monthly pension credited directly to the beneficiary.",
        "amount": "₹1,200 per month",
        "frequency": "Monthly",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be 60 years or older.",
      "Must be a resident of Tamil Nadu.",
      "Must be destitute with no regular source of income.",
      "Must satisfy the eligibility criteria prescribed under the Social Security Pension Scheme."
    ],
    "notEligible": [
      "Applicants below 60 years of age.",
      "Applicants with sufficient regular income.",
      "Persons not satisfying the prescribed Social Security Pension eligibility conditions."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Smart Ration Card",
        "mandatory": true
      },
      {
        "name": "Age Proof",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Voter ID",
      "Income Certificate"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "e-Sevai Centre",
          "name": "Tamil Nadu e-Sevai Centre"
        },
        {
          "type": "Taluk Office",
          "name": "Taluk Office"
        },
        {
          "type": "VAO Office",
          "name": "Village Administrative Officer"
        },
        {
          "type": "Online Portal",
          "name": "Tamil Nadu e-District Portal"
        }
      ],
      "steps": [
        "Collect or submit the application through e-Sevai or the e-District Portal.",
        "Attach all required documents.",
        "Revenue officials verify eligibility.",
        "After approval, pension is credited every month."
      ],
      "fee": "As per e-Sevai service charges",
      "processingTime": "15-30 working days",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "e-Sevai Centre",
        "purpose": "Application submission"
      },
      {
        "name": "Taluk Office",
        "purpose": "Verification"
      },
      {
        "name": "Village Administrative Officer",
        "purpose": "Initial verification"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.cra.tn.gov.in",
      "applicationPortal": "https://www.tnedistrict.tn.gov.in",
      "officialGuidelines": "https://www.cra.tn.gov.in/about_schemes.php"
    },
    "helpline": {
      "phone": "1100",
      "workingHours": "Government Working Hours",
      "tollFree": true
    },
    "faq": [
      {
        "question": "How much pension is provided?",
        "answer": "Eligible beneficiaries receive ₹1,200 per month."
      },
      {
        "question": "Where can I apply?",
        "answer": "Applications can be submitted through e-Sevai Centres, Taluk Offices or the Tamil Nadu e-District Portal."
      }
    ],
    "relatedSchemes": [
      "Destitute Widow Pension Scheme",
      "Differently Abled Pension Scheme"
    ],
    "importantNotes": [
      "Applications are verified by Revenue Department officials.",
      "Pension is credited directly to the beneficiary's bank account.",
      "Applicants must satisfy the prescribed Social Security Pension eligibility conditions."
    ],
    "tags": [
      "pension",
      "senior citizen",
      "social security",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 60,
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn011",
    "name": "Differently Abled Pension Scheme",
    "shortName": "DAPS",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Commissionerate for Welfare of the Differently Abled",
    "category": "Social Security",
    "subCategory": "Disability Pension",
    "summary": "The Differently Abled Pension Scheme provides monthly financial assistance to eligible persons with disabilities in Tamil Nadu who have little or no regular source of income. The scheme aims to ensure social security and financial support for persons with disabilities.",
    "objective": "To provide monthly financial assistance and improve the quality of life of eligible persons with disabilities.",
    "launchYear": "2010",
    "status": "Active",
    "beneficiaryTypes": [
      "Persons with Disabilities"
    ],
    "benefits": [
      {
        "title": "Monthly Pension",
        "description": "Monthly pension credited directly to the beneficiary's bank account.",
        "amount": "₹1,500 per month",
        "frequency": "Monthly",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be a resident of Tamil Nadu.",
      "Must possess a valid Disability Identity Card / UDID or disability certificate.",
      "Applicant should be unemployed. If self-employed or privately employed, annual income should not exceed ₹3 lakh.",
      "Must satisfy the eligibility conditions prescribed by the Government."
    ],
    "notEligible": [
      "Applicants without a recognized disability certificate.",
      "Applicants exceeding the prescribed income limit.",
      "Applicants not satisfying Government eligibility conditions."
    ],
    "documents": [
      {
        "name": "Disability Certificate / UDID Card",
        "mandatory": true
      },
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Smart Ration Card",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Income Certificate",
      "Mobile Number"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "e-Sevai Centre",
          "name": "Tamil Nadu e-Sevai Centre"
        },
        {
          "type": "District Office",
          "name": "District Differently Abled Welfare Office"
        },
        {
          "type": "Taluk Office",
          "name": "Taluk Office"
        },
        {
          "type": "Online Portal",
          "name": "Tamil Nadu e-District Portal"
        }
      ],
      "steps": [
        "Obtain a valid Disability Certificate or UDID.",
        "Submit the application through e-Sevai or the e-District Portal.",
        "Attach the required documents.",
        "Officials verify eligibility.",
        "After approval, the pension is credited monthly."
      ],
      "fee": "As per e-Sevai service charges",
      "processingTime": "15–30 working days",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "District Differently Abled Welfare Office",
        "purpose": "Application and verification"
      },
      {
        "name": "Tamil Nadu e-Sevai Centre",
        "purpose": "Online application assistance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.scd.tn.gov.in",
      "applicationPortal": "https://www.tnedistrict.tn.gov.in",
      "officialGuidelines": "https://www.cra.tn.gov.in/eleg_schemes.php"
    },
    "helpline": {
      "phone": "044-28444948",
      "email": "scd.tn@nic.in",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Who can apply?",
        "answer": "Eligible persons with disabilities residing in Tamil Nadu who satisfy the prescribed eligibility conditions."
      },
      {
        "question": "How much pension is provided?",
        "answer": "Eligible beneficiaries receive ₹1,500 per month."
      }
    ],
    "relatedSchemes": [
      "Old Age Pension Scheme",
      "Chief Minister's Comprehensive Health Insurance Scheme"
    ],
    "importantNotes": [
      "A valid Disability Certificate or UDID is mandatory.",
      "Applications are verified by the concerned authorities before approval.",
      "Pension is credited directly to the beneficiary's bank account."
    ],
    "tags": [
      "disability",
      "pension",
      "social security",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "maxIncome": 300000,
      "incomeBasis": "household",
      "states": [
        "Tamil Nadu"
      ],
      "disabilityRequired": true
    }
  },
  {
    "id": "tn012",
    "name": "Destitute Widow Pension Scheme",
    "shortName": "DWPS",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Commissionerate of Revenue Administration and Disaster Management",
    "category": "Social Security",
    "subCategory": "Widow Pension",
    "summary": "The Destitute Widow Pension Scheme provides monthly financial assistance to eligible widows in Tamil Nadu who have no adequate means of livelihood. It is one of the State Social Security Pension Schemes funded by the Government of Tamil Nadu.",
    "objective": "To provide financial security and social support to destitute widows through a monthly pension.",
    "status": "Active",
    "beneficiaryTypes": [
      "Widows",
      "Economically Weaker Women"
    ],
    "benefits": [
      {
        "title": "Monthly Pension",
        "description": "Monthly pension credited directly to the beneficiary's bank account.",
        "amount": "₹1,200 per month",
        "frequency": "Monthly",
        "mode": "DBT"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be a widow.",
      "Must be a resident of Tamil Nadu.",
      "Must be 18 years or above.",
      "Must be destitute with no adequate means of livelihood.",
      "Fixed assets should not exceed the limit prescribed by the Government."
    ],
    "notEligible": [
      "Women who are not widows.",
      "Applicants not satisfying the destitution criteria.",
      "Applicants exceeding the prescribed asset limit."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Smart Ration Card",
        "mandatory": true
      },
      {
        "name": "Husband's Death Certificate",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Widow Certificate",
      "Income Certificate"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "e-Sevai Centre",
          "name": "Tamil Nadu e-Sevai Centre"
        },
        {
          "type": "Taluk Office",
          "name": "Taluk Office"
        },
        {
          "type": "VAO Office",
          "name": "Village Administrative Officer"
        },
        {
          "type": "Online Portal",
          "name": "Tamil Nadu e-District Portal"
        }
      ],
      "steps": [
        "Collect or submit the application through e-Sevai or the e-District portal.",
        "Attach the required documents.",
        "Revenue officials verify the application.",
        "After approval, pension is credited every month."
      ],
      "fee": "As per e-Sevai service charges",
      "processingTime": "15-30 working days",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "Tamil Nadu e-Sevai Centre",
        "purpose": "Application submission"
      },
      {
        "name": "Taluk Office",
        "purpose": "Verification"
      },
      {
        "name": "Village Administrative Officer",
        "purpose": "Initial verification"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.cra.tn.gov.in",
      "applicationPortal": "https://www.tnedistrict.tn.gov.in",
      "officialGuidelines": "https://www.cra.tn.gov.in/eleg_schemes.php"
    },
    "helpline": {
      "phone": "1100",
      "workingHours": "Government Working Hours",
      "tollFree": true
    },
    "faq": [
      {
        "question": "Who can apply?",
        "answer": "Eligible destitute widows residing in Tamil Nadu."
      },
      {
        "question": "How much pension is provided?",
        "answer": "₹1,200 per month."
      }
    ],
    "relatedSchemes": [
      "Old Age Pension Scheme",
      "Differently Abled Pension Scheme"
    ],
    "importantNotes": [
      "Pension is credited directly through DBT.",
      "Applications are verified by Revenue Department officials.",
      "Applicants must satisfy the prescribed destitution criteria."
    ],
    "tags": [
      "widow",
      "pension",
      "social security",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 18,
      "gender": [
        "female"
      ],
      "maritalStatus": [
        "widowed"
      ],
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn016",
    "name": "Sathiyavanimuthu Ammaiyar Ninaivu Free Supply of Sewing Machine Scheme",
    "shortName": "Free Sewing Machine Scheme",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Department of Social Welfare and Women Empowerment",
    "category": "Women Welfare",
    "subCategory": "Self Employment",
    "summary": "The scheme provides free sewing machines to eligible beneficiaries to promote self-employment and economic independence. It primarily benefits destitute women, widows, deserted women, differently abled persons, socially affected women and economically weaker sections with tailoring skills.",
    "objective": "To improve self-employment opportunities by providing sewing machines free of cost to eligible beneficiaries.",
    "status": "Active",
    "beneficiaryTypes": [
      "Destitute Women",
      "Widows",
      "Deserted Women",
      "Differently Abled Persons",
      "Economically Weaker Women"
    ],
    "benefits": [
      {
        "title": "Free Sewing Machine",
        "description": "One sewing machine with accessories is provided free of cost.",
        "amount": "Free",
        "frequency": "One-time",
        "mode": "In-kind"
      }
    ],
    "eligibilityNotes": [
      "Applicant must be a resident of Tamil Nadu.",
      "Applicant should belong to an eligible beneficiary category.",
      "Annual family income should generally not exceed ₹72,000.",
      "Applicant should be between 20 and 40 years of age.",
      "Applicant should possess tailoring knowledge."
    ],
    "notEligible": [
      "Applicants above the prescribed income limit.",
      "Applicants without tailoring knowledge.",
      "Applicants outside the prescribed age limit."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Income Certificate",
        "mandatory": true
      },
      {
        "name": "Age Proof",
        "mandatory": true
      },
      {
        "name": "Tailoring Certificate / Proof of Tailoring Knowledge",
        "mandatory": true
      },
      {
        "name": "Category Certificate (Widow / Destitute / Disability etc.)",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Passport-size Photograph",
      "Ration Card"
    ],
    "application": {
      "modes": [
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "District Social Welfare Office",
          "name": "District Social Welfare Office"
        },
        {
          "type": "Extension Office",
          "name": "Extension Officer (Social Welfare)"
        },
        {
          "type": "e-Sevai Centre",
          "name": "Tamil Nadu e-Sevai Centre (where available)"
        }
      ],
      "steps": [
        "Collect the application form.",
        "Attach the required certificates.",
        "Submit the application to the District Social Welfare Office.",
        "Officials verify eligibility.",
        "Eligible beneficiaries receive a free sewing machine."
      ],
      "fee": "Free",
      "processingTime": "15-30 working days",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "District Social Welfare Office",
        "purpose": "Application and verification"
      },
      {
        "name": "Extension Officer (Social Welfare)",
        "purpose": "Guidance"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.tnsocialwelfare.tn.gov.in",
      "officialGuidelines": "https://www.tnlegalservices.tn.gov.in/swwe/Annexure_English.pdf"
    },
    "helpline": {
      "phone": "044-24351885",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Who can apply?",
        "answer": "Eligible destitute women, widows, deserted women, differently abled persons and other notified beneficiaries with tailoring knowledge."
      },
      {
        "question": "What benefit is provided?",
        "answer": "One sewing machine is supplied free of cost."
      }
    ],
    "relatedSchemes": [
      "Kalaignar Magalir Urimai Thittam",
      "Pudhumai Penn Scheme"
    ],
    "importantNotes": [
      "Tailoring knowledge is mandatory.",
      "Income ceiling applies.",
      "Applications are processed through the Social Welfare Department."
    ],
    "tags": [
      "women",
      "self employment",
      "tailoring",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 20,
      "maxAge": 40,
      "maxIncome": 72000,
      "incomeBasis": "household",
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn017",
    "name": "Free Bicycle Scheme",
    "shortName": "FBS",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Department of School Education",
    "category": "Education",
    "subCategory": "Student Welfare",
    "summary": "The Free Bicycle Scheme provides bicycles free of cost to eligible Class XI students studying in Government, Government-aided and partially Government-aided schools. The scheme helps students travel to school easily, reduces dropout rates and promotes access to higher secondary education.",
    "objective": "To improve access to higher secondary education by reducing transportation difficulties for students.",
    "launchYear": "2001",
    "status": "Active",
    "beneficiaryTypes": [
      "Class XI Students"
    ],
    "benefits": [
      {
        "title": "Free Bicycle",
        "description": "One bicycle is provided free of cost.",
        "amount": "Free",
        "frequency": "One-time",
        "mode": "In-kind"
      }
    ],
    "eligibilityNotes": [
      "Student must be studying in Class XI.",
      "Must be enrolled in a Government, Government-aided or Partially Government-aided school in Tamil Nadu.",
      "Applicable to both boys and girls.",
      "Students receiving free bus passes are also eligible."
    ],
    "notEligible": [
      "Students studying below Class XI.",
      "Students in private schools.",
      "Students residing in school hostels located within school premises."
    ],
    "documents": [
      {
        "name": "School Admission Record",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "EMIS Student ID"
    ],
    "application": {
      "modes": [
        "Institution Based"
      ],
      "whereToApply": [
        {
          "type": "School",
          "name": "Concerned Government / Government-aided School"
        }
      ],
      "steps": [
        "Take admission in Class XI.",
        "School prepares the list of eligible students.",
        "Education Department verifies the list.",
        "Bicycles are distributed through the school."
      ],
      "fee": "Free",
      "processingTime": "Distributed during the academic year.",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "Government Higher Secondary School",
        "purpose": "Beneficiary verification"
      },
      {
        "name": "District Education Office",
        "purpose": "Scheme support"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.tnschools.gov.in",
      "officialGuidelines": "https://bcw.tn.gov.in/sub_page/9"
    },
    "helpline": {
      "phone": "Not available",
      "workingHours": "School Working Hours",
      "tollFree": false
    },
    "faq": [
      {
        "question": "Who receives the bicycle?",
        "answer": "Eligible Class XI students studying in Government, Government-aided and partially Government-aided schools."
      },
      {
        "question": "Is there any income limit?",
        "answer": "No. There is no parental income or community restriction for eligible students."
      }
    ],
    "relatedSchemes": [
      "Chief Minister's Breakfast Scheme",
      "PM POSHAN"
    ],
    "importantNotes": [
      "No separate application is required.",
      "Distribution is carried out through schools.",
      "Students with free bus passes are also eligible."
    ],
    "tags": [
      "education",
      "student",
      "bicycle",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Very Easy",
    "estimatedCompletionTime": "No application required",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-07-31",
    "eligibility": {
      "minAge": 15,
      "maxAge": 18,
      "occupation": [
        "student"
      ],
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn020",
    "name": "Makkalai Thedi Maruthuvam",
    "shortName": "MTM",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Health and Family Welfare Department",
    "category": "Health",
    "subCategory": "Doorstep Healthcare",
    "summary": "Makkalai Thedi Maruthuvam (Healthcare at Doorstep) delivers essential healthcare services directly to people's homes, especially for senior citizens, persons with disabilities, and patients suffering from non-communicable diseases such as diabetes and hypertension. The scheme aims to improve access to preventive healthcare and early diagnosis.",
    "objective": "To provide accessible doorstep healthcare, early disease detection, regular follow-up care and reduce hospital visits for chronic patients.",
    "launchYear": "2021",
    "status": "Active",
    "beneficiaryTypes": [
      "Senior Citizens",
      "Persons with Disabilities",
      "Patients with Diabetes",
      "Patients with Hypertension",
      "General Public"
    ],
    "benefits": [
      {
        "title": "Free Doorstep Healthcare",
        "description": "Health screening, medicines, physiotherapy, nursing care and follow-up services at home.",
        "amount": "Free",
        "frequency": "As Required",
        "mode": "Doorstep Service"
      }
    ],
    "eligibilityNotes": [
      "Resident of Tamil Nadu.",
      "Priority is given to elderly persons, persons with disabilities and patients with chronic diseases.",
      "Available through designated Primary Health Centres and Health Sub-Centres."
    ],
    "notEligible": [
      "No major exclusions. Services are provided based on medical need and availability."
    ],
    "documents": [
      {
        "name": "Any Government Identity Proof",
        "mandatory": false
      }
    ],
    "optionalDocuments": [
      "Aadhaar Card",
      "Medical Records"
    ],
    "application": {
      "modes": [
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Primary Health Centre",
          "name": "Government Primary Health Centre (PHC)"
        },
        {
          "type": "Urban Health Centre",
          "name": "Urban Health & Wellness Centre"
        },
        {
          "type": "Village Health Nurse",
          "name": "Village Health Nurse / Health Worker"
        }
      ],
      "steps": [
        "Visit or contact the nearest Government PHC.",
        "Health staff register eligible beneficiaries.",
        "Medical team schedules doorstep visits.",
        "Healthcare services are provided at home."
      ],
      "fee": "Free",
      "processingTime": "Depends on medical assessment",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [
      {
        "name": "Government Primary Health Centre",
        "purpose": "Registration"
      },
      {
        "name": "Health & Wellness Centre",
        "purpose": "Healthcare Support"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.tnhealth.tn.gov.in",
      "officialGuidelines": "https://www.tnhealth.tn.gov.in"
    },
    "helpline": {
      "phone": "104",
      "workingHours": "24×7",
      "tollFree": true
    },
    "faq": [
      {
        "question": "Is the service free?",
        "answer": "Yes. Eligible beneficiaries receive doorstep healthcare services free of cost."
      },
      {
        "question": "Who provides the service?",
        "answer": "Government doctors, nurses, physiotherapists and other health workers through the Health Department."
      }
    ],
    "relatedSchemes": [
      "Chief Minister's Comprehensive Health Insurance Scheme",
      "Innuyir Kappom – Nammai Kaakkum 48"
    ],
    "importantNotes": [
      "Doorstep service focuses on non-communicable diseases and elderly care.",
      "Services are delivered through Government healthcare institutions.",
      "Medicines and follow-up care are provided free where applicable."
    ],
    "tags": [
      "health",
      "doorstep",
      "medical",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "15-20 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-08-01",
    "eligibility": {
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn021",
    "name": "Innuyir Kappom – Nammai Kaakkum 48",
    "shortName": "NK-48",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Health and Family Welfare Department / Tamil Nadu Health Systems Project",
    "category": "Health",
    "subCategory": "Emergency Healthcare",
    "summary": "Innuyir Kappom – Nammai Kaakkum 48 provides free cashless emergency treatment to all road accident victims during the first 48 hours after an accident occurring within Tamil Nadu. The scheme covers eligible emergency procedures at empanelled Government and private hospitals, irrespective of the victim's state, nationality or insurance status.",
    "objective": "To reduce deaths due to road accidents by ensuring immediate cashless emergency treatment during the golden 48 hours.",
    "launchYear": "2021",
    "status": "Active",
    "beneficiaryTypes": [
      "Road Accident Victims"
    ],
    "benefits": [
      {
        "title": "Cashless Emergency Treatment",
        "description": "Emergency treatment in empanelled hospitals during the first 48 hours after a road accident.",
        "amount": "Up to ₹2,00,000",
        "frequency": "Per Accident",
        "mode": "Cashless"
      }
    ],
    "eligibilityNotes": [
      "Victim of a road traffic accident occurring within Tamil Nadu.",
      "Applicable to Indian citizens and foreign nationals.",
      "No CMCHIS card is required."
    ],
    "notEligible": [
      "Non-road accident medical emergencies.",
      "Treatment after the notified emergency period except as permitted under scheme guidelines."
    ],
    "documents": [
      {
        "name": "No prior documents required during emergency",
        "mandatory": false
      }
    ],
    "optionalDocuments": [
      "Aadhaar Card",
      "Police FIR (if available)"
    ],
    "application": {
      "modes": [
        "Automatic",
        "Hospital Based"
      ],
      "whereToApply": [
        {
          "type": "Government Hospital",
          "name": "Empanelled Government Hospital"
        },
        {
          "type": "Private Hospital",
          "name": "Empanelled Private Hospital"
        },
        {
          "type": "Emergency Ambulance",
          "name": "108 Ambulance Service"
        }
      ],
      "steps": [
        "Call 108 or take the victim to the nearest empanelled hospital.",
        "Hospital verifies that the case qualifies under NK-48.",
        "Cashless emergency treatment begins immediately.",
        "Hospital submits the claim to the Government."
      ],
      "fee": "Free",
      "processingTime": "Immediate",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [],
    "officialResources": {
      "officialWebsite": "https://tnhsp.org",
      "officialGuidelines": "https://tnhsp.org"
    },
    "helpline": {
      "phone": "108",
      "workingHours": "24×7",
      "tollFree": true
    },
    "faq": [],
    "relatedSchemes": [
      "Chief Minister's Comprehensive Health Insurance Scheme",
      "Makkalai Thedi Maruthuvam"
    ],
    "importantNotes": [
      "Available to all road accident victims irrespective of insurance status.",
      "Treatment is available only at empanelled hospitals.",
      "Current cashless treatment limit is ₹2 lakh."
    ],
    "tags": [
      "health",
      "emergency",
      "road safety",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Very Easy",
    "estimatedCompletionTime": "No application required",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-08-01",
    "eligibility": {
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn022",
    "name": "Chief Minister's Uzhavar Pathukappu Thittam",
    "shortName": "CMUPT",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Commissionerate of Revenue Administration and Disaster Management",
    "category": "Agriculture",
    "subCategory": "Farmer Social Security",
    "summary": "Chief Minister's Uzhavar Pathukappu Thittam is a comprehensive social security scheme for agricultural labourers, small and marginal farmers, and their dependent family members. It provides financial assistance for education, marriage, accident relief, natural death, funeral expenses, temporary incapacity and orphan support.",
    "objective": "To improve the social security, education and economic welfare of agricultural labourers, small and marginal farmers and their families.",
    "launchYear": "2011",
    "status": "Active",
    "beneficiaryTypes": [
      "Agricultural Labourers",
      "Small Farmers",
      "Marginal Farmers",
      "Cultivating Tenants",
      "Dependent Family Members"
    ],
    "benefits": [
      {
        "title": "Multiple Social Security Benefits",
        "description": "Educational assistance, marriage assistance, old age pension, accident relief, natural death assistance, funeral assistance, temporary incapacity assistance and orphan assistance.",
        "amount": "Varies by benefit",
        "frequency": "As Applicable",
        "mode": "DBT / Financial Assistance"
      }
    ],
    "eligibilityNotes": [
      "Agricultural labourers engaged in agriculture or allied activities.",
      "Small farmers owning up to 2.5 acres of wet land or 5 acres of dry land.",
      "Cultivating tenants are also eligible.",
      "Main member must be between 18 and 65 years of age.",
      "Dependent non-earning family members can also be registered."
    ],
    "notEligible": [],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Land Records / Cultivation Proof",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Passport-size Photograph",
        "mandatory": true
      }
    ],
    "optionalDocuments": [],
    "application": {
      "modes": [
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "Village Administrative Officer",
          "name": "VAO Office"
        },
        {
          "type": "Taluk Office",
          "name": "Taluk Office"
        },
        {
          "type": "Revenue Department",
          "name": "District Revenue Office"
        }
      ],
      "steps": [
        "Collect the application form.",
        "Submit required documents.",
        "Revenue officials verify eligibility.",
        "Member registration is completed.",
        "Benefits are released whenever eligible."
      ],
      "fee": "Free",
      "processingTime": "15–30 working days",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [],
    "officialResources": {
      "officialWebsite": "https://www.cra.tn.gov.in/cm_uzhavar.php",
      "officialGuidelines": "https://www.cra.tn.gov.in/cm_uzhavar.php"
    },
    "helpline": {
      "phone": "1100",
      "workingHours": "Government Working Hours",
      "tollFree": true
    },
    "faq": [],
    "relatedSchemes": [
      "PM-KISAN",
      "PM Fasal Bima Yojana"
    ],
    "importantNotes": [
      "Dependent family members are also eligible for several benefits.",
      "Different benefits have different eligibility conditions.",
      "Registration is done through the Revenue Department."
    ],
    "tags": [
      "farmer",
      "social security",
      "agriculture",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Medium",
    "estimatedCompletionTime": "30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-08-01",
    "eligibility": {
      "minAge": 18,
      "maxAge": 65,
      "occupation": [
        "farmer"
      ],
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn023",
    "name": "Annai Teresa Ninaivu Marriage Assistance Scheme for Orphan Girls",
    "shortName": "ATMAS",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Department of Social Welfare and Women Empowerment",
    "category": "Women Welfare",
    "subCategory": "Marriage Assistance",
    "summary": "Provides financial assistance and gold for the marriage of eligible orphan girls from economically weaker backgrounds.",
    "objective": "To financially support orphan girls during marriage and encourage their social and economic well-being.",
    "status": "Active",
    "beneficiaryTypes": [
      "Orphan Girls"
    ],
    "benefits": [
      {
        "title": "Marriage Assistance",
        "description": "Financial assistance along with 8 grams (1 sovereign) of 22-carat gold for Thirumangalyam.",
        "amount": "₹25,000 or ₹50,000 (depending on educational qualification) + 8g Gold",
        "frequency": "One-time",
        "mode": "DBT + Gold"
      }
    ],
    "eligibilityNotes": [
      "Bride must be an orphan.",
      "Bride must be at least 18 years old.",
      "Must be a resident of Tamil Nadu.",
      "Must satisfy the prescribed income criteria.",
      "Educational qualification determines the applicable assistance category."
    ],
    "notEligible": [],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Orphan Certificate",
        "mandatory": true
      },
      {
        "name": "Income Certificate",
        "mandatory": true
      },
      {
        "name": "Age Proof",
        "mandatory": true
      },
      {
        "name": "Educational Certificate",
        "mandatory": true
      },
      {
        "name": "Marriage Invitation / Proof",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      }
    ],
    "optionalDocuments": [],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "e-Sevai Centre",
          "name": "Tamil Nadu e-Sevai Centre"
        },
        {
          "type": "District Office",
          "name": "District Social Welfare Office"
        }
      ],
      "steps": [],
      "fee": "Free",
      "processingTime": "20–30 working days",
      "renewalRequired": false,
      "offlineFormAvailable": false
    },
    "assistanceCenters": [],
    "officialResources": {
      "officialWebsite": "https://www.tnsocialwelfare.tn.gov.in",
      "applicationPortal": "https://www.tnesevai.tn.gov.in"
    },
    "helpline": {
      "phone": "1100",
      "workingHours": "Government Working Hours",
      "tollFree": false
    },
    "faq": [],
    "relatedSchemes": [
      "Moovalur Ramamirtham Ammaiyar Marriage Assistance Scheme",
      "E.V.R. Maniammaiyar Marriage Assistance Scheme"
    ],
    "importantNotes": [],
    "tags": [],
    "difficultyLevel": "Easy",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "eligibility": {
      "minAge": 18,
      "gender": [
        "female"
      ],
      "maritalStatus": [
        "unmarried"
      ],
      "maxIncome": 72000,
      "incomeBasis": "household",
      "states": [
        "Tamil Nadu"
      ]
    }
  },
  {
    "id": "tn024",
    "name": "E.V.R. Maniammaiyar Ninaivu Marriage Assistance Scheme for Daughters of Poor Widows",
    "shortName": "EVRM Marriage Assistance",
    "governmentLevel": "State",
    "state": "Tamil Nadu",
    "ministry": "Government of Tamil Nadu",
    "department": "Department of Social Welfare and Women Empowerment",
    "category": "Women Welfare",
    "subCategory": "Marriage Assistance",
    "summary": "The scheme provides financial assistance and gold for the marriage of daughters of poor widows. It aims to reduce the financial burden of marriage and encourage the education and welfare of girls from economically disadvantaged widow-headed families.",
    "objective": "To provide financial support for the marriage of daughters of poor widows and promote their social and economic well-being.",
    "status": "Active",
    "beneficiaryTypes": [
      "Daughters of Poor Widows"
    ],
    "benefits": [
      {
        "title": "Marriage Assistance",
        "description": "Financial assistance along with 8 grams (1 sovereign) of 22-carat gold for Thirumangalyam.",
        "amount": "₹25,000 or ₹50,000 (depending on educational qualification) + 8g Gold",
        "frequency": "One-time",
        "mode": "DBT + Gold"
      }
    ],
    "eligibilityNotes": [
      "Bride must be the daughter of a widow.",
      "Bride must have completed 18 years of age.",
      "Bridegroom must have completed 21 years of age.",
      "Annual family income should generally not exceed ₹72,000.",
      "Applicant must be a resident of Tamil Nadu.",
      "Educational qualification determines the applicable assistance category."
    ],
    "notEligible": [
      "Applicants above the prescribed income limit.",
      "Applicants not belonging to eligible widow-headed families."
    ],
    "documents": [
      {
        "name": "Aadhaar Card",
        "mandatory": true
      },
      {
        "name": "Widow Certificate of Mother",
        "mandatory": true
      },
      {
        "name": "Income Certificate",
        "mandatory": true
      },
      {
        "name": "Age Proof",
        "mandatory": true
      },
      {
        "name": "Educational Certificate",
        "mandatory": true
      },
      {
        "name": "Marriage Invitation / Proof",
        "mandatory": true
      },
      {
        "name": "Bank Passbook",
        "mandatory": true
      },
      {
        "name": "Family / Ration Card",
        "mandatory": true
      }
    ],
    "optionalDocuments": [
      "Passport-size Photograph"
    ],
    "application": {
      "modes": [
        "Online",
        "Offline"
      ],
      "whereToApply": [
        {
          "type": "e-Sevai Centre",
          "name": "Tamil Nadu e-Sevai Centre"
        },
        {
          "type": "District Social Welfare Office",
          "name": "District Social Welfare Office"
        },
        {
          "type": "Block Office",
          "name": "Extension Officer (Social Welfare)"
        }
      ],
      "steps": [
        "Submit the application before the marriage date as prescribed.",
        "Attach all required certificates.",
        "Eligibility is verified by the Social Welfare Department.",
        "Financial assistance is transferred through DBT and gold is sanctioned."
      ],
      "fee": "Free",
      "processingTime": "20–30 working days",
      "renewalRequired": false,
      "offlineFormAvailable": true
    },
    "assistanceCenters": [
      {
        "name": "District Social Welfare Office",
        "purpose": "Application & Verification"
      },
      {
        "name": "Tamil Nadu e-Sevai Centre",
        "purpose": "Application Submission"
      }
    ],
    "officialResources": {
      "officialWebsite": "https://www.tnsocialwelfare.tn.gov.in",
      "applicationPortal": "https://www.tnesevai.tn.gov.in",
      "officialGuidelines": "https://www.india.gov.in/category/benefits-social-development/subcategory/benefits-grants-subsidies/details/evr-maniammaiyar-ninaivu-poor-widows-daughters-marriage-assistance-scheme-application-form"
    },
    "helpline": {
      "phone": "1100",
      "workingHours": "Government Working Hours",
      "tollFree": true
    },
    "faq": [],
    "relatedSchemes": [
      "Moovalur Ramamirtham Ammaiyar Marriage Assistance Scheme",
      "Annai Teresa Ninaivu Marriage Assistance Scheme for Orphan Girls"
    ],
    "importantNotes": [
      "Applications should be submitted within the prescribed timeline before marriage.",
      "Benefit amount depends on the bride's educational qualification.",
      "8 grams of 22-carat gold is provided for Thirumangalyam."
    ],
    "tags": [
      "women",
      "marriage",
      "widow",
      "financial assistance",
      "Tamil Nadu"
    ],
    "difficultyLevel": "Easy",
    "estimatedCompletionTime": "20-30 minutes",
    "languagesSupported": [
      "Tamil",
      "English"
    ],
    "lastUpdated": "2026-08-01",
    "eligibility": {
      "minAge": 18,
      "gender": [
        "female"
      ],
      "maritalStatus": [
        "unmarried",
        "widowed"
      ],
      "maxIncome": 72000,
      "incomeBasis": "household",
      "states": [
        "Tamil Nadu"
      ]
    }
  }
];

export function getScheme(id: string) {
  return schemes.find((s) => s.id === id);
}
