import { useNavigate } from "react-router-dom";
import { IWorker } from "../../Models/DataBaseModels/Worker";


interface IWorkersTable {
    workers: IWorker[]
};

export function WorkersTable({ workers }: IWorkersTable) {
    const navigate = useNavigate();


    return (
        <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Имя</th>
                    <th className="px-6 py-4">Специальность</th>
                    <th className="px-6 py-4">Телефон</th>
                    <th className="px-6 py-4">Ранг</th>
                </tr>
            </thead>
            <tbody>
                {workers.map(worker => (
                    <tr key={worker.Id} className="border-b border-neutral-500 hover:shadow-xl hover:bg-green-600 hover:text-white cursor-pointer"
                        onClick={() => navigate(`/workers/${worker.Id}`)}
                    >
                        <th className="whitespace-nowrap px-6 py-4">{worker.Id}</th>
                        <th className="whitespace-nowrap font-normal px-6 py-4">{worker.Person.Name}</th>
                        <th className="whitespace-nowrap font-normal px-6 py-4">{worker.Specialty.Specialty}</th>
                        <th className="whitespace-nowrap font-normal px-6 py-4">{worker.Person.PhoneNumber}</th>
                        <th className="whitespace-nowrap font-normal px-6 py-4">{worker.Rank}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};