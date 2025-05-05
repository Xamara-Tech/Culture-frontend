import FooterButton from "../buttons/FooterButton"
import FooterInput from "../input/FooterInput"

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
               
                <div>
                    <h2 className="text-xl font-bold">KenyaCultures</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Preserving and celebrating Kenya’s cultural heritage.
                    </p>
                </div>

                <div>
                    <h3 className="text-md font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Tribes</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-md font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://img.icons8.com/ios/50/facebook-new.png"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-md font-semibold mb-2">Newsletter</h3>
                    <div className="flex">
                       <FooterInput type="email" placeholder="Your email"></FooterInput>
                       <FooterButton type= "submit">Subscribe</FooterButton>
                    </div>
                </div>
            </div>

        
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © 2025 KenyaCultures. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
