import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-other-lib',
  template: `
    <p>
      other-lib works!
    </p>
  `,
  styles: [
  ]
})
export class OtherLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
