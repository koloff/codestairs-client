import React from 'react';

export class OrganizeCourses extends React.Component {

  componentDidMount() {
    $('.dropdown').dropdown({
      allowAdditions: true,
      useLabels: true
    });

    $('.rating')
      .rating({
        initialRating: 4,
        maxRating: 5
      });
  }

  render() {
    return (
      <div>
        <button className="ui primary button fluid">
          <i className="add circle icon large inverted"></i>
          Add new course
        </button>

        <div className="ui segment card fluid">
          <div className="content">
            <div className="ui right floated tiny star rating"></div>

            <div className="header">
              <button className="ui circular icon basic  button">
                <i className="icon edit large"></i>
              </button>
              <a href="#">JavaScript basics</a>
            </div>
            <div className="description">
              <p>Learn the JS basics. Get familiar with variables, values, conditionals, loops, arrays etc.</p>
            </div>
          </div>
          <div className="ui extra content">

            <div className="ui segment relaxed divided list">
              <div className="item">
                <i className="large video play middle aligned icon"></i>
                <div className="content">
                  <a className="header" href="#">Org/Semantic-UI async</a>
                  <div className="description">Updated 10 mins ago
                  </div>
                </div>
              </div>
              <div className="item">
                <i className="large video play middle aligned icon"></i>
                <div className="content">
                  <a className="header">Semantic-Org/Semantic-UI-Docs</a>
                  <div className="description">Updated 22 mins ago</div>
                </div>
              </div>
              <div className="item">
                <i className="large browser middle aligned icon"></i>
                <div className="content">
                  <a className="header">Semantic-Org/Semantic-UI-Meteor</a>
                  <div className="description">Updated 34 mins ago</div>
                </div>
              </div>
            </div>

            <a className="ui centered like">
              <i className="chevron down icon"></i>
              5 resources
            </a>
          </div>
        </div>

        <div className="ui segment card fluid">
          <div className="content">
            <div className="ui right floated tiny star rating"></div>

            <div className="header">
              <button className="ui circular icon basic button">
                <i className="icon edit large"></i>
              </button>
              <a href="#">HTML</a>
            </div>
            <div className="description">
              <p>Semantics, tables, headers etc...</p>
            </div>
          </div>
          <div className="ui extra content">

            <div className="ui segment relaxed divided list">
              <div className="item">
                <i className="large video play middle aligned icon"></i>
                <div className="content">
                  <a className="header" href="#">Part 1</a>
                  <div className="description">Updated 10 mins ago
                  </div>
                </div>
              </div>
              <div className="item">
                <i className="large video play middle aligned icon"></i>
                <div className="content">
                  <a className="header">Part 2</a>
                  <div className="description">Updated 22 mins ago</div>
                </div>
              </div>
            </div>

            <a className="ui centered like">
              <i className="chevron down icon"></i>
              5 resources
            </a>
          </div>
        </div>


      </div>
    );
  }
}