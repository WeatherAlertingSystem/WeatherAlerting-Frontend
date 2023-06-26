import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WeatherTrigger } from '../models/weather-trigger.class';
import { FormMode } from '../weather-trigger-form/weather-trigger-form.component';

@Component({
  selector: 'app-weather-trigger-editor-modal',
  templateUrl: './weather-trigger-editor-modal.component.html',
  styleUrls: ['./weather-trigger-editor-modal.component.scss'],
})
export class WeatherTriggerEditorModalComponent {
  closeResult = '';
  weatherTrigger: WeatherTrigger | undefined;
  mode: FormMode = FormMode.ADD;
  @ViewChild('content') content!: ElementRef;

  constructor(private modalService: NgbModal) {}

  open(weatherTrigger: WeatherTrigger | undefined = undefined) {
    this.weatherTrigger = weatherTrigger;
    if (this.weatherTrigger) this.mode = FormMode.EDIT;
    else this.mode = FormMode.ADD;
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
