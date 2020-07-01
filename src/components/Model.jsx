import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';



export default class Model extends Component {
  constructor(props){
    super(props);
    this.state={
      show: false,
      savetitle:"",
      savedesc:"",
      savepost: []
    }
  }
  create_post = () =>{
    this.setState({show: !this.state.show})
  }
  hideModal = () =>{
    this.setState({show:false})
  }

  savetitle = (e) =>{
      this.setState({savetitle:e.target.value})
      console.log(e.target.value)
  }

  savedesc = (e) =>{
      this.setState({savedesc:e.target.value})
      console.log(e.target.value)
  }
  savepost = () =>{
    console.log()
    axios({url:"https://jsonplaceholder.typicode.com/posts", method:"post",
        data:{
          "title": this.state.savetitle,
          "description":this.state.savedesc
        }})
    .then( res=>{
      console.log(res)
      this.setState({savepost:res.data})
      // console.log(savepost)
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res=>{
        console.log(res)
      })
    })
  }

  render() {
    return (
      <div>
          <button onClick={this.create_post}>
          <AddIcon />
          </button>

          <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Title and description</Modal.Title>
          </Modal.Header>

          <Modal.Body>
                        Enter Title:
                        <input className="form-control mt-2 mb-2" placeholder="Enter the title" onChange={(e) => { this.savetitle(e) }}></input>
                        Enter Description:
                        <input className="form-control mt-2" placeholder="Enter the description" onChange={(e) => { this.savedesc(e) }}></input>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>Close</Button>
            <Button variant="primary" onClick = {this.savepost}>Save Post</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import AddIcon from '@material-ui/icons/Add';
// import TextField from '@material-ui/core/TextField';



// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'relative',
//     width: 1000,
//     backgroundColor: theme.palette.background.paper,
//     // border: '2px solid #000',
//     // boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     marginBottom: '3px'
//   },
// }));

// export default function SimpleModal() {
//   const classes = useStyles();
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const body = (
//     <div style={modalStyle} className={classes.paper}>

//         <TextField id="standard-basic" label="Enter Title" /><br></br>
//         <TextField id="standard-basic" label="Enter the description" />
//       <SimpleModal />
//     </div>
//   );

//   return (
//     <div>
//       <button type="button" onClick={handleOpen}>
//         <AddIcon />
//       </button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>

//     </div>
//   );
// }


