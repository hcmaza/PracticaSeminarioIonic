import { PersonaserviceService } from './../services/personaservice.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/Persona';
import { PERSONAS } from '../models/mock-persona';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  persona: Persona = {id: 2, apellido: 'Sun', nombre: 'Java', fechanacimiento: '1996-12-12'};
  muchaspersonas: Persona[] = [];
  personas: Persona[] ;
  constructor(private router: Router, private ps: PersonaserviceService) {
    //console.log('es' + this.persona);
    this.getPersonas();
  }

  ngOnInit(): void {
    this.getListadoPersonas();
  }

  getPersonas(): void {
    this.personas = PERSONAS;
  }

  agregar() {
    console.log('agregar');
  }

  navegar(donde: string, id: number): void{
    //this.router.navigate(['/detallepersona']);
    this.router.navigate([donde, id] );
  }

  getListadoPersonas() {
    return this.ps.getPersonas().subscribe(
      (res: any) => {
        console.log(res);
        this.muchaspersonas = res.data;
       }
      );
  }

  getPersonaPorId(id: number){
    this.ps.getPersona(id).subscribe(
      (data: any) => {
        console.log(data);
        this.persona = data;
      }
    );
  
  }
  addPersona(p: Persona) {
    this.ps.postPersona(p).subscribe(
      data => {
        return this.muchaspersonas.push(data);
      }
    );
  }

  updatePersona(p: Persona) {
    console.log(p);
    this.ps.putPersona(p).subscribe(
      data => {
        return this.muchaspersonas.push(data);
      }
    );
  }

  deletePersona(id: number) {
    this.ps.deletePersona(id).subscribe(
      data => {
        return this.muchaspersonas.push(data);
      }
    );
    let indice = 0;
    let contador = 0;
    for (let p of this.muchaspersonas) {
      if ( p.id === id) {
        indice = contador;
      }
      contador++;
    }
    this.muchaspersonas.splice(indice, 1);
    //document.location.reload();
  }
}
