import React from 'react';

// --- About Us Page ---
const AboutUs = () => {
    // Reusable inline styles for a consistent look
    const pageStyle: React.CSSProperties = {
        backgroundColor: '#020617',
        color: '#E5E7EB',
        fontFamily: "'Poppins', sans-serif",
        minHeight: '100vh',
        padding: '6rem 1rem',
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: '800px',
        margin: '0 auto',
    };

    const headerStyle: React.CSSProperties = {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        color: '#FBBF24',
        textAlign: 'center',
        marginBottom: '3rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.4)'
    };

    const sectionTitleStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#FFFFFF',
        borderBottom: '2px solid #FBBF24',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        marginTop: '2.5rem',
    };

    const paragraphStyle: React.CSSProperties = {
        fontSize: '1rem',
        lineHeight: '1.75',
        marginBottom: '1.25rem',
        color: '#D1D5DB',
    };

    const listStyle: React.CSSProperties = {
        listStylePosition: 'inside',
        paddingLeft: '0.5rem',
        marginBottom: '1.25rem',
    };

    const teamListStyle: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: '1.25rem',
    };
    
    const teamMemberStyle: React.CSSProperties = {
        backgroundColor: '#1F2937',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        color: '#E5E7EB',
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <h1 style={headerStyle}>About Odisha Preps</h1>

                {/* --- Company History and Mission --- */}
                <h2 style={sectionTitleStyle}>Our History and Mission</h2>
                <p style={paragraphStyle}>
                    Odisha Preps was founded to address the unique challenges faced by OPSC and UPSC aspirants in Odisha. Our mission is to make civil services preparation accessible, affordable, and personalized for every dedicated aspirant. We offer a scientifically structured, mentorship-driven learning approach designed by educators who’ve cleared Mains/Interviews of OPSC and UPSC.
                </p>

                {/* --- Team Information --- */}
                <h2 style={sectionTitleStyle}>Meet Our Team</h2>
                <p style={paragraphStyle}>
                    Our educator and mentor panel includes individuals who have appeared in OPSC and UPSC Mains/Interviews, bringing firsthand exam experience.
                </p>
                <div style={teamListStyle}>
                    {["Amit Mohapatra", "Sumit", "Gayatree Pathy", "Manoja Rout", "Leema Mishra", "Adyasha Nanda"].map(name => (
                        <span key={name} style={teamMemberStyle}>{name}</span>
                    ))}
                     <span style={teamMemberStyle}>and others.</span>
                </div>
                <p style={{...paragraphStyle, textAlign: 'center', fontStyle: 'italic'}}>
                    Our Student Support Head: <strong>Rajalaxmi Singh</strong>
                </p>

                {/* --- Core Values and Vision --- */}
                <h2 style={sectionTitleStyle}>Our Values and Vision</h2>
                <p style={paragraphStyle}>
                    <strong>Core Values:</strong>
                </p>
                <ul style={{...listStyle, listStyleType: 'disc'}}>
                    <li style={paragraphStyle}>Aspirant-first approach</li>
                    <li style={paragraphStyle}>Empathy and support</li>
                    <li style={paragraphStyle}>Affordability without compromise</li>
                    <li style={paragraphStyle}>Scientific and strategic teaching</li>
                </ul>
                <p style={paragraphStyle}>
                    <strong>Vision:</strong> To be Odisha’s most trusted and effective civil services preparation platform.
                </p>

                {/* --- What Makes Us Unique --- */}
                <h2 style={sectionTitleStyle}>What Makes Us Unique</h2>
                <ol style={{...listStyle, listStyleType: 'decimal'}}>
                    <li style={paragraphStyle}><strong>1-1 Personal Mentorship</strong> with exam-qualified mentors.</li>
                    <li style={paragraphStyle}><strong>Live Answer Writing Sessions (LAWS)</strong> to hone your skills.</li>
                    <li style={paragraphStyle}><strong>Integrated roadmap</strong> for Prelims, Mains & Interview preparation.</li>
                    <li style={paragraphStyle}><strong>Affordable EMI options</strong> and mobile-first learning for accessibility.</li>
                    <li style={paragraphStyle}><strong>Holistic support</strong> for academic and non-academic issues like anxiety and time management.</li>
                </ol>
            </div>
        </div>
    );
};

export default AboutUs;
