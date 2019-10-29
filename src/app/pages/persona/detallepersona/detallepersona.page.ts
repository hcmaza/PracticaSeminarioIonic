import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaserviceService } from '../../../services/personaservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallepersona',
  templateUrl: './detallepersona.page.html',
  styleUrls: ['./detallepersona.page.scss'],
})
export class DetallepersonaPage implements OnInit {
  persona: Persona = {id: 0, apellido: '', nombre: '', fechanacimiento: ''} ;
  constructor(private route: ActivatedRoute, private ps: PersonaserviceService) { }
  
  ngOnInit() {
      this.getPersona();
  }

  getPersona(): void {
    if(this.route.snapshot.paramMap.get('id') !== '0') {
      console.log('entro');
      const id = +this.route.snapshot.paramMap.get('id');
      this.ps.getPersona(id)
      .subscribe((p: any) => {
        console.log(p.data);
        this.persona = p.data;
      });
    }

  }
  addPersona() {
    this.ps.postPersona(this.persona).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
