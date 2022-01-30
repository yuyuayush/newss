import React from 'react';

const NewItems = (props) => {
    const {title,description,imageUrl,author,source,date,newsUrl}  = props
  return <div className=''  > 
      <div className="card" >
      {/* <
        div style = {
            {
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'
            }
        } > */}
  <img className="card-img-top" src={!imageUrl?"https:images.pexels.com/photos/9875788/pexels-photo-9875788.jpeg ?auto=compress&cs=tinysrgb&dpr=1&w=500" :imageUrl }  alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description} </p>
    <p className="card-text">{!author?"ayush":author} </p>
    <p className="card-text">{source} </p>
    <p className="card-text">{date} </p>
    <a href={newsUrl} target='_blank' className="btn btn-primary">read more </a>
  </div>
</div>
{/* </div> */}
  </div>;
};


export default NewItems;
