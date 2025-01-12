import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h1>Crash Landing</h1>
            <p>An error has occurred.</p>
            <p>{error.status} : {error.statusText}</p>
            <p>{error.data}</p>
        </div>
    );
}

export default Error;