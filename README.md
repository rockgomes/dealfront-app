# Dealfront — Product UI

A live, interactive implementation of product screens I designed in Figma—built with **Cursor** and AI-assisted development to showcase the designed functionality and my workflow from design to code.

---

## How this was built

**Figma** → **[Cursor](https://cursor.com)** (AI-assisted) → **Next.js** · React · TypeScript

Designed in Figma · Built with [Cursor](https://cursor.com) and AI models · Next.js, React, TypeScript, Tailwind CSS

---

## About this project

**Dealfront** is a B2B sales and marketing platform (Target, Leadfeeder, Promote, Settings, Lists). This repo is a design-led implementation: I designed the flows and UI in Figma as a real product project, then used Cursor and AI to turn those designs into a working app. The result is an interactive showcase of the product experience and of how I move from design to implementation.

It reflects how I think about structure, states, and implementation-ready design—and how I use modern tools to bridge design and engineering.

## What's inside

- **Settings** — Personal and Company tabs; Company includes Users (table, filters, roles, permissions matrix) and Roles panels; modals and shared UI components.
- **Lists** — Shell with Companies/Contacts type tabs, sidebar with folders and lists (expand/collapse, selection), empty and placeholder content states; TopNav with pathname-based active states for Settings and Lists.
- **Shared** — Reusable UI (buttons, inputs, modals, dropdowns, data table, pagination), design tokens and layout patterns aligned with the Figma design.

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. UI is built with a small set of reusable components and shared styles.

## Getting started

**Prerequisites:** Node.js 18+ (or 20+).

```bash
git clone https://github.com/rockgomes/dealfront-app.git
cd dealfront-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Routes:** `/` and `/settings` (Settings), `/lists` (Lists).

## Project structure

```
src/
├── app/          # Routes (page.tsx per route)
├── components/   # settings/, lists/, ui/ (shared)
├── data/         # Mock data (settings, lists)
└── lib/          # Shared utilities (e.g. Figma assets)
```

## Design

The UI and flows were designed in Figma. This app implements those designs as an interactive showcase. (Figma link can be added here when you’re ready to share.)

---

## About me

I’m a **Senior Product Designer** with a Figma-first process and hands-on experience using AI-assisted development (Cursor) to ship interactive prototypes and communicate effectively with engineering. This project is one example of that workflow.

**Portfolio & contact:** [www.rockgomes.com](https://www.rockgomes.com)

Open to product design roles and collaborations. More work and contact details at [rockgomes.com](https://www.rockgomes.com).
