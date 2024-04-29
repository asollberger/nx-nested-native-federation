import { Component, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RequestStore } from '@my/request-store';

@Component({
    selector: 'req-navigation',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, JsonPipe],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
    private _requestStore = inject(RequestStore);

    public account = this._requestStore.account;
    public client = this._requestStore.client;

    logState(): void {
        console.log(this._requestStore.account());
        console.log(this._requestStore.client());
    }
}
