# Interactive 3D Portfolio

A modern, interactive portfolio website built with React, Three.js, and Django. Features a 3D room environment where visitors can click on objects to explore different projects and content.

## Features

-  **Interactive 3D Room** - Navigate through a realistic 3D environment
-  **Responsive Design** - Optimized for both desktop and mobile
-  **Modern Tech Stack** - React 18, TypeScript, Three.js, Django
-  **Smooth Animations** - Framer Motion powered transitions
-  **REST API** - Django backend for content management

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Three.js** + React Three Fiber for 3D graphics
- **Vite** for build tooling
- **Tailwind CSS 3.4.0** for styling
- **Framer Motion** for animations
- **Zustand** for state management

### Backend
- **Django 4.2** + **Django REST Framework**
- **SQLite** database (development)
- **JWT** authentication

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+
- Ubuntu/Debian: `sudo apt install python3-dev libpq-dev build-essential`

### Installation

**1**. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-3d.git
   cd portfolio-3d
```

**2**. Setup Frontend
    
    ```bash
    cd frontend
    npm install
    npm run format  # Fix any formatting issues
    npm run dev
    ```
    
**3**. Setup Backend
    
    ```bash
    cd ../backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements/local.txt
    python manage.py migrate
    python manage.py runserver
    ```
    
**4**. Open your browser
    
    - Frontend: http://localhost:5173
    - Backend API: http://localhost:8000
