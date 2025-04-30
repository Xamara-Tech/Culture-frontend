import { Twitter, Linkedin, Instagram } from "lucide-react"
import FooterInput from "../input/FooterInput"
import FooterButton from "../buttons/FooterButton"

export default function Footer() {
  return (
    <footer className="bg-[#0c1128] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Xamara</h2>
            <p className="text-gray-300">Creating digital excellence for forward-thinking businesses.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Digital Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="text-gray-300">Stay updated with our latest news and updates.</p>

                <div className="flex items-center bg-[#0B0D28] w-fit">
                    <FooterInput

                        type="email"
                        placeholder="Enter your email"
                    />
                    <FooterButton>
                        Subscribe
                    </FooterButton>

                </div>

          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Xamara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}