import { IWorker } from "../../Models/DataBaseModels/Worker";

interface IWorkerDetailTable {
    worker: IWorker | null
}

export function WorkerDetailTable({ worker }: IWorkerDetailTable) {
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
                                                Мастер
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Имя</td>
                                        <td className="whitespace-nowrap px-6 py-4">{worker?.Person.Name}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Дата рождения</td>
                                        <td className="whitespace-nowrap px-6 py-4">{worker?.Person.BornDate.toString()}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Номер</td>
                                        <td className="whitespace-nowrap px-6 py-4">{worker?.Person.PhoneNumber}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Регистрация</td>
                                        <td className="whitespace-nowrap px-6 py-4">{worker?.Person.Registration}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Специальность</td>
                                        <td className="whitespace-nowrap px-6 py-4">{worker?.Specialty.Specialty}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Ранг</td>
                                        <td className="whitespace-nowrap px-6 py-4">{worker?.Rank}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Взят на работу</td>
                                        <td className="whitespace-nowrap px-6 py-4">{worker?.Employment.toString()}</td>
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