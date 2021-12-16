import { useEffect, useState } from "react"
import { PersonFill } from "react-bootstrap-icons"
import { useApi2 } from "../../hooks/useApi"
import { useUser } from "../../hooks/userUser"
import { newsletterIsUserRouteRes } from "../../pages/api/newsletter/isUser"
import { NewsletterSubscribeRouteRes } from "../../pages/api/newsletter/subscribe"

interface props {
    noButtons?: true
}

export const UserInfo = (props: props) => {
    const { user } = useUser()
    const [isNewsSub, setIsNewsSub] = useState<boolean>(false)
    const { get: newsletterGet, post: newsletterPost } = useApi2("api/newsletter/")


    useEffect(() => {
        user && newsletterPost<newsletterIsUserRouteRes>("isUser", { email: user?.email }).then(res => {
            setIsNewsSub(res.success)
        })
    }, [user])

    const newsSubscribe = () => {
        user && newsletterPost<NewsletterSubscribeRouteRes>("subscribe", { email: user?.email, value: true }).then(res => {
            if (res.success) {
                setIsNewsSub(true)
            }
        })
    }

    const newsUnsubscribe = () => {
        user && newsletterPost<NewsletterSubscribeRouteRes>("subscribe", { email: user?.email, value: false }).then(res => {
            if (res.success) {
                setIsNewsSub(false)
            }
        })
    }


    return (
        <div className="card">
            <div className="card-header d-flex align-items-center">
                <PersonFill className="fs-5" />
                <p className="m-0 ms-2" >Kontooplysninger</p>
            </div>
            <div className="card-body">
                {user && <>
                    <p><span className="fw-bold">navn: </span>
                        {user.firstName} {user.lastName}
                    </p>
                    <p><span className="fw-bold">Brugernavn: </span>
                        {user.username}
                    </p>
                    <p><span className="fw-bold">E-mail: </span>
                        {user.email}
                    </p>
                </>}
                <p><span className="fw-bold">Nyhedsbrev: </span>
                    {isNewsSub ? "Ja" : "Nej"}
                </p>
            </div>
            {!props.noButtons &&
                <div className="card-footer bg-white">
                    {isNewsSub ?
                        <button onClick={newsUnsubscribe} type="button" className="btn btn-primary">
                            afmeld nyhedsbrev
                        </button>
                        :
                        <button onClick={newsSubscribe} type="button" className="btn btn-primary">
                            tilmeld nyhedsbrev
                        </button>
                    }
                </div>
            }
        </div>
    )
}