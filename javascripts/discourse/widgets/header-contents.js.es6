import { createWidget } from "discourse/widgets/widget";
import hbs from "discourse/widgets/hbs-compiler";

createWidget("header-contents", {
  tagName: "div.contents.clearfix",
  template: hbs`
    <!-- {{home-logo attrs=attrs}} -->


    <div id="nav-main" class="navbar">
	    <div class="logo">
	      <a href="https://pro.redesvivas.org">
	        <img src="https://pro.redesvivas.org/dist/logo.png" alt="" class="logo" />
	      </a>
	    </div>

	    <button
	      class="navbar-toggler"
	      type="button"
	      data-toggle="collapse"
	      data-target="#navbarOne"
	      aria-controls="navbarOne"
	      aria-expanded="false"
	      aria-label="Toggle navigation"
	    >
	      <div class="bar1"></div>
	      <div class="bar2"></div>
	      <div class="bar3"></div>
	    </button>

	    <nav>
	      <div class="collapse navbar-collapse sub-menu-bar" id="navbarOne">
	        <!-- Hogar -->
	        <a id="board" class="btn btn-navbar btn-default active" href="https://pro.redesvivas.org/board"
	          >Hogar</a
	        >
	        
	        <!-- MiEspacio -->
	        <a  href="https://pro.redesvivas.org/aldea" class="btn btn-navbar btn-default active">Aldea</a>
	          
	        <!-- Connect -->
	        <a href="https://pro.redesvivas.org/conecta" class="btn btn-navbar btn-default active">Conexiones</a>

	        <!-- Discourse -->
	        <a href="https://encuentro.redesvivas.org/" class="btn btn-navbar btn-default active">Espacio de encuentro</a>

	        <!-- Mi Espacio -->
	        <a href="https://pro.redesvivas.org/perfil/view" class="btn btn-navbar btn-default active">Espacio de encuentro</a>
	    		
	    		<!-- Buttons Discourse -->
	    			<div class="panel clearfix">{{yield}}</div>
	    		<!-- . Buttons Discourse -->

	      </div>
	    </nav>
	    <!-- . navbar -->
	  </div>




	  <div class="header-espacioencuentro">
		    <div class="bg-default">
		      <img src="https://pro.redesvivas.org/static/bg-parallax-overlay-2.jpg" />
		      <div class="overlay-none"></div>
		      <h1>Conexiones</h1>
		    </div>
		    <section class="bg-gris">
		      <div class="row">
		        <!-- Header profile -->
		        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
		          <div class="diagonal-line gris h-0">
		            <svg
		              xmlns="http://www.w3.org/2000/svg"
		              viewBox="0 0 100 10"
		              preserveAspectRatio="none"
		            >
		              <polygon points="100 0 100 10 0 10" />
		            </svg>
		          </div>
		        </div>
		      </div>
		    </section>
		</div>




    {{#if attrs.topic}}
      {{header-topic-info attrs=attrs}}
    {{/if}}

  `
});