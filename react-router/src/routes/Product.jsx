import {useRouterErro} from 'react-router-dom'

function ErrorPage() {
    
    const error = useRouterError();

    return (
        <div>
            <h3>Erro ocorrido</h3>
            <p>{error.statusText}</p>
            <p>{error.error.message}</p>
        </div>
    )
}

export default ErrorPage