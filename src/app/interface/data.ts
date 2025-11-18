export interface IData {
  itemId: number
  taskName: string
  taskDescription: string
  dueDate: string
  createdOn: string
  isCompleted: boolean
  tags: string
  completedOn: string
}

export interface ApiResponse<T> {
  data: T;
  status?: string;
  message?: string;
}

