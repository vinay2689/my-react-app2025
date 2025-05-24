// Contact Page Component
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea name="message" rows={5} required />
                    </label>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;
// This is a simple ContactPage component that includes a form for users to fill out.
// It collects the user's name, email, and message, and can be expanded with additional fields or validation as needed.