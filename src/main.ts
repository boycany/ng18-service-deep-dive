import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { TasksService } from './app/tasks/tasks.service';
// import { InjectionToken } from '@angular/core';

/** If set providers here, it won't use tree-shaking to optimize the service code you import.
 * Nowhether the code will be implemented or not, it will be loaded and compiled.
 */
// bootstrapApplication(AppComponent, {
//   providers: [TasksService],
// }).catch((err) => console.error(err));

/** 上面的 code 和下面的 code 是同義的，只是上面是簡寫，符合大部分 inject service 的情況。
 * 下面的 code 可以 inject 更多不同格式的東西
 */
// export const TasksServiceToken = new InjectionToken<TasksService>(
//   'tasks-service-token'
// );

// bootstrapApplication(AppComponent, {
//   providers: [
//     {
//       provide: TasksServiceToken,
//       useClass: TasksService,
//     },
//   ],
// });

bootstrapApplication(AppComponent).catch((err) => console.error(err));
