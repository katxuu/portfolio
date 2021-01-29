import React, { Component } from 'react'

export default class AnnArbor extends Component {
  render () {
    return (
      <div>
        {/* top bar */}
        <div className="top-bar">
          <h1>City of Ann arbor</h1>
          <p><a href="home">Home </a><a href="portfolio">/ Portfolio</a> / Ann Arbor </p>
        </div>


        <div className="container main-container">
        <h3 className="uppercase container mainYellow">Spring 2019 | UX Researcher </h3>
          <div className="col-md-6">

            <h4>Research Goals</h4>
            <ol>(a) Understand what sustainability means to elderly Ann Arbor citizens</ol>
            <ol>(b) Refine current information channels or create new ones that effectively addresses senior citizens’ needs </ol>
            </div>
          <div className="col-md-6">
            <h4>Team</h4>
            <p>Fawad Karim, Anas Morsi, Elle Konrad, Mustapha Fadel</p>
            <h4>Tools</h4>
            <p>Powerpoint, Photoshop, Otter.ai, Canva</p>
            <p>&nbsp;</p>

            </div>

            {/*recommendation*/}

            <div align="center">
            <h2>. . .</h2>
            <h1 className="uppercase">Recommendations</h1>
            <h3 className="mainYellow">(1) Consolidate all sustainability information onto one easily accessible, already in use platform</h3>
            <p>If possible, this information should have a subscription feature to ensure automatic, on time delivery to senior citizens. Examples include: Ann Arbor city website or MLive. </p>

            <h3 className="mainYellow">(2) Facilitate collaboration between the youth and senior citizens</h3>
            <p>So both parties can leave an impact on long term sustainability efforts. Implementation example includes: monthly sustainability youth events.</p>
            </div>

            {/*methodology*/}

            <div align="center">

            <div>
            <h2>. . .</h2>
            <h1 className="uppercase">Research Methods</h1>

            {/*collaging*/}
            <div className="col-md-5">
            <h3 className="mainYellow" align="left">Collaging</h3>
            <p align="left">Anchor sustainability focus by looking at ideas identified from collage. The purpose of using this method is to gauge initial knowledge, feelings, and context of sustainability in a manner that initializes conversation for interview. </p>
            <p>&nbsp;</p>
            <h3 className="mainYellow" align="left">Senior Citizen Interviews</h3>
            <p align="left">Prompt and probe into sustainability focus by asking objective interview questions to learn more about subjective experiences and feelings. The purpose of using this method is to gain more in depth knowledge on personal experiences.</p>
            </div>
            </div>

            {/*interviews*/}
            <p>&nbsp;</p>
            <div className="col-md-7">
            <img src="/images/ann_arbor/interview.png" className="img-responsive" alt="" width="600"/>
            <p>&nbsp;</p>
            </div>
            </div>

            {/*initial findings*/}
            <h2 align="center">. . .</h2>
            <h1 className="uppercase" align="center">Initial Findings from Data Collection</h1>

            <div className="col-md-6">
            <img src="/images/ann_arbor/card1.png" className="img-responsive" alt="" height="300" width="560"/>
            </div>

            <div className="col-md-6">
            <img src="/images/ann_arbor/card2.png" className="img-responsive" alt="" height="300" width="560"/>
            </div>

            <div align="center" className="col-md-6">
            <img src="/images/ann_arbor/card3.png" width="560" className="img-responsive" alt="" height="300" width="560"/>
            </div>

            <div align="center" className="col-md-6">
            <img src="/images/ann_arbor/blank.png" width="560" className="img-responsive" alt="" height="300" width="560"/>
            </div>

            {/*analysis methods*/}
            <h2 align="center">. . .</h2>
            <h1 className="uppercase" align="center">Analysis Methods</h1>

            <div className="col-md-3">
            <h3 className="mainYellow">(1) Affinity Map</h3>
            <p>This first method of analysis was done by revisiting the interview transcripts and notes to identify ideas that each participant had and organizing this into sticky notes then identifying larger themes among these notes. About 11 themes came out of this analysis that were then grouped into 3 larger groups that helped inform the insight statements.</p>
            <p>&nbsp;</p>
            <h4>Themes Identified</h4>
            <p>(a) Worry about past pollution and optimism for the future because of today’s youth.</p>
            <p>(b) Current sustainable practices and how sustainability should be an equitable practice that encompasses everyone.</p>
            <p>(c) Senior citizens’ feelings of inability to help with current sustainability efforts and issues of awareness of how they can.</p>
            </div>

            <div className="col-md-9">
            <img src="/images/ann_arbor/affinity.png" className="img-responsive" alt="" />
            <img src="/images/ann_arbor/blank2.png" className="img-responsive" alt="" />
            </div>

            <div className="col-md-3">
            <h3 className="mainYellow">(2) Matrix</h3>
            <p>This method was applied because there were three variables that could be graphed together from the affinity mapping activity. These were: the desire to act, satisfaction with current information accessibility, and type of currently used information channel. Creating a matrix from these three variables allowed identification of key relationships and more themes that aided creation of insight statements and recommendations.</p>
            <p>&nbsp;</p>
            <h4>Themes Identified</h4>
            <p>(a) Newspapers and direct mail served all but one interviewee as an information channel.</p>
            <p>(b) Participants had medium - high desire to act on sustainability efforts.</p>
            <p>(c) Participants who had lower satisfaction with current information accessibility received information from 2 or more platforms, while participants who had higher satisfaction received information from only 1 platform.</p>
            </div>

            <div className="col-md-9">
            <img src="/images/ann_arbor/blank3.png" className="img-responsive" alt="" />
            <img src="/images/ann_arbor/matrix.png" className="img-responsive" alt="" />
            <img src="/images/ann_arbor/blank2.png" className="img-responsive" alt="" />
            </div>

            <div className="col-md-3">
            <h3 className="mainYellow">(3) Personas</h3>
            <p>With data gathered from interviews, collaging, and the other two analysis methods, 2 personas were created as generalizations of feelings and thoughts of the types of users we interviewed. The personas were created by identifying spectra that came out of reoccuring themes and then graphing participants by their relation to the ends of the spectrum.</p>
            <p>&nbsp;</p>
            </div>

            <div className="col-md-9">
            <p>&nbsp;</p>
            <img src="/images/ann_arbor/persona1.png" className="img-responsive" alt=""/>
            <p>&nbsp;</p>
            <img src="/images/ann_arbor/persona2.png" className="img-responsive" alt="" />
            <p>&nbsp;</p>
            </div>

            {/*analysis methods*/}
            <div align="center">
            <h2>. . .</h2>
            <h1 className="uppercase">Insights</h1>
            <h3 className="mainYellow">Insight #1: information should be delivered on one platform</h3>
            <img src="/images/ann_arbor/insight1.png" className="img-responsive" alt="" />
            <h3 className="mainYellow">Insight #2: seniors want a chance to create lasting impact by utilizing youth</h3>
            <img src="/images/ann_arbor/insight2.png" className="img-responsive" alt="" width="810"/>

            </div>



            </div>
            </div>



    );
  }
}
