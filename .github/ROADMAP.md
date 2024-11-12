# 🛤️ RetroNode Development Roadmap

## Milestone 1: Project Initialization and Core Setup
**Goal**: Establish a solid foundation for the project, ensuring minimal dependencies and optimized configurations.

- [x] **1.1 Set up Project Basics**
  - Configure `tsconfig.json` and project structure in `src/`.
  - Install essential dependencies only:
    - React and ReactDOM (frontend)
    - TypeScript, SCSS for styling
    - SQLite for data management
  - Add minimal required configurations for optimized builds (Webpack or similar without CRA).

- [ ] **1.2 Setup Database (SQLite)**
  - Design a basic schema for emulators, ROMs, user settings, and metadata.
  - Create TypeScript interfaces for each database entity.

- [ ] **1.3 Build Initial UI Components**
  - Design basic `App.tsx` with routing.
  - Define placeholder UI components for key pages:
    - **Home**: Shows a dashboard of recently played games.
    - **Library**: Displays the available emulators and games.
    - **Settings**: Includes configuration options (e.g., Rich Presence, paths to emulators).

## Milestone 2: Core Features - Emulator and Game Library Management
**Goal**: Build out essential functionality for emulator and ROM integration.

- [ ] **2.1 Emulator Management**
  - Implement UI to add, edit, and delete emulators.
  - Configure the system to detect and store emulator paths.
  - Ensure added emulators are recognized across sessions (persistent storage).

- [ ] **2.2 ROM Library Management**
  - Build a library UI to list available ROMs for each emulator.
  - Implement functionality to scan directories for ROMs and organize them.
  - Fetch metadata and display ROM information, including cover art (can use an online database if feasible).

- [ ] **2.3 Game Launching System**
  - Integrate with emulator executables to launch games directly from the library.
  - Ensure the game launches in a separate process to avoid app performance issues.
  - Develop error handling for unsupported ROM formats or missing files.

## Milestone 3: UI/UX Design and Styling
**Goal**: Establish a console-like, modern design that’s intuitive and minimalistic, following the PS5/Xbox inspiration.

- [ ] **3.1 Layout and Navigation**
  - Implement a side or top navigation bar for easy access to **Home**, **Library**, and **Settings**.
  - Design a clean, card-based UI for ROM and emulator listings.

- [ ] **3.2 Style and Color Palette**
  - Apply a sleek, modern color palette with SCSS for modular styling.
  - Define styles for cards, buttons, inputs, and other UI elements.
  - Make the UI responsive, ensuring good performance on low-end devices.

- [ ] **3.3 Rich Presence Integration**
  - Integrate Discord Rich Presence (or similar) to display active game sessions.
  - Allow toggling this feature from settings.

## Milestone 4: Advanced Features and Optimization
**Goal**: Enhance functionality for a smooth experience on a wide range of devices.

- [ ] **4.1 Search and Filter Functionality**
  - Implement search by game title, genre, and console.
  - Add filter options for consoles, favorite games, and recently played games.

- [ ] **4.2 Performance and Memory Optimization**
  - Analyze memory usage, ensuring efficient loading and minimal RAM consumption.
  - Optimize UI rendering to minimize DOM reflows and repaints.
  - Streamline data loading for larger ROM libraries.

- [ ] **4.3 Save States and Custom Controls (If Possible)**
  - Implement UI for managing emulator save states.
  - Add custom controller mapping options for each emulator in **Settings**.

## Milestone 5: Final Touches and Community Contributions
**Goal**: Prepare the app for public release and encourage community engagement.

- [ ] **5.1 Thorough Testing**
  - Conduct UI and functional testing on low-end and high-end devices.
  - Resolve bugs, especially those affecting performance and emulator compatibility.

- [ ] **5.2 Final Documentation and Community Guidelines**
  - Document each feature thoroughly in the Wiki.
  - Add guidelines for setting up emulators, adding ROMs, and using advanced features.

- [x] **5.3 Prepare for Open Source Community**
  - Finalize the README, `CONTRIBUTING.md`, and issues templates.
  - Encourage contributions, listing suggested features for the community.

## Ongoing Maintenance
- **Bug Fixes**: Address any reported bugs, prioritizing performance issues.
- **Feature Requests**: Evaluate and implement high-demand features from user feedback.
- **Dependency Updates**: Regularly update packages to ensure security and performance improvements.
