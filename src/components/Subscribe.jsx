import React, { useState } from "react";

const Subscribe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Function to open/close the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    //Reset the states
    setEmail("");
    setSubmitted(false);
    setError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to validate email and handle submission
  const handleSubscribe = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      console.log(email); // Log the email
      setSubmitted(true); // Show success message
      setError(""); // Clear any previous error
    }
  };

  // Function to close modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      toggleModal();
    }
  };

  return (
    <div>
      <button onClick={toggleModal} className="button">
        Notify
      </button>

      {/* Modal (Conditional rendering) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            {!submitted ? (
              <>
                <h2 className="modal-title">Subscribe to our Newsletter</h2>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field"
                  value={email}
                  onChange={handleEmailChange}
                />
                {error && <p className="error-message">{error}</p>}

                <button className="modal-subscribe-button" onClick={handleSubscribe}>
                  Subscribe
                </button>
              </>
            ) : (
              <p className="success-message">Thanks, we'll be in touch!</p>
            )}

            <button onClick={toggleModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
