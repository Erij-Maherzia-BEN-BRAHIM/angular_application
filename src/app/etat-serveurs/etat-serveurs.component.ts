import { Component, OnInit } from '@angular/core';
import { Serveur } from '../models/serveur';
@Component({
  selector: 'app-etat-serveurs',
  templateUrl: './etat-serveurs.component.html',
  styleUrls: ['./etat-serveurs.component.css']
})
export class EtatServeursComponent implements OnInit {
listeServeurs: Serveur[]=[
  new Serveur ('Production Server ','meduim', new Date(2019,7,20), 'critical' ),
  new Serveur ('Testing Develpment ', 'small',  new Date(2018,4,20), 'stable' ),
  new Serveur ('Development Server ', 'large',  new Date(2017,2,22), 'offline'),
  new Serveur ('Erij Maherzia BEN BRAHIM Server ', 'meduim',  new Date(2019,4,11), 'stable'),
];
selectedStatut;
  constructor() { }

  ngOnInit(): void {
  }
  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable' ? true : false,
      'list-group-item-danger': st == 'critical' ? true : false,
      'list-group-item-warning': st == 'offline' ? true : false,
    };
  }

}
