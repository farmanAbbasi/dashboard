import { Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../../header/header.component';
import { GroupFormComponent } from '../../group-form/group-form.component';
import { ForumComponent } from '../../forum/forum.component';
import { DepartmentFormComponent } from '../../department-form/department-form.component';
export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'createGroup', component: GroupFormComponent },
    { path: 'createDepartment', component: DepartmentFormComponent },
    { path: 'forum', component: ForumComponent },
];
