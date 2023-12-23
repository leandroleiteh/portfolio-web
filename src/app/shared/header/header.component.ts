import { Component } from '@angular/core';
import { RedirectWhatsappService } from 'src/app/services/redirect-whatsapp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private redirectWhatsappService: RedirectWhatsappService){}

  redirectWhatsapp(): void{
    this.redirectWhatsappService.redirecteWhatsappLink();
  }

}
