import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Propietario } from '../propietarios';
import { PropietarioService } from '../propietario.service';

@Component({
  selector: 'app-propt-search',
  templateUrl: './propt-search.component.html',
  styleUrls: ['./propt-search.component.css'],
})
export class ProptSearchComponent implements OnInit {
  propietarios$: Observable<Propietario[]>;
  private searchTerms = new Subject<string>();

  constructor(private propietarioService: PropietarioService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.propietarios$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) =>
        this.propietarioService.searchPropietarios(term)
      )
    );
  }
}
