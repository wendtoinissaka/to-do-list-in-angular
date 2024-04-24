import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  taskArray = [{
    id : 1,
    taskName: "TP IHM ",
    taskDescription : "TP à faire avant le dimanche 28 avril 2024",
    isCompleted : false  
  },
  {  id : 2,
    taskName: "Révision L2 ",
    taskDescription : "Je dois réviser les cours de L2 que j'ai pas pu bien cerner et qui sont en rapport avec ma spécialisation de L2 \nDebut aujourd'hui(Mercredi) le 24 Avril 2024",
    isCompleted : false  
  },
  
];


  editingIndex: number = -1; // Indice de la tâche en cours de modification
  editedTask: any = null; // Données de la tâche en cours de modification
  isFormVisible: boolean = false; // État d'affichage du formulaire
   constructor(){

   }

  ngOnInit(): void {
  }
  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
  }
  onSubmit(form : NgForm){
    console.log(form);
    this.taskArray.push({
      id : this.taskArray.length +1,
      taskName: form.controls['task'].value,
      taskDescription: form.controls['description'].value,
      isCompleted: false
    })
    form.reset();
    this.toggleFormVisibility(); // Cacher le formulaire après la soumission
  }

  onCheck(index:number){
    this.taskArray[index].isCompleted= !this.taskArray[index].isCompleted;
    
  }


  onDelete(index: number){
    this.taskArray.splice(index, 1);  
  }

  onEdit(index: number) {
  this.editingIndex = index; // Enregistre l'indice de la tâche en cours de modification
  this.editedTask = { ...this.taskArray[index] }; // Enregistre les données de la tâche
}


onSubmitEdit(form: NgForm) {
  if (this.editingIndex > -1) {
    this.taskArray[this.editingIndex] = {
      id: this.editedTask.id,
      taskName: form.controls['task'].value,
      taskDescription: form.controls['description'].value,
      isCompleted: this.editedTask.isCompleted
    };
    this.editingIndex = -1; // Réinitialise l'indice de la tâche en cours de modification
    this.editedTask = null; // Réinitialise les données de la tâche
    form.reset(); // Réinitialise le formulaire
  }
}
onCancelEdit() {
  this.editingIndex = -1; // Réinitialise l'indice de la tâche en cours de modification
  this.editedTask = null; // Réinitialise les données de la tâche
}
  

}
