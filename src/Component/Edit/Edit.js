import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'
import { useFormik } from 'formik';
import * as yup from 'yup';
import React ,{useEffect,useState}from 'react';
 import { useParams } from "react-router-dom"

 const journalValidationSchema = yup.object({

    year: yup
        .string()
        .required("Why not fill this name😅")
        .min(1, "need a longer name🤔"),
        volume: yup
        .string()
        .required("Why not fill this id😅")
        .min(4, "need a longer id🤔"),
    issue: yup
        .string()
        .required("Why not fill this poster😅")
        .min(4, "need a longer poster🤔"),
article: yup
        .number()
        .required("Why not fill this rating😅")
        .min(0, "need a bigger rating🤔").max(10),
    revised: yup
        .string()
        .required("Why not fill this summary😅")
        .min(20, "need a longer summary🤔"),
received: yup
        .string()
        .required("Why not fill this trailer😅")
        .min(4, "need a longer trailer🤔"),
        accepted: yup
        .string()
        .required("Why not fill this summary😅")
        .min(20, "need a longer summary🤔"),
published: yup
        .string()
        .required("Why not fill this trailer😅")
        .min(4, "need a longer trailer🤔"),
        abstract: yup
        .string()
        .required("Why not fill this summary😅")
        .min(20, "need a longer summary🤔"),
heading: yup
        .string()
        .required("Why not fill this trailer😅")
        .min(4, "need a longer trailer🤔"),
        keyword: yup
        .string()
        .required("Why not fill this summary😅")
        .min(20, "need a longer summary🤔"),
// reference: yup
//         .string()
//         .required("Why not fill this trailer😅")
//         .min(4, "need a longer trailer🤔")
})


export function Edit() {
  const {id}=useParams();
const [journal, setjournal] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/api/article/get/6447c51b8086c672212bcd5b" )
      .then((data) => data.json())
      .then((mv) => setjournal(mv));
  }, [id]);
  return journal? <EditMoviesForm journal={journal}/> : "loading";
  }
  export function EditMoviesForm({journal}){
    const { handleSubmit, values, handleChange, touched, handleBlur, errors } = useFormik({
        initialValues: {
            year: journal.year,
            volume: journal.volume,
            issue: journal.issue,
            article: journal.article,
            revised: journal.revised,
            received: journal.received,
            accepted: journal.accepted,
            published: journal.published,
            abstract: journal.abstract,
            heading: journal.heading,
            keyword: journal.keyword,
        
        },
        validationSchema: journalValidationSchema,
        onSubmit: (editMovieList) => {
            console.log('onSubmit', editMovieList)
            EditMovie(editMovieList)
        }
    })
    const navigate = useNavigate()
    const EditMovie = (editMovieList) => {
        fetch("http://localhost:4000/api/article/upd/6447c51b8086c672212bcd5b", {
            method: "PUT",
            body: JSON.stringify(editMovieList),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => navigate('/'))
            .catch((n) => console.log('error occurred' + n))
    };
    return <>

     <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
     
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
         
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
   
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
    
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <a class="nav-link">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                    
                            <a class="nav-link"  onClick={()=>navigate('/create')}>
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                             Create
                            </a>
                            <a class="nav-link" href="tables.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                           Edit
                            </a>
                        </div>
                    </div>
                
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4"  >Dashboard</h1>
       <Box onSubmit={handleSubmit} className="add-movie-form" component="form"  >
        <label for="w3review">YEAR:</label>                            <TextField
                name="year"
                value={values.year}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.year && errors.year}
                helperText={touched.year && errors.year ? errors.year : null}
                label="year" variant="outlined" />

         
                          
                          <label>VOLUME:</label>     

                <TextField   name="volume"
                value={values.volume}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.volume && errors.volume}
                helperText={touched.volume && errors.volume ? errors.volume : null}
                label="volume" variant="outlined" />
           
  <label for="w3review">ISSUE:</label>    
      
   <TextField
                name="issue"
                value={values.issue}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.issue && errors.issue}
                helperText={touched.issue && errors.issue ? errors.issue : null}
                label="issue" variant="outlined" />



<label for="w3review">ARTICLE.ID:</label>    
                               <TextField
                name="article"
                value={values.article}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.article && errors.article}
                helperText={touched.article && errors.article ? errors.article :null }
                label="article" variant="outlined" />                
<label for="w3review">REVISED DATE:</label>
                            <TextField
                name="revised"
                value={values.revised}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.revised && errors.revised}
                helperText={touched.revised && errors.revised ? errors.revised : null}
                label="revised" variant="outlined" />

<label for="w3review">RECEIVED DATE:</label>
                            <TextField
                name="received"
                value={values.received}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.received && errors.received}
                helperText={touched.received && errors.received ? errors.received : null}
                label="received" variant="outlined" />

<label for="w3review">ACCEPTED DATE:</label>
                            <TextField
                name="accepted"
                value={values.accepted}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.accepted && errors.accepted}
                helperText={touched.accepted && errors.accepted ? errors.accepted : null}
                label="accepted" variant="outlined" />

<label for="w3review">PUBLISHED DATE:</label>
                            <TextField
                name="published"
                value={values.published}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.published && errors.published}
                helperText={touched.published && errors.published ? errors.published : null}
                label="published" variant="outlined" />

<label for="w3review">HEADING</label>
                            <TextField
                name="heading"
                value={values.heading}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.heading && errors.heading}
                helperText={touched.heading && errors.heading ? errors.heading : null}
                label="heading" variant="outlined" />

                 <label for="w3review">ABSTRACT:</label>
  <TextField
    name="abstract"
    value={values.abstract}
    onBlur={handleBlur}
    onChange={handleChange}
    error={touched.abstract && errors.abstract}
    helperText={touched.abstract && errors.abstract ? errors.abstract : null}
    label="abstract" variant="outlined"
  
    multiline rows={6} cols="50"/>
                          


  <label for="w3review">KEYWORDS:</label>
  <TextField  name="keyword"
    value={values.keyword}
    onBlur={handleBlur}
    onChange={handleChange}
    error={touched.keyword && errors.keyword}
    helperText={touched.keyword && errors.keyword ? errors.keyword : null}
    label="keyword" variant="outlined"  multiline rows={6} cols="50"/>
                          

            
  {/* <label for="w3review">REFERENCE:</label> */}
{/* 
  <TextField name="reference"
    value={values.reference}
    onBlur={handleBlur}
    onChange={handleChange}
    error={touched.reference && errors.reference}
    helperText={touched.reference && errors.reference ? errors.reference : null}
    label="reference" variant="outlined"   multiline
rows={10} cols="50"/> */}
                          
    
            <Button type="Submit" variant="contained">Add Details</Button>
        </Box>

        </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>;
}