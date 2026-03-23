# TinyLlama AI Chat - Project Specification

## 1. Project Overview

- **Project Name**: tinyllama-chat
- **Type**: Next.js Web Application (Vercel Deployable)
- **Core Functionality**: AI-powered chat application powered by TinyLlama running server-side
- **Target Users**: Developers and users wanting a local AI chat experience

## 2. Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Package Manager**: pnpm
- **AI Model**: tinyllama@0.1.1 (server-side execution)
- **UI Components**: Radix UI Primitives
- **Styling**: CSS Modules
- **Deployment**: Vercel

## 3. UI/UX Specification

### Layout Structure

- **Header**: Fixed top navigation with logo and app name
- **Main Content**: Full-height chat container
- **Chat Area**: Scrollable message list (middle)
- **Input Area**: Fixed bottom text input with send button

### Responsive Breakpoints

- Mobile: < 640px (full width, compact padding)
- Tablet: 640px - 1024px (centered container max-width 768px)
- Desktop: > 1024px (centered container max-width 800px)

### Visual Design

#### Color Palette (Dark Theme - AI App Standard)

- **Background Primary**: `#0d0d0d` (near black)
- **Background Secondary**: `#171717` (card/input background)
- **Background Tertiary**: `#262626` (hover states)
- **Accent Primary**: `#10a37f` (ChatGPT-like green)
- **Accent Secondary**: `#1a7f5a` (hover green)
- **Text Primary**: `#ececec` (main text)
- **Text Secondary**: `#8e8e8e` (muted text)
- **Border**: `#3f3f3f` (subtle borders)

#### Typography

- **Font Family**: System fonts (SF Pro, -apple-system, Segoe UI, Roboto)
- **Heading Large**: 24px, font-weight 600
- **Body**: 16px, font-weight 400, line-height 1.5
- **Small**: 14px, font-weight 400

## 4. Project Structure

```
tinyllama-chat/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts      # Server-side AI API
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Main chat page
├── public/
├── package.json
├── tsconfig.json
├── next.config.js
└── SPEC.md
```

## 5. Deployment

The app is configured for Vercel deployment:
- API routes run server-side
- Native dependencies (ONNX) are externalized
- Streaming responses supported
