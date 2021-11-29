

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid py-5 bg-secondary">
                <div className="row">
                    <div className="col-3">
                        <h4 className="text-white">Kontaktinformation</h4>
                        <p className="mb-0 text-white">Nicedeals Aps</p>
                        <p className="mb-0 text-white">Knuthenborgvej 98</p>
                        <p className="mb-0 text-white">4930 Maribo</p>
                        <p className="mb-0"><a className="text-white text-decoration-none" href="mailto:kundeservice@nicedeal.dk">kundeservice@nicedeal.dk</a></p>
                        <p className="mb-0 text-white">+45 82 82 00 04</p>
                    </div>
                    <div className="col-3">
                        <h4 className="text-white">Generelt</h4>
                        <p className="mb-0"><a className="text-white text-decoration-none" href="http://localhost/code/nicedeals/om-nicedeals">Om Nicedeals</a></p>
                        <p className="mb-0"><a className="text-white text-decoration-none" href="http://localhost/code/nicedeals/saadan-fungerer-nicedeals">Sådan fungerer Nicedeals</a></p>
                    </div>
                    <div className="col-3">
                        <h4 className="text-white">Kundeservice</h4>
                        <p className="mb-0"><a href="http://localhost/code/nicedeals/opret-profil" className="text-white text-decoration-none">Opret profil</a></p>
                        <p className="mb-0"><a href="http://localhost/code/nicedeals/faq" className="text-white text-decoration-none">FAQ/Hjælp</a></p>
                        <p className="mb-0"><a href="http://localhost/code/nicedeals/kundeservice" className="text-white text-decoration-none">Kundeservice</a></p>
                    </div>
                    <div className="col-3">
                        <h4 className="text-white">Bliv partner</h4>
                        <p className="mb-0"><a href="http://localhost/code/nicedeals/faa-din-virksomhed-paa-nicedeals" className="text-white text-decoration-none">Få din virksomhed på Nicedeals</a></p>
                        {/* <p className="mb-0"><a href="http://localhost/code/nicedeals/partner-center" className="text-white text-decoration-none">Partner-center</a></p> */}
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-white py-4">
                <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <p className="mb-0">Copyright © 2021 Nicedeals ApS<span className="px-2">|</span><a href="http://localhost/code/nicedeals/ophavsret-vilkaar" className="text-dark text-decoration-none">Ophavsret og vilkår</a><span className="px-2">|</span><a href="http://localhost/code/nicedeals/handelsbetingelser" className="text-dark text-decoration-none">Generelle handelsbetingelser</a><span className="px-2">|</span><a href="http://localhost/code/nicedeals/privatlivspolitik" className="text-dark text-decoration-none">Privatlivspolitik</a><span className="px-2">|</span><a href="cookiepolitik" className="text-dark text-decoration-none">Cookiepolitik</a> </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;