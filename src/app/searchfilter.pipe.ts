import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/Users';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(users: User[], searchValue: string): User[] {
    if (!users || !searchValue) {
      return users;
    }
    return users.filter((user) =>
      user.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}
