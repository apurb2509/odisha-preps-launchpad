import React from 'react';

// --- Privacy Policy Page ---
const PrivacyPolicy = () => {
    // Inline styles to create a professional page layout resembling the HeroSection
    const pageStyle: React.CSSProperties = {
        backgroundColor: '#020617', // Dark background
        color: '#E5E7EB', // text-gray-200
        fontFamily: "'Poppins', sans-serif",
        height: '100%', // Fill the available vertical space from the parent <main>
        display: 'flex', // Use flexbox
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center', // Center content horizontally
        padding: '10rem 1rem', // Add vertical padding to push content down
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: '800px',
        width: '100%',
    };

    const headerStyle: React.CSSProperties = {
        fontSize: '2.25rem', // text-4xl
        fontWeight: 'bold',
        color: '#FBBF24', // text-yellow-400
        textAlign: 'center',
        marginBottom: '1rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.4)'
    };
    
    const lastUpdatedStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#9CA3AF', // text-gray-400
        marginBottom: '3rem',
        fontStyle: 'italic',
    };

    const sectionTitleStyle: React.CSSProperties = {
        fontSize: '1.5rem', // text-2xl
        fontWeight: '600',
        color: '#FFFFFF', // White
        borderBottom: '2px solid #FBBF24',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        marginTop: '2.5rem',
    };

    const paragraphStyle: React.CSSProperties = {
        fontSize: '1.125rem', // text-lg for better readability
        lineHeight: '1.75',
        marginBottom: '1.25rem',
        color: '#D1D5DB', // text-gray-300
        textAlign: 'left' // Changed from 'center' to 'left'
    };

    const contactParagraphStyle: React.CSSProperties = {
        fontSize: '1.125rem',
        lineHeight: '1.75',
        marginBottom: '1.25rem',
        color: '#D1D5DB',
        textAlign: 'center' // Kept this one centered
    };

    const linkStyle: React.CSSProperties = {
        color: '#FBBF24',
        textDecoration: 'none',
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <h1 style={headerStyle}>Privacy Policy</h1>
                <p style={lastUpdatedStyle}>Last Updated: August 9, 2025</p>

                <h2 style={sectionTitleStyle}>Our Privacy Commitment</h2>
                <p style={paragraphStyle}>
                    We collect minimal user data to ensure personalized support. Data collected includes names, emails, contact numbers, and academic preferences. We do not sell user data. All data is protected and used only for academic communication.
                </p>

                <h2 style={sectionTitleStyle}>Contact Us</h2>
                <p style={contactParagraphStyle}>
                    If you have any questions or concerns about our privacy practices, please contact us at: <a href="mailto:odishaprepsofficial@gmail.com" style={linkStyle}>odishaprepsofficial@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
