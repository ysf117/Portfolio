# Project Structure: Yusuf Minhas Portfolio (Atomic Design)

## 1. Design Tokens (Tailwind Config)
**Visual Style:** "Swiss International" / Technical / Brutalist.
* **Colors:**
    * `bg-dark`: `#050508` (Deep black/blue)
    * `primary`: `#3b82f6` (Electric Blue)
    * `border-swiss`: `rgba(255, 255, 255, 0.1)` (Subtle white borders)
    * `text-silver`: `#e2e8f0`
    * `text-muted`: `gray-400` / `gray-500`
* **Typography:**
    * `font-display`: 'Space Grotesk' (Headings)
    * `font-mono`: (Technical details, Coordinates)
* **Spacing:** Loose padding, strict grid alignments.

## 2. Atoms (src/components/atoms)
*Smallest indivisible units. Heavily styled with Tailwind.*

* **`SectionLabel.tsx`**
    * *Props:* `number` (e.g., "01"), `title` (e.g., "Selected Works")
    * *Visual:* Uppercase, tracking-widest, electric blue accent line.
* **`Badge.tsx`**
    * *Props:* `label`, `variant` (outline | filled)
    * *Usage:* Tech stack tags ("Next.js", "AWS"), "Native/B2" language tags.
* **`IconButton.tsx`**
    * *Props:* `icon` (Material Symbol string), `label` (for tooltip), `isActive`, `onClick`.
    * *Usage:* The sticky navigation rail icons.
* **`SwissBorder.tsx`**
    * *Props:* `orientation` (horizontal | vertical)
    * *Usage:* The decorative dividers used throughout the layout.
* **`ProfileImage.tsx`**
    * *Props:* `src`, `alt`
    * *Visual:* Grayscale to Color hover effect, square with rounded corners.
* **`GlitchText.tsx`** (Optional enhancement)
    * *Props:* `text`
    * *Usage:* For the "YUSUF MINHAS" main header.

## 3. Molecules (src/components/molecules)
*Functional groups of atoms.*

* **`NavRailItem.tsx`**
    * *Composes:* `IconButton`
    * *Logic:* Handles the hover tooltip ("Intro", "Projects") animation.
* **`InfoBlock.tsx`**
    * *Props:* `title` (e.g., "Coordinates"), `children`.
    * *Usage:* The "About", "Coordinates", and "Toolkit" sections in the sidebar.
* **`TimelineEntry.tsx`**
    * *Props:* `yearRange`, `role`, `company`, `description`.
    * *Visual:* The grid layout with the year on the left, details on right.
* **`ProjectCard.tsx`**
    * *Props:* `title`, `category`, `year`, `description`, `techStack` (array), `imageSrc`.
    * *Visual:* Large image area, hover effects, text overlay.
* **`CertificationCard.tsx`**
    * *Props:* `icon`, `title`, `issuer`.
    * *Visual:* Boxed grid item with icon.
* **`ContactRow.tsx`**
    * *Props:* `label`, `value`, `href`.
    * *Usage:* Footer rows (Email, Website, LinkedIn).

## 4. Organisms (src/components/organisms)
*Complex sections that form the page.*

* **`Sidebar.tsx`**
    * *Content:* Fixed left panel. Contains Profile Info, Tech Stack, Languages.
    * *Responsive:* Hidden on mobile, visible on desktop.
* **`NavigationRail.tsx`**
    * *Content:* Sticky vertical bar with navigation icons.
* **`HeroSection.tsx`**
    * *Content:* "Bridge Between DevOps & Design".
* **`WorkCarousel.tsx`**
    * *Content:* Horizontal scroll container for `ProjectCard`s.
* **`ExperienceTimeline.tsx`**
    * *Content:* List of `TimelineEntry` items.
* **`EducationGrid.tsx`**
    * *Content:* Grid of academic credentials.
* **`CertificationGrid.tsx`**
    * *Content:* Grid of 4 certs.
* **`Footer.tsx`**
    * *Content:* "Initiate Collaboration" section + Copyright.

## 5. Templates (src/components/templates)
* **`SwissLayout.tsx`**
    * *Structure:* Flexbox container.
    * *Left:* Sidebar (fixed width).
    * *Middle:* NavRail (sticky).
    * *Right:* Main Content (scrollable).