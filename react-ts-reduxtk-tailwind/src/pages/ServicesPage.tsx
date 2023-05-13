import { useEffect, useState } from 'react';
import { fetchServices } from '../store/actions/serviceActions';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { ServiceSearch } from '../components/ServicesPageComponents/ServiceSearch';
import { ServiceFilter } from '../components/ServicesPageComponents/ServiceFilter';
import { ServiceTable } from '../components/ServicesPageComponents/ServiceTable';
import ReactPaginate from 'react-paginate';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';


//количество элементов на странице
const ITEMS_PER_PAGE = 20;


export function ServicesPage() {
    const navigate = useNavigate();

    const { error, loading, services, total } = useAppSelector(state => state.service);

    const [page, setPage] = useState(1);

    //количество страниц
    const pageCount = Math.ceil(total / ITEMS_PER_PAGE);
    //обработчик изменения страницы
    const PageChangeHandler = ({ selected }: { selected: number }) => {
        setPage(selected + 1);
    }

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchServices(page, ITEMS_PER_PAGE));
    }, [dispatch, page]);

    return (
        <>
            <div className="container max-w-[1400px] mx-auto mt-[30px] rounded p-6">

                <ServiceSearch />
                <div className='flex justify-between'>
                    <ServiceFilter />
                    <button
                        onClick={() => { navigate('/admin_form') }}
                        className="rounded border-2 border-neutral-50 text-base px-4 py-2 h-11 mt-[7px]
                                   text-white bg-black
                                   duration-150 ease-in-out
                                   hover:text-black hover:bg-green-700 hover:border-black ">
                        Создать...
                    </button>
                </div>

                {error && <p className='text-center text-lg text-red-600'>{error}</p>}
                {loading && <p className='text-center text-lg'>Загрузка...</p>}


                <ServiceTable services={services} />

                <ReactPaginate containerClassName="flex justify-center my-10"
                    pageClassName="rounded py-2 px-4 text-sm duration-300 hover:bg-black hover:text-white"
                    previousClassName="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-black dark:hover:text-white"
                    nextClassName="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-black dark:hover:text-white"
                    activeClassName="bg-green-600"
                    breakLabel="..."
                    forcePage={page - 1}
                    nextLabel="Следующая"
                    onPageChange={PageChangeHandler}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Предыдущая"
                />
            </div>
            <Footer />
        </>
    );
}
