
import {Link} from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

export const Page404 = () => {
    return (
        <div className='m-5 d-flex flex-column justify-content-center'>
            <ErrorMessage />
            <p className='text-center'>страницы не существует</p>
            <Link className='text-center text-decoration-none text-reset' to="/">Назад на главную страницу</Link>
        </div>
    )

}