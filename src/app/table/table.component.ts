import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent{
    title = ["firstname","lastname","email"];
    data = [{name:'',v1:'',v2:''}];
    firstname ="";
    lastname ="";
    email = "";
    add(){
        this.data.push({name:this.firstname,v1:this.lastname,v2:this.email});
    }

} 