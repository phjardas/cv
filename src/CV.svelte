<script>
  import Header from './Header.svelte';
  import Columns from './Columns.svelte';
  import Footer from './Footer.svelte';
  import Layout from './Layout.svelte';
  import Title from './Title.svelte';
  import Subtitle from './Subtitle.svelte';
</script>

<style>
  .qr {
    width: 100px;
    height: 100px;
    display: none;
    fill: #000000;
  }

  .floating-action {
    position: absolute;
    right: 56px;
    bottom: -28px;
    width: 56px;
    height: 56px;
    font-size: 24px;
    border-radius: 100%;
    background-color: var(--secondary);
    color: var(--secondary-text);
    text-align: center;
    padding-top: 15px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
    z-index: 100;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 200ms linear, color 200ms linear, box-shadow 200ms linear;
  }

  .floating-action:hover {
    background-color: var(--primary-light);
    color: var(--primary-text);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.14), 0 8px 16px rgba(0, 0, 0, 0.28);
  }

  @media only screen and (max-width: 500px) {
    .floating-action {
      right: 24px;
    }
  }

  .sidebar :global(em) {
    display: block;
    font-style: normal;
    font-size: 0.8rem;
    color: #757575;
    line-height: 1.2;
  }

  @media only print {
    .floating-action {
      display: none;
    }

    .qr {
      display: inline-block;
    }

    .sidebar :global(em) {
      color: #000;
      background: none;
    }
  }
</style>

