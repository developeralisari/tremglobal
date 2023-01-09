import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react'

import { useFormik } from 'formik';
import validationSchema from './validation'
import axios from 'axios';

function App() {

  const initialValues = {
    name: 'ali sarı',
    email: 'developeralisari@gmail.com'
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      var config = {
        method: 'post',
        url: 'http://localhost/alisari/api/public/',
        data: values
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });
  return (
    <div className='flex'>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="post" onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label for="name" className="block text-sm font-medium text-gray-700">First name</label>
                      <input type="text" name="name" id="name" autocomplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <div className='text-xs text-red-500 text-bold'>{errors.name}</div>
                      ) : null}

                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
                      <input type="text" name="email" id="email" autocomplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <div className='text-xs text-red-500 text-bold'>{errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
