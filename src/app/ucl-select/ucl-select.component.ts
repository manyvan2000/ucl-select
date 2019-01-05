import { Component, Input, Output, EventEmitter } from "@angular/core";



@Component({
    selector: 'ucl-select', 
    templateUrl: './ucl-select.component.html', 
    styleUrls: ['ucl-select.component.scss']
})
export class UclSelect{
    @Input() id: number; 
    @Input() options: any; 
    @Input() selectedOption: any = {id:0, description:''}; 
    @Output() selectedOptionChange:EventEmitter<any> = new EventEmitter<any>(); 

    selectOpen : boolean = false; 

    constructor() {

    }

    toggleSelect(event:any) {
        this.selectOpen = !this.selectOpen; 
    }

    selectOption(option: any) {
        this.selectedOption = option; 
        this.selectOpen = !this.selectOpen; 
        this.selectedOptionChange.emit(this.selectedOption);
    }

    
}