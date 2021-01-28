import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render () {
    return (
      <div>
        <section className="box-intro">
          <div className="table-cell">
            <h1 className="box-headline letters rotate-2">
              <span className="box-words-wrapper">
                <b className="is-visible">hi!</b>
                <b>&nbsp;&nbsp;I'm&nbsp;&nbsp;Katie.</b>
              </span>
		        </h1>
            <h5>I enjoy solving problems and meeting new people</h5>
          </div>

          <div className="mouse">
            <div className="scroll"></div>
          </div>
        </section>
        <div className="portfolio-div">
          <div className="portfolio">
            <div className="no-padding portfolio_container">

              {/*single work*/}
              <div className="col-md-3 col-sm-6  consulting ux">
                <Link to="/biscuits" className="portfolio_item">
                  <img src="/images/biscuits/logo2.png" className="img-responsive" width="1000" length="1000" alt="" />
                  <div className="portfolio_item_hover">
                    <div className="portfolio-border clearfix">
                      <div className="item_info">
                        <span>Beer City Dog Biscuits</span>
                        <em>Consulting / UX</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/*end single work*/}

              {/*single work*/}
              <div className="col-md-3 col-sm-6 photography">
                <Link to="/spain" className="portfolio_item">
                <img src="/images/spain/cover.png" className="img-responsive" width="1000" length="1000" alt="" />
                  <div className="portfolio_item_hover">
                    <div className="portfolio-border clearfix">
                      <div className="item_info">
                        <span>Spain</span>
                        <em>Photography</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/*end single work*/}

              {/*single work*/}
              <div className="col-md-6 col-sm-12 ux new_ideas">
                <Link to="/connected" className="portfolio_item">
                <img src="/images/connected/cover.png" className="img-responsive" width="1000" length="1000" alt="" />
                  <div className="portfolio_item_hover">
                    <div className="portfolio-border clearfix">
                      <div className="item_info">
                        <span>ConnectEd</span>
                        <em>UX / New Ideas</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/*end single work*/}

              {/*single work*/}
              <div className="col-md-3 col-sm-6 new_ideas">
                <Link to="/greener-dining" className="portfolio_item">
                <img src="/images/greener_dining/cover.png" className="img-responsive" width="1000" length="1000" alt="" />
                  <div className="portfolio_item_hover">
                    <div className="portfolio-border clearfix">
                      <div className="item_info">
                        <span>GreenerDining</span>
                        <em>New Ideas</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/*end single work*/}

              {/*single work*/}
              <div className="col-md-3 col-sm-6 photography">
                <Link to="/india" className="portfolio_item">
                <img src="/images/india/cover.png" className="img-responsive" width="1000" length="1000" alt="" />
                  <div className="portfolio_item_hover">
                    <div className="portfolio-border clearfix">
                      <div className="item_info">
                        <span>India</span>
                        <em>Photography</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/*end single work*/}

              {/*single work*/}
              <div className="col-md-6 col-sm-12 ux consulting">
                <Link to="/ann-arbor" className="portfolio_item">
                <img src="/images/ann_arbor/cover.png" className="img-responsive" width="1000" length="1000" alt="" />
                  <div className="portfolio_item_hover">
                    <div className="portfolio-border clearfix">
                      <div className="item_info">
                        <span>City of Ann Arbor</span>
                        <em>UX / Consulting</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/*end single work*/}

              {/*single work*/}
              <div className="col-md-3 col-sm-6 photography">
                <Link to="/michigan" className="portfolio_item">
                <img src="/images/michigan/cover.png" className="img-responsive" width="1000" length="1000" alt="" />
                  <div className="portfolio_item_hover">
                    <div className="portfolio-border clearfix">
                      <div className="item_info">
                        <span>Michigan</span>
                        <em>Photography</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/*end single work*/}

              {/*single work*/}
              <div className="col-md-3 col-sm-6 consulting">
                <Link to="/newsletter" className="portfolio_item">
                <img src="/images/newsletter/cover.png" className="img-responsive" width="1000" length="1000" alt="" />
                  <div className="portfolio_item_hover">
                    <div className="portfolio-border clearfix">
                      <div className="item_info">
                        <span>E-Newsletter</span>
                        <em>Consulting</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/*end single work*/}

              {/*single work*/}
              <div className="col-md-3 col-sm-6 consulting">
                <Link to="/accelerator" className="portfolio_item">
                <img src="/images/accelerator/cover.png " className="img-responsive" width="1000" length="1000" alt="" />
                  <div className="portfolio_item_hover">
                    <div className="portfolio-border clearfix">
                      <div className="item_info">
                        <span>Local Accelerator</span>
                        <em>Consulting</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/*end single work*/}

              {/*single work*/}
              <div className="col-md-3 col-sm-6 photography">
                <Link to="/chicago" className="portfolio_item">
                <img src="/images/chicago/cover.png" className="img-responsive" width="1000" length="1000" alt="" />
                  <div className="portfolio_item_hover">
                    <div className="portfolio-border clearfix">
                      <div className="item_info">
                        <span>Chicago</span>
                        <em>Photography</em>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/*end single work*/}
            </div>
            {/* end portfolio_container*/}
          </div>
          {/*   portfolio*/}
        </div>
      </div>
    );
  }
}
