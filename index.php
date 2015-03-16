<?php include 'includes/overall/header.php' ?>
<?php include 'core/function.php' ?>
<?php include 'includes/map.php' ?>
  <div class="row">
  	<div class="col-xs-8" id="left">
    
      <h2>Bootstrap Google Maps Demo</h2>
      
     <div class="panel panel-default">
        <div class="panel-heading"><a href="">Omschrijving</a></div>
      </div>
      <p>
      <?php	
		echo get_omschrijving();
	  ?>
      </p>
      
      <hr>
      
      <div class="panel panel-default">
        <div class="panel-heading"><a href="">Coordinates</a></div>
      </div>
      <p>
      <?php	
		echo get_postcode();
	  ?>
	  <hr/>
	  <div id="content-window" style="width:100%;"></div>
      </p>
      
      <hr>
  </div>
</div>
<?php include 'includes/overall/footer.php' ?>