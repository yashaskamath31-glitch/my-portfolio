export interface ProfileData {
  name: string;
  role: string;
  specialization: string;
  college: string;
  collegeShort: string;
  university: string;
  period: string;
  cgpa: string;
  puc: string;
  tenth: string;
  email: string;
  linkedin: string;
  location: string;
  bio: string[];
  skills: {
    category: string;
    items: {
      name: string;
      level: string;
      description: string;
      tags: string[];
    }[];
  }[];
  featuredProject: {
    title: string;
    tagline: string;
    description: string;
    problemSolved: string;
    keyFeatures: string[];
    techStack: string[];
    architecture: string[];
    sampleScenarios: {
      jobTitle: string;
      skillsRequired: string[];
      sampleMatchScore: number;
      matchedSkills: string[];
      missingSkills: string[];
      analysis: string;
    }[];
  };
  education: {
    degree: string;
    institution: string;
    university?: string;
    period: string;
    grade: string;
    status: string;
    details: string[];
  }[];
  languages: {
    name: string;
    nativeName: string;
    proficiency: string;
    category: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Yashas H C",
  role: "Computer Science Engineering Student",
  specialization: "Artificial Intelligence & Machine Learning",
  college: "AJ Institute of Engineering and Technology (AJIET)",
  collegeShort: "AJIET",
  university: "Visvesvaraya Technological University (VTU)",
  period: "2024 – 2028",
  cgpa: "7.8 / 10",
  puc: "84%",
  tenth: "88%",
  email: "yashaskamath31@gmail.com",
  linkedin: "https://www.linkedin.com/in/yashas-h-c-undefined-75ba01428",
  location: "Mangaluru, Karnataka, India",
  bio: [
    "I am a passionate Computer Science Engineering undergraduate specializing in Artificial Intelligence and Machine Learning at AJ Institute of Engineering and Technology, affiliated with Visvesvaraya Technological University (VTU).",
    "My focus centers around solid algorithmic foundations, data structures, and Python programming. I love engineering intelligent, practical solutions—such as AI-driven resume analyzers and algorithmic tools—that bridge computational intelligence with clean user experiences.",
    "Driven by continuous problem solving and analytical thinking, I am eager to contribute to forward-thinking technology teams, internships, and cutting-edge software initiatives."
  ],
  skills: [
    {
      category: "Programming & Core Logic",
      items: [
        {
          name: "Python",
          level: "Proficient",
          description: "Core scripting, object-oriented design, text processing, data parsing, algorithmic automation, and AI/ML model integration.",
          tags: ["Algorithms", "Automation", "Text Processing", "OOP", "AI Foundation"]
        },
        {
          name: "Data Structures",
          level: "Advanced Foundation",
          description: "Implementation and optimization of arrays, linked lists, stacks, queues, trees, hashing, and asymptotic algorithmic analysis (Big-O).",
          tags: ["Time Complexity", "Search & Sort", "Trees", "Graphs", "Problem Solving"]
        }
      ]
    },
    {
      category: "Web & Interface Engineering",
      items: [
        {
          name: "HTML5 & Web Standards",
          level: "Proficient",
          description: "Semantic page structuring, accessible DOM hierarchies, forms, meta tags, and integration with modern CSS and reactive component frameworks.",
          tags: ["Semantic HTML", "Accessibility", "Responsive Layout", "DOM Structure"]
        },
        {
          name: "AI & ML Specialization",
          level: "Academic Specialization",
          description: "Foundational machine learning concepts, natural language keyword matching, feature extraction, and automated resume qualification pipelines.",
          tags: ["NLP Principles", "Pattern Matching", "Data Analysis", "Decision Logic"]
        }
      ]
    }
  ],
  featuredProject: {
    title: "AI Job Match and Resume Analyzer",
    tagline: "Intelligent Resume Evaluation & Algorithmic Skill-Gap Detection System",
    description: "An AI-powered software application designed to intelligently compare candidate resumes against specific job descriptions. It computes semantic similarity, extracts domain-specific keywords, and generates actionable skill-gap reports to optimize candidate readiness for ATS (Applicant Tracking Systems).",
    problemSolved: "Traditional resume screeners rely on rigid keyword matches that fail to measure contextual compatibility. This project bridges that gap by systematically parsing candidate qualifications, measuring alignment against job requirements, and highlighting critical missing proficiencies.",
    keyFeatures: [
      "Automated extraction of technical skills and core requirements from job descriptions",
      "Algorithmic match score computation based on weighted skill matrices",
      "Clear skill gap identification (Matched vs. Missing competencies)",
      "Actionable recommendations to improve candidate resume strength",
      "Intuitive and clean user interface for immediate feedback"
    ],
    techStack: ["Python", "Natural Language Processing (NLP)", "Data Structures", "HTML5 & Modern CSS"],
    architecture: [
      "Resume & JD Ingestion Layer",
      "Text Normalization & Tokenization",
      "Skill Dictionary & Keyword Extraction",
      "Similarity & Match Scoring Engine",
      "Visualization & Gap Analysis Output"
    ],
    sampleScenarios: [
      {
        jobTitle: "Junior AI / ML Developer",
        skillsRequired: ["Python", "Data Structures", "Machine Learning", "Model Evaluation", "NumPy", "Git"],
        sampleMatchScore: 82,
        matchedSkills: ["Python", "Data Structures", "Machine Learning", "Git"],
        missingSkills: ["Model Evaluation", "NumPy"],
        analysis: "Strong core alignment with algorithmic fundamentals and Python programming. Adding targeted experience with numerical computing libraries will achieve full compatibility."
      },
      {
        jobTitle: "Python Backend & Automation Trainee",
        skillsRequired: ["Python", "Data Structures", "HTML", "REST APIs", "SQL", "Unit Testing"],
        sampleMatchScore: 88,
        matchedSkills: ["Python", "Data Structures", "HTML", "REST APIs"],
        missingSkills: ["SQL", "Unit Testing"],
        analysis: "High match compatibility. Solid foundation in core scripting, data structure implementation, and web structure allows rapid onboarding."
      },
      {
        jobTitle: "Data Analyst & NLP Associate",
        skillsRequired: ["Python", "Text Processing", "Data Structures", "Pandas", "Statistical Analysis"],
        sampleMatchScore: 76,
        matchedSkills: ["Python", "Text Processing", "Data Structures"],
        missingSkills: ["Pandas", "Statistical Analysis"],
        analysis: "Excellent analytical and text parsing capabilities demonstrated through the resume analysis pipeline."
      }
    ]
  },
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
      institution: "AJ Institute of Engineering and Technology (AJIET)",
      university: "Visvesvaraya Technological University (VTU)",
      period: "2024 – 2028",
      grade: "CGPA: 7.8 / 10",
      status: "In Progress",
      details: [
        "Specializing in Artificial Intelligence & Machine Learning (AI & ML)",
        "Undergraduate coursework covering Data Structures, Algorithmic Analysis, Python Programming, and Mathematics for Computing",
        "Active member of departmental technical workshops and engineering initiatives"
      ]
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Department of Pre-University Education, Karnataka",
      period: "Completed (2024)",
      grade: "84.0%",
      status: "Completed",
      details: [
        "Rigorous coursework in Science with focus on Mathematics, Physics, and Chemistry",
        "Demonstrated strong mathematical aptitude and scientific problem solving"
      ]
    },
    {
      degree: "Secondary School Leaving Certificate (10th Standard)",
      institution: "Karnataka Secondary Education Examination Board (KSEEB)",
      period: "Completed (2022)",
      grade: "88.0%",
      status: "Completed with Distinction",
      details: [
        "Achieved Distinction with 88% overall aggregate",
        "Strong foundation in Mathematics and General Sciences"
      ]
    }
  ],
  languages: [
    {
      name: "Kannada",
      nativeName: "ಕನ್ನಡ",
      proficiency: "Native / Mother Tongue",
      category: "Primary Language",
      description: "Full native fluency in spoken, written, and literary communication."
    },
    {
      name: "English",
      nativeName: "English",
      proficiency: "Professional & Technical",
      category: "Global Language",
      description: "Fluent professional communication for engineering documentation, code reviews, and presentations."
    },
    {
      name: "Hindi",
      nativeName: "हिन्दी",
      proficiency: "Fluent",
      category: "National Language",
      description: "Fluent verbal and written proficiency for broad national collaboration."
    },
    {
      name: "Marathi",
      nativeName: "मराठी",
      proficiency: "Conversational",
      category: "Regional Language",
      description: "Conversational fluency and strong comprehension."
    },
    {
      name: "Malayalam",
      nativeName: "മലയാളം",
      proficiency: "Conversational",
      category: "Regional Language",
      description: "Conversational fluency and spoken interpersonal understanding."
    }
  ]
};
