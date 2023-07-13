/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { queryClient } from '../main';

export const useGetAllDepartmentsQuery = () =>
  useQuery({
    queryKey: ['all-departments'],
    queryFn: async () => (await axios.get('/api/departments')).data,
  });

export const useCreateDepartmentMutation = () =>
  useMutation({
    mutationFn: async (depData: { name: string }) =>
      (await axios.post('/api/departments/', depData)).data,
    onSuccess: () => queryClient.invalidateQueries(['all-departments']),
  });

export const useEditDepartmentMutation = () =>
  useMutation({
    mutationFn: async ({ id, name }: { id: number; name: string }) =>
      (await axios.put(`/api/departments/${id}`, { name })).data,
    onSuccess: () => queryClient.invalidateQueries(['all-departments']),
  });

export const useDeleteDepartmentMutation = () =>
  useMutation({
    mutationFn: async ({ id }: { id: number }) =>
      (await axios.delete(`/api/departments/${id}`)).data,
    onSuccess: () => queryClient.invalidateQueries(['all-departments']),
  });
