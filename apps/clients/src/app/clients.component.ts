import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'cli-clients',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.scss',
})
export class ClientsComponent {}
