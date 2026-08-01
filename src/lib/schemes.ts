export type Gender = "male" | "female" | "other";
export type Category = "general" | "obc" | "sc" | "st" | "ews";
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
  maxIncome?: number;
  incomeBasis?: "individual" | "household";
  occupation?: Occupation[];
  states?: string[];
  categories?: Category[];
  disabilityRequired?: boolean;
}

export interface Scheme {
  id: string;
  name: string;
  ministry: string;
  summary: string;
  benefit: string;
  documents: string[];
  steps: string[];
  helpline: string;
  portal: string;
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

export const schemes: Scheme[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN Samman Nidhi",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    summary:
      "Direct income support for small and marginal landholding farmer families across India.",
    benefit: "₹6,000 per year paid in three equal instalments of ₹2,000 directly to your bank account.",
    documents: [
      "Aadhaar card",
      "Land ownership records (khatauni / RoR)",
      "Bank passbook with IFSC",
      "Mobile number linked to Aadhaar",
    ],
    steps: [
      "Open pmkisan.gov.in and choose 'New Farmer Registration'.",
      "Enter your Aadhaar number, state and captcha, then verify with OTP.",
      "Fill land details exactly as printed on your land record.",
      "Upload the land document and bank passbook copy.",
      "Note the registration number and track status under 'Beneficiary Status'.",
    ],
    helpline: "155261 / 011-24300606",
    portal: "https://pmkisan.gov.in",
    eligibility: {
      minAge: 18,
      occupation: ["farmer"],
      maxIncome: 200000,
      incomeBasis: "household",
    },
  },
  {
    id: "pmay-u",
    name: "Pradhan Mantri Awas Yojana (Urban)",
    ministry: "Ministry of Housing & Urban Affairs",
    summary: "Housing subsidy for urban families who do not own a pucca house anywhere in India.",
    benefit:
      "Interest subsidy on home loans (up to ₹2.67 lakh) or central assistance of ₹1.5–2.5 lakh for house construction.",
    documents: [
      "Aadhaar of all family members",
      "Income certificate or salary slips",
      "Proof that you own no pucca house (self-declaration)",
      "Bank account details",
    ],
    steps: [
      "Visit pmay-urban.gov.in and select 'Citizen Assessment'.",
      "Enter Aadhaar to fetch your details.",
      "Complete the application with income and current housing details.",
      "Submit and save the assessment ID.",
      "Follow up with your Urban Local Body for verification.",
    ],
    helpline: "1800-11-6163",
    portal: "https://pmay-urban.gov.in",
    eligibility: {
      minAge: 18,
      maxIncome: 1800000,
      incomeBasis: "household",
    },
  },
  {
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana",
    ministry: "Ministry of Finance",
    summary: "A high-interest savings account for a girl child, opened by her parent or guardian.",
    benefit:
      "Government-set interest (currently ~8.2% p.a.), fully tax-free maturity and 80C deduction on deposits.",
    documents: [
      "Birth certificate of the girl child",
      "Aadhaar and PAN of the parent/guardian",
      "Address proof",
      "Passport-size photographs",
    ],
    steps: [
      "Visit any post office or authorised bank branch.",
      "Fill Form SSA-1 with the girl child's details.",
      "Attach the birth certificate and guardian KYC documents.",
      "Deposit a minimum of ₹250 to open the account.",
      "Continue depositing up to ₹1.5 lakh per year until 15 years.",
    ],
    helpline: "1800-266-6868",
    portal: "https://www.indiapost.gov.in",
    eligibility: {
      maxAge: 10,
      gender: ["female"],
    },
  },
  {
    id: "nsap-igndps",
    name: "Indira Gandhi National Disability Pension",
    ministry: "Ministry of Rural Development",
    summary: "Monthly pension for persons with severe disability from a below-poverty-line household.",
    benefit: "₹300–₹500 per month central assistance, often topped up by the state.",
    documents: [
      "Disability certificate (40%+)",
      "BPL ration card",
      "Aadhaar card",
      "Bank account details",
    ],
    steps: [
      "Collect the NSAP form from your Gram Panchayat or Municipality.",
      "Attach the disability certificate and BPL proof.",
      "Submit to the Block Development Officer.",
      "Verification is done by the local sanctioning committee.",
      "Track the sanction via nsap.nic.in.",
    ],
    helpline: "1800-111-555",
    portal: "https://nsap.nic.in",
    eligibility: {
      minAge: 18,
      maxAge: 79,
      disabilityRequired: true,
      maxIncome: 100000,
      incomeBasis: "household",
    },
  },
  {
    id: "igns-old-age",
    name: "Indira Gandhi National Old Age Pension",
    ministry: "Ministry of Rural Development",
    summary: "Monthly pension for senior citizens living below the poverty line.",
    benefit: "₹200/month (60–79 years) and ₹500/month from 80 years, plus state contribution.",
    documents: ["Age proof", "BPL ration card", "Aadhaar card", "Bank passbook"],
    steps: [
      "Get the NSAP application from the Panchayat or Municipal office.",
      "Attach age proof and BPL certificate.",
      "Submit to the Block/Ward officer.",
      "Await verification by the sanctioning committee.",
      "Pension is credited monthly to your bank account.",
    ],
    helpline: "1800-111-555",
    portal: "https://nsap.nic.in",
    eligibility: {
      minAge: 60,
      maxIncome: 100000,
      incomeBasis: "household",
    },
  },
  {
    id: "nsp-post-matric",
    name: "Post-Matric Scholarship for SC/ST Students",
    ministry: "Ministry of Social Justice & Empowerment",
    summary: "Financial support for SC and ST students studying after class 10.",
    benefit: "Full tuition reimbursement plus monthly maintenance allowance of ₹230–₹1,200.",
    documents: [
      "Caste certificate",
      "Income certificate",
      "Previous year marksheet",
      "Institution admission proof",
      "Bank account in the student's name",
    ],
    steps: [
      "Register on scholarships.gov.in with your Aadhaar.",
      "Choose the Post-Matric Scholarship for SC/ST.",
      "Fill academic and bank details.",
      "Upload caste and income certificates.",
      "Submit before the deadline and get the institute to verify.",
    ],
    helpline: "0120-6619540",
    portal: "https://scholarships.gov.in",
    eligibility: {
      minAge: 15,
      maxAge: 35,
      occupation: ["student"],
      categories: ["sc", "st"],
      maxIncome: 250000,
      incomeBasis: "household",
    },
  },
  {
    id: "pmsby",
    name: "Pradhan Mantri Suraksha Bima Yojana",
    ministry: "Ministry of Finance",
    summary: "Very low-cost accident insurance for anyone with a bank account.",
    benefit: "₹2 lakh accidental death/disability cover for a premium of ₹20 per year.",
    documents: ["Aadhaar card", "Savings bank account", "Consent-cum-declaration form"],
    steps: [
      "Visit your bank branch or use net banking.",
      "Fill the PMSBY consent form with nominee details.",
      "Authorise auto-debit of ₹20 every year.",
      "Keep the acknowledgement slip safely.",
    ],
    helpline: "1800-180-1111",
    portal: "https://jansuraksha.gov.in",
    eligibility: {
      minAge: 18,
      maxAge: 70,
    },
  },
  {
    id: "pmegp",
    name: "Prime Minister's Employment Generation Programme",
    ministry: "Ministry of MSME",
    summary: "Credit-linked subsidy to help you start your own micro enterprise.",
    benefit: "Subsidy of 15–35% on a project cost up to ₹50 lakh (manufacturing) or ₹20 lakh (service).",
    documents: [
      "Aadhaar and PAN",
      "Project report",
      "Education certificate (class 8 for larger projects)",
      "Caste/special category certificate if applicable",
    ],
    steps: [
      "Register on the KVIC PMEGP e-portal.",
      "Prepare and upload a project report.",
      "Submit the online application to your district office.",
      "Attend the district task force interview.",
      "Bank sanctions the loan and the subsidy is credited as margin money.",
    ],
    helpline: "1800-3000-0034",
    portal: "https://www.kviconline.gov.in/pmegpeportal",
    eligibility: {
      minAge: 18,
      occupation: ["unemployed", "self-employed", "student"],
    },
  },
  {
    id: "ujjwala",
    name: "Pradhan Mantri Ujjwala Yojana 2.0",
    ministry: "Ministry of Petroleum & Natural Gas",
    summary: "Free LPG connection for women from low-income households.",
    benefit: "Free deposit-free LPG connection with first refill and stove provided at no cost.",
    documents: ["Aadhaar card", "Ration card / self-declaration of household", "Bank account details"],
    steps: [
      "Apply on pmuy.gov.in or at your nearest LPG distributor.",
      "Choose your gas company and distributor.",
      "Submit the KYC form with Aadhaar and household declaration.",
      "Collect the connection after verification.",
    ],
    helpline: "1800-266-6696",
    portal: "https://www.pmuy.gov.in",
    eligibility: {
      minAge: 18,
      gender: ["female"],
      maxIncome: 300000,
      incomeBasis: "household",
    },
  },
  {
    id: "ayushman-bharat",
    name: "Ayushman Bharat PM-JAY",
    ministry: "National Health Authority",
    summary: "Cashless hospital treatment for poor and vulnerable families.",
    benefit: "Health cover of ₹5 lakh per family per year at empanelled public and private hospitals.",
    documents: ["Aadhaar card", "Ration card", "Registered mobile number"],
    steps: [
      "Check eligibility at pmjay.gov.in or call 14555.",
      "Visit a Common Service Centre or empanelled hospital's Ayushman Mitra desk.",
      "Complete Aadhaar-based verification.",
      "Collect your Ayushman card and use it at any empanelled hospital.",
    ],
    helpline: "14555",
    portal: "https://pmjay.gov.in",
    eligibility: {
      maxIncome: 250000,
      incomeBasis: "household",
    },
  },
];

export function getScheme(id: string) {
  return schemes.find((s) => s.id === id);
}
