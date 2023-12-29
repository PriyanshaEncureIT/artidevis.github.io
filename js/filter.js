

     $(document).ready(function(){

        $("#filter_btn").click(function(){

          $("#filter").removeClass('d-none');
          $("#filter").addClass('d-flex');
          $('#filter_btn').removeClass('d-inline');
          $('#filter_btn').addClass('d-none');
          $('#filter_open').removeClass('d-none');
        });

        $("#filter_open").click(function(){

          $("#filter").removeClass('d-flex');
          $("#filter").addClass('d-none ');
          $('#filter_btn').removeClass('d-none');
          $('#filter_btn').addClass('d-inline');
          $('#filter_open').addClass('d-none');
        });
      });
