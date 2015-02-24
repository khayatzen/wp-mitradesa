<?php
function mitradesaFilterPost($txtfiltered) {

    if (strpos($txtfiltered, "[openmitradesa]") !== FALSE) {
        $content = preg_replace('/<p>\s*[(.*)]\s*<\/p>/i', "[$1]", $txtfiltered);
        $matchingText = '[openmitradesa]';
        $replacementText = getOpenmitradesaSync();
        $content = str_replace($matchingText, $replacementText, $content);

        $view.='<div id="openmitradesa-content">';
        $view.=$content;
        $view.='</div>';
        
        echo $view;
    }else {
        return $txtfiltered;
    }
}
function my_scripts_method() {
    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
    wp_enqueue_script( 'jquery');
}  
function mitradesaHeader() {    
    ?>
    <link rel="stylesheet" href="<?=MITRADESA_URL?>/css/frontend.style.css"/>
    <script src="<?=MITRADESA_URL?>/js/highcharts.js"></script>
    <script type="text/javascript">var mitradesa_url = '<?=  get_option('mitradesa_url')?>';</script>
    <script src="<?=MITRADESA_URL?>/js/build.chart.js"></script>
    <script type="text/javascript">
        jQuery(document).ready( function(){
            pekerjaanChart();
            jQuery("#statistikTabs ul li a").click(function(){
                jQuery("#statistikTabs ul li a").removeClass('selected');
                jQuery(this).addClass('selected');
            });
            jQuery("#pekerjaanChart").click(function(){
                pekerjaanChart();
            });
            jQuery("#pendidikanChart").click(function(){
                pendidikanChart();
            });
            jQuery("#agamaChart").click(function(){
                agamaChart();
            });
            jQuery("#jeniskelaminChart").click(function(){
                jeniskelaminChart();
            });
            jQuery("#perkawinanChart").click(function(){
                perkawinanChart();
            });
            jQuery("#statustinggalChart").click(function(){
                statustinggalChart();
            });
            jQuery("#piramidaChart").click(function(){
                piramidaChart();
            });
        })    
    </script>
    <?php
}
function getOpenmitradesaSync(){
    $view='<div id="statistikTabs">
        <span id="loading">Sedang memuat...</span>
	<ul>
		<li><a href="javascript:void(0)" id="pekerjaanChart" class="selected">Pekerjaan</a></li>
		<li><a href="javascript:void(0)" id="pendidikanChart">Pendidikan</a></li>
		<li><a href="javascript:void(0)" id="agamaChart">Agama</a></li>
		<li><a href="javascript:void(0)" id="jeniskelaminChart">Jenis Kelamin</a></li>
		<li><a href="javascript:void(0)" id="perkawinanChart">Perkawinan</a></li>
                <li><a href="javascript:void(0)" id="statustinggalChart">Status Tinggal</a></li>
                <li><a href="javascript:void(0)" id="piramidaChart">Piramida</a></li>
	</ul>        
	<div id="chartContainer"></div>        
</div>';
    echo $view;
    //echo '<div id="chartContainer" style="height: 400px"></div>​';
}
//Enable ini jika belum terpanggil pustaka jQuery di mesin wordpress
//add_action('wp_enqueue_scripts', 'my_scripts_method');

add_action('wp_head', 'mitradesaHeader');
add_filter('the_content', 'mitradesaFilterPost',11);
?>
