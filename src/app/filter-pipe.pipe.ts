
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {
  transform(values: any[], filters: string[]) {
    return values.reduce((acc, val) => {
      if (filters.some(filter => filter == val.volTo)) {
        acc.push(val)
      }
      return acc
    }, [])
  }
}
