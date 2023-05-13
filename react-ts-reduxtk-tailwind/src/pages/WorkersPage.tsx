import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchWorkers } from '../store/actions/workerActions';
import { Footer } from '../components/Footer';
import { WorkersTable } from '../components/WorkersPageComponents/WorkersTable';
import { WorkersSearch } from '../components/WorkersPageComponents/WorkersSearch';


export function WorkersPage() {
    const { loading, workers, error } = useAppSelector(state => state.worker);


    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchWorkers());
    }, [dispatch]);

    return (
        <>
            <div className="container max-w-[1400px] mx-auto mt-[30px] rounded p-6 mb-10">

                <WorkersSearch />

                {error && <p className='text-center text-lg text-red-600'>{error}</p>}
                {loading && <p className='text-center text-lg'>Загрузка...</p>}


                <WorkersTable workers={workers} />
            </div>
            <Footer />
        </>
    );
}
