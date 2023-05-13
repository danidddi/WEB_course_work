export function Masters() {
    return (
        <>
            <section className="text-black">

                <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                    <h3 className="mb-6 text-3xl font-light">Мастера высшего класса</h3>
                    <p className="mb-6 pb-2 font-light text-lg">
                        Не имеет значения какой марки автомобиль или сложность работы.
                        Оставляя ваш автомобиль в нашей мастерской вы можете быть уверены в качестве обслуживания.

                    </p>
                </div>

                <div className="grid gap-6 text-center md:grid-cols-3">
                    <div>
                        <div
                            className="block rounded-lg bg-white shadow-lg">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-green-600"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2
                            border-neutral-800 bg-neutral-800">
                                <img src="../images/first-master.jpg" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">Виктор Моторович</h4>
                                <hr />
                                <p className="mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Виктор имеет стаж более 30 лет. Мастер по работе с моторами и коробками.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            className="block rounded-lg bg-white shadow-lg">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-green-400"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2
                            border-neutral-800 bg-neutral-800">
                                <img src="../images/second-master.jpg" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">Михаил Гайкович</h4>
                                <hr />
                                <p className="mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Специалист широкого спектра работ по кузову. Работы Михайла высоко ценятся на тюнинг сцене.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            className="block rounded-lg bg-white shadow-lg">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-green-900"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2
                            border-neutral-800 bg-neutral-800">
                                <img src="../images/third-master.jpg" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">Иван Подвескович</h4>
                                <hr />
                                <p className="mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Иван за свою многолетнюю карьеру заработал авторитет мастера высокого класса.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};