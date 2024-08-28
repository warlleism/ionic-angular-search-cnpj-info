import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton, IonIcon, IonText, IonItem, IonLabel, IonList, IonToggle, IonTextarea, IonInput, IonCol, IonRow, IonGrid, IonModal } from '@ionic/angular/standalone';
import { ConsultarCnpjService } from 'src/app/service/consultar-cnpj.service';
import { CNPJInfo } from 'src/app/types/CNPJ';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonModal, CommonModule, IonGrid, IonRow, IonCol, IonInput, IonTextarea, IonToggle, IonList, IonLabel, IonItem, IonText, IonIcon, IonButton, IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
  standalone: true
})
export class HomeComponent implements OnInit {


  cnpj: string = "";
  isModalOpen = false;
  cnpjInfo: CNPJInfo | null = null;

  constructor(private consultarCnpjService: ConsultarCnpjService) { }

  ngOnInit() { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  applyCnpjMask(event: any) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 14) {
      value = value.substring(0, 14);
    }

    if (value.length > 12) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else if (value.length > 8) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4');
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})/, '$1.$2.$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{3})/, '$1.$2');
    }
    this.cnpj = value;
    input.value = value;
  }

  async fetchCnpjData(): Promise<void> {
    try {
      let replaceCnpj = this.cnpj.replace(/\D/g, '');
      const response = await this.consultarCnpjService.getCnpj(replaceCnpj);
      this.cnpjInfo = response;
      this.isModalOpen = true
    } catch (error) {
      console.error('Error fetching CNPJ data:', error);
    }
  }

}
