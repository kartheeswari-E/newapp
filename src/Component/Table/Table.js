import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'
import { useFormik } from 'formik';
import * as yup from 'yup';


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

export function Table() {
    const { handleSubmit, values, handleChange, touched, handleBlur, errors } = useFormik({
        initialValues: {
            year:"",
            volume:"",
            issue:"",
            article:"",
            revised:"",
            received:"",
            accepted:"",
            published:"",
            abstract:"",
            heading:"",
            keyword:"",
            // reference:"",
        
        },
        validationSchema:journalValidationSchema,
        onSubmit: (newJournalList) => {
            console.log('onSubmit', newJournalList)
            addJournal(newJournalList)
        }
    })
    const navigate = useNavigate()
    const addJournal = (newJournalList) => {
        fetch("http://localhost:4000/api/article", {
            method: "POST",
            body: JSON.stringify(newJournalList),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => navigate('/'))
            .catch((n) => console.log('error occurred' + n))
    };


    return <>
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
                          

            
  {/* <label for="w3review">REFERENCE:</label>

  <TextField name="reference"
    value={values.reference}
    onBlur={handleBlur}
    onChange={handleChange}
    error={touched.reference && errors.reference}
    helperText={touched.reference && errors.reference ? errors.reference : null}
    label="reference" variant="outlined"   multiline
rows={10} cols="50"/>
                           */}
    
            <Button type="Submit" variant="contained">Add Details</Button>
        </Box>
    </>;
}