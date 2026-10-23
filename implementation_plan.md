# Implementation Plan: Yashas H C - AI & ML Developer Portfolio

An elite, high-performance, and visually captivating portfolio website tailored for **Yashas H C**, a Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning at AJ Institute of Engineering and Technology (VTU), Mangaluru.

---

## 1. Project Overview & Architecture

### Profile Essentials
- **Full Name**: Yashas H C
- **Domain**: Computer Science Engineering (AI & ML Specialization)
- **Institution**: AJ Institute of Engineering and Technology (AJIET)
- **Affiliated University**: Visvesvaraya Technological University (VTU), Belagavi
- **Academic Batch**: 2024 – 2028
- **Academic Performance**:
  - B.E. CGPA: **7.8 / 10**
  - PUC: **84%**
  - 10th: **88%**
- **Core Skills**: Python, HTML, Data Structures, AI/ML Principles
- **Featured Project**: AI Job Match and Resume Analyzer
- **Languages**: Kannada, Hindi, Marathi, English, Malayalam (5 Languages)
- **Location**: Mangaluru, Karnataka, India
- **Contact**: `yashaskamath31@gmail.com`
- **LinkedIn**: `https://www.linkedin.com/in/yashas-h-c-undefined-75ba01428`

### Technical Stack
- **Framework**: React 19 with TypeScript
- **Tooling**: Vite 8
- **Styling**: Tailwind CSS v4 with custom glassmorphism, glowing borders, radial gradients, and dark luxury palette
- **Icons**: Lucide React + Custom Pixel-Perfect Verified LinkedIn Icon
- **Interactions**: Interactive Python Sandbox Code Runner, Interactive AI Job Match & Resume Analyzer Simulator, Mailto Drafter, Clipboard Toast.

---

## 2. Design System & Aesthetics

```
Color Palette:
├── Background (Deep Slate):      #030712 / #0B0F19 / #0F172A
├── Card Surfaces (Glassmorphic): rgba(15, 23, 42, 0.75) with backdrop-blur-xl
├── Border Glow:                  rgba(99, 102, 241, 0.2) to rgba(6, 182, 212, 0.3)
├── Primary Accent:               Indigo (#6366F1) / Electric Violet (#8B5CF6)
├── Secondary Accent:             Cyan (#06B6D4) / Sky (#38BDF8)
├── Success / Live Accent:        Emerald (#10B981)
└── Text Hierarchy:               Slate-50 (Headings) / Slate-300 (Body) / Slate-400 (Muted)
```

---

## 3. Implemented Components
1. **Navbar** (`src/components/Navbar.tsx`): Sticky blurred header, active scroll spy, mobile drawer, instant action button.
2. **Hero** (`src/components/Hero.tsx`): Status badge with pulsing dot, academic intro, CTA links, quick metric cards, and interactive executable Python code simulator.
3. **About** (`src/components/About.tsx`): In-depth background, VTU affiliation, AJIET context, core engineering philosophy, and academic metrics.
4. **Skills** (`src/components/Skills.tsx`): Python, Data Structures, HTML, and AI & ML track with verified breakdown and zero invented tech.
5. **Projects** (`src/components/Projects.tsx`): Featured project breakdown for **AI Job Match and Resume Analyzer** + Interactive Live Simulator with benchmark scenarios.
6. **Education** (`src/components/Education.tsx`): Chronological academic journey (B.E. 2024-2028, PUC 84%, 10th 88%) with VTU accreditation.
7. **Languages** (`src/components/Languages.tsx`): Multilingual proficiency across 5 languages (Kannada, English, Hindi, Marathi, Malayalam) with native scripts.
8. **Contact** (`src/components/Contact.tsx`): Functional mail composer, one-click email copy with toast, verified LinkedIn link, location badge.
9. **Footer** (`src/components/Footer.tsx`): Navigation links, verified profiles, copyright, and smooth back-to-top button.
