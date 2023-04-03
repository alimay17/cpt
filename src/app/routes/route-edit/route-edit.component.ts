import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Route } from '../route.model';
import { RouteService } from '../route.service';

@Component({
  selector: 'cpt-route-edit',
  templateUrl: './route-edit.component.html',
  styleUrls: ['./route-edit.component.css']
})
export class RouteEditComponent implements OnInit{

  // properties
  originalRoute!: Route;
  route: Route = new Route('','','',false,[]);
  editMode: boolean = false;
  id!: string;
  stopSave: boolean = true;
  @ViewChild('f') routeForm!: NgForm;

  // constructor
  constructor(
    private routeService: RouteService,
    private router: Router,
    private path: ActivatedRoute
  ){}

  // implements 
  ngOnInit(): void {
      this.path.params.subscribe(
        (params: Params) => {
          let id = params['id'];
          if(!id){
            this.editMode = false;
            return;
          }
          this.originalRoute = this.routeService.getRoute(id)!;
          if(!this.originalRoute){
            return;
          }
          this.editMode = true;
          this.route = JSON.parse(JSON.stringify(this.originalRoute));
        }
      )
  }

  // methods
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.path});

  }

  onSubmit(form: NgForm){
    let value = form.value;
    this.route.name = value.name;
    this.route.quadrant = value.quadrant;
    this.route.status = value.status;
    if(this.editMode){
      this.routeService.updateRoute(this.originalRoute, this.route);
    } else {
      this.routeService.addRoute(this.route);
    }
  }

  onEditStop(){
    this.stopSave = false;
  }

  onAddStop(){
    this.stopSave = false;
  }
  onSaveStop(stopId: number){
    const pos = this.route.stops.findIndex(s => s.stopId === stopId);
    this.route.stops[pos].stopTime = this.routeForm.controls['stopTime'].value;
    this.route.stops[pos].location = this.routeForm.controls['stopLocation'].value;
    this.route.stops[pos].stopTime = this.routeForm.controls['stopTime'].value;

    this.stopSave = true;
    this.routeService.saveStops(this.route);

  }

  onDeleteStop(stopId: number){
    const pos = this.route.stops.findIndex(s => s.stopId === stopId);
    this.route.stops.splice(pos, 1);
    this.stopSave = true;
    this.routeService.saveStops(this.route);
  }

}
