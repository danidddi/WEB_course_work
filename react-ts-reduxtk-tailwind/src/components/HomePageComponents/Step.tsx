export function Step() {
    return (
        <>
            <ul className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">

                <li className="w-[4.5rem] flex-auto">
                    <div className="flex cursor-default items-center pl-2 
                            after:ml-2 after:h-px after:flex-1 dark:after:bg-green-700">
                        <span className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center
                                justify-center border-2 border-green-700 rounded-full bg-white text-sm
                                font-medium text-black">
                            1
                        </span>
                        <span className="font-medium text-black mb-1 ">
                            Запишись
                        </span>
                    </div>
                </li>

                <li className="w-[4.5rem] flex-auto">
                    <div className="flex cursor-default items-center before:mr-2 before:h-px 
                            before:flex-1  after:ml-2 after:h-px after:flex-1  dark:before:bg-green-700
                            dark:after:bg-green-700">
                        <span className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center
                                justify-center border-2 border-green-700 rounded-full bg-white text-sm
                                font-medium text-black">
                            2
                        </span>
                        <span className="font-medium text-black mb-1 ">
                            Оставь авто
                        </span>
                    </div>
                </li>

                <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
                    <div className="flex cursor-default items-center pr-2  
                             before:mr-2 before:h-px before:flex-1 dark:before:bg-green-700">
                        <span className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center
                                justify-center border-2 border-green-700 rounded-full bg-white text-sm
                                font-medium text-black">
                            3
                        </span>
                        <span className="font-medium text-black mb-1 ">
                            Забери авто
                        </span>
                    </div>
                </li>
            </ul>
        </>
    );
}