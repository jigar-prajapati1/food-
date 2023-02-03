import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchitem: string = '';
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchitem'])
      this.searchitem=params['searchitem'];
    })


  }
  search():void{
    if(this.searchitem)
    this.router.navigateByUrl('/search/'+(this.searchitem));

  }
}
