import React from 'react';
import { useEffect, useState } from 'react';
import {  useNavigate} from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

 export function Show() {
  const navigate=useNavigate();
  const [data, setdata] = useState("");

  
      const getjournal =    useEffect(() => {
 fetch("http://localhost:4000/api/article/allarticle")
          .then((data) => data.json())
          .then((answ) => setdata(answ[2]));          
      },[]);

      const deleteMovie=(id)=>{
        fetch("http://localhost:4000/api/article/delete/6447c51b8086c672212bcd5b",
        {
          method:"DELETE",
        }).then(()=>getjournal());
        
        
  }
      
 return <>



<div class="table-responsive">


    <table class="table">
  <thead>
    <tr>
      <th scope="col">SI.NO</th>
      <th scope="col">YEAR</th>
      <th scope="col">VOLUME</th>
      <th scope="col">ISSUE</th>
      <th scope="col">ARTICLE.ID</th>
      <th scope="col">REVISED DATE</th>
      <th scope="col">RECEIVED DATE</th>
      <th scope="col">ACCEPTED DATE</th>
      <th scope="col">PUBLISHED</th>
      <th scope="col">HEADING</th>
      <th scope="col">ABSTRACT</th>
      <th scope="col">KEYWORDS</th>
      {/* <th scope="col">REFERENCE</th> */}
      <th scope="col">VIEW</th>
      <th scope="col">Edit</th>
      <th scope="col">DELETE</th>
</tr>
  </thead>
  <tbody>

    <tr>  
      <th scope="row">1</th>
      <td>{data.year}</td>
      <td>{data.volume}</td>
      <td>{data.issue}</td>
      <td>{data.article}</td>
      <td>{data.revised}</td>
      <td>{data.received}</td>
      <td>{data.accepted}</td>
      <td>{data.published}</td>
      <td>{data.heading}</td>
      <td>{data.abstract}</td>
      <td>{data.keyword}</td>
      {/* <td>{data.year}</td> */}
      <td><VisibilityIcon style={{"color":"navy"}}/>&nbsp;view</td>
      <td><EditIcon  onClick={() => navigate(`/movies/edit/${data._id}`)} style={{"color":"green"}}/></td>
      <td><DeleteIcon onClick={deleteMovie} style={{"color":"red"}}/></td>
    </tr> 

  </tbody>
</table>
</div>
  </>;
}