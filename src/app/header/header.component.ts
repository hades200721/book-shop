import { Response } from '@angular/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService,
    private authService: AuthService
    ) { }

    onSaveData() {
        this.dataStorageService.storeRecipes()
        .subscribe(
            (response: Response) => {
                console.info(response);
            }
        )
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    logOut() {
        this.authService.logOut();
    }
}