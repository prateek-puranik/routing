import React, { useReducer, useEffect,useState } from "react";
import { Button,  TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function PersonalInfo(props) {
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
    fetch("http://localhost:3000/personal-details").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  }
  console.warn(users)
  function deleteUser(id)
  {
    fetch(`http://localhost:3000/personal-details/${id}`,{method:'DELETE'}).then((result)=>{result.json().then((resp)=>{
      console.warn(resp)
      getUsers()
    })
  })
  }
  
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      "rank": "string",
      "fullName": "string",
      "gender": "string",
      "dob": "string",
      "regiment": "string",
      "division": "string",
      "height": "string",
      "weight": "string",
      "bloodGroup": "string"

      }
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };
    
    
    fetch("http://localhost:3000/personal-details", {
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
       <h1>Personal Information</h1>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form  onSubmit={handleSubmit}>
        <TextField
            label="RANK"
            id="margin-normal"
            name="rank"
            
            defaultValue={formInput.email}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="NAME"
            id="margin-normal"
            name="fullName"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
          <TextField
            label="GENDER"
            id="margin-normal"
            name="gender"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="DOB"
            id="margin-normal"
            name="dob"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="DD/MM/YYYY"
            onChange={handleInput}
          /><br/>
          <TextField
            label="REGIMENT"
            id="margin-normal"
            name="regiment"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          />
          <TextField
            label="DIVISION"
            id="margin-normal"
            name="division"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText=""
            onChange={handleInput}
          /><br/>
           <TextField
            label="HEIGHT"
            id="margin-normal"
            name="height"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="(IN CMS)"
            onChange={handleInput}
          />
           <TextField
            label="WEIGHT"
            id="margin-normal"
            name="weight"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="(IN KGS)"
            onChange={handleInput}
          /><br/>
          <TextField
            label="BLOOD GROUP"
            id="margin-normal"
            name="bloodGroup"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="eg.B+ve"
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
    <table className="table hover"border="1" cellpadding="10">
     <tbody>
     <tr>
        <td>ID</td>
        <td>Rank</td>
        <td>Name</td>
        <td>Gender</td>
        <td>DOB</td>
        <td>Regiment</td>
        <td>Division</td>
        <td>Height</td>
        <td>Weight</td>
        <td>Blood Group</td>
        <td>Operations</td>

      </tr>
      {
        users.map((item,i)=>
          <tr key={i}>
          <td class="table-success">{item.id}</td>
        <td>{item.rank}</td>
        <td>{item.fullName}</td>
          <td>{item.gender}</td>
          <td>{item.dob}</td>
          <td>{item.regiment}</td>
          <td>{item.division}</td>
          <td>{item.height}</td>
          <td>{item.weight}</td>
          <td>{item.bloodGroup}</td>
          <td><button onClick={()=>deleteUser(item.id)}>DELETE</button></td>
        </tr>
        )
      }
     </tbody>
    </table>

    </div>
    
    
  );
}