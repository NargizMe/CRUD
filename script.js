$(document).ready(function(){
    const people=[
        {
            first:'Mark',
            last:'Otto',
            handle:'@mdo'
        },
        {
            first:'Jacob',
            last:'Thornton',
            handle:'@fat'
        },
        {
            first:'Lary',
            last:'the Bird',
            handle:'@twitter'
        }
    ];

    // load data from people array
    let color, no=0;
    people.map(person=>{
        $('table').append(
            `<tr ${no%2!==0 ? color='#dee2e6' : color='white'} style='background-color:${color};'>
                <td class='no'>${++no}</td>
                <td>${person.first}</td>
                <td class='last'>${person.last}</td>
                <td class='handle'>${person.handle}</td>
                <td>
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-trash"></i>
                </td>
            </tr>`
        )
    });

    // add new row
    $('.adNewRow').on('click', function(){
        $('table').append(
            `<tr ${no%2!==0 ? color='#dee2e6' : color='white'} style='background-color:${color};'>
                <td class='no'>${++no}</td>
                <td></td>
                <td class='last'></td>
                <td class='handle'></td>
                <td>
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-trash"></i>
                </td>
            </tr>`
        )
    });

    // delete row
    $(document).on('click', '.fa-trash', function(){
        $(this).parents('tr').remove();
        --no;
        // row number always start from 1
        for(i=1; i<=no; i++){
            $('.no').eq(i-1).html(`${i}`);
        };
    });

    // edit row
    let last, handle;
    $(document).on('click', '.fa-edit', function(){
        // get table data
        last=$(this).parent().siblings('.last').html();
        handle=$(this).parent().siblings('.handle').html();

        // clear table data
        $(this).parent().siblings('.last').html('')
        $(this).parent().siblings('.handle').html('');

        // add inputs with values
        $(this).parent().siblings('.last').append(
            `<input 
                type="text" 
                value='${last}'>`
        )
        $(this).parent().siblings('.handle').append(
            `<input 
                type="text" 
                value='${handle}'>`
        )

        // add new icons
        $(this).parent().append(`
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-times-circle"></i>`);
        
        // delete previous icons
        $(this).next('.fa-trash').remove();
        $(this).remove();
    });

    $(document).on('click', '.fa-check-circle', function(){
        // add input value to td
        $(this).parent().siblings('.last').html(`
            ${$(this).parent().siblings('.last').find('input').val()}
        `);
        $(this).parent().siblings('.handle').html(`
            ${$(this).parent().siblings('.handle').find('input').val()}
        `);

        // add new icons
        $(this).parent().append(`
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash"></i>`);

        // delete previous icons
        $(this).next('.fa-times-circle').remove();
        $(this).remove();
    });

    $(document).on('click', '.fa-times-circle', function(){
        // add previous table data to td
        $(this).parent().siblings('.last').html(`${last}`);
        $(this).parent().siblings('.handle').html(`${handle}`);

        // add new icons
        $(this).parent().append(`
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash"></i>`);

        // delete previous icons
        $(this).prev('.fa-check-circle').remove();
        $(this).remove();
    });
})