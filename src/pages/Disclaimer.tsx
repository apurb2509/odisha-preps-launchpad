import React from 'react';

// --- Disclaimer Page ---
const Disclaimer = () => {
    // Inline styles for a consistent, professional look
    const pageStyle: React.CSSProperties = {
        backgroundColor: '#020617',
        color: '#E5E7EB',
        fontFamily: "'Poppins', sans-serif",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8rem 1rem',
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center',
    };

    const headerStyle: React.CSSProperties = {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        color: '#FBBF24',
        marginBottom: '1.5rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.4)'
    };

    const paragraphStyle: React.CSSProperties = {
        fontSize: '1.125rem',
        lineHeight: '1.75',
        color: '#D1D5DB',
        maxWidth: '600px',
        margin: '0 auto',
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <h1 style={headerStyle}>Disclaimer</h1>
                <p style={paragraphStyle}>
                    Odisha Preps is an independent educational platform and is not affiliated with the OPSC or UPSC. Course content is for educational purposes only and does not guarantee selection.
                </p>
            </div>
        </div>
    );
};

export default Disclaimer;
