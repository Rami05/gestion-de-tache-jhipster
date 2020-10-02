import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#GestionTachesRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#GestionTachesCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#GestionTachesLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#GestionTachesDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#GestionTachesTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#GestionTachesEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#GestionTachesJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#GestionTachesJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionTachesEntityModule {}
