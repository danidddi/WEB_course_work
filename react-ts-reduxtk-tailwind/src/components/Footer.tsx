import { useNavigate } from "react-router-dom";

export function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <footer className="bg-neutral-900 min-h-[250px] text-center text-white">
                <div className="container px-6 pt-6">

                    <div>
                        <div className="flex items-center justify-center mb-9">
                            <button type="button"
                                onClick={() => navigate('/admin_form')}
                                className="inline-block rounded border-2 border-neutral-50
                                 px-6 pb-[6px] pt-2 mr-5 mt-4 text-xs text-white bg-black font-medium uppercase
                                   transition duration-150 ease-in-out
                                   hover:text-black hover:bg-green-700 hover:border-black ">
                                Записаться
                            </button>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p>
                            Находимся по адрессу: г. Адресс ул. Адрессовая дом 1
                        </p>
                    </div>


                </div>

                <div className="p-4 text-center">
                    <a className="text-white" target="_blank" href="https://github.com/danidddi?tab=repositories">
                        Разработчик: Pilygin
                    </a>
                    <p>2023</p>
                </div>
            </footer>
        </>
    );
};