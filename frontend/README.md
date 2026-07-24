# NexusAI 

Welcome to the frontend repository for **NexusAI** – a modern, premium dark-themed SaaS landing page and interactive intelligence interface designed for seamless dynamic data operations.

This application is built using **React (Vite)** and **Tailwind CSS**.

## ✨ Features

- **Premium Dark UI**: Built with a modern, sleek aesthetic utilizing consistent dark-mode gradients and refined layout grids.
- **Hero Section**: High-impact introductory landing layer featuring dynamic call-to-actions and system highlights.
- **Features & Adaptive Bento Grid**: Flexible layout grid showcasing technical analytical structures and core platform capabilities that automatically reorganize across screen sizes.
- **Interactive Chat Terminal**: A custom simulated terminal view built to display dynamic queries and real-time interactive terminal states.
- **Metrics Dashboard**: Real-time performance indicators, latency graphs, and telemetry statistics.
- **Pricing Plans**: Transparent enterprise and developer tier structures with sleek card layouts.
- **About Section**: Comprehensive architectural overview and mission statement of the platform.
- **Data Ingestion & Contact Portal**: Fully styled input blocks, source submission workflows, and a direct communication interface.
- **100% Fluid Responsiveness**: Native utility breakpoints guaranteeing layouts fit perfectly across Mobile, Tablet, and Desktop displays.

## 🛠️ Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📁 Project Structure

Here is the repository directory tree mapping out the frontend layout including all structural components:

```text
NEXUS-AI/
├── public/                 # Static public production assets
├── src/
│   ├── assets/             # Global visual assets and stylesheet configurations
│   ├── components/         # Reusable structural UI blocks
│   │   ├── About.jsx       # Architectural overview and platform mission
│   │   ├── Button.jsx      # Reusable styled system buttons
│   │   ├── ChatTerminal.jsx# Interactive intelligence terminal interface
│   │   ├── Contact.jsx     # Direct communication and inquiry portal
│   │   ├── Features.jsx    # Core platform capabilities and Bento grid
│   │   ├── Hero.jsx        # High-impact landing page introduction
│   │   ├── Metrics.jsx     # Telemetry analytics and performance counters
│   │   ├── Navbar.jsx      # Navigation header layer
│   │   └── Pricing.jsx     # Subscription and enterprise tier matrix
│   ├── App.css             # Main component level styling
│   ├── App.jsx             # Application core component orchestrating features
│   ├── index.css           # Global entry styles and Tailwind configurations
│   └── main.jsx            # React root application rendering entry point
├── .gitignore              # Files and folders excluded from Git tracking
├── eslint.config.js        # Linting rules configuration matrix
├── index.html              # Core single-page application HTML entry document
├── package-lock.json       # Strict tree version locking for dependencies
├── package.json            # Manifest file managing scripts and project metadata
├── README.md               # Project documentation mapping
└── vite.config.js          # Core builder engine configuration setups
