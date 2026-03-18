1. Project Overview

A high-performance, single-page portfolio built with Next.js 15, Tailwind CSS, and Framer Motion.

    The Vibe: Industrial-Tech, Aerospace Dossier, EPFL Aesthetic.

    Color Palette: Deep Black (#050505), Pure White (#FFFFFF), and Kinetic Orange (#FF4D00) for data highlights and calls to action.

    Technical Stack: Lucide-React icons, Lenis for smooth scrolling, Framer Motion for entrance/hover animations.

2. Global UI Elements

    The Grid: Subtle 0.5px border lines separating sections. A faint "Scanline" or "Noise" overlay on the entire body.

    The Cursor: A small orange dot with a trailing crosshair (reticle) that snaps to links.

    Navigation: A minimalist floating "Nav-Dock" at the bottom center with icons for each section.

3. Section-by-Section Plan
I. Hero: The Apex

    Background: Full-screen mountain image (use a placeholder for now) with a Dark Overlay and a 10% opacity Grid Pattern.

    Content:

        Name in bold, tight-kerning Sans-Serif.

        Tagline: "Microengineering at EPFL | Founder of Yotta Technology | Aerospace Enthusiast."

        Interaction: The mountain image moves slightly in parallax as the user moves their mouse.

II. Status: Current Operations

    Layout: Two large, high-contrast cards.

        Card A (Academic): "EPFL Microengineering (BA2)" – Focus on precision, robotics, and micro-systems.

        Card B (Business): "Yotta Technology SNC" – "Founder & System Architect." High-performance PC builds.

    Visuals: Use Mono fonts for "Status: Active" labels in the corner of cards.

III. The Vault: Engineering Projects

    Primary Feature: Hybrid Rocket Engine (TM). * Layout: Large "Breakout" section. Title in Orange. Use a technical schematic-style background.

        Stats: Thrust, Fuel Type, Peak Altitude (placeholder data).

    Secondary Grid: * FPV Systems: Focus on custom-built drones and low-latency flight.

        Custom PC Gallery: Clean, industrial hardware shots.

IV. The Frequency: Creative Output

    Music Section: A minimalist audio visualizer component (CSS animation) next to a list of recent tracks or genres.

    Visuals: Monochromatic, dark, keeping the focus on the sound/vibe.

V. Terminal: Connectivity

    Socials: GitHub, LinkedIn, Instagram, TikTok.

    Look: A list of links that, when hovered, turn the entire background of the section into a "Flash" of Kinetic Orange.

    Footer: "System Version 1.0 // Built at [Current Time] // EPFL Campus."

4. Specific Code Instructions for Claude

    Framer Motion: Use initial={{ opacity: 0, y: 20 }} for all section entrances.

    Typography: Use Geist Sans for headings and Geist Mono for all numeric data and labels.

    Tailwind: Define a custom orange-kinetic color in the tailwind.config.js.