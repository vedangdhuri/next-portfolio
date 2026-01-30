# Portfolio Website

This is a personal portfolio website built to showcase projects and skills.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/vedangdhuri-io.git
    cd vedangdhuri-io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├───app\
│   ├───globals.css
│   ├───layout.tsx
│   ├───not-found.tsx
│   ├───page.tsx
│   └───projects\
│       └───page.tsx
├───components\
│   ├───pages\
│   │   ├───About\
│   │   │   └───About.tsx
│   │   ├───Background\
│   │   │   └───Starbackground.tsx
│   │   ├───Contact\
│   │   │   └───Contact.tsx
│   │   ├───Footer\
│   │   │   └───Footer.tsx
│   │   ├───Hero\
│   │   │   └───Hero.tsx
│   │   ├───Loader\
│   │   │   └───Loader.tsx
│   │   ├───Navbar\
│   │   │   └───Navbar.tsx
│   │   ├───Project\
│   │   │   ├───ProjectCard.tsx
│   │   │   ├───ProjectsGrid.tsx
│   │   │   └───ProjectsPreview.tsx
│   │   └───Skills\
│   │       └───Skills.tsx
│   └───ui\
│       ├───badge.tsx
│       ├───card.tsx
│       ├───comet-card.tsx
│       ├───encrypted-text.tsx
│       ├───FlipWords.tsx
│       ├───globe.tsx
│       ├───icon-cloud.tsx
│       ├───sparkles-text.tsx
│       ├───TargetCursor.tsx
│       └───ProfileCard\
│           ├───ProfileCard.css
│           └───ProfileCard.tsx
├───data\
│   └───projects.ts
├───lib\
│   └───utils.ts
├───public\
│   ├───font\
│   │   ├───BastligaOne.ttf
│   │   └───Poppins-Bold.ttf
│   └───img\
│       ├───code.png
│       ├───main_image.png
│       ├───top_icon.png
│       └───project\
│           ├───aes-edcryption.png
│           ├───match-master-game.png
│           └───safecityhub.png
└───types\
    └───project.ts
```