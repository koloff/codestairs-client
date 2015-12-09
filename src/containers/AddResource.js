import React from 'react';

export class AddResource extends React.Component {

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
            <i className="file icon"></i>
            <div className="content">
              Add resource
              <div className="sub header">Add and describe programming tutorial or exercise</div>
            </div>
          </h2>
        </div>

        <div className="ui blue very padded segment">
          <div className="ui left icon action input fluid big">
            <input type="text" placeholder="link-to-resource.com"/>
            <i className="world icon"></i>
            <button className="ui blue button"> Find</button>
          </div>

          <div className="ui secondary segment">

            <form className="ui form">
              <h4 className="ui dividing header">Resource details</h4>

              <div className="ui grid container stackable">
                <div className="ui row">
                  <div className="ui column eleven wide">
                    <div className="field">
                      <label>Title</label>
                      <div className="field">
                        <input type="text" name="shipping[first-name]" />
                      </div>
                    </div>

                    <div className="two fields">
                      <div className="field">
                        <label>Language</label>
                        <div className="ui fluid search selection dropdown">
                          <input type="hidden" name="country">
                            <i className="dropdown icon"></i>
                            <div className="default text">Select Country</div>
                            <div className="menu">
                              <div className="item" data-value="uk"><i className="gb flag"></i>English</div>
                              </div>
                            </input>
                          </div>
                      </div>
                      <div className="field">
                        <label>Type</label>
                        <div className="ui fluid search selection dropdown">
                          <input type="hidden" name="country">
                            <i className="dropdown icon"></i>
                            <div className="default text">Select type</div>
                            <div className="menu">
                              <div className="item" data-value="uk"><i className="newspaper icon"></i>Article</div>
                            </div>
                          </input>
                        </div>
                      </div>
                    </div>

                    <div className="two fields">
                      <div className="field">
                        <label>Language</label>
                        <div className="ui fluid search selection dropdown">
                          <input type="hidden" name="country">
                            <i className="dropdown icon"></i>
                            <div className="default text">Select Country</div>
                            <div className="menu">
                              <div className="item" data-value="uk"><i className="icon child orange"></i>Experienced</div>
                            </div>
                          </input>
                        </div>
                      </div>
                      <div className="field">
                        <label>Language</label>
                        <div className="ui fluid search selection dropdown">
                          <input type="hidden" name="country">
                            <i className="dropdown icon"></i>
                            <div className="default text">Select Country</div>
                            <div className="menu">
                              <div className="item" data-value="uk"><i className="icon wait"></i>Short (5 - 15 min)</div>
                            </div>
                          </input>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className="ui column five wide center aligned">
                    <div className="ui segment">
                    <img className="ui centered image" src="../static/img/mock1.png"/>
                  </div>
                  </div>
                </div>
              </div>

              <div className="field">
                <label>Brief description</label>
                <textarea rows="2"></textarea>
              </div>

              <div className="ui field">
                <label>Tags</label>
                <div className="ui field fluid search multiple selection dropdown">

                  <input type="hidden" name="country"/>
                  <i className="dropdown"></i>
                  <div className="default text">Add tags</div>
                  <div className="menu">
                    <div className="item" data-value="af">asdsad</div>
                    <div className="item" data-value="ax">asda</div>
                    <div className="item" data-value="al">asd</div>
                    <div className="item" data-value="dz">asdadad</div>
                    <div className="item" data-value="as">asdasdsad</div>
                    <div className="item" data-value="ad">asdsadsad</div>
                    <div className="item" data-value="ao">sdsadsa</div>
                    <div className="item" data-value="ai">asdsadsad</div>
                  </div>
                </div>
              </div>

              <div className="ui button primary fluid" tabIndex="0">Add resource</div>

            </form>


          </div>
        </div>

      </div>
    );
  }
}