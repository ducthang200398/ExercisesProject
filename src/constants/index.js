import CreateExercise from "../components/create-exercise.component";
import CreateUser from "../components/create-user.component";
import editExerciseComponent from "../components/edit-exercise.component";
import EditExercise from "../components/edit-exercise.component";
import ExercisesList from "../components/exercises-list.component";
import Login from "../components/login.component";




export const ROUTESMAIN =[
   
    {
        path:'/',
        name:'ExercisesList',
        exact:true,
        component:ExercisesList
    },
    {
        path:'/create',
        name:'CreateExercise',
        exact:true,
        component:CreateExercise
    },
    {
        path:'/login',
        name:'LOGIN',
        exact:true,
        component:Login
    },
    {
        path:'/edit/:id',
        name:'edit/:id',
        exact:true,
        component:editExerciseComponent
    },

];


export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202,
  };

