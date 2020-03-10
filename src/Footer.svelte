<style>
  .page-footer {
    margin-top: 50px;
    padding: 50px;
    background: var(--primary);
    color: #ccc;
    border-bottom-left-radius: var(--page-border-radius);
    border-bottom-right-radius: var(--page-border-radius);
  }

  .contact {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    line-height: 1.5;
  }

  .contact-me {
    flex: 1 0 100%;
    white-space: nowrap;
    margin-right: 16px;
  }

  .contact a {
    color: #ccc;
    margin-right: 16px;
    white-space: nowrap;
  }

  .contact a:hover {
    color: #fff;
  }

  .ga {
    font-size: 0.75em;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 500px) {
    .page-footer {
      padding: 10vw;
    }
  }

  @media only print {
    .page-footer a {
      color: #000;
      background: none;
    }

    .profiles {
      display: none;
    }
  }
</style>

<footer class="page-footer">
  <div class="contact">
    <div class="contact-me">Contact me at</div>
    <a href="mailto:philipp@jardas.de">
      <span class="fa fa-envelope" />
      philipp@jardas.de
    </a>
    <a href="https://www.xing.com/profile/Philipp_Jardas" class="profiles">
      <span class="fab fa-xing" />
      XING
    </a>
    <a href="http://de.linkedin.com/in/philippjardas" class="profiles">
      <span class="fab fa-linkedin" />
      LinkedIn
    </a>
    <a href="https://github.com/phjardas" class="profiles">
      <span class="fab fa-github" />
      GitHub
    </a>
    <a
      href="http://stackoverflow.com/users/469029/philipp-jardas"
      class="profiles">
      <span class="fab fa-stack-overflow" />
      Stack Overflow
    </a>
    <a href="http://twitter.com/phjardas" class="profiles">
      <span class="fab fa-twitter" />
      Twitter
    </a>
  </div>
  <div class="ga">This page uses Google Analytics.</div>
</footer>
