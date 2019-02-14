import { Component, Input } from '@angular/core';

@Component({
  selector: 'todolist',
  templateUrl: './ToDoList.component.html'
})
export class ToDoList {
  @Input() name: string;
 list= ["Get up in the morning", "Brush my teeth"];
   doneList= [0];
      
      resetList=[...this.list];
       resetDoneList=[...this.doneList];
   
    _handleAddItem(newItem) {
    if (newItem.value === "") return;
    this.list.push(newItem.value);
    // console.log(newItem.value);
    newItem.value = "";
  }

  isChecked(item,index) {
    console.log(item,index);
   
    return (this.doneList.filter(function(val) {
            return val === index;
          }).length === 0 ||
            this.doneList.filter(function(val) {
              return val === index;
            }).length === undefined) ? false : true;
  }

  _handleUpdateDoneList(e,i) {
     console.log(e.target.checked);
      let checkIfInDoneList = this.doneList.filter(function(val) {
        return val === parseInt(e.target.id);
      });

      if (checkIfInDoneList === undefined || checkIfInDoneList.length === 0) {
        // add to list
        this.doneList.push(parseInt(e.target.id));
        e.target.checked = true;
      } else {
        //delete from list
        let i = this.doneList.indexOf(parseInt(e.target.id));
        this.doneList.splice(i, 1);
        e.target.value = false;
      }
      console.log("donelist afterremove-->");
      console.log(this.doneList);
    }

   _handleRemoveDoneItems(e) {
      this.doneList.sort((a, b) => a - b);
      console.log(this.doneList);
      for (var i = this.doneList.length - 1; i >= 0; i--)
        this.list.splice(this.doneList[i], 1);

      console.log(this.list);
      this.doneList = [];
    }
    _handleResetList(e) {
      //  let newItem =this.refs.newItem.value;
      console.log("\n ***Reset Button Pressed... **");
    

      
      this.doneList=[...this.resetDoneList];
      this.list=[...this.resetList];
        console.log(
        "Reset handler will reset list to default values..." +
          JSON.stringify(this.doneList)
      );
        
       // To Do : reset done check boxes 
       // this.doneList.forEach(function(value,index) {
       //   this.refs.cb[index]=true;
       // });


    }
}





