"use client";
import { useAppDispatch,useAppSelector } from '@/redux/Hooks';
import { decrement, increment, reset } from '@/redux/features/CounterSlice';
import { useGetUsersQuery } from "@/redux/services/userApi";

import React from 'react'

const HomePage = () => {

  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  if (isLoading || isFetching) return <p>loading...</p>;
  if (error) return <p>some error</p>;
  return (
    <>
        <h1 className='text-center text-2x1'>{count}</h1>
        <div>
          <button className='bg-green-500 px-3 py-2 rounded-md' onClick={() => dispatch(increment())}>increment</button>
          <button className='bg-blue-500 px-3 py-2 rounded-md'          onClick={() => dispatch(decrement())}>
            decrement
          </button>
          <button className='bg-red-500 px-3 py-2 rounded-md' onClick={() => dispatch(reset())}>reset</button>
        </div>
      <div className="grid grid-cols-3 mx-auto gap-3">
        {error ? (
          <p>some error</p>
        ) : isLoading || isFetching ? (
          <p>loading...</p>
        ) : (
          data?.map((user) => (
            <div className='bg-zinc-600 p-4 rounded-md'  key={user.id}>  
              <p className="text-center font-bold mt-4">{user.name}</p>
              <p className='text-center font-bold mt-4'>{user.email}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default HomePage