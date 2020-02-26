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
	        <div class="dropdown" v-if="isLogged">
              <button class="btn btn-navbar btn-default active dropdown-toggle" type="button" id="profileMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{ $t('navigation.miespacio') }} <span class="caret"></span>
              </button>
              <div class="dropdown-menu pull-right" aria-labelledby="profileMenu">
                  <a href="https://pro.redesvivas.org/anuncio/crear" class="dropdown-item">Crear una propuesta</a>
                  <a href="https://pro.redesvivas.org/evento/crear" class="dropdown-item">Crear un evento</a>

                  <div class="dropdown-divider"></div>
                  <a href="https://pro.redesvivas.org/perfil/crear" class="dropdown-item">Añadir nuevo perfil</a>
                  
              </div>
          </div>
	    		
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