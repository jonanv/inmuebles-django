import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// Imports
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmailPasswordCredentials } from '../../../../store/user/user-models';
import * as fromUser from '../../../../store/user/user-actions';
import * as fromUserSelectors from '../../../../store/user/user-selectors';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  public loading$!: Observable<boolean | null>;

  constructor(
    private store: Store
  ) {
    this.loading$ = this.store.select(
      fromUserSelectors.getLoading
    );
  }

  public onLogin(form: NgForm): void {

    const userLoginRequest: EmailPasswordCredentials = {
      email: form.value.email,
      password: form.value.password
    };

    this.store.dispatch(
      fromUser.signInEmail({
        credentials: userLoginRequest
      })
    );
  }

}