<Layout>
  <Header>
    <Columns>
      <div slot="main">
        <Title>Philipp Jardas</Title>
        <Subtitle>Agile Full-Stack Software Engineer</Subtitle>
      </div>
      <svg slot="aside" xmlns="http://www.w3.org/2000/svg" viewBox="11 11 231 231" class="qr">
        <g>
          <path
            d="M 11,11 l 11,0 0,11 -11,0 z M 22,11 l 11,0 0,11 -11,0 z M 33,11 l 11,0 0,11 -11,0 z M 44,11 l 11,0 0,11 -11,0 z M 55,11 l 11,0 0,11 -11,0 z M
            66,11 l 11,0 0,11 -11,0 z M 77,11 l 11,0 0,11 -11,0 z M 110,11 l 11,0 0,11 -11,0 z M 143,11 l 11,0 0,11 -11,0 z M 165,11 l 11,0 0,11 -11,0 z M
            176,11 l 11,0 0,11 -11,0 z M 187,11 l 11,0 0,11 -11,0 z M 198,11 l 11,0 0,11 -11,0 z M 209,11 l 11,0 0,11 -11,0 z M 220,11 l 11,0 0,11 -11,0 z M
            231,11 l 11,0 0,11 -11,0 z M 11,22 l 11,0 0,11 -11,0 z M 77,22 l 11,0 0,11 -11,0 z M 99,22 l 11,0 0,11 -11,0 z M 132,22 l 11,0 0,11 -11,0 z M 165,22
            l 11,0 0,11 -11,0 z M 231,22 l 11,0 0,11 -11,0 z M 11,33 l 11,0 0,11 -11,0 z M 33,33 l 11,0 0,11 -11,0 z M 44,33 l 11,0 0,11 -11,0 z M 55,33 l 11,0
            0,11 -11,0 z M 77,33 l 11,0 0,11 -11,0 z M 110,33 l 11,0 0,11 -11,0 z M 165,33 l 11,0 0,11 -11,0 z M 187,33 l 11,0 0,11 -11,0 z M 198,33 l 11,0 0,11
            -11,0 z M 209,33 l 11,0 0,11 -11,0 z M 231,33 l 11,0 0,11 -11,0 z M 11,44 l 11,0 0,11 -11,0 z M 33,44 l 11,0 0,11 -11,0 z M 44,44 l 11,0 0,11 -11,0
            z M 55,44 l 11,0 0,11 -11,0 z M 77,44 l 11,0 0,11 -11,0 z M 99,44 l 11,0 0,11 -11,0 z M 132,44 l 11,0 0,11 -11,0 z M 165,44 l 11,0 0,11 -11,0 z M
            187,44 l 11,0 0,11 -11,0 z M 198,44 l 11,0 0,11 -11,0 z M 209,44 l 11,0 0,11 -11,0 z M 231,44 l 11,0 0,11 -11,0 z M 11,55 l 11,0 0,11 -11,0 z M
            33,55 l 11,0 0,11 -11,0 z M 44,55 l 11,0 0,11 -11,0 z M 55,55 l 11,0 0,11 -11,0 z M 77,55 l 11,0 0,11 -11,0 z M 121,55 l 11,0 0,11 -11,0 z M 143,55
            l 11,0 0,11 -11,0 z M 165,55 l 11,0 0,11 -11,0 z M 187,55 l 11,0 0,11 -11,0 z M 198,55 l 11,0 0,11 -11,0 z M 209,55 l 11,0 0,11 -11,0 z M 231,55 l
            11,0 0,11 -11,0 z M 11,66 l 11,0 0,11 -11,0 z M 77,66 l 11,0 0,11 -11,0 z M 99,66 l 11,0 0,11 -11,0 z M 110,66 l 11,0 0,11 -11,0 z M 121,66 l 11,0
            0,11 -11,0 z M 143,66 l 11,0 0,11 -11,0 z M 165,66 l 11,0 0,11 -11,0 z M 231,66 l 11,0 0,11 -11,0 z M 11,77 l 11,0 0,11 -11,0 z M 22,77 l 11,0 0,11
            -11,0 z M 33,77 l 11,0 0,11 -11,0 z M 44,77 l 11,0 0,11 -11,0 z M 55,77 l 11,0 0,11 -11,0 z M 66,77 l 11,0 0,11 -11,0 z M 77,77 l 11,0 0,11 -11,0 z
            M 99,77 l 11,0 0,11 -11,0 z M 121,77 l 11,0 0,11 -11,0 z M 143,77 l 11,0 0,11 -11,0 z M 165,77 l 11,0 0,11 -11,0 z M 176,77 l 11,0 0,11 -11,0 z M
            187,77 l 11,0 0,11 -11,0 z M 198,77 l 11,0 0,11 -11,0 z M 209,77 l 11,0 0,11 -11,0 z M 220,77 l 11,0 0,11 -11,0 z M 231,77 l 11,0 0,11 -11,0 z M
            121,88 l 11,0 0,11 -11,0 z M 11,99 l 11,0 0,11 -11,0 z M 22,99 l 11,0 0,11 -11,0 z M 33,99 l 11,0 0,11 -11,0 z M 44,99 l 11,0 0,11 -11,0 z M 55,99 l
            11,0 0,11 -11,0 z M 77,99 l 11,0 0,11 -11,0 z M 88,99 l 11,0 0,11 -11,0 z M 99,99 l 11,0 0,11 -11,0 z M 110,99 l 11,0 0,11 -11,0 z M 132,99 l 11,0
            0,11 -11,0 z M 154,99 l 11,0 0,11 -11,0 z M 176,99 l 11,0 0,11 -11,0 z M 198,99 l 11,0 0,11 -11,0 z M 220,99 l 11,0 0,11 -11,0 z M 22,110 l 11,0
            0,11 -11,0 z M 33,110 l 11,0 0,11 -11,0 z M 44,110 l 11,0 0,11 -11,0 z M 55,110 l 11,0 0,11 -11,0 z M 88,110 l 11,0 0,11 -11,0 z M 99,110 l 11,0
            0,11 -11,0 z M 110,110 l 11,0 0,11 -11,0 z M 154,110 l 11,0 0,11 -11,0 z M 165,110 l 11,0 0,11 -11,0 z M 176,110 l 11,0 0,11 -11,0 z M 187,110 l
            11,0 0,11 -11,0 z M 231,110 l 11,0 0,11 -11,0 z M 33,121 l 11,0 0,11 -11,0 z M 55,121 l 11,0 0,11 -11,0 z M 66,121 l 11,0 0,11 -11,0 z M 77,121 l
            11,0 0,11 -11,0 z M 99,121 l 11,0 0,11 -11,0 z M 121,121 l 11,0 0,11 -11,0 z M 165,121 l 11,0 0,11 -11,0 z M 187,121 l 11,0 0,11 -11,0 z M 231,121 l
            11,0 0,11 -11,0 z M 11,132 l 11,0 0,11 -11,0 z M 22,132 l 11,0 0,11 -11,0 z M 33,132 l 11,0 0,11 -11,0 z M 55,132 l 11,0 0,11 -11,0 z M 66,132 l
            11,0 0,11 -11,0 z M 88,132 l 11,0 0,11 -11,0 z M 110,132 l 11,0 0,11 -11,0 z M 143,132 l 11,0 0,11 -11,0 z M 165,132 l 11,0 0,11 -11,0 z M 187,132 l
            11,0 0,11 -11,0 z M 198,132 l 11,0 0,11 -11,0 z M 209,132 l 11,0 0,11 -11,0 z M 220,132 l 11,0 0,11 -11,0 z M 22,143 l 11,0 0,11 -11,0 z M 44,143 l
            11,0 0,11 -11,0 z M 55,143 l 11,0 0,11 -11,0 z M 77,143 l 11,0 0,11 -11,0 z M 88,143 l 11,0 0,11 -11,0 z M 121,143 l 11,0 0,11 -11,0 z M 132,143 l
            11,0 0,11 -11,0 z M 143,143 l 11,0 0,11 -11,0 z M 165,143 l 11,0 0,11 -11,0 z M 176,143 l 11,0 0,11 -11,0 z M 187,143 l 11,0 0,11 -11,0 z M 99,154 l
            11,0 0,11 -11,0 z M 121,154 l 11,0 0,11 -11,0 z M 154,154 l 11,0 0,11 -11,0 z M 187,154 l 11,0 0,11 -11,0 z M 198,154 l 11,0 0,11 -11,0 z M 209,154
            l 11,0 0,11 -11,0 z M 220,154 l 11,0 0,11 -11,0 z M 231,154 l 11,0 0,11 -11,0 z M 11,165 l 11,0 0,11 -11,0 z M 22,165 l 11,0 0,11 -11,0 z M 33,165 l
            11,0 0,11 -11,0 z M 44,165 l 11,0 0,11 -11,0 z M 55,165 l 11,0 0,11 -11,0 z M 66,165 l 11,0 0,11 -11,0 z M 77,165 l 11,0 0,11 -11,0 z M 99,165 l
            11,0 0,11 -11,0 z M 132,165 l 11,0 0,11 -11,0 z M 143,165 l 11,0 0,11 -11,0 z M 154,165 l 11,0 0,11 -11,0 z M 165,165 l 11,0 0,11 -11,0 z M 176,165
            l 11,0 0,11 -11,0 z M 198,165 l 11,0 0,11 -11,0 z M 209,165 l 11,0 0,11 -11,0 z M 11,176 l 11,0 0,11 -11,0 z M 77,176 l 11,0 0,11 -11,0 z M 110,176
            l 11,0 0,11 -11,0 z M 121,176 l 11,0 0,11 -11,0 z M 132,176 l 11,0 0,11 -11,0 z M 143,176 l 11,0 0,11 -11,0 z M 154,176 l 11,0 0,11 -11,0 z M
            176,176 l 11,0 0,11 -11,0 z M 187,176 l 11,0 0,11 -11,0 z M 198,176 l 11,0 0,11 -11,0 z M 209,176 l 11,0 0,11 -11,0 z M 231,176 l 11,0 0,11 -11,0 z
            M 11,187 l 11,0 0,11 -11,0 z M 33,187 l 11,0 0,11 -11,0 z M 44,187 l 11,0 0,11 -11,0 z M 55,187 l 11,0 0,11 -11,0 z M 77,187 l 11,0 0,11 -11,0 z M
            99,187 l 11,0 0,11 -11,0 z M 143,187 l 11,0 0,11 -11,0 z M 154,187 l 11,0 0,11 -11,0 z M 165,187 l 11,0 0,11 -11,0 z M 176,187 l 11,0 0,11 -11,0 z M
            209,187 l 11,0 0,11 -11,0 z M 231,187 l 11,0 0,11 -11,0 z M 11,198 l 11,0 0,11 -11,0 z M 33,198 l 11,0 0,11 -11,0 z M 44,198 l 11,0 0,11 -11,0 z M
            55,198 l 11,0 0,11 -11,0 z M 77,198 l 11,0 0,11 -11,0 z M 99,198 l 11,0 0,11 -11,0 z M 110,198 l 11,0 0,11 -11,0 z M 121,198 l 11,0 0,11 -11,0 z M
            132,198 l 11,0 0,11 -11,0 z M 143,198 l 11,0 0,11 -11,0 z M 154,198 l 11,0 0,11 -11,0 z M 198,198 l 11,0 0,11 -11,0 z M 209,198 l 11,0 0,11 -11,0 z
            M 11,209 l 11,0 0,11 -11,0 z M 33,209 l 11,0 0,11 -11,0 z M 44,209 l 11,0 0,11 -11,0 z M 55,209 l 11,0 0,11 -11,0 z M 77,209 l 11,0 0,11 -11,0 z M
            99,209 l 11,0 0,11 -11,0 z M 132,209 l 11,0 0,11 -11,0 z M 154,209 l 11,0 0,11 -11,0 z M 187,209 l 11,0 0,11 -11,0 z M 11,220 l 11,0 0,11 -11,0 z M
            77,220 l 11,0 0,11 -11,0 z M 99,220 l 11,0 0,11 -11,0 z M 121,220 l 11,0 0,11 -11,0 z M 132,220 l 11,0 0,11 -11,0 z M 143,220 l 11,0 0,11 -11,0 z M
            209,220 l 11,0 0,11 -11,0 z M 231,220 l 11,0 0,11 -11,0 z M 11,231 l 11,0 0,11 -11,0 z M 22,231 l 11,0 0,11 -11,0 z M 33,231 l 11,0 0,11 -11,0 z M
            44,231 l 11,0 0,11 -11,0 z M 55,231 l 11,0 0,11 -11,0 z M 66,231 l 11,0 0,11 -11,0 z M 77,231 l 11,0 0,11 -11,0 z M 99,231 l 11,0 0,11 -11,0 z M
            165,231 l 11,0 0,11 -11,0 z M 187,231 l 11,0 0,11 -11,0 z M 198,231 l 11,0 0,11 -11,0 z " />
        </g>
      </svg>
    </Columns>
    <a class="floating-action" href="./Philipp Jardas en.pdf" target="_blank" title="Download and print my CV as PDF">
      <span class="fa fa-print" />
    </a>
  </Header>
  <Columns>
    <div slot="main">
      <h2>Employment History</h2>
      <div>
        <div>
          <h3>
            Lead Software Engineer
            <small>at</small>
            Schütze AG
          </h3>
          <p>
            <small>October 2018 – now in Hanau, Germany</small>
          </p>
          <p>
            Senior architect and lead developer in a cross-functional group of teams with approx. 60 people involved in the development of an administrative
            software for the Berlin administration.
          </p>
          <p>I've founded the Rhein-Main office in Hanau and am currently recruiting a team of talented professionals.</p>
          <p>
            <small>React, Node.js, TypeScript, Java, Spring Boot, Electron, Docker, Microservices, Self-Contained Systems</small>
          </p>
        </div>
        <div>
          <h3>
            Lead Software Engineer
            <small>at</small>
            ChemSquare
          </h3>
          <p>
            <small>June 2018 – August 2018 in Frankfurt, Germany</small>
          </p>
          <div>
            <p>
              Lead developer in a start-up developing a
              <strong>B2B marketplace for the quality management of chemical ingredients</strong>
              .
            </p>
          </div>
          <small>
            <div>
              <p>React, TypeScript, AWS AppSync, AWS Lambda, GraphQL, Apollo, Gatsby, Algolia</p>
            </div>
          </small>
        </div>
        <div>
          <h3>
            Senior Software Consultant
            <small>at</small>
            PENTASYS
          </h3>
          <p>
            <small>October 2017 – May 2018 in Frankfurt, Germany</small>
          </p>
          <div>
            <p>
              Senior Front-End Developer for the booking and fulfillment platform of the biggest travel technology provider in Europe with more than 200k active
              users. Development of the internal central Angular framework and design system for more than 100 developers.
            </p>
          </div>
          <small>
            <div>
              <p>Angular, TypeScript, Bootstrap</p>
            </div>
          </small>
        </div>
        <div>
          <h3>
            Senior Software Engineer
            <small>at</small>
            bd4travel
          </h3>
          <p>
            <small>December 2014 – October 2017 in Frankfurt, Germany</small>
          </p>
          <div>
            <p>
              <strong>Intelligent personalization for travel.</strong>
              Award winning start-up providing travel websites around the world with user behavior analytics, personalized recommenders, sorting algorithms and
              prediction tools.
            </p>
            <p>
              Member of an agile development team with shared responsibilities for all aspects of product development: feature engineering, architecture,
              databases, backend and frontend development, machine learning, QA, devops, scaling and maintenance.
            </p>
          </div>
          <small>
            <div>
              <p>Java, JavaScript, node.js, ElasticSearch, Hadoop, HBase, Spark, RabbitMQ, MongoDB, AngularJS, Swagger, Docker</p>
            </div>
          </small>
        </div>
        <div>
          <h3>
            Head of Development
            <small>at</small>
            yocondo
          </h3>
          <p>
            <small>December 2013 – November 2014 in Düsseldorf and Gründau</small>
          </p>
          <div>
            <p>
              Founding member of a start-up that created a
              <strong>personalized shopping assistant</strong>
              .
            </p>
            <p>Architect, software engineer, leader of a team of two developers and interns, Scrum master.</p>
          </div>
          <small>
            <div>
              <p>node.js, CoffeeScript, RabbitMQ, ElasticSearch, WebSockets, MongoDB, AngularJS, Java, Spring Batch, Spring Integration, Tomcat.</p>
              <p>Deployment to the Cloud with Vagrant, Puppet, AppFog, Heroku, AWS and Azure.</p>
            </div>
          </small>
        </div>
        <div>
          <h3>
            Senior Consultant
            <small>at</small>
            OPITZ Consulting Deutschland
          </h3>
          <p>
            <small>June 2011 – June 2014 in Berlin and Bad Homburg, Germany</small>
          </p>
          <div>
            <p>Consultant and software engineer for the central operations software of TNT Innight GmbH based on Eclipse RCP with a Spring backend.</p>
            <p>Development of the operational software for Kombiverkehr (logistics).</p>
            <p>Member of the Competence Center Agile Development: replicator for agile principles, organization of agile retreats und coding dojos.</p>
          </div>
          <small>
            <div>
              <p>Spring, JPA, Hibernate, MyBatis, Oracle Database, Eclipse RCP, OSGi, Activiti, BPMN, Maven, Git</p>
            </div>
          </small>
        </div>
        <div>
          <h3>
            Senior Software Engineer
            <small>at</small>
            Schütze Consulting
          </h3>
          <p>
            <small>July 2009 – May 2011 in Berlin, Germany</small>
          </p>
          <div>
            <p>
              Design, architecture and development of a administrative software for the Berlin administration based on JavaEE. Approx. 800 active users, scope
              approx. 8000 person days.
            </p>
            <p>Consulting for the IT service center of Berlin.</p>
          </div>
          <small>
            <div>
              <p>
                JPA, TopLink, Hibernate, Oracle Database, PostgreSQL, Oracle AS, JBoss, Spring, Spring Integration, Spring Batch, Spring WebFlow, Spring
                Security, Eclipse, Maven, Ant, CVS, SVN
              </p>
            </div>
          </small>
        </div>
        <div>
          <h3>
            Senior Software Engineer
            <small>at</small>
            ]init[
          </h3>
          <p>
            <small>October 2007 – June 2009 in Berlin, Germany</small>
          </p>
          <div>
            <p>Concept and development of a SOA platform for G2C and G2G communications in Abu Dhabi. Single sign-on and identity management. Technologies:</p>
            <p>Requirement analysis and technical project management for a social network and a classifieds portal for the German state department.</p>
            <p>Technical consulting for the development of XMeld, the standardized XML format for the communication between German registry offices.</p>
          </div>
          <small>
            <div>
              <p>BEA WebLogic, BEA AquaLogic, BEA Portal, Spring, Beehive, EJB3, pring MVC, Hibernate, PostgreSQL, JBoss.</p>
            </div>
          </small>
        </div>
        <div>
          <h3>
            Software Engineer
            <small>at</small>
            Schütze Consulting
          </h3>
          <p>
            <small>January 2004 – October 2007 in Berlin, Germany</small>
          </p>
          <div>
            <p>Development of JavaEE-based web applications for the Berlin administration.</p>
            <p>Responsible for build and release management, continuous integration and QA.</p>
          </div>
          <small>
            <div>
              <p>Struts, AJAX, Oracle Application Server, JBoss, Spring, EJB2, Oracle DB, Toplink, PostgreSQL, Hibernate, Jasper Reports.</p>
            </div>
          </small>
        </div>
      </div>
    </div>
    <div slot="aside" class="sidebar">
      <h2>Profile</h2>
      <p>
        I've been developing software with Java and JavaScript for the last 20 years. I'm passionate about software startups, eCommerce, agile methodologies,
        software quality, devops and scalability.
      </p>
      <h2>Education</h2>
      <p>
        I grew up in Lörrach and have studied Information Technology and Electrical Engineering in Zürich, where I graduated as a Bachelor of Science (ETH) with
        a grade of 5.11 out of 6.
      </p>
      <h2>Technologies</h2>
      <p>JavaScript (node.js), TypeScript, Kotlin, Java</p>
      <p>Spring Framework: Boot, WebMVC, Data, Integration, Security, Batch</p>
      <p>HTTP, REST, SOAP, API-Design, Swagger</p>
      <p>WebSockets, socket.io, RabbitMQ</p>
      <p>React, Redux, Vue, Angular, Progressive Web Apps, Single Page Apps</p>
      <p>MongoDB, ElasticSearch, SQL, Firebase, Aerospike, Hadoop, HBase, Spark, DynamoDB</p>
      <p>AWS, Docker (swarm), Kubernetes, Microservices, Serverless Computing, Ansible</p>
      <p>GraphQL, Apollo, AppSync</p>
      <h2>Hobbies</h2>
      <p>
        I host the Meetup
        <a href="https://main-kinzig-nerds.de">Main-Kinzig-Nerds</a>
        .
      </p>
      <p>
        I play Ultimate Frisbee with
        <a href="http://www.eintracht-frankfurt.de/sportarten/ultimate-frisbee.html">Eintracht Frankfurt</a>
        .
      </p>
      <p>
        I'm a
        <a href="http://feuerwehr-niedergründau.de/">voluntary firefighter</a>
        .
      </p>
      <p>I am the conductor of the youth choir in our local parish.</p>
      <p>
        I have been playing the piano and the bass in several bands from
        <a href="https://soundcloud.com/szanaterria">metal</a>
        to jazz.
      </p>
      <h2>Languages</h2>
      <p>
        German: native
        <br />
        English: fluently
      </p>
      <h2>Pet Projects</h2>
      <p>
        <strong>
          <a href="https://github.com/phjardas/tabidisco">Tabidisco</a>
        </strong>
        <br />
        A jukebox for kids powered by Raspberry Pi.
        <br />
        <em>Raspberry Pi, electronics, woodworks, reactive server with WebSockets and RxJs, front-end with React and Redux.</em>
      </p>
      <p>
        <strong>
          <a href="https://github.com/phjardas/serious-retro/">Serious Retrospective</a>
        </strong>
        <br />
        Online tool for retrospectives with distributed teams.
        <br />
        <em>Firebase, React, Redux, progressive web app.</em>
      </p>
      <p>
        <strong>
          <a href="https://github.com/phjardas/drivr/">drivr</a>
        </strong>
        <br />
        Track your car expenses on your mobile phone.
        <br />
        <em>Firebase, Vue, Vuex, progressive web app.</em>
      </p>
      <p>
        <strong>
          <a href="https://github.com/phjardas/synchrotron/">synchrotron</a>
        </strong>
        <br />
        Synchronize music with devices, for Linux.
        <br />
        <em>TypeScript.</em>
      </p>
      <p>
        <strong>
          <a href="https://github.com/phjardas/swarm-traefik-demo">swarm-traefik-demo</a>
        </strong>
        <br />
        Demonstration of a cluster deployment with Docker Swarm Mode and Træfɪk.
        <br />
        <em>Docker, obviously.</em>
      </p>
      <p>
        <em>
          This is an excerpt of my side projects on
          <a href="https://github.com/phjardas">GitHub</a>
          .
        </em>
      </p>
    </div>
  </Columns>
  <Footer />
</Layout>
