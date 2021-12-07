import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useApi, useApi2 } from "../../hooks/useApi";
import { newsletterAddRouteRes } from "../../pages/api/newsletter/add";


export interface NewsletterSubFormData {
    email: string,
    name: string,
}

const NewsletterSubForm = () => {
    const router = useRouter();
    const { post } = useApi2("api/newsletter");
    const [show, setShow] = useState(false);
    const { handleSubmit, register, formState: { errors } } = useForm<NewsletterSubFormData>({
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            email: "",
            name: "",
        }
    });

    const onSubmit = (data: NewsletterSubFormData) => {
        post<newsletterAddRouteRes>("/add", data).then(res => {
            if (res.success == false) {
                console.log(res.message);
            }
            else {
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 3000);
            }
        });

    }

    return (
        <>
            {show &&
                <div className="w-50">
                    <p className="text-center text-success">du er medlem af vores nyhedsbrev</p>
                </div>
            }
            <form onSubmit={handleSubmit(onSubmit)} className="w-100 d-flex justify-content-center" >


                <div className="form-group">
                    <input
                        className={"form-control" + (errors.name ? " is-invalid" : "")}
                        type="text"
                        placeholder="Dit navn"

                        {
                        ...register("name", {
                            required: "Navn skal udfyldes",
                            minLength: {
                                value: 2,
                                message: "Navn skal være mindst 2 tegn"
                            }
                        })
                        }
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                <div className="form-group mx-3">
                    <input
                        className={"form-control" + (errors.email ? " is-invalid" : "")}
                        type="email"
                        placeholder="Din email"

                        {
                        ...register("email", {
                            required: "email skal udfyldes",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "email er ikke valid"
                            }
                        })
                        }
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <input type="submit" name="submit" value="Tilmeld" className="btn btn-primary text-uppercase" />
            </form>
        </>
    )
}

export default NewsletterSubForm;