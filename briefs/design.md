Design Brief: The Kinetic Tech Dossier

Project: Portfolio for a Software & Hardware Technologist
Theme: High-Contrast Dark Mode / Industrial Brutalism
Primary Accent: Orange Spectrum (#FF4D00 to #FF8C00)
1. Visual & Atmospheric Direction

    The Aesthetic: Imagine a high-end engineering terminal meets a premium hardware brand (like Teenage Engineering or Leica).

    Color Palette:

        Background: #0A0A0A (Deepest Charcoal/Black).

        Surface: #161616 (Card/Section backgrounds).

        Primary Accent: #FF4D00 (Safety Orange).

        Secondary Accent: #FF8C00 (Amber/Soft Orange for depth).

        UI Text: Pure White (#FFFFFF) for titles, Muted Gray (#A1A1AA) for meta-data.

    Typography:

        Sans: Geist Sans (or Inter) for high-readability headings.

        Mono: Geist Mono for all technical data, achievements, labels, and small UI elements.

2. Page Architecture & Content Plan
I. The "Nexus" (Hero Section)

    Centerpiece: A large, high-contrast silhouette of a hardware component or a "point-cloud" digital head.

    Headline: Ultra-bold Sans-Serif title (e.g., "ENGINEERING THE FUTURE").

    Status Bar: A thin Mono-font bar at the bottom of the hero showing "Current Location," "System Status: Online," and "Local Time."

II. The "Technical Vault" (Portfolio/Achievements)

    Layout: A strict 2-column grid.

    Cards: Hardware projects feature macro photography; Software projects feature "Code Snippet" previews or clean UI mockups.

    The "Orange Pulse": Every project card has a tiny orange "status LED" (CSS animation) in the corner to show it's a completed/live achievement.

III. The "Stack & Schematics" (Technical Skills)

    Software: Clean mono-text list of languages/frameworks.

    Hardware: A visual "schematic" feel. Use 0.5px orange borders to create boxes for tools like "Soldering," "PCB Design," or "Firmware."

IV. The "Terminal" (Contact)

    Style: Minimalist input fields that look like a command line. Large orange "SEND" button that inverts to black text on hover.

3. Motion & Interaction Design (The "Feel")

    Custom Cursor: A small orange ring that expands into a larger circle with a crosshair when hovering over clickable elements.

    Scroll Reveal: Sections shouldn't just fade in; they should "unfold" or "slide up" using Framer Motion with a stiff spring transition (stiffness: 100, damping: 20).

    The "Scanner" Effect: A horizontal orange line (very low opacity) that occasionally "scans" down the page as the user scrolls, emphasizing the technical/diagnostic theme.

    Hover States: When hovering over project images, apply a "Grayscale to Color" transition or a slight zoom.

4. Technical Stack Requirements for Claude

    Framework: Next.js 15 (App Router).

    Styling: Tailwind CSS (configured with brand-orange).

    Animations: Framer Motion + Lenis for smooth scrolling.

    Icons: Lucide-react (using thin stroke weights: 1.25px).

    Utility: Use clsx and tailwind-merge for clean component logic.