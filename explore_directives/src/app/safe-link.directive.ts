import { Directive, ElementRef, HostListener, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    // host: {
    //     'click': 'OnChange($event)'
    // }
})



export class SafeLinkDirective {
    private elementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    constructor() {
        console.log("SafeLinkDirective instantiated");
    }

    queryParam = input('my-app', { alias: 'appSafeLink' });
    @HostListener('click', ['$event'])
    OnChange(event: MouseEvent) {
        console.log("SafeLinkDirective onClick");
        const wantsToLeave = window.confirm("You are about to leave the site. Continue?");
        if (wantsToLeave) {
            const address = this.elementRef.nativeElement.href;
            this.elementRef.nativeElement.href = address + "?from=" + this.queryParam();
            return;
        }
        event.preventDefault();

    }


}