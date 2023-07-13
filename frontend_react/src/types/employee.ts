export type Employee = {
  id: number;
  name: string;
  email: string;
  location: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  department: number;
  depName?: string;
  // department: {
  //   name: string;
  // };
};
