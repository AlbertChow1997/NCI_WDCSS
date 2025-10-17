class Contact{
    static createContactSection(){
        return`
				<div class="row align-items-stretch justify-content-center">
					<div class="col-xxl-5 col-lg-6 col-md-8 mb-4">
						${this.createContactCard()}
					</div>
                    <div class="col-xxl-4 col-lg-5 col-md-8 mb-4">
                        ${this.createContactMap()}
                    </div>
				</div>
        
        `;
    }

    static createContactCard(){
        return`
            <div class="contact-card">
                <h1>Get in Touch</h1>

                <div class="contact-card-head">
                    <h2>Address</h2>           
                </div>
                <div class="contact-info">
                    <h5>Mayor Street Lower,</h5>
                    <h5> International Financial Services Centre,</h5>
                    <h5>Dublin 1</h5>
                </div>

                <div class="contact-card-head">
                    <h2>Tel</h2>
                </div> 
                <div class="contact-info">
                    <h5>+353 894542481</h5>
                </div>
                
                <div class="contact-card-head">
                    <h2>Email</h2>
                </div> 
                <div class="contact-info">
                    <h5>MayorSquareGuinness@outlook.com</h5>
                </div>
            </div>
        `;
    }

    static createContactMap(){
        return`
            <div>
                <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.123456789012!2d-6.2545678!3d53.3214567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDE5JzE3LjIiTiA2wrAxNScxNi40Ilc!5e0!3m2!1sen!2sie!4v1234567890">
                </iframe>
            </div>
      `;  
    }
}