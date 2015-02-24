<?php
/*
Plugin Name: Open Mitra Desa
Plugin URI: http://desamembangun.or.id
Description: Plugin untuk penyajian data desa makro yang dikelola dengan OpenMitraDesa
Author: Khayat
Version: 0.1
Author URI: http://khayat.wordpress.com
*/


define('MITRADESA_DIR', dirname(plugin_basename(__FILE__)));
define('MITRADESA_URL', get_option('siteurl').'/wp-content/plugins/' . MITRADESA_DIR);

/*################## Back End #################################*/
global $mitradesaPlugin;
$mitradesaPlugin = "0.1";
// action function for above hook
function mitradesa_add_pages() {
    // Add a new top-level menu (ill-advised):
    add_menu_page('Pengaturan Mitra Desa', 'Mitra Desa', 'manage_options', 'mitradesa_realtime', 'mitradesaRealtime',MITRADESA_URL.'/images/mitra-logo.png');

    // Add a submenu to the custom top-level menu:
    add_submenu_page('mitradesa_realtime', 'Pengaturan Sinkronisasi Otomatis/Realtime','Realtime Sync', 'manage_options', 'mitradesa_realtime', 'mitradesaRealtime');
    // Add a submenu to the custom top-level menu:
    add_submenu_page('mitradesa_realtime', 'Pengaturan Sinkronisasi Periodik','Periodic Sync', 'manage_options', 'mitradesa_periodic', 'mitradesaPeriodic');

    
}
function mitradesaRealtime(){
    echo '<div style="padding:10px;background:#464646;"><img src="'.MITRADESA_URL.'/images/logo-desamembangun.png"></div>';
    echo '<div class="icon32" id="icon-options-general"></div>';
    echo '<h2>Pengaturan - Sinkronisasi Realtime</h2>';
    if(isset($_POST['simpan'])){
       update_option('mitradesa_url',$_POST['mitradesa_url']);
       echo '<div id="message" class="updated below-h2"><p>Pengaturan Tersimpan!</p></div>';
    }
    $view='<p style="clear:both; padding:10px 0px 0px 100px;">';    
    $view.= '<form id="mitraForm" name="mitraForm" method="POST">
        <label style="font-weight:bold;display:block;">Alamat URL aplikasi OpenMitraDesa :</label>
        <input type="text" name="mitradesa_url" id="mitradesa_url" size="60" value="'.get_option('mitradesa_url').'">        
        <input id="simpan" class="button-primary" type="submit" accesskey="s" tabindex="5" value="Simpan" name="simpan">
        <small style="display:block;">Contoh: http://datadesa.melung.or.id</small>
        </form>';
    $view.='</p>';
    echo $view;
        
    
}
function mitradesaPeriodic(){
    echo '<div style="padding:10px;background:#464646;"><img src="'.MITRADESA_URL.'/images/logo-desamembangun.png"></div>';
    echo '<div class="icon32" id="icon-options-general"></div>';
    echo '<h2>Pengaturan - Sinkronisasi Periodic</h2>';
    echo '<div id="message" class="updated below-h2"><p>Maaf, fitur belum bisa digunakan karena dalam masa pengembangan</p></div>';
}

add_action('admin_menu', 'mitradesa_add_pages');// Hook for adding admin menus

include_once('frontend.mitradesa.php');
?>