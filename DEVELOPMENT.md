# BMVU Electron Application

## Project Structure (Organized)

```
BMVU/
├── package.json              # Main configuration
├── README.md                 # Documentation
├── app/                      # Electron application
│   ├── main/                 # Main process files
│   │   ├── main.js          # Entry point
│   │   └── preload.js       # Preload script
│   ├── renderer/            # Renderer process files
│   │   ├── pages/           # HTML pages
│   │   │   └── bmvu.html    # Main BMVU simulation
│   │   └── assets/          # Static assets
│   │       ├── css/         # Stylesheets
│   │       ├── js/          # JavaScript files
│   │       ├── images/      # Images and icons
│   │       ├── audio/       # Sound effects
│   │       └── bootstrap-5.0.2-dist/  # Bootstrap framework
│   └── shared/              # Shared utilities
└── src/                     # Legacy files (can be removed)
```

## Key Features

- **Clean Architecture**: Separated main and renderer processes
- **Direct BMVU Loading**: Opens directly to the simulation page
- **Security**: Context isolation and preload scripts
- **Native Menus**: French menus with BMVU-specific options
- **Keyboard Shortcuts**: Integrated into the application menu

## Development Commands

```bash
# Start the application
npm start

# Development mode (with DevTools)
npm run dev

# Build for distribution
npm run build

# Create platform-specific packages
npm run dist
```

The application now has a proper Electron architecture and will load directly into the BMVU simulation interface, focusing purely on the railway signaling functionality for your ONCF AGDAL internship project.