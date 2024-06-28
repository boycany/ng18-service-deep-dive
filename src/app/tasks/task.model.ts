import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type TaskStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  text: string;
  taskStatus: TaskStatus;
}[];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>(
  'task-status-options'
);

export const TaskStatusOptions: TaskStatusOptions = [
  {
    value: 'open',
    text: 'Open',
    taskStatus: 'OPEN',
  },
  {
    value: 'in-progress',
    text: 'In-Progress',
    taskStatus: 'IN_PROGRESS',
  },
  {
    value: 'done',
    text: 'Completed',
    taskStatus: 'DONE',
  },
];

export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions,
  /** for dynamic injection */
  // useFactory: () => {
  //   (...do something)
  //   return TaskStatusOptions
  //}
};

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
