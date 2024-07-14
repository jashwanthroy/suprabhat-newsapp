import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcR-6u0uoqwYuxUxHBT1JbHfCjUeFurCyhGtlo2TDhF6eyNnF-DvB_LDrLpfCxSI1iGQ&usqp=CAU"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left :'90%',zIndex: '1'}}>{source}</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              More Info...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
