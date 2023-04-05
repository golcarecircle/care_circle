import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
// import {Patient} from '@/pages/api/models/patient.model';
// import {PatientSearch} from '@/pages/api/models/patientSearch.model';
import { IUser } from '@/pages/api/users';
export const patientSearchApi = createApi({
    reducerPath: 'patientSearchApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (builder) => ({
        getPatients: builder.query<IUser[], string>({
            query: () => `users`,
        }),
        getPatient: builder.query<IUser, string>({
            query: (id) => `users/${id}`,
        }),
    }),
});
export const { useGetPatientsQuery, useGetPatientQuery } = patientSearchApi;
