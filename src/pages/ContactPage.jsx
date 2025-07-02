import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
//import "../styles/SharedPageLayout.css"; // Don't forget to import the shared CSS!
// import "../styles/ContactPage.css"; // Import this if you have page-specific overrides

const ContactPage = () => {
    return(
        <> {/* Using a fragment here to wrap the header, main content, and footer wrappers */}
            <div className="header-wrapper">
                <Header />
            </div>

            <div className="main-wrapper"> {/* The main wrapper for centering the content box */}
                <div className="main-box"> {/* The white, shadowed content box */}
                    <div className="main-content-scrollable"></div>
                    <h1 className="main-box-title">Contact Us</h1> {/* Using a more generic title class now that we have shared styles */}
                    <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

                    <div> {/* This div will contain the scrollable content */}
                        <h2>General Enquiries</h2> <hr />
                        <p><b>Vivekanand College Main Campus</b><br />[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br />India<br /><br />Phone: <b>+91 1234567890</b><br />E-Mail: <b>info@vivekanadcollege.edu</b><br />Office Hours: <b>Monday - Friday | 9:00 AM to 5:00 PM IST</b></p>

                        <h2>Admissions Office</h2><hr />
                        <p> For all admission-related queries regarding Undergraduate or Postgraduate programs:<br />
                            <b>Phone:</b> +91 9876543210 <br />
                            <b>Email:</b> admissions@vc.edu <br />
                        </p>

                        <h2>Student Support Services</h2> <hr />
                        <p>For the current student support, or general assistance: <br/> Phone: <b>1234567890</b><br /></p>
                        {/* Removed the extra <hr /> here as it was directly after the closing p tag, which might look odd */}

                        <h2>Find Us on the Maps</h2>
                        <p> <a href="https://www.google.com/maps/dir/Vivekanand+College+%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A5%87%E0%A4%95%E0%A4%BE%E0%A4%A8%E0%A4%82%E0%A4%A6+%E0%A4%95%E0%A5%89%E0%A4%B2%E0%A5%87%E0%A4%9C,+%E0%A4%95%E0%A5%8B%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%AA%E0%A5%82%E0%A4%B0/2130,+E+Ward,+Tarabai+Park,+Kolhapur,+Maharashtra+416003/@16.7124264,74.2385487,87m/data=!3m1!1e3!4m13!4m12!1m5!1m1!1s0x3bc100664ad0e191:0x4b2af9253659bbec!2m2!1d74.2386116!2d16.7123415!1m5!1m1!1s0x3bc100664ad0e191:0x4b2af9253659bbec!2m2!1d74.2386116!2d16.7123415?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">View us on Google Maps</a></p> {/* Added rel="noopener noreferrer" for security on target="_blank" */}
                    </div>
                </div>
            </div>

            <div className="footer-wrapper">
                <Footer />
            </div>
        </>
    )
}

export default ContactPage;