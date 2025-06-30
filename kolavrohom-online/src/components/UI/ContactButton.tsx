import React from 'react';

interface ContactButtonProps {
  type: 'phone' | 'email' | 'whatsapp';
  href: string;
  icon: string;
  text: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ type: _type, href, icon, text }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span>{icon}</span> {text}
    </a>
  );
};

export default ContactButton; 