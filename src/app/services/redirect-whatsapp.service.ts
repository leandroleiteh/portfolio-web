import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedirectWhatsappService {

  redirecteWhatsappLink(): void {
    const redirectWhatsappUrl = 'https://api.whatsapp.com/send/?phone=5511947165215&text&type=phone_number&app_absent=0';
    const link = document.createElement('a');
    link.href = redirectWhatsappUrl;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
