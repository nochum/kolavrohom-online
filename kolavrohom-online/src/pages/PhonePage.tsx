import React from 'react';


const phoneNumbers = [
  { country: 'Australia', number: '+61280149900' },
  { country: 'Belgium', number: '+3232186464' },
  { country: 'Brazil', number: '+551130135400' },
  { country: 'Canada', number: '5143416640' },
  { country: 'England', number: '+442033187700' },
  { country: 'France', number: '+33176347777' },
  { country: 'USA', number: '718-467-5469' },
  { country: 'Israel', number: '+97225381111' }
];

const PhonePage: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#e8ddd4',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Georgia, serif'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '3rem',
        color: '#8b6f47',
        marginBottom: '3rem',
        fontWeight: 'normal'
      }}>
        Listen By Phone
      </h1>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {phoneNumbers.map((phone, index) => (
          <button
            key={index}
            style={{
              backgroundColor: '#d4c4b0',
              border: '2px solid #8b6f47',
              borderRadius: '4px',
              padding: '1.5rem',
              fontSize: '1.5rem',
              color: '#8b6f47',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              fontFamily: 'Georgia, serif',
              fontWeight: 'normal',
              width: '100%',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = '#c4b49a';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = '#d4c4b0';
            }}
            onClick={() => {
              // Handle phone number click - could open dialer or copy to clipboard
              if (navigator.clipboard) {
                navigator.clipboard.writeText(phone.number);
                alert(`Phone number ${phone.number} copied to clipboard!`);
              } else {
                alert(`Call ${phone.country}: ${phone.number}`);
              }
            }}
          >
            {phone.country} {phone.number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhonePage; 