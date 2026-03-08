export default function Footer() {
    return (
        <footer className="p-10 bg-gray-900 text-white">
            {/* Tailwind styles will work after project styles are connected */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h2  className="font-semibold mb-3">Bike rental</h2>
                    <p>The best bike rental service in your city</p>
                </div>

                <div>
                    <h3 className="mb-3">Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                        
                </div>

                <div>
                    <h3 className="mb-3">Support</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                        
                </div>

                <div>
                    <h3 className="mb-3">Follow us</h3>
                    <div>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                    </div>
                </div>
            </section>

            <section className="mt-8 pt-6 border-t border-gray-700 text-center">
                © 2025 BikeRental. All rights reserved.
            </section>
        </footer>
    );
}
