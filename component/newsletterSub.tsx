
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


                    <div className="d-flex justify-content-center py-3">
                        <form action="http://localhost/code/nicedeals/users/newsletter_subscription/home" className="w-100 d-flex justify-content-center" method="post" acceptCharset="utf-8">
                            <div className="form-group">
                                <input type="text" name="name" defaultValue="" className="form-control" placeholder="Dit navn" />
                            </div>
                            <div className="form-group mx-3">
                                <input type="text" name="email" defaultValue="" className="form-control" placeholder="Din email" />
                            </div>
                            <input type="submit" name="submit" value="Tilmeld" className="btn btn-primary text-uppercase"/>
                        </form>
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