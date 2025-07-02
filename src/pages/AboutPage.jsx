import Header from "../components/Header/Header";
 import Footer from "../components/Footer/Footer"; // Assuming you'll add a footer
//import "../styles/SharedPageLayout.css"; // <-- Import the new shared CSS file
// import "../styles/AboutPage.css"; // <-- If you have page-specific styles, import it AFTER the shared one

const AboutPage = () => {
    return(
        <> {/* Use a fragment if you intend to add a footer and header-wrapper/footer-wrapper */}
            <div className="header-wrapper">
                <Header/>
            </div>
            <div className="main-wrapper"> {/* Uses shared class */}
                <div className="main-box"> {/* Uses shared class */}
                    <div className="main-content-scrollable">
                    <h1 className="about-title">About Vivekanand College</h1> {/* You can keep page-specific titles or use a generic one based on needs */}
                    <p>Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards of academic rigor and ethical values.</p>
                    <p>Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.</p>

                     {/* Uses shared class for the scrollable content */}
                        <h2>Our Mission</h2>
                        <hr/>
                        <ul>
                            <li>To provide high-quality, accessible education across various disciplines.</li>
                            <li>To foster research, innovation, and creativity among students and faculty.</li>
                            <li>To cultivate a diverse and inclusive learning environment.</li>
                            <li>To instill strong ethical values and leadership qualities.</li>
                        </ul>
                        <h2>Our Values</h2>
                        <hr/>
                        <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>
                        <h2>Our History</h2>
                        <p>[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
                    </div>
                </div>
            </div>
             <div className="footer-wrapper">
                <Footer />
            </div>
        </>
    )
}

export default AboutPage;