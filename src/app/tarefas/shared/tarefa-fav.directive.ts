import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTarefaFav]'
})
export class TarefaFavDirective implements OnInit {
  @Input() tarefaFav: boolean; 
  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.tarefaFav) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}

