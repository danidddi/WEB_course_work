import { ICar } from "../../Models/DataBaseModels/Car";

interface ICarDetailTable {
    car: ICar | null
}

export function CarDetailTable({ car }: ICarDetailTable) {
    return (
        <>
            <div className="flex flex-col cursor-default">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full  text-sm font-light">
                                <thead>
                                    <tr>
                                        <th colSpan={4}
                                            scope="col"
                                            className="pb-10"
                                        >
                                            <span className="text-2xl font-light text-green-600 cursor-default">
                                                Данные:
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <thead className="font-medium">
                                    <tr>
                                        <th colSpan={4}
                                            scope="col"
                                            className="py-4"
                                        >
                                            <span className="text-lg font-medium text-green-600 cursor-default">
                                                Автомобиль
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Бренд</td>
                                        <td className="whitespace-nowrap px-6 py-4">{car?.Brand.Brand}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Модель</td>
                                        <td className="whitespace-nowrap px-6 py-4">{car?.Model}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Цвет</td>
                                        <td className="whitespace-nowrap px-6 py-4">{car?.Color.Color}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Год выпуска</td>
                                        <td className="whitespace-nowrap px-6 py-4">{car?.ReleaseYear}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Регистрационный номер</td>
                                        <td className="whitespace-nowrap px-6 py-4">{car?.Plate}</td>
                                    </tr>
                                </tbody>
                                <thead className="font-medium">
                                    <tr>
                                        <th colSpan={4}
                                            scope="col"
                                            className="py-4"
                                        >
                                            <span className="text-lg font-medium text-green-600 cursor-default">
                                                Владелец авто
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Владелец</td>
                                        <td className="whitespace-nowrap px-6 py-4">{car?.Owner.Name}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Телефонный номер</td>
                                        <td className="whitespace-nowrap px-6 py-4">{car?.Owner.PhoneNumber}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Регистрация</td>
                                        <td className="whitespace-nowrap px-6 py-4">{car?.Owner.Registration}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};