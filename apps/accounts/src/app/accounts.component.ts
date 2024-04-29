import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'acc-accounts',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './accounts.component.html',
    styleUrl: './accounts.component.scss',
})
export class AccountsComponent {}
