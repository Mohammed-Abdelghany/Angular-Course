import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from './auth.service';
import { Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private templateRef = inject(TemplateRef)
  private viewContainerRef = inject(ViewContainerRef);
  private AuthService = inject(AuthService);

  constructor() {
    effect(() => {
      if (this.AuthService.activePermission() === this.userType()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
      else {
        this.viewContainerRef.clear();
      }
    })

  }
}
