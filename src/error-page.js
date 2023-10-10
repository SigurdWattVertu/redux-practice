import { useRouteError } from "react-router-dom"

export default function ErrorPage() {

    const err = useRouteError();
    console.log(err)
    return (
        <div>This is the custom error page!</div>
    )
}