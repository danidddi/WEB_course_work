import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCars } from '../store/actions/carActions';
import { fetchWorkers } from '../store/actions/workerActions';
import { fetchPeople } from '../store/actions/peopleActions';
import { fetchDefects } from '../store/actions/defectActions';
import axios from '../axios/axios';
import { useNavigate } from 'react-router-dom';
import { useInput } from '../hooks/input';


export function ServiceForm() {

    const navigate = useNavigate();

    const [car, setCar] = useState(1);
    const [clientPerson, setClientPerson] = useState(1);
    const [worker, setWorker] = useState(1);
    const [defect, setDefect] = useState(1);
    const [outlay, setOutlay] = useState(1);
    const [pay, setPay] = useState(1);
    const [comment, setComment] = useState('');

    const { defects } = useAppSelector(state => state.defect);
    const { workers } = useAppSelector(state => state.worker);
    const { people } = useAppSelector(state => state.people);
    const { cars } = useAppSelector(state => state.car);




    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCars());
        dispatch(fetchWorkers());
        dispatch(fetchPeople());
        dispatch(fetchDefects());
    }, [dispatch]);


    async function submitHandler() {

        const clientResponse = await axios.post(
            'clients',
            null,
            {
                params: {
                    Person: { Id: clientPerson },
                    Car: { Id: car }
                }
            }
        );


        const serviceResponse = await axios.post(
            'services',
            null,
            {
                params: {
                    Client: { Id: clientResponse.data.data.Id },
                    Worker: { Id: worker },
                    Defect: { Id: defect },
                    DateAcceptance: null,
                    DateIssuance: null,
                    Outlay: outlay,
                    Pay: pay,
                    Comments: comment
                }
            }
        );
        console.log(serviceResponse);
        navigate(`/services/${serviceResponse.data.data.Id}`);
    };



    return (
        <>
            <form className="flex flex-col items-center">

                {/* Авто клиента */}
                <div className="w-full my-5 flex justify-center">
                    <label
                        htmlFor="car"
                        className="w-1/4 font-light text-2xl text-green-600"
                    >Авто
                    </label>
                    <select
                        value={car}
                        onChange={(e) => { setCar(+e.target.value) }}
                        id="car"
                        className="border-2 w-1/4 p-2 border-black hover:border-green-600 rounded">
                        {cars.map(car => (<option key={car.Plate} value={car.Id}>{car.Brand.Brand} {car.Model} {car.Plate}</option>))}
                    </select>
                </div>

                {/* Персона клиента*/}
                <div className="w-full my-5 flex justify-center">
                    <label
                        htmlFor="client"
                        className="w-1/4 font-light text-2xl text-green-600"
                    >Клиент
                    </label>
                    <select
                        value={clientPerson}
                        onChange={(e) => { setClientPerson(+e.target.value) }}
                        id="client"
                        className="border-2 w-1/4 p-2 border-black hover:border-green-600 rounded">
                        {
                            people.map(people => (
                                <option key={people.Id} value={people.Id}>
                                    {people.Name} {people.BornDate.toString()}
                                </option>))
                        }
                    </select>
                </div>

                {/* Работник */}
                <div className="w-full my-5 flex justify-center">
                    <label
                        htmlFor="worker"
                        className="w-1/4 font-light text-2xl text-green-600"
                    >Работник
                    </label>
                    <select
                        value={worker}
                        onChange={(e) => { setWorker(+e.target.value) }}
                        id="worker"
                        className="border-2 w-1/4 p-2 border-black hover:border-green-600 rounded">
                        {
                            workers.map(worker => (
                                <option key={worker.Id + worker.Id} value={worker.Id}>
                                    {worker.Person.Name} {worker.Specialty.Specialty}
                                </option>))
                        }
                    </select>
                </div>

                {/* Дефект */}
                <div className="w-full my-5 flex justify-center">

                    <label
                        htmlFor="defect"
                        className="w-1/4 font-light text-2xl text-green-600"
                    >Дефект
                    </label>

                    <select
                        value={defect}
                        onChange={(e) => { setDefect(+e.target.value) }}
                        id="defect"
                        className="border-2 w-1/4 p-2 border-black hover:border-green-600 rounded">
                        {
                            defects.map(defect => (<option key={defect.Id * 1.33} value={defect.Id}>
                                {defect.Defect}
                            </option>))
                        }
                    </select>

                </div>

                {/* Стоимость деталей */}
                <div className="w-full my-5 flex justify-center">

                    <label
                        htmlFor="outlay"
                        className="w-1/4 font-light text-xl text-green-600"
                    >Стоимость деталей и работы
                    </label>

                    <input
                        value={outlay}
                        onChange={(e) => { setOutlay(+e.target.value) }}
                        type="number"
                        className="w-1/4 rounded border-2 border-black
                             px-3 py-[0.32rem] duration-200 ease-linear"
                        id="outlay"
                        placeholder="Example label" />
                </div>

                <div className="w-full my-5 flex justify-center">

                    <label
                        htmlFor="pay"
                        className="w-1/4 font-light text-xl text-green-600"
                    >Оплата клиента
                    </label>

                    <input
                        value={pay}
                        onChange={(e) => { setPay(+e.target.value) }}
                        type="number"
                        className="w-1/4 rounded border-2 border-black
                             px-3 py-[0.32rem] duration-200 ease-linear"
                        id="pay"
                        placeholder="Example label" />
                </div>

                <div className="w-2/4 mb-3 border-2 rounded border-black">
                    <textarea
                        onChange={(e) => { setComment(e.target.value) }}
                        value={comment}
                        title='Коментарии к работе'
                        className="min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] 
                        outline-none transition-all duration-200 ease-linear text-green-600"
                        id="exampleFormControlTextarea1"
                        placeholder="Комментарии к работе..."></textarea>
                </div>

                <button
                    className="rounded border-2 border-neutral-50 text-base px-16 py-2 h-11 mt-[7px]
                                   text-white bg-black
                                   duration-150 ease-in-out
                                   hover:text-black hover:bg-green-700 hover:border-black"
                    onClick={submitHandler}
                    type='button'
                >
                    Создать
                </button>

            </form >
        </>
    );
}