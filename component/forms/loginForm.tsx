import { useForm } from "react-hook-form";


const LoginForm = () => {
    const { register, handleSubmit } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        shouldUseNativeValidation: true,
    })

    const onSubmit = (data:any) => console.log({ data });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username */}
            <div className="form-group">
                <label htmlFor="username">Brugernavn</label>

                <input
                    className="form-control"
                    type="email"
                    placeholder="email"
                    
                    {
                        ...register("email",{ 
                            required: "email er påkrævet",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "email er ikke valid"
                            }
                        })
                    }
                />
            </div>

            {/* Password */}
            <div className="form-group">
                <label htmlFor="password">Adgangskode</label>

                <input
                    className="form-control"
                    type="password"
                    placeholder="Adgangskode"

                    {
                        ...register("password",{ 
                            required: "Adgangskode er påkrævet",
                            minLength: {
                                value: 8,
                                message: "Adgangskode skal mindst være 8 tegn"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "Adgangskode skal indeholde mindst et stort og et lille bogstav, et tal og et special tegn"
                            },
                        })
                    }
                />
            </div>

            <button name="login" type="submit" id="login" className="btn btn-primary mt-4 w-100">Login</button>
        </form>
    )
}

export default LoginForm;