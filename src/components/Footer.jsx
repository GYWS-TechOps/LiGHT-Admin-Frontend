import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ProgressiveImage from './ProgressiveImage';

const Footer = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <footer className="bg-[#1a1a1a] text-gray-300">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* About Section */}
                <div>
                    <ProgressiveImage
                        src="/images/logos/Logo.webp"
                        alt="Logo"
                        className="w-14 h-14 mb-4 rounded-full"
                        containerClassName="w-14 h-14 mb-4"
                    />
                    <p className="text-sm leading-relaxed">
                        LiGHT is an initiative of one of India's largest student-run government registered NGO
                        Gopali Youth Welfare Society, based in IIT Kharagpur. Gopali Youth Welfare Society aims
                        at the overall socio-economic development of the underprivileged near the IIT Kharagpur campus.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.facebook.com/share/1Bgmum4QXv/" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-white">
                            <FaFacebookF className="text-base" />
                        </a>
                        <a href="https://www.instagram.com/light_gyws?igsh=MWNsdGV0bzVnZXlkOQ==" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-white">
                            <FaInstagram className="text-base" />
                        </a>
                        <a href="https://www.linkedin.com/showcase/light-gyws/" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-white">
                            <FaLinkedinIn className="text-base" />
                        </a>
                        <a href="https://x.com/gopali_youth" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-white">
                            <FaTwitter className="text-base" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=919414729199&text=Hi" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-white">
                            <FaWhatsapp className="text-base" />
                        </a>
                    </div>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                        <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
                        <li><Link to="/initiatives" className="hover:text-yellow-400">Initiatives</Link></li>
                        <li><Link to="/mediacoverage" className="hover:text-yellow-400">Media</Link></li>
                        <li><Link to="/members" className="hover:text-yellow-400">Members</Link></li>
                        <li><Link to="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
                        <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
                        <li><Link to="/join" className="hover:text-yellow-400">Join Us</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-yellow-400" /> light@gyws.org
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone className="text-yellow-400" /> +91 94147 29199
                        </li>
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                            <span>
                                Jagriti Vidya Mandir, Hostel Vill. Tangasole,
                                P.O- Salua, P.S- Kharagpur (Local), Dist- Paschim Medinipur, Kharagpur, West-Bengal, Pin- 721145
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-400 ">
                <p>
                     © {new Date().getFullYear()} GYWS. All rights reserved
                </p>
                
            </div>
        </footer>
    );
};

export default Footer;