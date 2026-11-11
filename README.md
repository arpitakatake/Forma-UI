# Forma UI

**Forma UI** is a lightweight, reusable React component library built with React, JavaScript (JSX), and CSS.

It provides a collection of customizable UI components designed to make frontend development cleaner, faster, and more consistent.

Developed as part of the **SDN Internship – Week 3: Component Library UI** assignment.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Components](#components)
  - [Button](#1-button)
  - [Card](#2-card)
  - [Modal](#3-modal)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Author](#author)

---

## Overview

Forma UI demonstrates the development of reusable React components with independent styling and configurable properties.

The project includes an interactive component showcase where developers can explore different button variants, card layouts, and modal interactions.

## Features

- Reusable and independently maintainable components.
- Customizable component properties (props).
- Separate CSS files for component-level styling.
- Multiple button variants and sizes.
- Flexible card layouts with optional content and footers.
- Interactive modal with Escape-key and backdrop-click support.
- Clean component-based project structure.

---

## Components

### 1. Button

A reusable button component with configurable variants, sizes, and interaction handling.

**Import**

```jsx
import Button from "./components/Button/Button";
```

**Usage**

```jsx
<Button
  variant="primary"
  size="medium"
  onClick={() => alert("Button clicked!")}
>
  Click Me
</Button>
```

**Available Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | ReactNode | — | Content displayed inside the button. |
| `variant` | string | `primary` | Visual style: `primary`, `secondary`, or `outline`. |
| `size` | string | `medium` | Button size: `small`, `medium`, or `large`. |
| `disabled` | boolean | `false` | Disables button interaction. |
| `onClick` | function | — | Callback executed when clicked. |
| `type` | string | `button` | HTML button type. |

**Supported Variants**

- `primary` – Primary filled button.
- `secondary` – Secondary filled button.
- `outline` – Outlined button.

**Supported Sizes**

- `small`
- `medium`
- `large`

---

### 2. Card

A flexible card component for displaying structured information, custom content, and optional footer elements.

**Import**

```jsx
import Card from "./components/Card/Card";
```

**Usage**

```jsx
<Card
  title="Reusable Card"
  description="A flexible card component."
  footer={<span>Learn More</span>}
>
  <p>
    Add any custom React content inside the card.
  </p>
</Card>
```

**Available Props**

| Prop | Type | Description |
|---|---|---|
| `title` | string | Optional card heading. |
| `description` | string | Optional supporting description. |
| `children` | ReactNode | Custom content rendered inside the card. |
| `footer` | ReactNode | Optional footer content. |
| `className` | string | Additional CSS class for customization. |

**Key Capabilities**

- Optional title and description.
- Custom content through `children`.
- Flexible footer using React elements.
- Additional CSS customization through `className`.

---

### 3. Modal

A reusable dialog component that displays content in an overlay and provides controlled open and close functionality.

**Import**

```jsx
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
```

**Usage**

```jsx
function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Welcome"
      >
        <p>
          This is an example of a reusable modal component.
        </p>
      </Modal>
    </>
  );
}

export default ModalExample;
```

**Available Props**

| Prop | Type | Description |
|---|---|---|
| `isOpen` | boolean | Controls whether the modal is visible. |
| `onClose` | function | Callback invoked when the modal should close. |
| `title` | string | Heading displayed in the modal. |
| `children` | ReactNode | Main modal body content. |
| `footer` | ReactNode | Optional footer content. |

**Interaction Features**

- Controlled visibility using `isOpen`.
- Close callback through `onClose`.
- Closes when the Escape key is pressed.
- Closes when the backdrop is clicked.
- Supports custom body and optional footer content.

---

## Installation

### Prerequisites

- Node.js
- npm
- A code editor such as Visual Studio Code

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd Forma-UI
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to explore the component showcase.

---

## Usage

To use a component in another React application:

1. Import the required component from its respective component folder.
2. Pass the supported props to customize its appearance and behavior.
3. Provide React content through `children` where applicable.
4. Import and configure any required state management, such as `useState` for the Modal component.

Each component has its own JSX implementation and CSS stylesheet, making it easier to maintain and extend independently.

---

## Project Structure

```text
Forma-UI/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   │
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   │
│   │   └── Modal/
│   │       ├── Modal.jsx
│   │       └── Modal.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI development |
| JavaScript (JSX) | Component logic and rendering |
| CSS | Component styling and layouts |
| Vite | Development server and build tooling |

---

## Author

**Arpita Katake**

- GitHub: [@arpitakatake](https://github.com/arpitakatake)

---

*Built with React, reusable components, and attention to detail.*