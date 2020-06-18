import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DataService } from '../data.service';


@Component({
  selector: 'app-movetools',
  templateUrl: './movetools.component.html',
  styleUrls: ['./movetools.component.css']
})
export class MovetoolsComponent implements OnInit {
  public many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
  public many2: Array<string> = ['Explore', 'them'];
  _alltoolsObj:any;
  _tooldata:any;
  posts:any;
  selector: string = '.main-panel';
	
	onScroll () {
	}
  constructor(private _drag:DragulaService,private _service:DataService) {
    // _drag.setOptions('bag-task3', {
    //   copy: true
    // });
    // _drag.setOptions('third-bag', {
    //   removeOnSpill: true
    // });
    // _drag.drag.subscribe((value) => {
    //   console.log(`drag: ${value[0]}`);
    //   this.onDrag(value.slice(1));
    // });
    // _drag.drop.subscribe((value) => {
    //   console.log(`drop: ${value[0]}`);
    //   this.onDrop(value.slice(1));
    // });
    // _drag.over.subscribe((value) => {
    //   console.log(`over: ${value[0]}`);
    //   this.onOver(value.slice(1));
    // });
    // _drag.out.subscribe((value) => {
    //   console.log(`out: ${value[0]}`);
    //   this.onOut(value.slice(1));
    // });

    // _drag.dropModel.subscribe((value) => {
    //   console.log('dropModel',value)
    //   this.onDropModel(value.slice(1));
    // });
    // _drag.removeModel.subscribe((value) => {
    //   console.log('removeModel',value)
    //   this.onRemoveModel(value.slice(1));
    // });


   }



  //  private onDropModel(args) {
  //    console.log('onDropModel',args);
  //   let [el, target, source] = args;
  // }

  // private onRemoveModel(args) {
  //   console.log('onRemoveModel',args);
  //   let [el, source] = args;
  // }

  //  private hasClass(el: any, name: string) {
  //   return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  // }

  // private addClass(el: any, name: string) {
  //   if (!this.hasClass(el, name)) {
  //     el.className = el.className ? [el.className, name].join(' ') : name;
  //   }
  // }

  // private removeClass(el: any, name: string) {
  //   if (this.hasClass(el, name)) {
  //     el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
  //   }
  // }

  // private onDrag(args) {
  //   let [e, el] = args;
  //   this.removeClass(e, 'ex-moved');
  // }

  // private onDrop(args) {
  //   let [e, el] = args;
  //   this.addClass(e, 'ex-moved');
  // }

  // private onOver(args) {
  //   let [e, el, container] = args;
  //   this.addClass(el, 'ex-over');
  // }

  // private onOut(args) {
  //   let [e, el, container] = args;
  //   this.removeClass(el, 'ex-over');
  // }

  ngOnInit() {
    this._alltoolsObj = this._service.getTools().subscribe(data=>{
      this._tooldata = data;
      // this.posts = this._tooldata.slice(0,20);
    })
  }

  onScrollDown () {
    
      // if(this.posts.length < this._tooldata.length){  
      //   let len = this.posts.length;
   
      //   for(let i = len; i <= len+20; i++){
      //     this.posts.push(this._tooldata[i]);
      //   }
      // }
    
}

onScrollUp () {
  }

}
