import { Container } from "react-bootstrap";
import "./Styles/Layout/Footer.scss";

const Footer = () => {
    return (
        <footer className="border-top-white mt-4">
            <Container fluid>
            <div class="d-flex align-items-center justify-content-between py-2">
            <small class="fs-6">Eva LM</small>
            <small class="fs-6">Portfolio ©2026</small>
            </div>
            </Container>
        </footer>
    );
};

export default Footer;