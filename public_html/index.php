<?php
/*grab current directory*/
$CURRENT_DIR = __DIR__;

/*set page title here*/
/*$PAGE_TITLE = "MY PAGE TITLE";*/
/*load head-utils.php*/
require_once("php/template/utilities.php");
?>

<body>

<div class="container">
	<header>
		<?php require_once("php/template/header.php"); ?>
	</header>

	<div class="row">
		<section class="side-panel col-md-3">
			<?php require_once("php/template/side-panel.php"); ?>
		</section>

		<section class="main-content col-md-9">
			<?php require_once("php/portfolio.php")?>
			<?php require_once("php/resume.php")?>
			<?php require_once("php/about-me.php")?>
			<?php require_once("php/contact.php")?>
		</section>
	</div>

	<footer class="footer">
		<?php require_once("php/template/footer.php"); ?>
	</footer>
</div><!-- .container -->



</body>
</html>