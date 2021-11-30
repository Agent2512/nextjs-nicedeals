import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useApi } from "../../hooks/useApi";
import { signupRouteRes } from "../../pages/api/user/signup";

export interface SignupFormData {
    firstName: string;
    lastName: string;
    acceptNewsletter: boolean;

    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}


const SignupForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, watch } = useForm<SignupFormData>({
        mode: "onSubmit",
        reValidateMode: "onSubmit",

        defaultValues: {
            firstName: "",
            lastName: "",
            acceptNewsletter: true,

            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit = (data: SignupFormData) => {
        useApi<signupRouteRes>("/api/user/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.success) {
                router.push("/login");
            }
            else {
                console.log(res.message);
                
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            {/* User information  */}
            <fieldset className="border p-3 mb-4 rounded">
                <legend className="w-auto px-2 font-size-five">Person oplysninger</legend>
                {/* First name */}
                <div className="form-group">
                    <label htmlFor="firstName">Fornavn</label>
                    <input
                        className={"form-control" + (errors.firstName ? " is-invalid" : "")}
                        type="text"
                        placeholder="Fornavn"
                        id="firstName"

                        {
                        ...register("firstName", {
                            required: {
                                value: true,
                                message: "Fornavn skal udfyldes"
                            },
                            minLength: {
                                value: 2,
                                message: "Fornavn skal være mindst 2 tegn"
                            }
                        })
                        }
                    />
                    <div className="invalid-feedback" >{errors.firstName?.message}</div>
                </div>
                {/* Last name */}
                <div className="form-group">
                    <label htmlFor="lastName">Efternavn</label>
                    <input
                        className={"form-control" + (errors.lastName ? " is-invalid" : "")}
                        type="text"
                        placeholder="Efternavn"
                        id="lastName"

                        {
                        ...register("lastName", {
                            required: {
                                value: true,
                                message: "Efternavn skal udfyldes"
                            },
                            minLength: {
                                value: 2,
                                message: "Efternavn skal være mindst 2 tegn"
                            }
                        })
                        }
                    />
                    <div className="invalid-feedback" >{errors.lastName?.message}</div>
                </div>
                {/* Newsletter acceptance */}
                <div className="form-group form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="acceptNewsletter"

                        {
                        ...register("acceptNewsletter")
                        }
                    />
                    <label htmlFor="acceptNewsletter">Jeg vil gerne modtage nyhedsbrevet fra Nicedeals</label>
                </div>
            </fieldset>




            {/* Login information */}
            <fieldset className="border p-3 mb-4 rounded">
                <legend className="w-auto px-2 font-size-five">Login informationer</legend>
                {/* Username */}
                <div className="form-group">
                    <label htmlFor="username">Brugernavn</label>
                    <input
                        className={"form-control" + (errors.username ? " is-invalid" : "")}
                        type="text"
                        placeholder="Brugernavn"
                        id="username"

                        {
                            ...register("username", {
                                required: {
                                    value: true,
                                    message: "Brugernavn skal udfyldes"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Brugernavn skal være mindst 6 tegn"
                                }
                            })
                        }
                    />
                    <div className="invalid-feedback" >{errors.username?.message}</div>
                </div>
                {/* E-mail */}
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                        className={"form-control" + (errors.email ? " is-invalid" : "")}
                        type="email"
                        placeholder="E-mail"
                        id="email"

                        {
                            ...register("email", {
                                required: {
                                    value: true,
                                    message: "E-mail skal udfyldes"
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "E-mail er ikke gyldig"
                                }
                            })
                        }
                    />
                    <div className="invalid-feedback" >{errors.email?.message}</div>
                </div>
                {/* Password */}
                <div className="form-group">
                    <label htmlFor="password">Adgangskode</label>
                    <input
                        className={"form-control" + (errors.password ? " is-invalid" : "")}
                        type="password"
                        placeholder="Adgangskode"
                        id="password"

                        {
                            ...register("password", {
                                required: {
                                    value: true,
                                    message: "Adgangskode skal udfyldes"
                                },
                                minLength: {
                                    value: 8,
                                    message: "Adgangskode skal være mindst 8 tegn"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Adgangskode skal indeholde mindst et stort bogstav, et lille bogstav, et tal og et specialtegn"
                                }
                            })
                        }
                    />
                    <div className="invalid-feedback" >{errors.password?.message}</div>
                </div>
                {/* Confirm password */}
                <div className="form-group">
                    <label htmlFor="confirm_password">Bekræft adgangskode</label>
                    <input
                        className={"form-control" + (errors.confirmPassword ? " is-invalid" : "")}
                        type="password"
                        placeholder="Bekræft adgangskode"
                        id="confirm-password"

                        {
                            ...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: "Bekræft adgangskode skal udfyldes"
                                },
                                validate: value => value === watch("password") || "Adgangskoderne er ikke ens"
                            })
                        }
                    />
                    <div className="invalid-feedback" >{errors.confirmPassword?.message}</div>
                </div>
            </fieldset>

            <button name="register" type="submit" id="register" className="btn btn-primary w-100">Opret Nicedeals konto</button>
        </form>
    )
}

export default SignupForm;