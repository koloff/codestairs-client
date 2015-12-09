import React from 'react';

export class Organize extends React.Component {

  componentDidMount() {
    $('.dropdown').dropdown({
      allowAdditions: true,
      useLabels: true
    });
  }

  render() {
    return (
      <div>
        <div className="ui very padded basic segment">
          <h2 className="ui header">
            <i className="sitemap icon"></i>
            <div className="content">
              <div className="title">Organize</div>
              <div className="sub header">Edit your resources, courses and programs</div>
            </div>
          </h2>
        </div>

        <div className="ui three fluid steps">
          <a className="step">
            <i className="file icon"></i>
            <div className="content">
              <div className="title">Resources</div>
              <div className="description">Add or edit resources and exercises</div>
            </div>
          </a>
          <a className="active step">
            <i className="unordered list icon"></i>
            <div className="content">
              <div className="title">Courses</div>
              <div className="description">Organize resources in courses</div>
            </div>
          </a>
          <a className="step">
            <i className="cubes icon"></i>
            <div className="content">
              <div className="title">Programs</div>
              <div className="description">Organize courses in complete programs</div>
            </div>
          </a>
        </div>

        <div className="ui segment">
          {this.props.children}
        </div>

      </div>
    );
  }
}