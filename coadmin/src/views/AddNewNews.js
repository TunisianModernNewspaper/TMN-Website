import React, { useState, useEffect } from "react";
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import { Link } from "react-router-dom";
import {  Container,
          Button,
          Row, 
          Col,
          InputGroup,
          InputGroupAddon,
          InputGroupText,
          FormSelect,
          Breadcrumb,
          BreadcrumbItem,
          FormInput } from "shards-react";


const AddNewNews = () => {

  const [categories,setCategories] = useState([]);

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
  }, [])

  return(

  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="News Posts" className="text-sm-left" />
    </Row>
    
    {/* Components Navigation */}
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/News-management">News Management</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>New News</BreadcrumbItem>
    </Breadcrumb>

    <Row>
      {/* Editor */}

      <Col lg="12" md="12">
        <Editor />
      </Col>

      <Col lg="12" md="12">
        <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>Sub-Category</InputGroupText>
          </InputGroupAddon>
        <FormSelect>

        {categories &&
                categories.map((category) => (

          <option>{category.title}</option>
        ))}
        
        </FormSelect>
        </InputGroup>
        <div className="custom-file mb-3">
          <input type="file" className="custom-file-input" id="customFile2" />
          <label className="custom-file-label" htmlFor="customFile2">
            Choose images
          </label>
        </div>
        <InputGroup seamless className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>
              <i className="material-icons">person</i>
            </InputGroupText>
          </InputGroupAddon>
          <FormInput placeholder="Author" onChange={() => {}} />
        </InputGroup>
        <Button theme="accent" size="xl" className="ml-auto">
          <i className="material-icons">file_copy</i> Publish
        </Button>
      </Col>
      
    </Row>
  </Container>
  );
};

export default AddNewNews;
