import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Transaccion } from '../transacciones';
import { TransaccionService } from '../transaccion.service';

@Component({
  selector: 'app-trans-search',
  templateUrl: './trans-search.component.html',
  styleUrls: ['./trans-search.component.css'],
})
export class TransSearchComponent implements OnInit {
  transacciones$: Observable<Transaccion[]>;
  private searchTerms = new Subject<string>();

  constructor(private transaccionService: TransaccionService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.transacciones$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) =>
        this.transaccionService.searchTransacciones(term)
      )
    );
  }
}
