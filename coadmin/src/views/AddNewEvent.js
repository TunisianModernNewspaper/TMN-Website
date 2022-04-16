import React from "react";
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import RangeDatePicker from "../components/common/RangeDatePicker";
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
          FormInput,
          FormGroup
        } from "shards-react";


const AddNewEvent = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="Event Posts" className="text-sm-left" />
    </Row>
    
    {/* Components Navigation */}
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Dashboard</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to="/Events-management">Events Management</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>New Event</BreadcrumbItem>
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
          <option>Choose</option>
          <option>Sports</option>
          <option>Adventures</option>
          <option>Buisness</option>
        </FormSelect>
        </InputGroup>
        
        <FormGroup>
              <FormInput
                id="feInputLocation"
                placeholder="Location"
              />
            </FormGroup>
        </Col>


      <Col lg="12" md="12">
        
        <InputGroup seamless className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>
              <i className="material-icons">place</i>
            </InputGroupText>
          </InputGroupAddon>
          <FormInput placeholder="Hour" onChange={() => {}} />
        </InputGroup>

        {/* DatePicker */}

        <Col lg="12" md="12">
            <InputGroup className="mb-3">
                <RangeDatePicker/>
             </InputGroup>
        </Col>

        <Button theme="accent" size="xl" className="ml-auto">
          <i className="material-icons">file_copy</i> Publish
        </Button>
      </Col>
      
    </Row>
  </Container>
);

export default AddNewEvent;
