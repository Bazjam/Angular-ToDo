import { Component } from '@angular/core';

interface Service {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent {
  services: Service[] = [
    { name: 'Web Development', price: 300, checked: false },
    { name: 'Design', price: 400, checked: false },
    { name: 'Integration', price: 250, checked: false },
    { name: 'Training', price: 220, checked: false },
  ];
  total: number = 0;

  updateAll() {
    this.total = this.services
      .filter((service) => service.checked)
      .reduce((sum, service) => sum + service.price, 0);
  }
  onServiceClick(service: Service) {
    service.checked = !service.checked;
    this.updateAll();
  }
}
