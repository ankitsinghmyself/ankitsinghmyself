# Ankit Singh Portfolio

Senior-focused portfolio built with Next.js, TypeScript, Tailwind, and a cleaner content architecture.

## What changed

This rewrite moves the project away from a thin landing page and toward a more credible software engineer portfolio:

- Clear homepage narrative with impact, principles, selected work, capabilities, and contact.
- Dedicated case study at `/case-study/micro-frontend-platform`.
- Better separation of responsibilities in the codebase.
- Stronger visual hierarchy, spacing, and content density.

## Architecture

The content layer is split by responsibility:

- `src/lib/content/profile.ts`
- `src/lib/content/experience.ts`
- `src/lib/content/skills.ts`
- `src/lib/content/case-study.ts`

Contact handling is separated so validation and delivery logic are not mixed into the form component:

- `src/lib/contact/contact-schema.ts`
- `src/lib/contact/send-contact-message.ts`

This follows a practical SOLID direction:

- Single Responsibility: data modules, page composition, and contact behavior are separated.
- Open/Closed: new case studies or experience entries can be added without rewriting section components.
- Dependency direction: UI components consume typed content modules instead of embedding large blocks of static data.

## Case Study

The featured case study explains a micro-frontend platform problem from a senior engineer perspective:

- Context and problem framing
- Architectural decisions
- Execution phases
- Measurable outcomes

The intent is to show systems thinking, not just tool familiarity.

## Local Development

```bash
npm install
npm run dev
```

## Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Motion
- React Hook Form
- Zod
