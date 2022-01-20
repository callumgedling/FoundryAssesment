import { Pipe, PipeTransform } from '@angular/core';
import {IEngagement} from './engagement'

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(engagements: IEngagement[], filter: IEngagement): any {
    if (!engagements || !filter) {
        return engagements;
    }
    // filter engagements array, engagements which match and return true will be
    // kept, false will be filtered out
    return engagements.filter(engagement => engagement.employee.indexOf(filter.employee) !== -1);

}
}
