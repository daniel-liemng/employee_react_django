/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetAllDepartmentsQuery = () =>
  useQuery({
    queryKey: ['all-departments'],
    queryFn: async () => (await axios.get('/api/departments')).data,
  });
