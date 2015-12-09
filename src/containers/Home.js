import React from 'react';

export class Home extends React.Component {
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

    $('.checkbox').checkbox();
  }

  render() {
    return (
      <div>

        <div className="ui segment basic very padded">
          <h1>
            <img className="ui image medium centered" src="../static/img/logo2.png" alt=""/>
          </h1>
        </div>

        <div className="ui segment blue center aligned">
          <div className="ui huge left icon input transparent center aligned">
            <input type="text" placeholder="I want to learn..."/>
            <i className="search icon"> </i>
          </div>
        </div>

        <div className="ui grid">

          <div className="ui row">
            <div className="ui column three wide">


              <div className="ui row">
                <div className="ui column">
                  <div className="segment ui labeled dropdown icon button fluid">
                    <i className="child icon"></i>
                    <span className="text">Difficulty</span>
                    <div className="menu">
                      <div className="item">
                        <div className="ui green empty circular label"></div>
                        Beginner
                      </div>
                      <div className="item">
                        <div className="ui blue empty circular label"></div>
                        Intermediate
                      </div>
                      <div className="item">
                        <div className="ui yellow empty circular label"></div>
                        Experienced
                      </div>
                      <div className="item">
                        <div className="ui orange empty circular label"></div>
                        Expert
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ui segment">
                <h5 className="header"><i className="icon wait"></i>Length:</h5>
                <div className="ui checkbox">
                  <input type="checkbox" name="example"/>
                  <label>Very short (1 - 5 min)</label>
                </div>
                <div className="ui checkbox">
                  <input type="checkbox" name="example"/>
                  <label>Short (5 - 15 min)</label>
                </div>
                <div className="ui checkbox">
                  <input type="checkbox" name="example"/>
                  <label>Medium (15 - 30 min)</label>
                </div>
                <div className="ui checkbox">
                  <input type="checkbox" name="example"/>
                  <label>Long (30+ min)</label>
                </div>
              </div>


              <div className="ui segment fluid search multiple selection dropdown">
                <input type="hidden" name="country"/>
                <i className="dropdown icon"></i>
                <div className="default text">Language</div>
                <div className="menu">
                  <div className="item" data-value="us"><i className="gb flag"></i>EN</div>
                  <div className="item" data-value="ax"><i className="ax flag"></i>Aland Islands</div>
                  <div className="item" data-value="al"><i className="al flag"></i>Albania</div>
                  <div className="item" data-value="dz"><i className="dz flag"></i>Algeria</div>
                  <div className="item" data-value="as"><i className="as flag"></i>American Samoa</div>
                  <div className="item" data-value="ad"><i className="ad flag"></i>Andorra</div>
                  <div className="item" data-value="ao"><i className="ao flag"></i>Angola</div>
                  <div className="item" data-value="ai"><i className="ai flag"></i>Anguilla</div>
                </div>
              </div>

              <div className="ui grid">
                <div className="ui row">

                  <div className="ui column eleven wide">
                    <div className="ui segment dropdown  button fluid">
                      <span className="text">Sort by...</span>
                      <div className="menu">
                        <div className="item">
                          <div className="ui green empty circular label"></div>
                          Beginner
                        </div>
                        <div className="item">
                          <div className="ui blue empty circular label"></div>
                          Intermediate
                        </div>
                        <div className="item">
                          <div className="ui yellow empty circular label"></div>
                          Experienced
                        </div>
                        <div className="item">
                          <div className="ui orange empty circular label"></div>
                          Expert
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ui column five wide">
                    <button className="ui segment icon button large fluid">
                      <i className="long arrow up icon"></i>
                    </button>
                  </div>

                </div>
              </div>

            </div>


            <div className="ui column thirteen wide">

              <div className="ui link fluid cards">

                <div className="card fluid">
                  <div className="content">
                    <div className="center aligned">
                      <div className="ui label">
                        <i className="wait icon"></i>
                        Short
                      </div>
                      <div className="ui label orange">
                        Expert
                      </div>
                      <div className="ui label">
                        <div className="ui tiny star rating">
                        </div>
                        (3)
                      </div>
                    </div>
                  </div>
                  <div className="ui fluid image bordered">
                    <a className="ui left corner label">
                      <i className="newspaper icon"></i>
                    </a>
                    <img src="../static/img/mock1.png"/>
                  </div>
                  <div className="content">
                    <div className="header">CSS grid system</div>
                    <div className="meta">
                      <a>www.sitepoint.com</a>
                    </div>
                    <div className="description">
                      Introduction to grids. Learn to make grids with css.
                    </div>
                  </div>
                  <div className="extra content">
                    <div className="ui bottom primary fluid button">More details</div>
                  </div>
                </div>


                <div className="card fluid">
                  <div className="content">
                    <div className="center aligned">
                      <div className="ui label">
                        <i className="wait icon"></i>
                        Short
                      </div>
                      <div className="ui label green">
                        Easy
                      </div>
                      <div className="ui label">
                        <div className="ui tiny star rating">
                        </div>
                        (1)
                      </div>
                    </div>
                  </div>
                  <div className="ui fluid image bordered">
                    <a className="ui left corner label">
                      <i className="newspaper icon"></i>
                    </a>
                    <img src="../static/img/mock2.png"/>
                  </div>
                  <div className="content">
                    <div className="header">Things to avoid in css</div>
                    <div className="meta">
                      <a>www.medium.com</a>
                    </div>
                    <div className="description">
                      Simple css tips and trick that will make your life easier.
                    </div>
                  </div>
                  <div className="extra content">
                    <div className="ui bottom primary fluid button">More details</div>
                  </div>
                </div>

                <div className="card fluid">
                  <div className="content">
                    <div className="center aligned">
                      <div className="ui label">
                        <i className="wait icon"></i>
                        Long
                      </div>
                      <div className="ui label yellow">
                        Medium
                      </div>
                      <div className="ui label">
                        <div className="ui tiny star rating">
                        </div>
                        (2)
                      </div>
                    </div>
                  </div>
                  <div className="ui fluid image bordered">
                    <a className="ui left corner label">
                      <i className="youtube play icon"></i>
                    </a>
                    <img src="../static/img/mock3.png"/>
                  </div>
                  <div className="content">
                    <div className="header">CSS основи</div>
                    <div className="meta">
                      <a>www.telerikacademy.com.com</a>
                    </div>
                    <div className="description">
                      Основи на CSS. Селектори, цветове и размери.
                    </div>
                  </div>
                  <div className="extra content">
                    <div className="ui bottom primary fluid button">More details</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}