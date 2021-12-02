import NewsletterSubForm from "../forms/newsletterSubForm";

const NewsletterSub = () => {

    return (
        <div className="container-fluid bg-light py-5">
            <div className="row">
                <div className="col-8 offset-2 d-flex flex-column">

                    <div className="d-flex justify-content-center">
                        <h2>Tilmeld dig nyhedsbrevet</h2>
                    </div>

                    <div className="d-flex justify-content-center">
                        <p className="font-size-five">Så går du aldrig glip af noget!</p>
                    </div>


                    <div className="d-flex justify-content-center align-items-center py-3 flex-column">
                        <NewsletterSubForm />
                    </div>



                    <div className="pt-4">
                        <p>Ja, jeg giver mit samtykke til at modtage nyhedsbreve indeholdende nyheder, tilbud og konkurrencer
                            fra Nicedeals via e-mail. Jeg bekræfter samtidig, at jeg er over 13 år.</p>
                        <p>Du kan altid nemt afmelde dig nyhedsbreve igen. Framelding sker i bunden af et af de nyhedsbreve du
                            har modtaget på mail fra os.</p>
                        <p><a className="text-decoration-none" href="http://localhost/code/nicedeals/privatlivspolitik">Læs mere om, hvordan vi behandler dine personoplysninger her.</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewsletterSub;