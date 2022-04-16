import { Breadcrumbs, Anchor } from '@mantine/core';


function PageIndicator(props) {

    const items = [
        { title: props.category, href: '/'+props.category },
        { title: props.subcategory, href: '/'+props.category+'/'+props.subcategory },
      ].map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));
      
    return ( 
        <div style={{marginBottom:'20px'}}>
            <Breadcrumbs separator="→">{items}</Breadcrumbs>
        </div>
     );
}

export default PageIndicator;