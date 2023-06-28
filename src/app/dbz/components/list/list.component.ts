import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] =[{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  // onDelete = Index value: number

  onDeleteCharacter(id?:string):void {
    //TODO: Emitir el ID del personaje
    if(!id) return;
    // console.log({id});
    this.onDelete.emit(id);
  }
}
