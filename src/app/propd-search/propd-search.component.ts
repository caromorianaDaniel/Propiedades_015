import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Propiedad } from '../propiedades';
import { PropiedadService } from '../propiedad.service';

@Component({
  selector: 'app-propd-search',
  templateUrl: './propd-search.component.html',
  styleUrls: ['./propd-search.component.css'],
})
export class PropdSearchComponent implements OnInit {
  propiedades$: Observable<Propiedad[]>;
  private searchTerms = new Subject<string>();

  constructor(private propiedadService: PropiedadService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.propiedades$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.propiedadService.searchPropiedades(term))
    );
  }
}
