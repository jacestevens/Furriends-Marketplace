import React from 'react'

const Footer = () => {
    return (
    <div className="bg-black text-white ">
        <footer className='p-10'>
            <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-evenly items-center">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li>Web design</li>
                            <li>Development</li>
                            <li>Hosting</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li>Company</li>
                            <li>Team</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Fur-riend's Marketplace</h3>
                    </div>
                    <div className="col item social"><i className="icon ion-social-facebook"></i><i className="icon ion-social-twitter"></i><i className="icon ion-social-snapchat"></i><i className="icon ion-social-instagram"></i></div>
                </div>
                <p className="text-center">Company Name © 2018</p>
            </div>
        </footer>
        </div>
    )
}

export default Footer
