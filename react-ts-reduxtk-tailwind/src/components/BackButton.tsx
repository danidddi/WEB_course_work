import { useNavigate } from "react-router-dom";

interface IBackButton {
    path: string
}

export function BackButton({ path }: IBackButton) {
    const navigate = useNavigate()
    return (
        <button
            className="font-light border-b-2 duration-200 ease-in-out text-lg border-green-600 hover:text-green-600 hover:border-black"
            onClick={() => { navigate(`/${path}`) }}>
            Назад
        </button>
    );
};