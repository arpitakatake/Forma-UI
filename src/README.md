# Forma UI

A lightweight, reusable React component library featuring customizable Button, Card, and Modal components.

Built with React and CSS as part of the SDN Internship Week 3 assignment.

## Preview

Forma UI includes an interactive component showcase with live examples of each component, different button variants and sizes, reusable cards, and an interactive modal.

## Components

### 1. Button

A customizable button component with multiple variants and sizes.

**Import**

```jsx
import Button from "./components/Button/Button";
```

**Usage**

```jsx
<Button variant="primary" size="medium" onClick={() => alert("Clicked!")}>
  Click Me
</Button>
```

**Props**

| Prop | Description | Default |
|---|---|---|
| `children` | Button content | — |
| `variant` | `primary`, `secondary`, `outline` | `primary` |
| `size` | `small`, `medium`, `large` | `medium` |
| `disabled` | Disables the button | `false` |
| `onClick` | Click event handler | — |
| `type` | Button type | `button` |

### 2. Card

A flexible card component for displaying structured content.

**Import**

```jsx
import Card from "./components/Card/Card";
```

**Usage**

```jsx
<Card
  title="Reusable Card"
  description="A simple card with a title and description."
  footer={<span>Learn more</span>}
>
  <p>Custom content goes here.</p>
</Card>
```

**Props**

| Prop | Description |
|---|---|
| `title` | Optional card heading |
| `description` | Optional card description |
| `children` | Custom card content |
| `footer` | Optional footer content |
| `className` | Additional CSS class |

### 3. Modal

A reusable dialog component with open/close functionality, custom content, and an optional footer.

**Import**

```jsx
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
```

**Usage**

```jsx
function Example() {
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
        <p>This is a reusable modal component.</p>
      </Modal>
    </>
  );
}
```

**Props**

| Prop | Description | Default |
|---|---|---|
| `isOpen` | Controls modal visibility | — |
| `onClose` | Callback to close the modal | — |
| `title` | Modal heading | — |
| `children` | Modal body content | — |
| `footer` | Optional footer content | — |

The modal also supports closing through the Escape key and clicking the overlay.

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project:

```bash
cd Forma-UI
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Tech Stack

- React
- JavaScript (JSX)
- CSS
- Vite

## Project Structure

```text
Forma-UI/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   └── Modal/
│   │       ├── Modal.jsx
│   │       └── Modal.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Author

**Arpita Katake**

GitHub: [arpitakatake](https://github.com/arpitakatake)

---

Made with React and care for reusable UI.
