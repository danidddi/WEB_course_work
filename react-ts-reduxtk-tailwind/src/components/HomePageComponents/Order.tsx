import { useNavigate } from "react-router-dom";

export function Order() {
    const navigate = useNavigate();
    return (
        <>
            <div className="relative overflow-hidden bg-cover bg-no-repeat w-full h-[400px]">
                <img src="../images/car-service-heading.jpg" className="shadow-lg w-full h-[400px] object-cover dark:shadow-black/30" alt="" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                    <div className="flex h-full items-center justify-center">
                        <div className="px-6 text-center text-white md:px-12">
                            <h3 className="mb-4 pb-4 text-5xl font-light leading-tight">Автомастерская "Гараж"</h3>
                            <h3 className="mb-4 pb-4 text-2xl font-light leading-tight">Запишись на обслуживание</h3>
                            <button
                                type="button"
                                onClick={() => navigate('/admin_form')}
                                className="inline-block rounded border-2 border-neutral-50
                                 px-6 pb-[6px] pt-2 mr-5 mt-4 text-xs text-white bg-black font-medium uppercase
                                   transition duration-150 ease-in-out
                                   hover:text-black hover:bg-green-700 hover:border-black ">
                                Записаться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};