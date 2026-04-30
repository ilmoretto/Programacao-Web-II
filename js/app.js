$(function(){
    $('remover').click(function(e){
        e.preventDefault();

        let id = $(this).data('id');
        let name = $(this).data('name')

       /* alert(`ID: ${id}, Produto ${name}`)
       */

        Swal.fire({
            title: `Deseja exluir o produto ${name}?`,
            text: "Esta ação não é reversível!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Excluir",
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) Swal.fire({
              title: "Excluido!",
              text: `O produto ${name} foi excluído!`,
              icon: "success"
            });
          });

    })
})