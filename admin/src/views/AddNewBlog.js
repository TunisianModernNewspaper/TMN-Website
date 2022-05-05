import React, {useState, useEffect} from "react";
import PageTitle from "../components/common/PageTitle";
import { Link, useHistory } from "react-router-dom";
import ReactQuill from "react-quill";

import {  Container,
          Button,
          Row, 
          Col,
          InputGroup,
          InputGroupAddon,
          InputGroupText,
          CardBody,
          Card,
          Form,
          FormSelect,
          Breadcrumb,
          BreadcrumbItem,
          FormInput } from "shards-react";


const AddNewBlog = () => {

  const [categories,setCategories] = useState([]);
  const [fileDataURL, setFileDataURL] = useState(null);

  const fetchData = () => {
    fetch("http://localhost:3000/api/categorys/allCategorys")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCategories(data)
      })
  }
 
  useEffect(() => {
    fetchData()
  }, []);

    const [title,setTitle]= useState('');
    const [content,setContent]= useState('');
    const [category,setCategory]= useState('');
    const [firstimage,setFirstImage]= useState('');
    const [secondimage,setSecondImage]= useState('');
    const [author,setAuthor]= useState('');
    const [isPending, setIsPending] = useState(false);
    const history= useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();

      /**const formData = new FormData()
        formData.append("title", title)
        formData.append("content", content)
        formData.append("category", category)
        formData.append("author", author)
        formData.append("firstimage", firstimage)
        formData.append("secondimage", secondimage)**/
        let formData = {'title':title, 'content':content,'category':category,'author':author,'image':firstimage,'image2':secondimage};
        alert(JSON.stringify(formData))
        

  
      fetch('http://localhost:3000/api/blogs/addblog', {
        method: 'POST',
        body: JSON.stringify(formData)
      }).then(() => {
        console.log('new blog added');
        setIsPending(true);
        history.go(-1);
      })
      
    }
  return(
  
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>
    

    {/* Components Navigation */}
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/Blogs-management">Blogs Management</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>New Blog</BreadcrumbItem>
    </Breadcrumb>
    <Row Form>
      {/* Editor */}
      <Col lg="12" md="12">
      <form onSubmit={handleSubmit}>

        <Card small className="mb-3">
        <CardBody>
          <Form className="add-new-post">
            <FormInput size="lg" className="mb-3" placeholder="Your Title" 
                  required={true}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} />
            <ReactQuill className="add-new-post__editor mb-1"
                  required={true}
                  value={content}
                  onChange={setContent}
            />
          </Form>
        </CardBody>
     </Card>


      <Col lg="12" md="12">
        <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>Sub-Category</InputGroupText>
          </InputGroupAddon>
        <FormSelect required={true}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
        {categories &&
                categories.map((category) => (

          <option>{category.title}</option>
        ))}
        </FormSelect>
        </InputGroup>
        <div className="custom-file mb-3">
          <input type="file" className="custom-file-input" id="customFile2" 
                    required={true}
                    onChange={(e) => setFirstImage(e.target.files[0])} />
          <label className="custom-file-label" htmlFor="customFile2">
            Choose first image
          </label>
        </div>
        <div className="custom-file mb-3">
          <input type="file" className="custom-file-input" id="customFile2"
                    required={true}
                    onChange={(e) => setSecondImage(e.target.files[0])} />
          <label className="custom-file-label" htmlFor="customFile2">
            Choose second image
          </label>
        </div>

        <InputGroup seamless className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>
              <i className="material-icons">person</i>
            </InputGroupText>
          </InputGroupAddon>
          <FormInput placeholder="Author"           
                    required={true}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} />
        </InputGroup>
        { !isPending && <Button theme="accent" size="xl" className="ml-auto" type="submit">
          <i className="material-icons">file_copy</i> Publish
        </Button>}
        { isPending && <Button theme="accent" size="xl" className="ml-auto" type="submit">
          <i className="material-icons">file_copy</i> Publishing...
        </Button>}

        
      </Col>
    </form>
    </Col>
    </Row>
  </Container>
);
};


export default AddNewBlog;

