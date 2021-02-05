import { createWidget } from "discourse/widgets/widget";
import hbs from "discourse/widgets/hbs-compiler";

createWidget("header-contents", {
  tagName: "div.contents.clearfix",
  template: hbs`
    <!-- {{home-logo attrs=attrs}} -->


    <div id="nav-main" class="navbar">
	    <div class="logo">
	      <a href="https://redesvivas.org">
	        <img src="https://redesvivas.org/dist/logo.png" alt="" class="logo" />
	      </a>
	    </div>

	    <button
	    	id="navbar-toggler"
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
	    <script>
				$("#navbar-toggler").on("click", function() {
				    $(this).toggleClass("active");
				});
			</script>

	    <nav>
	      <div class="collapse navbar-collapse sub-menu-bar" id="navbarOne">
	        <!-- Hogar -->
	        <a id="board" class="btn btn-navbar btn-default active" href="https://redesvivas.org/board"
	          >Hogar</a
	        >
	        
	        <!-- Aldea -->
			<a  href="https://redesvivas.org/aldea" class="btn btn-navbar btn-default active">Aldea</a>
			
			<!-- Comunidad -->
	        <a  href="https://redesvivas.org/comunidad" class="btn btn-navbar btn-default active">Comunidad</a>
	          
	        <!-- Connect -->
	        <a href="https://redesvivas.org/conecta" class="btn btn-navbar btn-default active">Conexiones</a>

	        <!-- Mi Espacio -->
	        <a href="https://redesvivas.org/perfil/view" class="btn btn-navbar btn-default active">Mi espacio</a>
	    		
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