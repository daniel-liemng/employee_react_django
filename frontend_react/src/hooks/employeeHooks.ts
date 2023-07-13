/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { queryClient } from '../main';

export const useGetAllEmployeesQuery = () =>
  useQuery({
    queryKey: ['all-employees'],
    queryFn: async () => (await axios.get('/api/employees')).data,
  });

export const useCreateEmployeeMutation = () =>
  useMutation({
    mutationFn: async (empData: {
      name: string;
      email: string;
      location: string;
      department: number;
    }) => (await axios.post('/api/employees/', empData)).data,
    onSuccess: () => queryClient.invalidateQueries(['all-employees']),
  });

export const useEditEmployeeMutation = () =>
  useMutation({
    mutationFn: async ({ id, name }: { id: number; name: string }) =>
      (await axios.put(`/api/employees/${id}`, { name })).data,
    onSuccess: () => queryClient.invalidateQueries(['all-employees']),
  });

export const useDeleteEmployeeMutation = () =>
  useMutation({
    mutationFn: async ({ id }: { id: number }) =>
      (await axios.delete(`/api/employees/${id}`)).data,
    onSuccess: () => queryClient.invalidateQueries(['all-employees']),
  });
