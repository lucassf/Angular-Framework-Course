import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-products-alert',
    templateUrl: './products-alert.component.html',
    styleUrls: ['./products-alert.component.css']
})
export class ProductsAlertComponent {
    @Input() product;
    @Output() notify = new EventEmitter();
}
