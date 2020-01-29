import { createWidget } from "discourse/widgets/widget";
import hbs from "discourse/widgets/hbs-compiler";

createWidget("header-contents", {
  tagName: "div.contents.clearfix",
  template: hbs`
    <!-- {{home-logo attrs=attrs}} -->


    <div id="nav-main" class="navbar">
	    <div class="logo">
	      <router-link :to="{ name: 'landing-view' }">
	        <img src="https://pro.redesvivas.org/dist/logo.png" alt="" class="logo" />
	      </router-link>
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
	        <a href="https://pro.redesvivas.org/conecta" class="btn btn-navbar btn-default active">Conecta</a>

	        <!-- Discourse -->
	        <a href="https://encuentro.redesvivas.org/" class="btn btn-navbar btn-default active">Encuentros</a>
	    		
	    		<!-- Buttons Discourse -->
	    			<div class="panel clearfix">{{yield}}</div>
	    		<!-- . Buttons Discourse -->

	      </div>
	    </nav>
	    <!-- . navbar -->
	  </div>




    {{#if attrs.topic}}
      {{header-topic-info attrs=attrs}}
    {{/if}}

  `
});