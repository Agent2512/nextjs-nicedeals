import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";
import { useApi } from "../../hooks/useApi";
import { loginRouteRes } from "../../pages/api/user/login";

interface FormData {
    email: string,
    password: string
}

const LoginForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = (data: FormData) => {
        useApi<loginRouteRes>("/api/user/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => {
            if (res.success) {
                router.push("/")
            }
        })
    };

    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            <div className="form-group">
                <label htmlFor="email">email</label>

                <input
                    className={"form-control" + (errors.email ? " is-invalid" : "")}
                    type="email"
                    placeholder="email"
                    id="email"

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
                        required: "Adgangskode skal udfyldes",
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
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
            </div>

            <button name="login" type="submit" id="login" className="btn btn-primary mt-4 w-100">Login</button>
        </form>
    )
}

export default LoginForm;