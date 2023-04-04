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
  newStop = {
    stopId: -1,
    stopTime: '',
    averageRiders: 0,
    location: '',
  }
  editMode: boolean = false;
  id!: string;
  stopSave: boolean = true;
  isCollapsed = true;
  @ViewChild('s') stopsForm!: NgForm;

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
    this.router.navigate(['routes']);
  }

  onSubmit(form: NgForm){
    console.log('onsubmit');
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

  onCancelStop(){
    // reset new stop to default
    this.newStop = {
      stopId: -1,
      stopTime: '',
      averageRiders: 0,
      location: '',
    }
    this.isCollapsed = true;
  }

  onAddStop(){
    // get and assign stop data
    const form = this.stopsForm.controls;
    this.newStop.stopId = this.generateStopId();
    this.newStop.stopTime = form['newStopTime'].value;
    this.newStop.location = form['newStopLocation'].value;
    this.newStop.averageRiders = form['newAverageRiders'].value;

    // add new stop
    this.route.stops.push(this.newStop);
    if(this.editMode){
      console.log('edit mode');
      this.routeService.saveStops(this.route);
    }
    
    // reset new stop to default
    this.newStop = {
      stopId: -1,
      stopTime: '',
      averageRiders: -1,
      location: '',
    }
    this.isCollapsed = true;
  }

  onSaveStop(stopId: number){
    const pos = this.route.stops.findIndex(s => s.stopId === stopId);
    this.route.stops[pos].stopTime = this.stopsForm.controls['stopTime'].value;
    this.route.stops[pos].location = this.stopsForm.controls['stopLocation'].value;
    this.route.stops[pos].stopTime = this.stopsForm.controls['stopTime'].value;

    this.stopSave = true;

    this.routeService.saveStops(this.route);

  }

  onDeleteStop(stopId: number){
    const pos = this.route.stops.findIndex(s => s.stopId === stopId);
    this.route.stops.splice(pos, 1);
    this.stopSave = true;
    this.routeService.saveStops(this.route);
  }

  private generateStopId(){
    const min = Math.ceil(10000);
    const max = Math.floor(99999);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
