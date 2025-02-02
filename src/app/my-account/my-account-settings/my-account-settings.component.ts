import { Component, Input } from '@angular/core';
import { MyAccountPersonalData } from '../my-account.types';

@Component({
  selector: 'app-my-account-settings',
  templateUrl: './my-account-settings.component.html',
  styleUrls: ['./my-account-settings.component.scss'],
})
export class MyAccountSettingsComponent {
  @Input() public myAccountPersonalData: MyAccountPersonalData | null | undefined;

  constructor() {}
}
