import React, { useReducer, useEffect,useState } from "react";
import { Button,  TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function EmergencyInfo(props) {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));
  const [users,setUser]=useState([])
  useEffect(()=>{
    getUsers();
  },[])
  function getUsers()
  {
    fetch("http://localhost:3000/emergency-infos").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  }
  console.warn(users)
  function deleteUser(id)
  {
    fetch(`http://localhost:3000/emergency-infos/${id}`,{method:'DELETE'}).then((result)=>{result.json().then((resp)=>{
      console.warn(resp)
      getUsers()
    })
  })
  }
  
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      "e_name": "string",
  "e_number": "string",
  "relation": "string"
        }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };
    
    
    fetch("http://localhost:3000/emergency-infos ", {
      method: "POST",
      body: JSON.stringify(data.formInput),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
      getUsers()
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();

  console.log(props);

  return (
    <div>
       <h1>Emergency information</h1>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form  onSubmit={handleSubmit}>
          <TextField
            label="NAME"
            id="margin-normal"
            name="e_name"
            
            
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="CONTACT NUMBER"
            id="margin-normal"
            name="e_number"
           
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="RELATION"
            id="margin-normal"
            name="relation"
            
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
            
           
          

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            
          >
            SAVE 
          </Button>
        </form>
      </Paper>
      <h1>SEE YOUR HISTORY HERE! </h1>
    <table className="table hover" border="1" cellpadding="10">
     <tbody>
     <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Contact Number</td>
        <td>Relation</td>
        <td>Operator</td>
        

      </tr>
      {
        users.map((item,i)=>
          <tr key={i}>
          <td class="table-success">{item.id}</td>
        <td>{item.e_name}</td>
        <td>{item.e_number}</td>
          <td>{item.relation}</td>
          
          <td><button onClick={()=>deleteUser(item.id)}>DELETE</button></td>
        </tr>
        )
      }
     </tbody>
    </table>

    </div>
    
    
  );
}