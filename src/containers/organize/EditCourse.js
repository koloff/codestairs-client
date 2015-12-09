import React from 'react';

export class EditCourse extends React.Component {
  componentDidMount() {
    $('.dropdown').dropdown({
      allowAdditions: true,
      useLabels: true
    });
  }

  render() {
    console.log(this.props.params);

    return (
      <div>
        <div className="ui very padded basic segment">
          <h2 className="ui header">
            <i className="edit icon"></i>
            <div className="content">
              <div className="title">Edit course</div>
              <div className="sub header">Add, remove and rearrange resources. Edit details.</div>
            </div>
          </h2>
        </div>

        <div className="ui blue segment">

          <h3>Course details</h3>
          <div className="ui secondary segment">
            <div className="ui form">
              <div className="field">
                <label>Name</label>
                <input type="text"/>
              </div>
              <div className="field">
                <label>Brief description</label>
                <textarea rows="2">Learn the basics of CSS. Get familiar with selectors, colors, layouts, etc. Learn how to make grids.</textarea>
              </div>
            </div>
          </div>

          <h3>Resources in the course</h3>
          <div className="ui segment secondary">

            <div className="ui action input fluid">
              <div className="ui label middle floated left">Add resource:</div>
              <input type="text" placeholder="Search resources..." />
                <select className="ui compact selection dropdown">
                  <option value="all">All</option>
                  <option selected="" value="articles">Articles</option>
                  <option value="products">Products</option>
                </select>
                <div type="submit" className="ui button primary">Search</div>
            </div>

            <div className="ui card green fluid link">
              <div className="content">
                <button className="ui red right floated icon button">
                  <i className="icon remove"></i>
                </button>
                <div className="header"><a href="">CSS basics</a></div>
                <div className="meta">www.medium.com</div>
              </div>
            </div>

            <div className="ui card green fluid link">
              <div className="content">
                <button className="ui red right floated icon button">
                  <i className="icon remove"></i>
                </button>
                <div className="header"><a href="">CSS selectors</a></div>
                <div className="meta">www.telerikacademy.com</div>
              </div>
            </div>

            <div className="ui card yellow fluid link">
              <div className="content">
                <button className="ui red right floated icon button">
                  <i className="icon remove"></i>
                </button>
                <div className="header"><a href="">CSS layoult</a></div>
                <div className="meta">www.telerikacademy.com</div>
              </div>
            </div>

            <div className="ui card orange fluid link">
              <div className="content">
                <button className="ui red right floated icon button">
                  <i className="icon remove"></i>
                </button>
                <div className="header"><a href="">CSS grids</a></div>
                <div className="meta">www.sitepoint.com</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}