import { Component } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  list_users: any;
  edit_user: any = [];
  input_search: any;
  constructor(private userService: UserServicesService) {
    this.searchAllUser()
  }
  searchUserByText() {
    this.userService.getUserById(this.input_search).subscribe(
      (suc: any) => {
        this.list_users.data = [suc]
        this.edit_user = this.list_users.data.map((suc: any) => false)
      }, (err) => {
        if (err.error.error == 'PARAMS_NOT_VALID') {
          this.erroShow('Not Found')
        } else {
          this.erroShow('Error to search items')
        }
      }
    )
  }
  searchAllUser() {
    this.userService.getAllUsers().subscribe(
      (suc: any) => {
        this.list_users = suc
        this.edit_user = this.list_users.data.map((suc: any) => false)
      }, (err) => {
        this.erroShow('Error to search items')
      }
    )
  }
  updateUser(item: any) {
    this.userService.updateUser(item).subscribe(
      (suc: any) => {
        this.successShow('User update with success')
      }, (err) => {
        this.erroShow('Erro to update user')
      })
  }
  mensagemSuccess: any;
  successShow(text: any) {
    this.mensagemSuccess = text;
    setTimeout(() => {
      this.mensagemSuccess = ''
    }, 3000);
  }
  mensagemErro: any;
  erroShow(text: any) {
    this.mensagemErro = text;
    setTimeout(() => {
      this.mensagemErro = ''
    }, 3000);
  }
}
