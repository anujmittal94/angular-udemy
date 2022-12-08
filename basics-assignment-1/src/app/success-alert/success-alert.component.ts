import { Component } from "@angular/core";

@Component({
  selector: "app-success-alert",
  template: '<div class="alert alert-success">A success message</div>',
  styles: ["div { font-weight: bold; }"],
})
export class SuccessAlertComponent {
  constructor() {}
}
