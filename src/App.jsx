
import { useState } from "react";

import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [buttonFeedback, setButtonFeedback] = useState("");

  function handleConfirm() {
    setShowSuccess(true);
    setIsModalOpen(false);
  }

  return (
    <div className="showcase">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#" className="brand">
          forma<span>.</span>
        </a>

        <div className="nav-right">
          <span className="nav-label">COMPONENT LIBRARY</span>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <span className="eyebrow">REACT COMPONENT LIBRARY · 01</span>

        <h1>
          Thoughtful components.
          <br />
          <span>Beautifully reusable.</span>
        </h1>

        <p>
          A small collection of flexible interface components,
          built to make creating consistent experiences simpler.
        </p>

        <div className="hero-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>Reusable UI</span>
        </div>
      </header>

      <div className="demo-row">
  <Button
  variant="primary"
  onClick={() => setButtonFeedback("Primary action completed successfully.")}
>
  Primary action
</Button>

<Button
  variant="secondary"
  onClick={() => setButtonFeedback("Secondary action completed successfully.")}
>
  Secondary
</Button>

<Button
  variant="outline"
  onClick={() => setButtonFeedback("Outline action completed successfully.")}
>
  Outline
</Button>
</div>
{buttonFeedback && (
  <p className="button-feedback" role="status">
    <span>✓</span> {buttonFeedback}
  </p>
)}
      {/* Card Section */}
      <section className="library-section">
        <div className="section-heading">
          <div>
            <span className="section-number">02 / COMPONENT</span>
            <h2>Card</h2>
            <p>Flexible containers for different content.</p>
          </div>
          <span className="component-tag">Card.jsx</span>
        </div>

        <div className="card-grid">
          <Card
            title="Design systems"
            description="Build consistent experiences with reusable interface elements."
            footer={
              <span className="card-link">Explore components →</span>
            }
          >
            <span className="card-icon">✳</span>
          </Card>

          <Card
            title="Flexible content"
            description="Cards accept custom children, descriptions and footer elements."
            footer={
              <Button variant="outline" size="small">
                Learn more
              </Button>
            }
          >
            <div className="card-detail">
              <span>Custom content</span>
              <span className="detail-status">Included</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Modal Section */}
      <section className="library-section">
        <div className="section-heading">
          <div>
            <span className="section-number">03 / COMPONENT</span>
            <h2>Modal</h2>
            <p>Focused dialogs for important interactions.</p>
          </div>
          <span className="component-tag">Modal.jsx</span>
        </div>

        <div className="demo-panel modal-demo">
          <div>
            <h3>Try the interactive modal</h3>
            <p>Open the dialog to see the component in action.</p>
          </div>

          <Button onClick={() => setIsModalOpen(true)}>
            Open modal ↗
          </Button>
        </div>

        {showSuccess && (
          <p className="success-message" role="status">
            ✓ Action confirmed successfully!
          </p>
        )}
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm your action"
        footer={
          <>
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>

            <Button onClick={handleConfirm}>
              Confirm
            </Button>
          </>
        }
      >
        <p>
          This is an example of a reusable modal component.
          You can pass different titles, content and footer
          actions through props.
        </p>
      </Modal>

      {/* Footer */}
      <footer className="footer">
        <a href="#" className="brand">
          forma<span>.</span>
        </a>
        <p>Small components. Thoughtful experiences.</p>
        <span>BUILT WITH REACT · 2026</span>
      </footer>
    </div>
  );
}

export default App;
