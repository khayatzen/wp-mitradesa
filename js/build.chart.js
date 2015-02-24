function pekerjaanChart(){
        jQuery("#chartContainer").css('height','1500px');
        var options = {
                chart: {
                    renderTo: 'chartContainer',
                    defaultSeriesType: 'bar'
                },
                title: {
                    text: 'STATISTIK PENDUDUK MENURUT JENIS PEKERJAAN'
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Penduduk'
                    }
                },
                series: []
            };   
        
        
            var cat = [];
            var seri = new Array();
            jQuery.ajax({
              url: mitradesa_url+'/api/statistik/pekerjaan/',
              type: "GET",
              dataType: 'jsonp',
              beforeSend: function() {jQuery("#loading").show();},
              complete: function() {jQuery("#loading").hide();},
              success: function(json){
                  //alert(data.pendidikan);
                  var series = {
                        name: 'Jumlah penduduk',
                        data: []
                  };
                  jQuery.each(json, function(i,item){
                      options.xAxis.categories.push(item.pekerjaan);
                      series.data.push(parseFloat(item.jumlah_penduduk));                      
                  });
                  options.series.push(series);
                  // Create the chart
                  var chart = new Highcharts.Chart(options);                 
                  
              }
            });
    }
    function pendidikanChart(){
        jQuery("#chartContainer").css('height','400px');
        var options = {
                chart: {
                    renderTo: 'chartContainer',
                    defaultSeriesType: 'bar'
                },
                title: {
                    text: 'STATISTIK PENDUDUK MENURUT TINGKAT PENDIDIKAN'
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Penduduk'
                    }
                },
                series: []
            };   
        
        
            var cat = [];
            var seri = new Array();
            jQuery.ajax({
              url: mitradesa_url+'/api/statistik/pendidikan/',
              type: "GET",
              dataType: 'jsonp',
              beforeSend: function() {jQuery("#loading").show();},
              complete: function() {jQuery("#loading").hide();},
              success: function(json){
                  //alert(data.pendidikan);
                  var series = {
                        name: 'Jumlah penduduk',
                        data: []
                  };
                  jQuery.each(json, function(i,item){
                      options.xAxis.categories.push(item.pendidikan);
                      series.data.push(parseFloat(item.jumlah_penduduk));                      
                  });
                  options.series.push(series);
                  // Create the chart
                  var chart = new Highcharts.Chart(options);                 
                  
              }
            });
    }
    function agamaChart(){
        jQuery("#chartContainer").css('height','400px');
        var options = {
                chart: {
                    renderTo: 'chartContainer',
                    defaultSeriesType: 'bar'
                },
                title: {
                    text: 'STATISTIK PENDUDUK MENURUT AGAMA'
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Penduduk'
                    }
                },
                series: []
            };   
        
        
            var cat = [];
            var seri = new Array();
            jQuery.ajax({
              url: mitradesa_url+'/api/statistik/agama/',
              type: "GET",
              dataType: 'jsonp',
              beforeSend: function() {jQuery("#loading").show();},
              complete: function() {jQuery("#loading").hide();},
              success: function(json){
                  //alert(data.pendidikan);
                  var series = {
                        name: 'Jumlah penduduk',
                        data: []
                  };
                  jQuery.each(json, function(i,item){
                      options.xAxis.categories.push(item.agama);
                      series.data.push(parseFloat(item.jumlah_penduduk));                      
                  });
                  options.series.push(series);
                  // Create the chart
                  var chart = new Highcharts.Chart(options);                 
                  
              }
            });
    }
    function jeniskelaminChart(){
        jQuery("#chartContainer").css('height','300px');
        var options = {
                chart: {
                    renderTo: 'chartContainer',
                    defaultSeriesType: 'column'
                },
                title: {
                    text: 'STATISTIK PENDUDUK MENURUT JENIS KELAMIN'
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Penduduk'
                    }
                },
                series: []
            };   
        
        
            var cat = [];
            var seri = new Array();
            jQuery.ajax({
              url: mitradesa_url+'/api/statistik/jenisKelamin/',
              type: "GET",
              dataType: 'jsonp',
              beforeSend: function() {jQuery("#loading").show();},
              complete: function() {jQuery("#loading").hide();},
              success: function(json){
                  //alert(data.pendidikan);
                  var series = {
                        name: 'Jumlah penduduk',
                        data: []
                  };
                  jQuery.each(json, function(i,item){
                      options.xAxis.categories.push(item.jenis_kelamin);
                      series.data.push(parseFloat(item.jumlah_penduduk));                      
                  });
                  options.series.push(series);
                  // Create the chart
                  var chart = new Highcharts.Chart(options);                 
                  
              }
            });
    }
    function perkawinanChart(){
        jQuery("#chartContainer").css('height','300px');
        var options = {
                chart: {
                    renderTo: 'chartContainer',
                    defaultSeriesType: 'column'
                },
                title: {
                    text: 'STATISTIK PENDUDUK MENURUT STATUS PERKAWINAN'
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Penduduk'
                    }
                },
                series: []
            };   
        
        
            var cat = [];
            var seri = new Array();
            jQuery.ajax({
              url: mitradesa_url+'/api/statistik/perkawinan/',
              type: "GET",
              dataType: 'jsonp',
              beforeSend: function() {jQuery("#loading").show();},
              complete: function() {jQuery("#loading").hide();},
              success: function(json){
                  //alert(data.pendidikan);
                  var series = {
                        name: 'Jumlah penduduk',
                        data: []
                  };
                  jQuery.each(json, function(i,item){
                      options.xAxis.categories.push(item.status_kawin);
                      series.data.push(parseFloat(item.jumlah_penduduk));                      
                  });
                  options.series.push(series);
                  // Create the chart
                  var chart = new Highcharts.Chart(options);                 
                  
              }
            });
    }
    function statustinggalChart(){
        jQuery("#chartContainer").css('height','300px');
        var options = {
                chart: {
                    renderTo: 'chartContainer',
                    defaultSeriesType: 'column'
                },
                title: {
                    text: 'STATISTIK PENDUDUK MENURUT STATUS TINGGAL'
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: {
                        text: 'Jumlah Penduduk'
                    }
                },
                series: []
            };   
        
        
            var cat = [];
            var seri = new Array();
            jQuery.ajax({
              url: mitradesa_url+'/api/statistik/statusTinggal/',
              type: "GET",
              dataType: 'jsonp',
              beforeSend: function() {jQuery("#loading").show();},
              complete: function() {jQuery("#loading").hide();},
              success: function(json){
                  //alert(data.pendidikan);
                  var series = {
                        name: 'Jumlah penduduk',
                        data: []
                  };
                  jQuery.each(json, function(i,item){
                      options.xAxis.categories.push(item.status_tinggal);
                      series.data.push(parseFloat(item.jumlah_penduduk));                      
                  });
                  options.series.push(series);
                  // Create the chart
                  var chart = new Highcharts.Chart(options);                 
                  
              }
            });
    }
    function piramidaChart(){
        jQuery("#chartContainer").css('height','500px');
        var options = {
                chart: {
                    renderTo: 'chartContainer',
                    type: 'bar'
                },
                title: {
                    text: 'PIRAMIDA PENDUDUK MENURUT KELOMPOK UMUR'
                },
                xAxis: [{
                            categories: [],
                            reversed: false
                        }, 
                        { // mirror axis on right side
                            opposite: true,
                            reversed: false,
                            categories: [],
                            linkedTo: 0
                        }],
//                xAxis: {
//                            categories: []                            
//                       },
                yAxis: {
                            title: {
                                text: null
                            },
                            labels: {
                                formatter: function(){
                                    return (Math.abs(this.value));
                                }
                            },
                            min: 0,
                            max: 0
                        },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                tooltip: {
                    formatter: function(){
                        return '<b>'+ this.series.name +', age '+ this.point.category +'</b><br/>'+
                            'Population: '+ Highcharts.numberFormat(Math.abs(this.point.y), 0);
                    }
                },
                series: []                
            };           
        
            
            jQuery.ajax({
              url: mitradesa_url+'/api/statistik/piramidaPenduduk/',
              type: "GET",
              dataType: 'jsonp',
              beforeSend: function() {jQuery("#loading").show();},
              complete: function() {jQuery("#loading").hide();},
              success: function(json){
                  //alert(data.pendidikan);
                  var series = [{
                                 name: 'Laki-Laki',
                                 data: []
                                },
                                {
                                 name: 'Perempuan',  
                                 data: []
                                }
                               ];
                  jQuery.each(json, function(item,value){
                      if(item == 'kelompok_umur'){
                          jQuery.each(value, function(i,v){                              
                              //alert(v);
                              options.xAxis[0].categories.push(v);
                              options.xAxis[1].categories.push(v);
                          });
                      }else if(item == 'max_umur'){
                          options.yAxis.min=parseFloat(value)*parseInt(-1);
                          options.yAxis.max=parseFloat(value);                          
                      }
                      else if(item == 'piramida'){
                          jQuery.each(value, function(i,v){
                              if(i=='laki'){                                  
                                  jQuery.each(v, function(j,k){                                      
                                      series[0].data.push(parseFloat(k));
                                  })                                  
                              }else if(i=='perempuan'){
                                  jQuery.each(v, function(j,k){
                                      series[1].data.push(parseFloat(k));
                                  }) 
                              }                              
                          });
                      }
                      
                      //alert(i)
                      //alert(item)
                      //options.xAxis[0].categories.push(item.kelompok_umur);
                      //series.data.push(parseFloat(item.jumlah_penduduk));                      
                  });
                  options.series.push(series[0]);
                  options.series.push(series[1]);
                  //alert(series[1].data);
                  // Create the chart
                  var chart = new Highcharts.Chart(options);                 
                  
              }
            });
    }