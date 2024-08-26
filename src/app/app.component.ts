import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  items = [
    {
      icon: "pi pi-fw pi-home",
      routerLink: "/",
      routerLinkActive: 'active-link'
    },
    {
      label: "Relatórios",
      routerLink: "/relatorios",
      routerLinkActive: 'active-link'
    },
    {
      label: "Lançamentos",
      routerLink: "/lancamentos",
      routerLinkActive: 'active-link'
    },
    {
      label: "Categorias",
      routerLink: "/categorias",
      routerLinkActive: 'active-link'
    }
  ];
}
