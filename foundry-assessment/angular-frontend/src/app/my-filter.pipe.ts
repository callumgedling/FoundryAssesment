import { Pipe, PipeTransform } from '@angular/core';
import {IEngagement} from './engagement'

@Pipe({
    name: 'myfilter',
    pure: false
})

export class MyFilterPipe implements PipeTransform {
    transform(engagements: IEngagement[], filter: IEngagement): any {
        if (!engagements || !filter) {
            return engagements;
        }
        // filter engagements array, engagements which match and return true will be
        // kept, false will be filtered out
        return engagements.filter(engagement => engagement.client.indexOf(filter.client) !== -1);
      }
}