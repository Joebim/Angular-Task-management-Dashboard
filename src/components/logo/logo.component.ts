import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5.92036" cy="5.92036" r="5.92036" fill="#111111"/>
<circle cx="5.92036" cy="20.0796" r="5.92036" fill="#111111"/>
<circle cx="20.0797" cy="20.0796" r="5.92036" fill="#111111"/>
</svg>
  `,
})
export class LogoComponent {
  @Input() class = '';
}
